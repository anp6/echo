import React, { useState } from 'react';
import { ChatContainer, ChatInput, ChatOutput, ChatButton, AIResponseContainer, AIIcon } from '../styles';
import aiIcon from '../assets/face.png'; 

const ChatInterface = () => {
    const [input, setInput] = useState('');
    const [chatLog, setChatLog] = useState([]);

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const handleSend = async () => {
        if (input.trim()) {
            setChatLog((prevLog) => [...prevLog, <div key={prevLog.length}>You: {input}</div>, <br key={`br-${prevLog.length}`} />]);
            try {
                const response = await fetch('http://localhost:5000/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ question: input }),
                });
                const data = await response.json();
                const formattedResponse = data.response.replace(/\n/g, '<br />');
                setChatLog((prevLog) => [
                    ...prevLog,
                    <AIResponseContainer key={prevLog.length}>
                        <AIIcon src={aiIcon} alt="AI Icon" />
                        <span dangerouslySetInnerHTML={{ __html: formattedResponse }}></span>
                    </AIResponseContainer>,
                    <br key={`br-${prevLog.length}`} />
                ]);
            } catch (error) {
                console.error('Error during chat:', error);
                setChatLog((prevLog) => [
                    ...prevLog,
                    <AIResponseContainer key={prevLog.length}>
                        <AIIcon src={aiIcon} alt="AI Icon" />
                        <span>AI: Failed to get a response. Please try again.</span>
                    </AIResponseContainer>,
                    <br key={`br-${prevLog.length}`} />
                ]);
            }
            setInput('');
        }
    };

    return (
        <ChatContainer>
            <ChatOutput>
                {chatLog.map((entry, index) => (
                    <div key={index}>{entry}</div>
                ))}
            </ChatOutput>
            <div style={{ display: 'flex', width: '80%' }}>
                <ChatInput
                    type="text"
                    placeholder="Ask Echo..."
                    value={input}
                    onChange={handleInputChange}
                />
                <ChatButton onClick={handleSend}>Send</ChatButton>
            </div>
        </ChatContainer>
    );
};

export default ChatInterface;
