/*
OBJETIVO 1 - quando o usuário clicar no botão de "veja o trailer", devemos abrir a modal com o vídeo do trailer

OBJETIVO 2 - quando o usuário clicar no "X" devemos fechar a modal

OBJETIVO 1
    - Passo 1: pegar o elemento no html que representa o botão na tela usando o 'JavaScript'
    - Passo 2: Identificar quando o usuário clicar no botão 'Veja o Trailer'
    - Passo 3: Pegar o elemento da modal no 'JavaScript'
    - Passo 4: Abrir a modal na tela

OBJETIVO 2
    - Passo 1: Pegar o elemento de fechar modal usando o 'JavaScript'
    - Passo 2: Identificar quando o usuário clicar no 'X'
    - Passo 3: Fechar a modal
*/

// OBJETIVO 1
// - Passo 1: pegar o elemento no html que representa o botão na tela usando o 'JavaScript'

const botaoTrailer = document.querySelector(".botao-trailer");

// - Passo 2: Identificar quando o usuário clicar no botão 'Veja o Trailer'

// - Passo 3: Pegar o elemento da modal no 'JavaScript'

const modal = document.querySelector(".modal");

const abrirTrailer = () => {
  // - Passo 4: Abrir a modal na tela
  modal.classList.add("aberto");
  video.setAttribute("src", "https://www.youtube.com/embed/Cb4WV4aXBpk")
};

botaoTrailer.addEventListener("click", abrirTrailer);

// OBJETIVO 2
// - Passo 1: Pegar o elemento de fechar modal usando o 'JavaScript'

const botaoFecharModal = document.querySelector(".fechar-modal");

// - Passo 2: Identificar quando o usuário clicar no 'X'

const video = document.getElementById("video");

const fecharTrailer = () => {
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
}

botaoFecharModal.addEventListener("click", fecharTrailer);





