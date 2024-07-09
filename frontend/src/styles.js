import styled, { createGlobalStyle } from 'styled-components';
import CustomFont from './assets/futur.ttf';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'CustomFont';
        src: url(${CustomFont}) format('truetype');
    }
    body {
        font-family: 'CustomFont', Arial, sans-serif;
        background-color: #121212; /* Revert background color to dark */
        color: #ffffff; /* Revert text color to white */
    }
`;

export const AppContainer = styled.div`
    display: flex;
    height: 100vh;
`;

export const LeftPane = styled.div`
    width: 50%;
    padding: 20px;
    background-color: #1e1e1e; /* Revert background color to dark */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const RightPane = styled.div`
    width: 50%;
    padding: 20px;
    background-color: #1e1e1e; /* Revert background color to dark */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FileUploadContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`;

export const UploadButton = styled.label`
    cursor: pointer;
    input {
        display: none;
    }
    img {
        width: 100px;
        height: 100px;
        &:hover {
            opacity: 0.8;
        }
    }
`;

export const SummaryOptions = styled.div`
    margin-top: 20px;
`;

export const OptionLabel = styled.label`
    display: block;
    margin-top: 10px;
    font-size: 1em;
`;

export const OptionSelect = styled.select`
    margin-top: 5px;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
    background-color: #2e2e2e;
    color: white;
    width: 100%;
`;

export const SummaryContainer = styled.div`
    width: 100%;
    text-align: center;
`;

export const SummaryText = styled.p`
    margin: 20px 0;
    font-size: 1.2em;
    line-height: 1.5;
    max-height: 400px;
    overflow-y: auto;
    color: white; /* Revert text color to white */
`;

export const GoBackButton = styled.button`
    background-color: #f44336;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin: 5px;
    font-size: 1em;

    &:hover {
        background-color: #d32f2f;
    }
`;

export const SaveButton = styled.button`
    background-color: #007BFF;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin: 5px;
    font-size: 1em;

    &:hover {
        background-color: #0056b3;
    }
`;

export const ReadBackButton = styled.button`
    background-color: #FFD700;
    color: black;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin: 5px;
    font-size: 1em;

    &:hover {
        background-color: #FFC700;
    }
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 2em;
    margin-bottom: 20px;
    color: white; /* Revert text color to white */
`;

export const ChatContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    padding-bottom: 20px;
`;

export const ChatOutput = styled.div`
    width: 80%;
    padding: 15px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: calc(100% - 100px);
    overflow-y: scroll;
    background-color: #1e1e1e; /* Revert background color to dark */
    color: white; /* Revert text color to white */
`;

export const ChatInput = styled.input`
    width: 80%;
    padding: 15px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1.2em;
    background-color: #333333; /* Revert background color to dark */
    color: white; /* Revert text color to white */
`;

export const ChatButton = styled.button`
    background-color: #007BFF;
    color: white;
    padding: 15px 30px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 10px;
    font-size: 1.2em;

    &:hover {
        background-color: #0056b3;
    }
`;

export const Logo = styled.img`
    width: 300px;
    height: auto;
    display: block;
    margin: 0 auto;
    margin-top: 20px;
`;

export const InstructionsText = styled.div`
    font-size: 1em; /* Adjust font size to be smaller */
    text-align: center;
    line-height: 1.5; /* Adjust line height to be smaller */
    color: white; /* Revert text color to white */
    strong {
        font-size: 1.2em; /* Adjust strong text size to be smaller */
    }
`;

export const InstructionText = styled.p`
    font-size: 1em;
    margin-bottom: 10px;
    color: white;
`;

export const AIResponseContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`;

export const AIIcon = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 10px;
`;
