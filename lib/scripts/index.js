const index = document.getElementById('index');

// Create section that will showcase my personal info
const sectionAboutMe = document.createElement('section');
sectionAboutMe.className = 'aboutMe mt-5 mb-5';

const perfilResume = document.createElement('div');
perfilResume.className = 'd-flex flex-column flex-md-row align-items-center justify-content-center gap-4'

const perfilResumeLeft = document.createElement('div');
perfilResumeLeft.className = 'd-flex justify-content-center w-100';

const perfilResumePicture = document.createElement('img');
perfilResumePicture.className = 'img-fluid perfilImg rounded-5 mb-3';
perfilResumePicture.style.width = '90%';
perfilResumePicture.style.maxWidth = '300px';
perfilResumePicture.src = '../lib/assets/img/1693583655378.jpg';
perfilResumePicture.alt = 'Foto de perfil';

const perfilResumeRight = document.createElement('div');

const perfilResumeRightTitle = document.createElement('h1');
perfilResumeRightTitle.appendChild(document.createTextNode('Thiago Ballalai'));

const perfilResumeRightTextTitle = document.createElement('h2');
perfilResumeRightTextTitle.appendChild(document.createTextNode('Analista de Teste'));

const perfilResumeRightTextText = document.createElement('p');
perfilResumeRightTextText.className = 'lead'
perfilResumeRightTextText.appendChild(document.createTextNode('Sou um profissional em transição de carreira da engenharia civil para a área de tecnologia, com foco em Qualidade de Software. Tenho experiência em testes manuais e automatizados, conhecimento em ferramentas modernas e paixão por aprender coisas novas todos os dias.'));

const hr = document.createElement('hr');
const hr2 = document.createElement('hr');

// Create section that will call badges.js
const sectionBadges = document.createElement('section');
sectionBadges.id = 'badgesContainer';
sectionBadges.className = 'text-center m-2';

// Create repository showcase
const sectionRepos = document.createElement('section');

const reposTitle = document.createElement('h2');
reposTitle.textContent = 'Principais Projetos';
reposTitle.className = 'mb-4';

const repos = document.createElement('div');
repos.id = 'repos';

// Place everything in the right place
perfilResumeRight.appendChild(perfilResumeRightTitle);
perfilResumeRight.appendChild(perfilResumeRightTextTitle);
perfilResumeRight.appendChild(perfilResumeRightTextText);
perfilResumeLeft.appendChild(perfilResumePicture);
perfilResume.appendChild(perfilResumeLeft);
perfilResume.appendChild(perfilResumeRight);
sectionAboutMe.appendChild(perfilResume);
index.appendChild(sectionAboutMe);
index.appendChild(hr);
index.appendChild(sectionBadges);
index.appendChild(hr2);
sectionRepos.appendChild(reposTitle);
sectionRepos.appendChild(repos);
index.appendChild(sectionRepos);