import {
    Container,
    Section,
    SectionTitle,
    Skill,
    SkillIcon,
    SkillName,
    Title
} from "./styles"

import logoJavascript from '../../../assets/skills/javascript-logo.svg';
import logoJava from '../../../assets/skills/java-logo.svg';
import logoPython from '../../../assets/skills/python-logo.svg';
import logoCypress from '../../../assets/skills/cypress-logo.svg';
import logoSelenium from '../../../assets/skills/selenium-logo.svg';
import logoPostman from '../../../assets/skills/postman-logo.svg';
import logoGit from '../../../assets/skills/git-logo.svg';
import logoNotion from '../../../assets/skills/notion-logo.svg';
import logoJira from '../../../assets/skills/jira-logo.svg';
import logoGithubActions from '../../../assets/skills/githubactions-logo.svg';

function Habilidades(){

    return(
        <Container>
            <Title>Habilidades Técnicas</Title>
            <Section>
                <SectionTitle>Linguagens de Programação</SectionTitle>
                <Skill>
                    <SkillIcon src={logoJavascript}></SkillIcon>
                    <SkillName>JavaScript</SkillName>
                </Skill>
                <Skill>
                    <SkillIcon src={logoJava}></SkillIcon>
                    <SkillName>Java</SkillName>
                </Skill>
                <Skill>
                    <SkillIcon src={logoPython}></SkillIcon>
                    <SkillName>Python</SkillName>
                </Skill>
            </Section>
            <Section>
                <SectionTitle>Frameworks de Automação de Teste</SectionTitle>
                <Skill>
                    <SkillIcon src={logoCypress}></SkillIcon>
                    <SkillName>Cypress</SkillName>
                </Skill>
                <Skill>
                    <SkillIcon src={logoSelenium}></SkillIcon>
                    <SkillName>Selenium</SkillName>
                </Skill>
                <Skill>
                    <SkillIcon src={logoPostman}></SkillIcon>
                    <SkillName>Postman</SkillName>
                </Skill>
            </Section>
            <Section>
                <SectionTitle>Ferramentas e Tecnologia</SectionTitle>
                <Skill>
                    <SkillIcon src={logoGit}></SkillIcon>
                    <SkillName>Git</SkillName>
                </Skill>
                <Skill>
                    <SkillIcon src={logoNotion}></SkillIcon>
                    <SkillName>Notion</SkillName>
                </Skill>
                <Skill>
                    <SkillIcon src={logoJira}></SkillIcon>
                    <SkillName>Jira</SkillName>
                </Skill>
                <Skill>
                    <SkillIcon src={logoGithubActions}></SkillIcon>
                    <SkillName>Github Actions</SkillName>
                </Skill>
            </Section>
        </Container>
    )
}

export default Habilidades