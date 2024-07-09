from flask import Flask, request, jsonify
from flask_cors import CORS
import whisper
import requests
import json
from pydub import AudioSegment
import os
import time

app = Flask(__name__)
CORS(app)

# Load the Whisper model
model = whisper.load_model("small")

transcription_text = ""

def summarize_text_with_mistral(text, length, style):
    try:
        url = "https://mixtral.k8s-gosha.atlas.illinois.edu/completion"
        prompt = (
            f"<s>[INST]Please summarize the following text. "
            f"Your summary should include a clear heading, and the body of the summary should be written in a {style} style, with a maximum of {length} words. "
            f"Make sure to cover the key points and main ideas without including unnecessary details or any special symbols such as * unless necessary. Ensure your summary is cleanly formatted with line spaces between big points/paragraphs.[/INST]\n\n{text}"
        )
        myobj = {
            "prompt": prompt,
            "n_predict": -1,
            "temperature": 0.2
        }
        headers = {
            "Content-Type": "application/json",
        }
        response = requests.post(url, data=json.dumps(myobj), headers=headers,
                                 auth=('atlasaiteam', 'jx@U2WS8BGSqwu'), timeout=1000)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"An error occurred during summarization: {e}")
        return None

def chat_with_mistral(question, context):
    try:
        url = "https://mixtral.k8s-gosha.atlas.illinois.edu/completion"
        prompt = f"<s>[INST]Please answer my questions based on this text: {context}\n\nQuestion: {question}[/INST]"
        myobj = {
            "prompt": prompt,
            "n_predict": -1,
            "temperature": 0.3
        }
        headers = {
            "Content-Type": "application/json",
        }
        response = requests.post(url, data=json.dumps(myobj), headers=headers,
                                 auth=('atlasaiteam', 'jx@U2WS8BGSqwu'), timeout=1000)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"An error occurred during chat: {e}")
        return None

@app.route('/summarize-audio', methods=['POST'])
def summarize_audio():
    global transcription_text
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400

    length_option = request.form.get('lengthOption', '200')
    style_option = request.form.get('styleOption', 'mixed paragraph and bullet point')

    # Save the uploaded file
    file_path = os.path.join('uploads', file.filename)
    file.save(file_path)

    # Convert the file to WAV format if necessary
    audio = AudioSegment.from_file(file_path)
    wav_path = file_path.rsplit('.', 1)[0] + '.wav'
    audio.export(wav_path, format='wav')

    # Debug: Log the WAV file path
    print(f"WAV file path: {wav_path}")

    # Start timer for transcription
    start_time = time.time()

    # Transcribe the audio file using Whisper
    try:
        result = model.transcribe(wav_path)
        transcription_text = result["text"]
        transcription_time = time.time() - start_time
        words_transcribed = len(transcription_text.split())
        print(f"Transcription: {transcription_text}")
        print(f"Time taken for transcription: {transcription_time} seconds")
        print(f"Words per second: {words_transcribed / transcription_time}")
    except Exception as e:
        print(f"Error during transcription: {e}")
        return jsonify({'error': 'Error during transcription', 'details': str(e)}), 500

    # Start timer for summarization
    start_time = time.time()

    # Summarize the transcription using Mistral LLM
    try:
        mistral_result = summarize_text_with_mistral(transcription_text, length_option, style_option)
        summary_time = time.time() - start_time
        if mistral_result:
            summary = mistral_result.get('content', 'No summary available')
            print(f"Summary: {summary}")
            print(f"Time taken for summarization: {summary_time} seconds")
        else:
            summary = 'An error occurred while summarizing the transcription.'
    except Exception as e:
        print(f"Error during summarization: {e}")
        summary = 'An error occurred while summarizing the transcription.'

    return jsonify({'transcription': transcription_text, 'summary': summary})

@app.route('/chat', methods=['POST'])
def chat():
    global transcription_text
    data = request.json
    question = data.get('question', '')
    if not question:
        return jsonify({'error': 'No question provided'}), 400

    # Chat with Mistral LLM
    try:
        chat_result = chat_with_mistral(question, transcription_text)
        if chat_result:
            response = chat_result.get('content', 'No response available')
            print(f"Chat response: {response}")
        else:
            response = 'An error occurred while getting the response.'
    except Exception as e:
        print(f"Error during chat: {e}")
        response = 'An error occurred while getting the response.'

    return jsonify({'response': response})

if __name__ == '__main__':
    if not os.path.exists('uploads'):
        os.makedirs('uploads')
    app.run(debug=True)
