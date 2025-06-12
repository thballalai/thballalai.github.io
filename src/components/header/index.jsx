import { 
    Container,
    Navegacao,
    NavList,
    NavItem,
    IconRedeSocial,
    NavRedeSocial
} from "./styles"

import { Link } from 'react-router-dom';

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
                                    <IconRedeSocial src="src\assets\linkedin-icon.svg" alt="" />
                                </a>
                            </NavItem>
                            <NavItem>
                                <a href="https://github.com/thballalai" target="_blank">
                                    <IconRedeSocial src="src\assets\github-icon.svg" alt="" />
                                </a>
                            </NavItem>
                        </NavRedeSocial>
                    </NavList>
                </Navegacao>
        </Container>
    )
}

export default Header