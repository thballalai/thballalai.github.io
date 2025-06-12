import {
    Container,
    ExperienciaBigBar,
    ExperienciaCompany,
    ExperienciaIcon,
    ExperienciaItem,
    ExperienciaItemLeft,
    ExperienciaItemRight,
    ExperienciaJob,
    Title
} from "./styles"

function Experiencia(){

    return(
        <Container>
            <Title>Experiência</Title>
            {/* Experiência mais Recente */}
            <ExperienciaItem>
                <ExperienciaItemLeft>
                    <ExperienciaIcon src="src\assets\handbag-icon.svg"></ExperienciaIcon>
                    <ExperienciaBigBar src="src\assets\vertical-line-big.svg"></ExperienciaBigBar>
                </ExperienciaItemLeft>
                <ExperienciaItemRight>
                    <ExperienciaJob>Voluntário de Analista de Teste</ExperienciaJob>
                    <ExperienciaCompany>Lacrei Saúde | 2025 - Atual</ExperienciaCompany>
                </ExperienciaItemRight>
            </ExperienciaItem>
            {/* Experiências antigas */}
            <ExperienciaItem>
                <ExperienciaItemLeft>
                    <ExperienciaIcon src="src\assets\handbag-icon.svg"></ExperienciaIcon>
                    <ExperienciaBigBar src="src\assets\vertical-line-big.svg"></ExperienciaBigBar>
                </ExperienciaItemLeft>
                <ExperienciaItemRight>
                    <ExperienciaJob>Voluntário de Analista de Teste</ExperienciaJob>
                    <ExperienciaCompany>HugU StartUp | 2025 - 2025</ExperienciaCompany>
                </ExperienciaItemRight>
            </ExperienciaItem>

            <ExperienciaItem>
                <ExperienciaItemLeft>
                    <ExperienciaIcon src="src\assets\handbag-icon.svg"></ExperienciaIcon>
                    <ExperienciaBigBar src="src\assets\vertical-line-big.svg"></ExperienciaBigBar>
                </ExperienciaItemLeft>
                <ExperienciaItemRight>
                    <ExperienciaJob>Engenheiro de Obra Junior</ExperienciaJob>
                    <ExperienciaCompany>CTA Empreendimentos | 2022 - 2023</ExperienciaCompany>
                </ExperienciaItemRight>
            </ExperienciaItem>

            <ExperienciaItem>
                <ExperienciaItemLeft>
                    <ExperienciaIcon src="src\assets\handbag-icon.svg"></ExperienciaIcon>
                    <ExperienciaBigBar src="src\assets\vertical-line-big.svg"></ExperienciaBigBar>
                </ExperienciaItemLeft>
                <ExperienciaItemRight>
                    <ExperienciaJob>Estagiário de Engenharia Civil</ExperienciaJob>
                    <ExperienciaCompany>Cezar Engenharia | 2020 - 2020</ExperienciaCompany>
                </ExperienciaItemRight>
            </ExperienciaItem>
            {/* Experiência mais antiga de todas */}
            <ExperienciaItem>
                <ExperienciaItemLeft>
                    <ExperienciaIcon src="src\assets\handbag-icon.svg"></ExperienciaIcon>
                </ExperienciaItemLeft>
                <ExperienciaItemRight>
                    <ExperienciaJob>Estagiário de Engenharia Civil</ExperienciaJob>
                    <ExperienciaCompany>Souza Netto Engenharia | 2017 - 2019</ExperienciaCompany>
                </ExperienciaItemRight>
            </ExperienciaItem>
        </Container>
    )
}

export default Experiencia