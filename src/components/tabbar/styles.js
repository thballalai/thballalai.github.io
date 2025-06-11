import styled from "styled-components";

export const Tab = styled.div `
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding-block: 1rem;
    position: fixed;
    bottom: 139px;
    width: fit-content;
    left: 50%;
    transform: translateX(-50%);
`

export const TabButton = styled.button `
    text-align: center;
    background-color: white;
    padding: 0.5rem;
    border: none;
    
    border-bottom: 2px solid gray;
`