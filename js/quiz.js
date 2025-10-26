const perguntas = [
  {
    pergunta: "Quem é a aniversariante mais especial do dia?",
    alternativas: ["A Beyoncé", "A minha mãe", "A Patrícia", "A Barbie"],
    correta: 2,
    explicacao: "Hoje é o seu dia, princesa! A aniversariante mais linda, mais incrível, mais especial que existe.",
  },
  {
    pergunta: "Qual foi o dia em que Jhonatan e Patrícia se conheceram?",
    alternativas: ["18/04/2024", "17/08/2024", "20/08/2024", "19/08/2024"],
    correta: 3,
    explicacao: "Foi em Franca, numa madrugada estrelada, que tudo começou com um beijo inesquecível.",
  },
  {
    pergunta: "Qual é a comida mais consumida por Jhonatan e Patrícia?",
    alternativas: ["Sushi", "Lasanha", "Pizza", "Hambúrguer"],
    correta: 2,
    explicacao: "Principalmente a de pepperoni da Pizza Hut — a favorita de Jhonatan e Patrícia!",
  },
  {
    pergunta: "Qual foi a primeira viagem de Jhonatan e Patrícia juntos?",
    alternativas: ["Thermas dos Laranjais", "Paraíso Perdido", "Uberlândia", "Ribeirão Preto"],
    correta: 3,
    explicacao: "Jhonatan foi a trabalho, Patrícia de férias, e mesmo assim foi especial.",
  },
  {
    pergunta: "Qual é o maior medo de Jhonatan?",
    alternativas: ["Palmeiras ganhar o mundial", "Largatixa", "Ir embora sem fazer cartão", "Perder Patrícia"],
    correta: 3,
    explicacao: "Porque ela é tudo pra Jhonatan. Nada assusta mais do que imaginar a vida sem ela.",
  },
  {
    pergunta: "Qual música faz Jhonatan lembrar de Patrícia?",
    alternativas: [
      "Someone Like You – Adele",
      "You – Regard, Troye Sivan & Tate McRae",
      "Perfect – Ed Sheeran",
      "Deixa – Lagum",
    ],
    correta: 1,
    explicacao: "“All I see is you” — é exatamente como Jhonatan se sente.",
  },
  {
    pergunta: "Como Jhonatan não gosta que Patrícia o chame?",
    alternativas: ["Amor", "Vida", "Príncipe", "Jhonatan"],
    correta: 3,
    explicacao: "Quando Patrícia chama pelo nome parece que tá brava… Jhonatan prefere mil vezes “amor”.",
  },
  {
    pergunta: "Entre Jhonatan e Patrícia, quem é mais bravo?",
    alternativas: ["Jhonatan", "Patrícia", "Os dois", "Nenhum"],
    correta: 1,
    explicacao: "Ela é brava, mas é aquele bravo fofo que Jhonatan já sabe como acalmar.",
  },
  {
    pergunta: "Entre Jhonatan e Patrícia, quem ama mais?",
    alternativas: ["Patrícia", "Jhonatan", "Os dois igualmente", "Ninguém ama mais que o outro"],
    correta: 1,
    explicacao: "Ele ama mais, sem dúvida. Patrícia é o mundo dele.",
  },
  {
    pergunta: "Qual é o maior sonho de Jhonatan?",
    alternativas: [
      "Viajar o mundo sozinho",
      "Ser promovido no trabalho",
      "Ter uma coleção de camisas do Corinthians",
      "Que Patrícia aceite o pedido de namoro, se case com ele e construa uma vida linda ao lado dele",
    ],
    correta: 3,
    explicacao: "Esse é o sonho que Jhonatan mais quer realizar com Patrícia.",
  },
  {
    pergunta: "Qual foi o primeiro presente que Jhonatan deu para Patrícia?",
    alternativas: ["Um bombom", "Uma carta", "Um buquê", "Um relógio"],
    correta: 3,
    explicacao: "No aniversário de Patrícia em 2024 — marcando o tempo do amor.",
  },
  {
    pergunta: "Qual é o apelido favorito de Jhonatan para Patrícia?",
    alternativas: ["Paty", "Princesa", "Mozão", "Amor da vida de Jhonatan"],
    correta: 3,
    explicacao: "Porque é isso que Patrícia é — e sempre será.",
  },
  {
    pergunta: "O que Jhonatan mais gosta de fazer com Patrícia?",
    alternativas: ["Comer pizza", "Dormir abraçado com Patrícia", "Ir ao shopping", "Ver série"],
    correta: 1,
    explicacao: "O abraço de Patrícia é o lar de Jhonatan.",
  },
  {
    pergunta: "Qual é a parte do corpo de Patrícia que Jhonatan mais ama?",
    alternativas: ["Os olhos", "A boca", "O sorriso", "O coração"],
    correta: 3,
    explicacao: "Porque é nele que mora tudo que Jhonatan ama.",
  },
  {
    pergunta: "Qual é o maior defeito de Jhonatan?",
    alternativas: ["Fala demais", "É teimoso", "É ciumento", "Todos os anteriores"],
    correta: 3,
    explicacao: "Mas Patrícia ama mesmo assim — e ele promete melhorar 💗",
  },
  {
    pergunta: "O que Jhonatan mais admira em Patrícia?",
    alternativas: ["A beleza", "A inteligência", "A fé e força", "A paciência"],
    correta: 2,
    explicacao: "Patrícia inspira Jhonatan todos os dias com sua coragem.",
  },
  {
    pergunta: "Qual foi o momento mais engraçado que Jhonatan viveu com Patrícia?",
    alternativas: [
      "Quando erraram o caminho",
      "Quando Patrícia caiu na cama e riu",
      "Quando Jhonatan pediu comida errada",
      "Quando Patrícia o assustou sem querer",
    ],
    correta: 1,
    explicacao: "A risada de Patrícia naquele dia foi a melhor trilha sonora.",
  },
  {
    pergunta: "Qual é o maior talento de Jhonatan?",
    alternativas: ["Fazer Patrícia rir", "Cozinhar", "Trabalhar duro", "Ser romântico"],
    correta: 3,
    explicacao: "Com Patrícia, o coração de Jhonatan vira poesia.",
  },
  {
    pergunta: "Qual é o lugar favorito de Jhonatan e Patrícia?",
    alternativas: [
      "O sofá da casa de Patrícia",
      "O shopping",
      "A estrada",
      "Qualquer lugar juntos",
    ],
    correta: 3,
    explicacao: "Porque o que importa é estar com Patrícia.",
  },
  {
    pergunta: "O que Jhonatan quer para o futuro com Patrícia?",
    alternativas: [
      "Uma casa com piscina",
      "Um cachorro chamado Pipoca",
      "Uma vida cheia de viagens",
      "Uma família linda e feliz",
    ],
    correta: 3,
    explicacao: "Com Patrícia, tudo é possível.",
  },
  {
    pergunta: "Qual é o próximo passo de Jhonatan com Patrícia?",
    alternativas: [
      "Pedir Patrícia em namoro",
      "Pedir Patrícia em casamento",
      "Levar Patrícia para viajar",
      "Fazer Patrícia feliz todos os dias",
    ],
    correta: 3,
    explicacao: "Esse é o compromisso que Jhonatan quer assumir — pra sempre.",
  },
];

