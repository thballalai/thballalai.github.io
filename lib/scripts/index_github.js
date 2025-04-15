
fetch(`https://api.github.com/users/thballalai/repos`)
  .then(response => {
    if (!response.ok) {
      throw new Error("Erro ao buscar repositórios");
    }
    return response.json();
  })
  .then(repos => {
    const container = document.getElementById("repos");
    const reposDesejados = ["introducao-a-automacao","DIO-Cypress","javascript-para-qas", "CursoEmVideo-JavaPOO"];

    const filtrados = repos.filter(repo => reposDesejados.includes(repo.name));

    if (filtrados.length === 0) {
        container.textContent = "Nenhum repositório encontrado";
        return;
    }

    filtrados.forEach(repo => {

      const card = document.createElement('div');
      card.className = 'card mb-4';

      const cardTitle = document.createElement('h5');
      cardTitle.className = 'card-header';
      cardTitle.textContent = repo.name;

      const cardBody = document.createElement('div');
      cardBody.className = 'card-body';

      const cardText = document.createElement('p');
      cardText.className = 'card-text';
      cardText.textContent = repo.description || 'Sem descrição';

      const cardLink = document.createElement('a');
      cardLink.className = 'btn btn-primary';
      cardLink.href = repo.html_url;
      cardLink.target = '_blank';
      cardLink.textContent = 'Ver Mais';

      card.appendChild(cardTitle);
      
      cardBody.appendChild(cardText);
      cardBody.appendChild(cardLink);
      card.appendChild(cardBody);
      
      container.appendChild(card);
    });
  })
  .catch(error => {
    container.textContent = `Erro ao carregar repositórios: ${error.message}`;
  });