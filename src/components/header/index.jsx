import { 
    Container,
    Navegacao,
    NavList,
    NavItem,
    IconRedeSocial,
    NavRedeSocial,
    Logo
} from "./styles"

import { Link } from 'react-router-dom';

import iconLinkedin from '../../assets/linkedin-icon.svg';
import iconGithub from '../../assets/github-icon.svg';
import logo from '../../assets/favicon.svg';

function Header(){

    return(
        <Container>
                <Logo href="/">
                <div>
                    <img src={logo} alt="" />
                    <h1>Portfolio</h1>
                </div>
                </Logo>
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