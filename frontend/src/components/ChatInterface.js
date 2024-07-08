import React, { useState, useEffect } from 'react';
import { ChatContainer, ChatInput, ChatOutput, ChatButton } from '../styles';

const ChatInterface = () => {
    const [input, setInput] = useState('');
    const [chatLog, setChatLog] = useState(['Welcome! How can I assist you today?']);
    const [displayedChat, setDisplayedChat] = useState(['Welcome! How can I assist you today?']);

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const handleSend = () => {
        if (input.trim()) {
            setChatLog((prevLog) => [...prevLog, `You: ${input}`, 'AI: This is a mock response.']);
            setInput('');
        }
    };

    useEffect(() => {
        if (chatLog.length > displayedChat.length) {
            let index = 0;
            const newMessage = chatLog[chatLog.length - 1];
            const interval = setInterval(() => {
                setDisplayedChat((prev) => {
                    const lastMessage = prev[prev.length - 1];
                    return [...prev.slice(0, -1), lastMessage + newMessage[index]];
                });
                index++;
                if (index === newMessage.length) {
                    clearInterval(interval);
                    setDisplayedChat((prev) => [...prev, '']);
                }
            }, 50); // Adjust typing speed here
        }
    }, [chatLog]);

    return (
        <ChatContainer>
            <ChatOutput>
                {displayedChat.map((entry, index) => (
                    <div key={index}>{entry}</div>
                ))}
            </ChatOutput>
            <div style={{ display: 'flex', width: '80%' }}>
                <ChatInput
                    type="text"
                    placeholder="Type your instructions..."
                    value={input}
                    onChange={handleInputChange}
                />
                <ChatButton onClick={handleSend}>Send</ChatButton>
            </div>
        </ChatContainer>
    );
};

export default ChatInterface;
