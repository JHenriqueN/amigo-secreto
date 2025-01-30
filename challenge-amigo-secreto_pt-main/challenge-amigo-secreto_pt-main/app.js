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