import { 
    Container,
    Navegacao,
    NavList,
    NavItem,
    IconRedeSocial,
    NavRedeSocial
} from "./styles"

function Header(){

    return(
        <Container>
                <a href="">
                    <h1>Portfolio</h1>
                </a>
                <Navegacao>
                    <NavList>
                        <NavItem>
                            <a>Sobre</a>
                        </NavItem>
                        <NavItem>
                            <a>Projetos</a>
                        </NavItem>
                        <NavItem>
                            <a>Contato</a>
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