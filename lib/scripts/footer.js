const footer = document.getElementById('footer');
footer.className = 'container text-center mt-5 mb-5';

const footerContainer = document.createElement('div');
footerContainer.className = 'row';

footer.appendChild(footerContainer);

const colNum = 3;

for (let i = 0; i < colNum; i++) {
    const div = document.createElement('div');
    div.className = 'col';

    switch(i) {
        case 0:
            const h5 = document.createElement('h5');
            h5.textContent = 'Aonde me encontrar:';

            const iconDiv = document.createElement('div');
            iconDiv.className = 'd-flex justify-content-center gap-3 mt-2';

            const icons = [
                {
                    href: 'https://www.linkedin.com/in/thiago-ballalai/',
                    alt: 'LinkedIn',
                    color: '#0e76a8',
                    src: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/linkedin.svg'
                },
                {
                    href: 'https://github.com/thballalai',
                    alt: 'GitHub',
                    color: '#000000',
                    src: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/github.svg'
                },
                {
                    href: 'https://wa.me/5571993165925',
                    alt: 'WhatsApp',
                    color: '#25D366',
                    src: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/whatsapp.svg'
                },
                {
                    href: 'mailto:thballalai@gmail.com',
                    alt: 'E-mail',
                    color: '#EA4335',
                    src: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/gmail.svg'
                }
            ];

            icons.forEach(async icon => {
                const a = document.createElement('a');
                a.href = icon.href;
                a.target = '_blank';
                a.setAttribute('aria-label', icon.alt);

                try {
                    const response = await fetch(icon.src);
                    const svgText = await response.text();
                
                    // Cria um wrapper temporário para manipular o SVG
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = svgText;
                
                    const svg = tempDiv.querySelector('svg');
                    svg.setAttribute('width', '30');
                    svg.setAttribute('height', '30');
                    svg.setAttribute('fill', icon.color); // altera a cor do ícone
                    svg.style.transition = 'fill 0.3s ease';
                
                    a.appendChild(svg);
                    iconDiv.appendChild(a);
                  } catch (err) {
                    console.error(`Erro ao carregar o ícone ${icon.alt}:`, err);
                  }
            })


            div.appendChild(h5);
            div.appendChild(iconDiv);
            break;
        
        case 1:
            div.className = 'col d-flex justify-content-center align-items-center';
            
            const span = document.createElement('span');
            span.textContent = '©2025 Thiago Ballalai. Todos os direitos reservados.';

            div.appendChild(span);
            break;

        case 2:
            div.className = 'col d-flex justify-content-center align-items-center';

            const a = document.createElement('a');
            a.className = 'btn btn-primary';
            a.href = '../lib/assets/files/Curriculo - Analista de Teste - Thiago Ballalai.pdf';
            a.target = '_blank';
            a.textContent = 'Baixar Currículo';

            div.appendChild(a);
            break;
    }

    footerContainer.appendChild(div);
}