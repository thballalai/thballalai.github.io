import styled from "styled-components";

export const Tab = styled.div `
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding-block: 1.5rem;
`

export const TabButton = styled.button `
    text-align: center;
    font-weight: 400;
    color: #5C738A;
    padding: 0.5rem;
    border: none;
    border-bottom: 2px solid #5C738A;

    &.active {
        color: #0F1417;
        font-size: 1.1rem;
        font-weight: bold;
        border-bottom: 3px solid #0F1417;
    }
`