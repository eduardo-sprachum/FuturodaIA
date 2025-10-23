const caixaPrincipal = document.querySelector(".caixaPrincipal");
const caixaPerguntas = document.querySelector(".caixaPerguntas");
const caixaAlternativas = document.querySelector(".caixaAlternativas");
const caixaResultado = document.querySelector(".caixaResultado");
const textoResultado = document.querySelector(".textoResultado");

const botaoEspecialistas = document.querySelector(".botaoEspecialistas");
const botaoRespostas = document.querySelector(".botaoRespostas");
const caixaEspecialistas = document.querySelector(".caixaEspecialistas");
const caixaRespostas = document.querySelector(".caixaRespostas");

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
    mostraBotoesExtras(); // Mostra os botões extras
}

function mostraBotoesExtras() {
    caixaResultado.innerHTML = `
        <button class="botaoEspecialistas">Confira a opinião de especialistas</button>
        <button class="botaoRespostas">Olhe nossas respostas ao quiz</button>
    `;
    botaoEspecialistas.addEventListener('click', mostrarEspecialistas);
    botaoRespostas.addEventListener('click', mostrarRespostas);
}

function mostrarEspecialistas() {
    caixaEspecialistas.innerHTML = `
        <h2>Opinião de Especialistas</h2>
        <p><strong>John Smart</strong>: "Temo — por enquanto — que, embora haja uma minoria crescente se beneficiando cada vez mais significativamente dessas ferramentas, a maioria das pessoas continuará a abrir mão de sua autonomia, criatividade, capacidade de decisão e outras habilidades vitais para essas IAs ainda primitivas."</p>
        <p><strong>Elizabeth Renieris</strong>: "Os avanços na IA ampliarão a escala da tomada de decisão automatizada que é tendenciosa, discriminatória, excludente ou injusta. Ao mesmo tempo em que é inescrutável e incontestável."</p>
    `;
    caixaRespostas.style.display = 'none';  // Esconde as respostas ao quiz
    caixaEspecialistas.style.display = 'block';  // Exibe as opiniões dos especialistas
}

mostraPergunta(); // Exibe a primeira pergunta
