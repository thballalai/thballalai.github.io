function criarBadge(alt, tech, bgColor, logoColor) {
    const url = `https://img.shields.io/badge/${encodeURIComponent(tech)}-${bgColor}?style=for-the-badge&logo=${encodeURIComponent(tech)}&logoColor=${logoColor}`;
    
    const img = document.createElement('img');
    img.src = url;
    img.alt = alt;
    img.title = alt;
    img.className = 'm-1';

    return img;
}

const perfilBadges = document.getElementById('badgesContainer');

const badges = [
        { alt: "Java", tech: "Java", bgColor: "ED8B00", logoColor: "white" },
        { alt: "HTML", tech: "html5", bgColor: "E34F26", logoColor: "white" },
        { alt: "CSS", tech: "css3", bgColor: "1572B6", logoColor: "white" },
        { alt: "JavaScript", tech: "javascript", bgColor: "FFD700", logoColor: "gray" },
        { alt: "Python", tech: "Python", bgColor: "3776AB", logoColor: "white" },
        { alt: "SQL", tech: "SQL", bgColor: "4479A1", logoColor: "white" },
        { alt: "Selenium", tech: "Selenium", bgColor: "43B02A", logoColor: "white" },
        { alt: "JUnit", tech: "JUnit", bgColor: "25A162", logoColor: "white" },
        { alt: "Git", tech: "Git", bgColor: "F05032", logoColor: "white" },
        { alt: "GitHub", tech: "GitHub", bgColor: "181717", logoColor: "white" },
        { alt: "JIRA", tech: "JIRA", bgColor: "0052CC", logoColor: "white" },
        { alt: "Playwright", tech: "Playwright", bgColor: "2EAD33", logoColor: "white" },
        { alt: "CodeceptJS", tech: "CodeceptJS", bgColor: "EF4944", logoColor: "white" },
        { alt: "Qase", tech: "Qase.io", bgColor: "0172CB", logoColor: "white" },
        { alt: "NodeJS", tech: "node.js", bgColor: "339933", logoColor: "white" },
        { alt: "React", tech: "React", bgColor: "20232A", logoColor: "61DAFB" },
        { alt: "Cypress", tech: "Cypress", bgColor: "17202C", logoColor: "white" }
];

badges.forEach(badge => {
    const badgeElement = criarBadge(badge.alt, badge.tech, badge.bgColor, badge.logoColor);
    perfilBadges.appendChild(badgeElement);
});