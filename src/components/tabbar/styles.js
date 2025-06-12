import styled from "styled-components";

export const Tab = styled.div `
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding-block: 1.5rem;
`

export const TabButton = styled.button `
    text-align: center;
    padding: 0.5rem;
    border: none;
    
    border-bottom: 2px solid gray;

    &.active {
        background-color: #0077cc;
        color: #fff;
        font-weight: bold;
    }
`