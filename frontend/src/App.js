import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import Summary from './components/Summary';
import ChatInterface from './components/ChatInterface';
import { AppContainer, LeftPane, RightPane, GlobalStyle, Logo, InstructionsText } from './styles';
import logo from './assets/full_logo.png';

const App = () => {
    const [summary, setSummary] = useState('');
    const [uploadedFile, setUploadedFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [lengthOption, setLengthOption] = useState('200'); // Default is Standard
    const [styleOption, setStyleOption] = useState('mixed paragraph and bullet point'); // Default is Blended
    const [chatLog, setChatLog] = useState(['Welcome! How can I assist you today?']); // Chat log state

    const handleFileUpload = (file) => {
        setUploadedFile(file);
    };

    const processFile = async () => {
        if (!uploadedFile) return;
        setLoading(true);
        const formData = new FormData();
        formData.append('file', uploadedFile);
        formData.append('lengthOption', lengthOption);
        formData.append('styleOption', styleOption);

        try {
            const response = await fetch('http://localhost:5000/summarize-audio', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            setSummary(data.summary);
        } catch (error) {
            console.error("Error processing file:", error);
            setSummary('Failed to process the file. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleGoBack = () => {
        setUploadedFile(null);
        setSummary('');
        setChatLog(['Welcome! How can I assist you today?']); // Reset chat log
    };

    return (
        <>
            <GlobalStyle />
            <Logo src={logo} alt="Echo Logo" />
            <AppContainer>
                <LeftPane>
                    {!uploadedFile && (
                        <FileUpload 
                            onFileUpload={handleFileUpload} 
                            setLengthOption={setLengthOption}
                            setStyleOption={setStyleOption}
                            lengthOption={lengthOption}
                            styleOption={styleOption}
                        />
                    )}
                    {uploadedFile && !loading && !summary && (
                        <>
                            <FileUpload 
                                onFileUpload={handleFileUpload} 
                                setLengthOption={setLengthOption}
                                setStyleOption={setStyleOption}
                                lengthOption={lengthOption}
                                styleOption={styleOption}
                            />
                            <button onClick={processFile} style={{ backgroundColor: '#ADD8E6', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                                Summarize!
                            </button>
                        </>
                    )}
                    {uploadedFile && !loading && summary && <Summary summary={summary} onGoBack={handleGoBack} />}
                    {loading && <p>Loading...</p>}
                </LeftPane>
                {!uploadedFile && (
                    <RightPane>
                        <InstructionsText>
                            <strong>HOW TO USE ECHO</strong>
                            <br /><br />
                            STEP 1: Upload an audio or video recording
                            <br /><br />
                            STEP 2: Select the length and style you want
                            <br /><br />
                            STEP 3: Hit summarize!
                            <br /><br />
                            <strong>SOME MORE FUN STUFF YOU CAN DO!</strong>
                            <br /><br />
                            Use the chat feature to ask more questions
                            <br /><br />
                            Save your summaries
                            <br /><br />
                            Have them read back to you!
                        </InstructionsText>
                    </RightPane>
                )}
                {uploadedFile && !loading && summary && (
                    <RightPane>
                        <ChatInterface setSummary={setSummary} chatLog={chatLog} setChatLog={setChatLog} />
                    </RightPane>
                )}
            </AppContainer>
        </>
    );
};

export default App;