let perguntaAtual = 0;
let erros = 0;

function startQuiz() {
  document.querySelector(".intro").style.display = "none";
  document.querySelector("button").style.display = "none";
  mostrarPergunta();
}

function mostrarPergunta() {
  const quiz = document.getElementById("quiz");
  quiz.innerHTML = "";

  const p = perguntas[perguntaAtual];
  const perguntaEl = document.createElement("h2");
  perguntaEl.textContent = `💘 Pergunta ${perguntaAtual + 1}: ${p.pergunta}`;
  quiz.appendChild(perguntaEl);

  p.alternativas.forEach((alt, i) => {
    const btn = document.createElement("button");
    btn.textContent = alt;
    btn.onclick = () => verificarResposta(i);
    quiz.appendChild(btn);
  });
}

function verificarResposta(indice) {
  const p = perguntas[perguntaAtual];
  if (indice === p.correta) {
    alert("Acertou! 💖\n\n" + p.explicacao);
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
      mostrarPergunta();
    } else {
      mostrarResultado();
    }
  } else {
    erros++;
    alert("Hmm… quase! Mas isso vale um beijo 😘");
    const quiz = document.getElementById("quiz");
    quiz.querySelectorAll("button")[indice].remove();
  }
}

function mostrarResultado() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("resultado").classList.remove("hidden");
  document.getElementById("erros
