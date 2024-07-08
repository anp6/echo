import styled, { createGlobalStyle } from 'styled-components';
import CustomFont from './assets/futur.ttf';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'CustomFont';
        src: url(${CustomFont}) format('truetype');
    }
    body {
        font-family: 'CustomFont', Arial, sans-serif;
        background-color: #121212;
        color: #ffffff;
    }
`;

export const AppContainer = styled.div`
    display: flex;
    height: 100vh;
`;

export const LeftPane = styled.div`
    width: 50%;
    padding: 20px;
    background-color: #1e1e1e;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const RightPane = styled.div`
    width: 50%;
    padding: 20px;
    background-color: #1e1e1e;
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
    background-color: #4CAF50;
    color: white;
    padding: 15px 30px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin: 10px 0;
    font-size: 1.2em;

    &:hover {
        background-color: #45a049;
    }

    input {
        display: none;
    }

    span {
        display: inline-block;
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
    color: white;
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
    color: white;
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
    background-color: #1e1e1e;
    color: white;
`;

export const ChatInput = styled.input`
    width: 80%;
    padding: 15px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1.2em;
    background-color: #333333;
    color: white;
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
