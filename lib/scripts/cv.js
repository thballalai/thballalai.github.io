const container = document.getElementById('cv');

const sectionName = ['heading', 'resume', 'formation', 'language', 'experience', 'courses'];

for (let i = 0; i < sectionName.length; i++) {
    const section = document.createElement('section');
    section.id = `${sectionName[i]}`;
    
    switch(i){
        case 0:
            const h1 = document.createElement('h1');
            h1.textContent = 'Thiago Alves Ballalai de Carvalho';
            section.appendChild(h1);

            const span = document.createElement('span');
            span.textContent = 'Vitória da Conquista BA';
            section.appendChild(span);

            const hrHeading = document.createElement('hr');
            section.appendChild(hrHeading);
            break;
        
        case 1:
            const h2Resume = document.createElement('h2');
            h2Resume.textContent = 'Resumo de Qualificações';
            section.appendChild(h2Resume);

            const p = document.createElement('p');
            p.textContent = 'Analista de Testes com formação em Engenharia Civil e forte background técnico em HTML, Python e SQL. Tenho como objetivo contribuir de forma significativa na equipe de testes da empresa, utilizando meus conhecimentos para otimizar a eficiência dos processos, assegurar a excelência na qualidade dos produtos e garantir a máxima satisfação dos clientes. Buscando aplicar minhas habilidades para identificar oportunidades de melhoria, implementar soluções eficazes e entregar resultados consistentes em ambientes dinâmicos.';
            section.appendChild(p);

            const hrResume = document.createElement('hr');
            section.appendChild(hrResume);
            break;

        case 2:
            const h2Formation = document.createElement('h2');
            h2Formation.textContent = 'Formação Acadêmica';
            section.appendChild(h2Formation);

            const formationList = [
                'UNIFTC - Engenharia Civil',
                'EBPÓS - Pós Graduação - Engenharia Geotécnica',
                'EBPÓS - Pós Graduação - Gerenciamento de Obras',
            ];

            const ulFormation = document.createElement('ul');
            for (let i = 0; i < formationList.length; i++) {
                const liFormation = document.createElement('li');
                liFormation.textContent = `${formationList[i]}`;
                ulFormation.appendChild(liFormation);
            };
            section.appendChild(ulFormation);

            const hrFormation = document.createElement('hr');
            section.appendChild(hrFormation);
            break;

        case 3:
            const h2Language = document.createElement('h2');
            h2Language.textContent = 'Idiomas | Experiências Internacionais';
            section.appendChild(h2Language);

            const languageList = [
                'Inglês Avançado',
                'EUA - Intercâmbio'
            ];
            
            const ulLanguage = document.createElement('ul');
            for (let i = 0; i < languageList.length; i++) {
                const liLanguage = document.createElement('li');
                liLanguage.textContent = `${languageList[i]}`;
                ulLanguage.appendChild(liLanguage);
            };
            section.appendChild(ulLanguage);
            
            const hrLanguage = document.createElement('hr');
            section.appendChild(hrLanguage);
            break;

        case 4:
            const h2Experience = document.createElement('h2');
            h2Experience.textContent = 'Experiência Profissional';
            section.appendChild(h2Experience);

            const experienceList = [
                {
                    company: 'CTA Empreendimentos (Empresa Nacional do Segmento de Construção Civil)',
                    date: '01/08/2022 a 30/08/2023',
                    job: 'Engenheiro Civil Junior',
                    description: [
                        'Responsável pelo gerenciamento das atividades relacionadas à operação tapa-buraco, terraplanagem e execução de asfalto novo na cidade de Ilhéus.',
                        'Coordenação e supervisão das obras, assegurando que as operações fossem realizadas dentro dos prazos estabelecidos e com a qualidade esperada.',
                        'Encarregado da confecção de orçamentos para projetos e serviços destinados a outros clientes, atendendo às demandas da Secretaria de Infraestrutura do município.',
                        'Bom relacionamento com fornecedores, buscando sempre as melhores condições para a execução dos serviços e a satisfação dos envolvidos.'
                    ]
                },
                {
                    company: 'Cezar Engenharia (Empresa Nacional do Segmento de Construção Civil)',
                    date: '02/03/2019 a 01/09/2019',
                    job: 'Estagiário de Engenharia Civil',
                    description: [
                        'Auxiliar nas atividades de acompanhamento de obra residencial e emissão de relatório de progresso.'
                    ]
                },
                {
                    company: 'Souza Netto Engenharia (Empresa Nacional do Segmento de Construção Civil)',
                    date: '01/06/2016 a 01/05/2018',
                    job: 'Estagiário de Engenharia Civil',
                    description: [
                        'Responsável pelo planejamento e execução de reformas, garantindo que os projetos fossem realizados dentro do cronograma e com a qualidade necessária. Além disso, realizava vistórias técnicas no setor de assistência técnica, identificando necessidades e propondo soluções para manutenção e melhorias. Também desenvolvia e gerenciava planilhas para auxiliar na gestão das atividades, otimizando o acompanhamento de processos e contribuindo para a organização e controle das operações.'
                    ]
                }
            ];

            experienceList.forEach(experience => {
                const h3Experience = document.createElement('h3');
                h3Experience.textContent = `${experience.company}`;
                section.appendChild(h3Experience);

                const pExperienceDate = document.createElement('p');
                pExperienceDate.textContent = `${experience.date}`;
                section.appendChild(pExperienceDate);

                const h4ExperienceJob = document.createElement('h4');
                h4ExperienceJob.textContent = `${experience.job}`;
                section.appendChild(h4ExperienceJob);

                const ulExperience = document.createElement('ul');
                for (let i = 0; i < experience.description.length; i++) {
                    const li = document.createElement('li');
                    li.textContent = `${experience.description[i]}`;
                    ulExperience.appendChild(li);
                }
                section.appendChild(ulExperience);
            });

            const hrExperience = document.createElement('hr');
            section.appendChild(hrExperience);
            break;

            break;

        case 5:
            const h2Courses = document.createElement('h2');
            h2Courses.textContent = 'Aperfeiçoamento Profissioanal';
            section.appendChild(h2Courses);

            coursesList = [
                'HTML e CSS para Projetos Web',
                'Lógica de Programação com JavaScript',
                'Python Panda: Tratando e Analisando Dados',
                'Data Science: Análise e Visualização de Dados',
                'Introdução ao Desenvolvimento Moderno de Software',
                'Introdução ao Mercado de Qualidade de Software',
                'Business Intelligence: trabalhando com Data Warehouse',
                'Introdução ao Git e ao Github',
                'Metodologias Ágeis e Ciclo de Desenvolvimento de Software',
                'Testes Unitários Com JUnit',
                'Introdução a Testes de Software',
                'O Dia a Dia de um QA: A Prática de Testes Manuais Funcionais',
                'Fundamentos de Qualidade e Desenvolvimento de Software',
                'Criando seu Primeiro Repositório no GitHub Para Compartilhar Seu Progresso',
                'O Caminho Para a Certificação CTFL',
                'Introdução à Análise de Dados com Power BI com a Suzano',
                'Fundamentos de Qualidade de Software',
                'Introdução ao .NET',
                'Introdução ao Desenvolvimento Full Stack com a XP Inc.',
                'HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags',
                'HTML e CSS: cabeçalho, footer e variáveis CSS',
                'HTML e CSS: Classes, posicionamento e Flexbox',
                'HTML e CSS: praticando HTML/CSS',
                'HTML e CSS: responsividade com mobile-first',
                'HTML e CSS: trabalhando com responsividade e publicação de projetos',
                'JavaScript para Web: Crie páginas dinâmicas',
                'JavaScript: manipulando elementos no DOM',
                'Lógica de programação: explore funções e listas',
                'Praticando CSS: Grid e Flexbox',
                'AutoCAD 2D',
                'Usina de Asfalto',
                'QA Solidário - 3 Edição',
                'Seminário Nacional de Orçamento na Construção Civil',
                'Imersão Dev 7ª Edição',
                'Criando e Testando uma Aplicação com React e TypeScript',
                'Como Utilizar o Gherkin da Forma Correta',
                'Ferramentas de gestão de testes',
                'JavaScript para Testers',
                'Introdução à Banco de Dados',
                'Sistemas de Gerenciamento de Banco de Dados',
                'Iniciando no mundo da automação',
                'QA Automation',
            ];

            const ulCourses = document.createElement('ul');
            for (let i = 0; i < coursesList.length; i++) {
                const li = document.createElement('li');
                li.textContent = `${coursesList[i]}`;
                ulCourses.appendChild(li);
            }
            section.appendChild(ulCourses);

            
            break;
    }

    container.appendChild(section);
}