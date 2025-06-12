import {
    Container,
    FooterList,
    IconRedesSociais,
    Disclaimer
} from "./styles"

import iconLinkedin from '../../assets/linkedin-icon.svg';
import iconGithub from '../../assets/github-icon.svg';

function Footer(){

    return(
        <Container>
                <FooterList>
                    <li>
                        <a href="https://www.linkedin.com/in/thiago-ballalai/" target="_blank">
                            <IconRedesSociais src={iconLinkedin} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/thballalai" target="_blank">
                            <IconRedesSociais src={iconGithub} alt="" />
                        </a>
                    </li>
                </FooterList>
                <Disclaimer>©2025 Thiago Ballalai. Todos os direitos reservados.</Disclaimer>
        </Container>
    )
}

export default Footer