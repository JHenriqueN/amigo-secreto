// Lista de Amigos
let amigos = [];

function atualizarListaAmigos() {
    let listaContainer = document.getElementById('listaAmigos');
    listaContainer.innerHTML = '';

    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaContainer.appendChild(li);
    });

}
// Adicionando Amigos
function adicionarAmigo() {
    let nome = document.getElementById('amigo').ariaValueMax.trim();
    if (!nome) {
        alert('Por favor, insira o nome dos amigos');

    }else if (amigos.includes(nome)) {
        alert('Esse amigo já está na lista!');

    }else {
        amigos.push(nome);
        atualizarListaAmigos();
    }
    document.getElementById('amigo').value = '';
}