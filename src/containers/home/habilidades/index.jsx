import {
    Container,
    Section,
    SectionTitle,
    Skill,
    SkillIcon,
    SkillName,
    Title
} from "./styles"

function Habilidades(){

    return(
        <Container>
            <Title>Habilidades Técnicas</Title>
            <Section>
                <SectionTitle>Linguagens de Programação</SectionTitle>
                <Skill>
                    <SkillIcon src="src/assets/skills/javascript-logo.svg"></SkillIcon>
                    <SkillName>JavaScript</SkillName>
                </Skill>
                <Skill>
                    <SkillIcon src="src/assets/skills/java-logo.svg"></SkillIcon>
                    <SkillName>Java</SkillName>
                </Skill>
                <Skill>
                    <SkillIcon src="src/assets/skills/python-logo.svg"></SkillIcon>
                    <SkillName>Python</SkillName>
                </Skill>
            </Section>
            <Section>
                <SectionTitle>Frameworks de Automação de Teste</SectionTitle>
                <Skill>
                    <SkillIcon src="src/assets/skills/cypress-logo.svg"></SkillIcon>
                    <SkillName>Cypress</SkillName>
                </Skill>
                <Skill>
                    <SkillIcon src="src/assets/skills/selenium-logo.svg"></SkillIcon>
                    <SkillName>Selenium</SkillName>
                </Skill>
                <Skill>
                    <SkillIcon src="src/assets/skills/postman-logo.svg"></SkillIcon>
                    <SkillName>Postman</SkillName>
                </Skill>
            </Section>
            <Section>
                <SectionTitle>Ferramentas e Tecnologia</SectionTitle>
                <Skill>
                    <SkillIcon src="src/assets/skills/git-logo.svg"></SkillIcon>
                    <SkillName>Git</SkillName>
                </Skill>
                <Skill>
                    <SkillIcon src="src/assets/skills/notion-logo.svg"></SkillIcon>
                    <SkillName>Notion</SkillName>
                </Skill>
                <Skill>
                    <SkillIcon src="src/assets/skills/jira-logo.svg"></SkillIcon>
                    <SkillName>Jira</SkillName>
                </Skill>
                <Skill>
                    <SkillIcon src="src/assets/skills/githubactions-logo.svg"></SkillIcon>
                    <SkillName>Github Actions</SkillName>
                </Skill>
            </Section>
        </Container>
    )
}

export default Habilidades