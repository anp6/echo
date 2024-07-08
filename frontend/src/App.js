import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import Summary from './components/Summary';
import ChatInterface from './components/ChatInterface';
import { AppContainer, LeftPane, RightPane, GlobalStyle, Title } from './styles';

const App = () => {
    const [summary, setSummary] = useState('');
    const [uploadedFile, setUploadedFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [lengthOption, setLengthOption] = useState('200'); // Default is Standard
    const [styleOption, setStyleOption] = useState('mixed paragraph and bullet point'); // Default is Blended

    const handleFileUpload = (file) => {
        setUploadedFile(file);
        processFile(file); // Start processing immediately after upload
    };

    const processFile = async (file) => {
        setLoading(true);
        const formData = new FormData();
        formData.append('file', file);
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
    };

    return (
        <>
            <GlobalStyle />
            <Title>ECHO - The Audio Summarizer Tool</Title>
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
                    {uploadedFile && !loading && <Summary summary={summary} onGoBack={handleGoBack} />}
                    {loading && <p>Loading...</p>}
                </LeftPane>
                <RightPane>
                    <ChatInterface setSummary={setSummary} />
                </RightPane>
            </AppContainer>
        </>
    );
};

export default App;
