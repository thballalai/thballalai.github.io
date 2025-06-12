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

export const Section = styled.section `
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 1.5rem;
    row-gap: 0.5rem;
    margin-top: 1.5rem;  
`

export const SectionTitle = styled.h3 `
    font-weight: bold;
    font-size: 1.5;
    line-height: 2rem;
    grid-column: 1 / -1;
`

export const Skill = styled.div `
    border: 2px solid gray;
    border-radius: 8px;
    padding: 8px;
    display: flex;
    align-items: center;
`

export const SkillIcon = styled.img `
    width: 1.5rem;
    height: 1.5rem;
`

export const SkillName = styled.span `
    padding-left: 0.5rem;
    font-weight: bold;
    font-size: 1.5;
    line-height: 2rem;
`
