"use strict"

const cadastrar = document.getElementById("cadastrar")

function cadastraNome () {
    const nome = document.getElementById("nome")
    const listaNomes = document.getElementById("lista-nomes")
    
    const itemNome = document.createElement("p")
    itemNome.textContent = nome.value

    listaNomes.appendChild(itemNome)
}

cadastrar.addEventListener("click", cadastraNome)