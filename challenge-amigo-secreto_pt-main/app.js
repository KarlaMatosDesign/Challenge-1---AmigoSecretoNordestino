// Array para armazenar os nomes dos amigos
let nomes = [];

// Funcao para adicionar o nome a lista
function adicionarAmigo() {
    const nomeInput = document.getElementById('amigo');
    const nome = nomeInput.value.trim(); // Remover espacos extras

    // Verificar se o campo de texto esta vazio
    if (nome === '') {
        alert('Bicho tu é nó cego né?! Tu tem que botar um nome valido ai.   Cuida!');
    } else {
        // Adicionar o nome a lista
        nomes.push(nome);
        nomeInput.value = ''; // Limpar o campo de texto
        exibirLista(); // Atualizar a lista visivel
    }
}

// Funcao para exibir a lista de amigos
function exibirLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpar a lista de exibicao

    // Adicionar cada nome a lista HTML
    nomes.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        listaAmigos.appendChild(li);
    });
}

// Funcao para sortear um nome aleatorio
function sortearAmigo() {
    if (nomes.length === 0) {
        alert('A lista de amigos esta vazia! Adicione nomes primeiro.');
        return;
    }

    // Sorteia um nome aleatorio da lista
    const nomeSorteado = nomes[Math.floor(Math.random() * nomes.length)];

    // Exibir o nome sorteado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo Secreto Sorteado: <strong>${nomeSorteado}</strong>`;
}

