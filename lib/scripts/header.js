function createNavItem(text, href) {
    const li = document.createElement('li');
    li.className = 'nav-item';

    const a = document.createElement('a');
    a.href = href;
    a.textContent = text;
    a.className = 'nav-link fs-5 text-uppercase';

    li.appendChild(a);

    return li;
}

const headerContainer = document.getElementById("header");
headerContainer.className = 'mb-5'

const nav = document.createElement('nav');
nav.className = 'navbar navbar-expand-lg';

const divFluid = document.createElement('div');
divFluid.className = 'container-fluid justify-content-end';

const button = document.createElement('button');
button.className = 'navbar-toggler';
button.type = 'button';
button.setAttribute('data-bs-toggle', 'collapse');
button.setAttribute('data-bs-target', '#navbarSupportedContent');
button.setAttribute('aria-controls', 'navbarSupportedContent');
button.setAttribute('aria-expanded', 'false');
button.setAttribute('aria-label', 'Toggle navigation');

const span = document.createElement('span');
span.className = 'navbar-toggler-icon';

const divCollapse = document.createElement('div');
divCollapse.className = 'collapse navbar-collapse';
divCollapse.id = 'navbarSupportedContent';

const list = document.createElement('ul');
list.className = 'navbar-nav ms-auto mb-2 mb-lg-0';

// Create list for navigation itens
const navItens = [ 
    {text: 'home', href: '../index.html'},
    {text: 'projetos', href: '../pages/repo.html'}, 
    {text: 'currículo', href: '../pages/curriculo.html'}
];

navItens.forEach(navItem => {
    const navItemElement = createNavItem(navItem.text, navItem.href);
    list.appendChild(navItemElement);
});

button.appendChild(span);
divFluid.appendChild(button);
divCollapse.appendChild(list);
divFluid.appendChild(divCollapse);
nav.appendChild(divFluid);
headerContainer.appendChild(nav);