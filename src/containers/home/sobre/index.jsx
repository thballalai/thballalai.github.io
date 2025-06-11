import { 
    Container,
    Pessoal,
    PerfilImg,
    TitleName,
    TitleJob,
    Resume,
    TitleResume,
    TextResume
} from "./styles"

function Sobre(){

    return(
        <Container>
            <Pessoal>
                <PerfilImg src="src\assets\perfil-picture.jpeg" alt="" />
                <TitleName>Thiago Ballalai</TitleName>
                <TitleJob>Analista de Garantia de Qualidade de Software</TitleJob>
                <p>Profissional de garantia e controle de Qualidade (QA) com experiência, especializado em testes manuais e automatizados de aplicações web e móveis. Possuo paixão por assegurar software de alta qualidade por meio de testagem meticulosa e colaboração.</p>
            </Pessoal>
            <Resume>
                <TitleResume>Resumo Profissional</TitleResume>
                <TextResume>Analista de Qualidade de Software (QA) com 4 anos de carreira e formação em Engenharia Civil, o que me confere habilidades essenciais de comunicação, liderança e organização. Especialista em planejamento, execução e manutenção de testes, com foco em automação (Cypress, Selenium) e metodologias ágeis. Proficiente em identificação e rastreamento de defeitos, com conhecimento em SQL e linguagens de programação como Java, JavaScript e Python.</TextResume>
            </Resume>
        </Container>
    )
}

export default Sobre