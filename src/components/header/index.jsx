import { 
    Container,
    Navegacao,
    NavList,
    NavItem,
    IconRedeSocial,
    NavRedeSocial
} from "./styles"

import { Link } from 'react-router-dom';

import iconLinkedin from '../../assets/linkedin-icon.svg';
import iconGithub from '../../assets/github-icon.svg';

function Header(){

    return(
        <Container>
                <a href="/">
                    <h1>Portfolio</h1>
                </a>
                <Navegacao>
                    <NavList>
                        <NavItem>
                            <Link to="/?tab=sobre">Sobre</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/?tab=projetos">Projetos</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/contato">Contato</Link>
                        </NavItem>
                        <NavRedeSocial>
                            <NavItem>
                                <a href="https://www.linkedin.com/in/thiago-ballalai/" target="_blank">
                                    <IconRedeSocial src={iconLinkedin} alt="" />
                                </a>
                            </NavItem>
                            <NavItem>
                                <a href="https://github.com/thballalai" target="_blank">
                                    <IconRedeSocial src={iconGithub} alt="" />
                                </a>
                            </NavItem>
                        </NavRedeSocial>
                    </NavList>
                </Navegacao>
        </Container>
    )
}

export default Header