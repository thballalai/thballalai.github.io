import styled from "styled-components";

export const Container = styled.div `
    padding-block: 1rem;

    h2 {
        font-weight: bold;
        font-size: 2rem;
        line-height: 2.5rem;    
    }

    h3 {
        font-weight: bold;
        font-size: 1.5rem;
        line-height: 2rem; 
    }
`
export const Content = styled.div `
    padding-top: 0.5rem;
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 1rem;
`

export const Coluna = styled.div `
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
`

export const Card = styled.div `
    display: flex;
    gap: 1rem;
    padding-block: 1rem;

    img {
        background-color: #e8edf5;
        width: 3rem;
        height: 3rem;
        padding: 0.75rem;
        border-radius: 0.5rem;
    }

    h4 {
        font-weight: bold;
        font-size: 1.1rem;
        line-height: 1.5rem; 
    }

    span {
        font-weight: medium;
        font-size: 1rem;
        line-height: 1.5rem;
        color: #4A739C;
    }
`