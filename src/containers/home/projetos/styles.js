import styled from "styled-components";

export const Container = styled.div `
    padding-block: 1rem;
`

export const Title = styled.h2 `
    font-weight: bold;
    font-size: 2rem;
    line-height: 2.5rem;
    margin-bottom: 1rem; 
`

export const Subtitle = styled.span `
`

export const Card = styled.div `
    margin-block: 2rem;
    display: flex;
    gap: 1rem;
    border: 2px solid gray;
    border-radius: 8px;
`

export const CardImage = styled.img `
    height: 14rem;
    border-radius: 8px;
`

export const CardContent = styled.div `
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`

export const CardTitle = styled.h3 `
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 2rem;
`

export const CardDescription = styled.p `
    font-weight: medium;
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: justify;
    text-justify: inter-word;
    padding-block: 0.5rem;
`

export const CardButton = styled.a `
    width: 10rem;
    align-self: flex-end;
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.5rem;
    padding: 1rem;
    border-radius: 8px;
`