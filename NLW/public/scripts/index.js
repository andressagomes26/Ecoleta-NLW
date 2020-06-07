// Para pegar o seletor do botão da página inicial
const buttonSearch = document.querySelector('#page-home main a')

const modal = document.querySelector('#modal') // Seleciona a página do modal
const close = document.querySelector('#modal .header a')  // Seleciona o botão (X) na tela preta, para poder fechá-la

//Para chamar um evento ao clicar o botão 'Pesquisar pontos de coleta'
buttonSearch.addEventListener('click', () => {
    modal.classList.remove('hide') // Ao clicar irá remover a classe responsável por sumir com o modal (Tela preta), ou seja, vai fazer
                                   // o botão da tela inicial irá abrir a tela preta
})

//Para chamar um evento ao clicar o botão X
close.addEventListener('click', () =>{
    modal.classList.add('hide')   // Ao clicar no botão iremos adicionar a classe hide
                                  // responsável por adicionar as funcionalidades para
                                  // fechar a tella preta
})
