import React from 'react';
import { UploadButton, FileUploadContainer, SummaryOptions, OptionLabel, OptionSelect, InstructionText } from '../styles';
import uploadIcon from '../assets/sound.png';

const FileUpload = ({ onFileUpload, setLengthOption, setStyleOption, lengthOption, styleOption }) => {
    const handleChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            onFileUpload(file);
        }
    };

    return (
        <FileUploadContainer>
            <InstructionText>Click to begin the magic!</InstructionText>
            <UploadButton>
                <input type="file" accept="audio/*,video/*" onChange={handleChange} />
                <img src={uploadIcon} alt="Upload Icon" style={{ width: '100px', height: '100px' }} />
            </UploadButton>
            <SummaryOptions>
                <OptionLabel>Summary Length:</OptionLabel>
                <OptionSelect value={lengthOption} onChange={(e) => setLengthOption(e.target.value)}>
                    <option value="100">Compact (100 words or less)</option>
                    <option value="200">Standard (100-250 words)</option>
                    <option value="300">Detailed (250+ words)</option>
                </OptionSelect>
                
                <OptionLabel>Summary Style:</OptionLabel>
                <OptionSelect value={styleOption} onChange={(e) => setStyleOption(e.target.value)}>
                    <option value="paragraphs">Paragraph</option>
                    <option value="bullet points">Points</option>
                    <option value="paragraphs AND bullet points">Blended</option>
                </OptionSelect>
            </SummaryOptions>
        </FileUploadContainer>
    );
};

export default FileUpload;
