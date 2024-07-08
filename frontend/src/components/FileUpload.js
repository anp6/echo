import React from 'react';
import { UploadButton, FileUploadContainer, SummaryOptions, OptionLabel, OptionSelect } from '../styles';

const FileUpload = ({ onFileUpload, setLengthOption, setStyleOption, lengthOption, styleOption }) => {
    const handleChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            onFileUpload(file);
        }
    };

    return (
        <FileUploadContainer>
            <UploadButton>
                <input type="file" accept="audio/*,video/*" onChange={handleChange} />
                <span>Upload Audio/Video</span>
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
                    <option value="paragraph">Paragraph</option>
                    <option value="bullet point">Points</option>
                    <option value="mixed paragraph and bullet point">Blended</option>
                </OptionSelect>
            </SummaryOptions>
        </FileUploadContainer>
    );
};

export default FileUpload;
