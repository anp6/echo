## Echo: AI Audio Summarizer 🔊📝
![alt text](https://img.shields.io/badge/Python-3.9+-blue.svg)

![alt text](https://img.shields.io/badge/License-MIT-yellow.svg)

Echo is a powerful tool that leverages AI to transcribe and summarize audio content. Whether you have an audio file or a YouTube link, Echo can provide you with a full text transcription and a concise, easy-to-read summary.

Note: I've created a sample screenshot for you. You can replace it with your own!

## 🌟 Features
Dual Source Input: Process audio from local file uploads (.mp3, .wav, etc.) or directly from a YouTube URL.
Accurate Transcription: Utilizes OpenAI's Whisper model for highly accurate speech-to-text transcription.
Intelligent Summarization: Employs a GPT model (gpt-3.5-turbo) to generate concise summaries of the transcribed text.
Adjustable Model Size: Choose from different Whisper model sizes (tiny, base, small, medium, large) to balance speed and accuracy.
User-Friendly Interface: A simple and interactive web UI built with Gradio.
🚀 Getting Started
Follow these instructions to get a local copy up and running.

## Prerequisites
Before you begin, ensure you have the following installed:

1. Python 3.9+
2. FFmpeg: Whisper requires FFmpeg to be installed on your system for audio processing.
-> On macOS: brew install ffmpeg
-> On Windows: Download from the official site and add to your system's PATH.
-> On Linux: sudo apt update && sudo apt install ffmpeg
3. OpenAI API Key: You need an API key from OpenAI to use the summarization feature. Get your key from the OpenAI Platform.
4. Installation
5. Clone the repository:
git clone https://github.com/anp6/echo.git
cd echo
Use code with caution.
Sh
6. Create and activate a virtual environment (recommended):
# For macOS / Linux
python3 -m venv venv
source venv/bin/activate

# For Windows
python -m venv venv
.\venv\Scripts\activate
Use code with caution.
Sh
Install the required packages:
pip install -r requirements.txt
Use code with caution.
Sh
Set up your environment variable:
Echo needs your OpenAI API key to function. The application is coded to read it from an environment variable called OPENAI_API_KEY.
You can create a .env file in the root of the project directory:
# .env
OPENAI_API_KEY="your_secret_api_key_here"


Note: The application doesn't use python-dotenv, so you will need to load this variable into your shell session yourself or modify the code to use it.
Alternatively, you can set it directly in your terminal:
# For macOS / Linux
export OPENAI_API_KEY="your_secret_api_key_here"

# For Windows (Command Prompt)
set OPENAI_API_KEY="your_secret_api_key_here"
Use code with caution.
Sh


## 🏃‍♀️ Usage
Once the installation is complete, run the application with the following command:

python main.py
Use code with caution.
Sh
This will start the Gradio web server. Open your browser and navigate to the local URL provided in the terminal (usually http://127.0.0.1:7860).

## How to use the interface:
Choose Source Type: Select "YouTube" or "Upload".
Provide Input:
1. If "YouTube", paste the video URL into the "YouTube URL" field.
2. If "Upload", drag and drop or click to upload your audio file.
3. Select Model Size: Choose a Whisper model. base is a good starting point for a balance of speed and accuracy.
4. Click "Submit": Wait for the processing to complete.
5. View Results: The full transcription and the generated summary will appear in the output boxes.


## ⚙️ How It Works
The application follows a simple but powerful pipeline:

1. Input Handling: Based on the user's choice, the app either downloads the audio from a YouTube link using yt-dlp or accepts a direct file upload.
2. Audio Conversion: All input audio is converted to a standard .wav format using ffmpeg for consistent processing.
3. Transcription: The audio file is passed to the selected OpenAI Whisper model, which transcribes the speech into text.
4. Summarization: The transcribed text is sent to the OpenAI GPT-3.5-turbo API with a prompt asking it to create a concise summary.
5. Display: The final transcription and summary are displayed back to the user in the Gradio interface.


## 📂 Project Structure
echo/
├── .gitignore
├── main.py            # Main script: orchestrates the UI (Gradio) and the processing pipeline.
├── requirements.txt   # List of Python dependencies for the project.
├── summarizer.py      # Handles the text summarization using the OpenAI API.
├── transcriber.py     # Manages audio transcription using the Whisper model.
└── utils.py           # Contains helper functions (e.g., downloading from YouTube).
Use code with caution.


## 🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
📄 License
This project is open-source. While no license is currently specified, we recommend adding one. The MIT License is a great choice for permissive open-source projects.

## 🙏 Acknowledgments
This project wouldn't be possible without these incredible open-source libraries and services:

OpenAI Whisper
OpenAI API
Gradio
yt-dlp
FFmpeg
