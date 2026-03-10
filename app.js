'use strict'

const recebeNome = document.getElementById('cadastrarNome')

function cadastrarNome() {
    const nomeEntrada = document.getElementById('nomeEntrada')
    const nomeExibicao = document.getElementById('nomeExibicao')

    // Verifica se o campo está vazio ou contém um número
    if (nomeEntrada.value === '' || !isNaN(nomeEntrada.value)) {
        alert('Por favor, insira um nome válido.')
        nomeEntrada.value = '' // Limpa o campo de entrada
        return console.error('Entrada inválida: O campo está vazio ou contém um número.') // Exibe um erro no console
    }

    // Cria um novo elemento de parágrafo para exibir o nome
    const itemNome = document.createElement('p')

    // Define o conteúdo do texto como o valor do campo de entrada
    itemNome.textContent = nomeEntrada.value

    // Adiciona o nome ao elemento de exibição
    nomeExibicao.appendChild(itemNome)

    // Limpa o campo de entrada após adicionar o nome
    nomeEntrada.value = ''
}

recebeNome.addEventListener('click', cadastrarNome)