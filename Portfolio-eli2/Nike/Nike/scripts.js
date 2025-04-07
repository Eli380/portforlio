let body = document.querySelector("body");
let titulo = document.getElementById("titulo");
let descricao = document.getElementById("descricao");
let preco = document.getElementById("preco");
let tenis = document.querySelector(".imagem-tenis");

const modelos = [
  {
    nome: "Nike Air Zoom",
    descricao:
      "Uma passada elástica para qualquer corrida, com mais conforto nas áreas sensíveis do seu pé.",
    preco: "R$ 799,00",
    imagem: "img/nike1.png",
    corFundo: "#ccee66",
  },
  {
    nome: "Nike Rosa Style",
    descricao:
      "Design moderno, conforto absoluto. Ideal para o dia a dia com um toque de estilo.",
    preco: "R$ 849,00",
    imagem: "img/nike3.png",
    corFundo: "#ff9eb5",
  },
  {
    nome: "Nike Blue Speed",
    descricao:
      "Alta performance para corridas intensas. Leveza e resistência em cada passo.",
    preco: "R$ 899,00",
    imagem: "img/nike2.png",
    corFundo: "#58cced",
  },
];

let indexAtual = 0;

function atualizarVisual() {
  const modelo = modelos[indexAtual];

  tenis.classList.add("troca-efeito");
  body.style.background = modelo.corFundo;
  
  setInterval(() => {
   proximoModelo();
 }, 5000); // troca a cada 5 segundos
 

  setTimeout(() => {
    titulo.textContent = modelo.nome;
    descricao.textContent = modelo.descricao;
    preco.textContent = modelo.preco;
    tenis.src = modelo.imagem;
    tenis.classList.remove("troca-efeito");
  }, 300);
}

function proximoModelo() {
  indexAtual = (indexAtual + 1) % modelos.length;
  atualizarVisual();
}

function voltarModelo() {
  indexAtual = (indexAtual - 1 + modelos.length) % modelos.length;
  atualizarVisual();
}


