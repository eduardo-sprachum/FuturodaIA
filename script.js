const caixaPrincipal = document.querySelector(".caixaPrincipal");
const caixaPerguntas = document.querySelector(".caixaPerguntas");
const caixaAlternativas = document.querySelector(".caixaAlternativas");
const caixaResultado = document.querySelector(".caixaResultado");
const textoResultado = document.querySelector(".textoResultado");

const perguntas = [
    {
        enunciado: "Você acredita que a IA é uma vilã?",
        alternativas: [
            { texto: "Sim", afirmacoes: "Você acha que a IA pode ser uma ameaça." },
            { texto: "Não", afirmacoes: "Você acredita que a IA pode ser benéfica." }
        ]
    },
    {
        enunciado: "Consegue imaginar sua vida sem a IA?",
        alternativas: [
            { texto: "Sim", afirmacoes: "Você imagina um mundo sem IA, com menos dependência de tecnologia." },
            { texto: "Não", afirmacoes: "Você acha que a IA já faz parte essencial da sua vida." }
        ]
    },
    {
        enunciado: "A IA é perigosa? Rouba nossos dados?",
        alternativas: [
            { texto: "Sim", afirmacoes: "Você acredita que a IA pode ser uma ameaça à privacidade." },
            { texto: "Não", afirmacoes: "Você acredita que a IA pode ser controlada e protegida." }
        ]
    },
    {
        enunciado: "A IA vai acabar com as profissões existentes hoje?",
        alternativas: [
            { texto: "Sim", afirmacoes: "Você acredita que muitas profissões serão automatizadas." },
            { texto: "Não", afirmacoes: "Você acredita que a IA ajudará a criar novas oportunidades." }
        ]
    },
    {
        enunciado: "Você acha que a IA pode dominar o mundo e subjugar a raça humana?",
        alternativas: [
            { texto: "Sim", afirmacoes: "Você teme um futuro dominado por IA." },
            { texto: "Não", afirmacoes: "Você acredita que a IA pode ser controlada e utilizada para o bem." }
        ]
    },
];

let atual = 0;
let historiaFinal = "";

function mostraPergunta() {
    const perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas(perguntaAtual);
}

function mostraAlternativas(perguntaAtual) {
    caixaAlternativas.innerHTML = ''; // Limpa as alternativas anteriores
    perguntaAtual.alternativas.forEach((alternativa) => {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener('click', () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    });
}

function respostaSelecionada(alternativaSelecionada) {
    historiaFinal += alternativaSelecionada.afirmacoes + "\n"; // Acumula as respostas
    atual++;
    if (atual < perguntas.length) {
        mostraPergunta(); // Mostra a próxima pergunta
    } else {
        mostraResultado(); // Mostra o resultado quando todas as perguntas forem respondidas
    }
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resultado Final:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.innerHTML = ""; // Limpa as alternativas
}

mostraPergunta(); // Exibe a primeira pergunta
