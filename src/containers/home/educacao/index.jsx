import { Card, Coluna, Container, Content } from "./styles"

function Educacao(){

    return(
        <Container>
            <h2>Educação e Certificados</h2>
            <Content>
                <Coluna >
                    <h3>Educação</h3>
                    <Card>
                        <img src="src\assets\graduation-hat.svg" alt="" />
                        <div>
                            <h4>Pós-Graduação em Gerenciamento de Projeto</h4>
                            <span>EBPÓS | 2023 - 2024</span>
                        </div>
                    </Card>
                    <Card>
                        <img src="src\assets\graduation-hat.svg" alt="" />
                        <div>
                            <h4>Pós-Graduação em Engenharia Geotécnica</h4>
                            <span>EBPÓS | 2023 - 2024</span>
                        </div>
                    </Card>
                    <Card>
                        <img src="src\assets\graduation-hat.svg" alt="" />
                        <div>
                            <h4>Graduação em Engenharia Civil</h4>
                            <span>UNIFTC | 2016 - 2021</span>
                        </div>
                    </Card>
                </Coluna>
                <Coluna>
                    <h3>Principais Certificados</h3>
                    <Card>
                        <img src="src\assets\certified-paper.svg" alt="" />
                        <div>
                            <h4>QA Automation</h4>
                            <span>Qazando | 2025</span>
                        </div>
                    </Card>
                    <Card>
                        <img src="src\assets\certified-paper.svg" alt="" />
                        <div>
                            <h4>Desenvolvendo aplicação REACT e testando</h4>
                            <span>DIO | 2024</span>
                        </div>
                    </Card>
                    <Card>
                        <img src="src\assets\certified-paper.svg" alt="" />
                        <div>
                            <h4>Curso Gratuito de Testes de Software</h4>
                            <span>Julio de Lima | 2024</span>
                        </div>
                    </Card>
                    <Card>
                        <img src="src\assets\certified-paper.svg" alt="" />
                        <div>
                            <h4>Ferramentas de gestão de testes</h4>
                            <span>Qazando | 2025</span>
                        </div>
                    </Card>
                </Coluna>
            </Content>
        </Container>
    )
}

export default Educacao