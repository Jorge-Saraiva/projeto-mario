const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");

const modal = document.querySelector(".modal");

const video = document.getElementById("video");
const linkVideo = video.src;

const alternarModal = () => {
  modal.classList.toggle("aberto");
};

const abrirTrailer = () => {
  alternarModal();
  video.setAttribute("src", linkVideo);
};

const fecharTrailer = () => {
  alternarModal();
  video.setAttribute("src", "");
};

botaoTrailer.addEventListener("click", abrirTrailer);

botaoFecharModal.addEventListener("click", fecharTrailer);
