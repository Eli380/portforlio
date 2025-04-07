let body = document.querySelector("body");
let tenis = document.querySelector(".imagem-tenis");

function mudarVisual(cor, imagem) {
  // Adiciona a classe para aplicar o efeito
  tenis.classList.add("troca-efeito");

  // Muda a cor de fundo
  body.style.background = cor;

  // Aguarda um tempinho antes de trocar a imagem
  setTimeout(() => {
    tenis.src = imagem;

    // Remove a classe de efeito para voltar ao normal
    tenis.classList.remove("troca-efeito");
  }, 300); // tempo em milissegundos (0.3 segundos)
}

