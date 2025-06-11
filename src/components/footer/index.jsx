import { Container, FooterList, IconRedesSociais, Disclaimer } from "./styles"

function Footer(){

    return(
        <Container>
                <FooterList>
                    <li>
                        <a href="https://www.linkedin.com/in/thiago-ballalai/" target="_blank">
                            <IconRedesSociais src="src\assets\linkedin-icon.svg" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/thballalai" target="_blank">
                            <IconRedesSociais src="src\assets\github-icon.svg" alt="" />
                        </a>
                    </li>
                </FooterList>
                <Disclaimer>©2025 Thiago Ballalai. Todos os direitos reservados.</Disclaimer>
        </Container>
    )
}

export default Footer