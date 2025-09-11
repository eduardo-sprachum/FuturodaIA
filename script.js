const caixaPrincipal = document.querySelector(".caixaPrincipal");
const caixaPerguntas = document.querySelector(".caixaPerguntas");
const caixaAltrnativas = document.querySelector(".caixaAlternativas");  
const caixaResultado = document.querySelector(".caixaResultado");
const textoResultado = document.querySelector(".textoResultado");

const perguntas = [
    {
        enunciado: "Você acredita que a IA é uma vilã?",
        alternativas: [
            "Sim",
            "Não"
        ]
    },
    {
        enunciado: "Consegue imaginar sua vida sem a IA?",
        alternativas: [
            "Sim",
            "Não"
        ]
    },
    {
        enunciado: "A IA é perigosa? Rouba nossos dados?",
        alternativas: [
            "Sim",
            "Não"
        ]
    },
    {
        enunciado: "A IA vai acabar com as profissões existentes hoje?",
        alternativas: [
            "Sim",
            "Não"
        ]
    },
        {
        enunciado: "Você acha que a IA pode dominar o mundo e subjugar a raça humana?",
        alternativas: [
            "Sim",
            "Não"
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener('click', () => respostaSelecionada(alternativas));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacoes;
    atual++;
    mostraPergunta();
}

mostraPergunta();
