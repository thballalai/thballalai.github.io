import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle `

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: ${({ theme }) => theme.colors.bgPrimary};
    }

    body {
        padding-inline: ${({ theme }) => theme.spacing.globalPadding};
    }

    a, p, span, h1, h2, h3, h4, button {
        color: ${({ theme }) => theme.colors.fontDefault};
        font-family: ${({ theme }) => theme.text.familyDefault};
        font-weight: ${({ theme }) => theme.text.weightDefault};
    }

    a {
        text-decoration: none;
    }
`

export default GlobalStyles