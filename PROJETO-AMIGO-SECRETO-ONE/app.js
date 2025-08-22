let amigos = [];

function adicionaramigo() {
    let nome = document.getElementById('amigo').value;
    
    if (nome === '') {
        alert('Por favor, escreva um nome!');
        return;
    }

    amigos.push(nome);
    document.getElementById('amigo').value = '';
    document.getElementById('arrayamigos').innerHTML = amigos.join('<br>');
}

function sortearamigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo!');
        return;
    }
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById('resultado').innerHTML = `Seu amigo secreto é: ${sorteado}`;
}