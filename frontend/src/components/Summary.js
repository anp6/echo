import React from 'react';
import { SummaryContainer, SummaryText, SaveButton, ReadBackButton, GoBackButton } from '../styles';

const Summary = ({ summary, onGoBack }) => {
    const handleSave = () => {
        const element = document.createElement('a');
        const file = new Blob([summary], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = 'summary.txt';
        document.body.appendChild(element);
        element.click();
    };

    const handleReadBack = () => {
        const utterance = new SpeechSynthesisUtterance(summary);
        window.speechSynthesis.speak(utterance);
    };

    return (
        <SummaryContainer>
            <SummaryText>{summary}</SummaryText>
            <SaveButton onClick={handleSave}>Save</SaveButton>
            <ReadBackButton onClick={handleReadBack}>Read Back</ReadBackButton>
            <GoBackButton onClick={onGoBack}>Go Back</GoBackButton>
        </SummaryContainer>
    );
};

export default Summary;
