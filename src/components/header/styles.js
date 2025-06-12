import styled from "styled-components";

export const Container = styled.header `
    padding: 1.5em 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid gray;

    h1 {
        font-size: ${({ theme }) => theme.text.h1Size};
    }
`

export const Navegacao = styled.nav `
    display: flex;
    justify-content: center;
`

export const NavList = styled.ul `
    display: flex;
    justify-content: center;
    list-style: none;
    gap: 2.5rem;
    align-items: center;
`

export const NavItem = styled.li `
    
`

export const NavRedeSocial = styled.ul `
    display: flex;
    justify-content: center;
    list-style: none;
    gap: 1rem;
    align-items: center;
`

export const IconRedeSocial = styled.img `
    width: 2.5rem;
    background-color: #E8EDF5;
    padding: 0.5rem;
    border-radius: 0.5rem;
`

export const Logo = styled.a `
    div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    img {
        width: 3rem;
        height: 3rem;
    }
`