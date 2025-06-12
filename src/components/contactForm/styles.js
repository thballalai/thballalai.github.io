import styled from "styled-components";

export const Form = styled.form `
    padding-top: 1rem;
    display: Flex;
    flex-direction: column;
    gap: 1rem;

    div {
        display: flex;
        flex-direction: column;
    }

    input, textarea {
        width: 50%;
        padding: 1rem;
        border: 1px solid #CFDBE8;
        border-radius: 8px;
    }

    button {
        width: 10%;
        padding:  0.5rem 1rem; 
        border: none;
        background-color: #0D80F2;
        border-radius: 8px;
        color: white;
        font-weight: bold;
        font-size: 1rem;
    }
`

export const Label = styled.label `
    font-weight: medium;
        font-size: 1rem;
        line-height: 1.5rem;
`

export const ErrorMessage = styled.p `
    color: red;
    font-size: 0.75rem;
`