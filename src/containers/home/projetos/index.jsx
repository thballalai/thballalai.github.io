import {
    Card,
    CardButton,
    CardContent,
    CardDescription,
    CardImage,
    CardTitle,
    Container,
    Subtitle,
    Title
} from "./styles"

import projetoDevRoom from "../../../assets/project-images/dev-room.png"

function Projetos(){

    return(
        <Container>
            <Title>Projetos</Title>
            <Subtitle>Seleção dos meus principais projetos</Subtitle>

            <Card>
                <CardImage src={projetoDevRoom}></CardImage>
                <CardContent>
                    <div>
                        <CardTitle>Testes automatizados do Dev-Room</CardTitle>
                        <CardDescription>
                            Neste projeto criei estrutura de testes robusta buscando aplicar os príncipios de Page Object Model permitindo a escalabilidade e manutenção dos testes de um aplicativo de código aberto chamado Dev-Room
                        </CardDescription>
                    </div>
                    <CardButton href="https://github.com/thballalai/cypress-dev-room" target="_blank">Ver Repositório</CardButton>
                </CardContent>
            </Card>
        </Container>
    )
}

export default Projetos