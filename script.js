const perguntas = [
  {
    texto: "Qual foi a nossa primeira viagem juntos?",
    alternativas: ["Thermas", "Ribeirão", "Paraíso Perdido"],
    correta: "Thermas",
    imagem: "imagens/thermas.jpg"
  },
  {
    texto: "Qual cidade visitamos no hotel com banheiro de mármore?",
    alternativas: ["Ribeirão", "Thermas", "Paraíso Perdido"],
    correta: "Ribeirão",
    imagem: "imagens/ribeirao.jpg"
  },
  {
    texto: "Quem é mais teimoso?",
    alternativas: ["Eu", "Ela", "Nós dois"],
    correta: "Eu",
    imagem: "imagens/eu.jpg"
  },
  {
    texto: "Quem tem o coração mais mole?",
    alternativas: ["Ela", "Eu", "Nós dois"],
    correta: "Ela",
    imagem: "imagens/ela.jpg"
  },
  {
    texto: "Quem ama mais?",
    alternativas: ["Eu", "Ela", "Nós dois"],
    correta: "Eu",
    imagem: "imagens/eu.jpg"
  },
  {
    texto: "Qual foi o lugar com pedras e água que visitamos?",
    alternativas: ["Paraíso Perdido", "Thermas", "Ribeirão"],
    correta: "Paraíso Perdido",
    imagem: "imagens/paraiso.jpg"
  },
  {
    texto: "Quem é mais ciumento?",
    alternativas: ["Eu", "Ela", "Nós dois"],
    correta: "Eu",
    imagem: "imagens/eu.jpg"
  },
  {
    texto: "Quem é mais carinhoso?",
    alternativas: ["Ela", "Eu", "Nós dois"],
    correta: "Eu",
    imagem: "imagens/eu.jpg"
  },
  {
    texto: "Quem sempre quer resolver tudo rápido?",
    alternativas: ["Eu", "Ela", "Nós dois"],
    correta: "Eu",
    imagem: "imagens/eu.jpg"
  },
  {
    texto: "Quem tem mais paciência?",
    alternativas: ["Ela", "Eu", "Nós dois"],
    correta: "Ela",
    imagem: "imagens/ela.jpg"
  },
  {
    texto: "Quem é mais impulsivo?",
    alternativas: ["Eu", "Ela", "Nós dois"],
    correta: "Eu",
    imagem: "imagens/eu.jpg"
  },
  {
    texto: "Quem sempre quer conversar mesmo quando não é hora?",
    alternativas: ["Eu", "Ela", "Nós dois"],
    correta: "Eu",
    imagem: "imagens/eu.jpg"
  },
  {
    texto: "Quem é mais romântico?",
    alternativas: ["Eu", "Ela", "Nós dois"],
    correta: "Eu",
    imagem: "imagens/eu.jpg"
  },
  {
    texto: "Quem sempre quer fazer surpresas?",
    alternativas: ["Eu", "Ela", "Nós dois"],
    correta: "Eu",
    imagem: "imagens/eu.jpg"
  },
  {
    texto: "Quem sempre quer resolver tudo com conversa?",
    alternativas: ["Eu", "Ela", "Nós dois"],
    correta: "Eu",
    imagem: "imagens/eu.jpg"
  },
  {
    texto: "Quem é mais orgulhoso?",
    alternativas: ["Ela", "Eu", "Nós dois"],
    correta: "Ela",
    imagem: "imagens/ela.jpg"
  },
  {
    texto: "Quem sempre quer estar junto?",
    alternativas: ["Eu", "Ela", "Nós dois"],
    correta: "Eu",
    imagem: "imagens/eu.jpg"
  },
  {
    texto: "Quem sempre quer resolver tudo no mesmo dia?",
    alternativas: ["Eu", "Ela", "Nós dois"],
    correta: "Eu",
    imagem: "imagens/eu.jpg"
  },
  {
    texto: "Quem é mais sensível?",
    alternativas: ["Ela", "Eu", "Nós dois"],
    correta: "Ela",
    imagem: "imagens/ela.jpg"
  },
  {
    texto: "Quem sempre quer fazer planos?",
    alternativas: ["Eu", "Ela", "Nós dois"],
    correta: "Eu",
    imagem: "imagens/eu.jpg"
  },
  {
    texto: "Quem sempre quer mostrar que ama?",
    alternativas: ["Eu", "Ela", "Nós dois"],
    correta: "Eu",
    imagem: "imagens/eu.jpg"
  }
];

let indice = 0;
let beijos = 0;

const perguntaEl = document.getElementById("pergunta");
const alternativasEl = document.getElementById("alternativas");
const feedbackEl = document.getElementById("feedback");
const imagemEl = document.getElementById("imagem-resposta");
const proximaBtn = document.getElementById("proxima");
const contadorEl = document.getElementById("contador-beijos");

function carregarPergunta() {
  const atual = perguntas[indice];
  perguntaEl.textContent = atual.texto;
  alternativasEl.innerHTML = "";
  feedbackEl.textContent = "";
  imagemEl.style.display = "none";
  proximaBtn.style.display = "none";

  atual.alternativas.forEach((alt) => {
    const btn = document.createElement("button");
    btn.textContent = alt;
    btn.onclick = () => verificarResposta(alt);
    alternativasEl.appendChild(btn);
  });
}

function verificarResposta(resposta) {
  const atual = perguntas[indice];
  if (resposta === atual.correta) {
    feedbackEl.textContent = "✅ Você acertou!";
  } else {
    feedbackEl.textContent = `❌ Você errou! A resposta certa era: ${atual.correta}`;
    beijos++;
    contadorEl.textContent = `Beijos acumulados: ${beijos} 💋`;
  }
  imagemEl.src = atual.imagem;
  imagemEl.style.display = "block";
  proximaBtn.style.display = "inline-block";
}

proximaBtn.onclick = () => {
  indice++;
  if (indice < perguntas.length) {
    carregarPergunta();
  } else {
    mostrarCartaFinal();
  }
};

function mostrarCartaFinal() {
  document.getElementById("quiz-area").innerHTML = `
    <h2>🎉 Parabéns, Patrícia!</h2>
    <p>Você chegou ao final do desafio! E acumulou ${beijos} beijos 💋 que o Jhonatan vai cobrar com juros!</p>
    <p>Agora respira fundo... chegou a hora da surpresa final:</p>
    <div style="text-align:left; margin-top:20px;">
      <p><strong>Meu amor,</strong></p>
      <p>Hoje é seu dia. Esperei tanto por esse momento, planejei tantas coisas, tantas surpresas… mas infelizmente as coisas não estão como eu gostaria. Mesmo assim, ainda é um dia especial. Quero te desejar <strong>feliz aniversário</strong> com todo o amor que existe em mim...</p>
      <p>[A carta completa continua aqui — você pode colar o restante do texto da carta que já escrevemos juntos]</p>
      <p><strong>Com todo o meu amor,<br>Jhonatan</strong></p>
    </div>
  `;
}

carregarPergunta();
