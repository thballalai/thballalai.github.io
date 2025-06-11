import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle `

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Manrope", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
    }

    body {
        padding-inline: 10%;
        height: 100vh;
    }

    a {
        text-decoration: none;
    }
`

export default GlobalStyles