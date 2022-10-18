var quizInfos = [
    {
    pergunta: "Qual é o nome do pesonagem principal do filme Senhor dos Aneis?",
    a: "Frodo",
    b: "Bilbo",
    c: "Gandalf",
    d: "Gimli",
    certa: "a"
    },
    {
    pergunta: "Qual a linguagem de programação mais usada em 2019?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    certa: "d"
    },
    {
    pergunta: "Em que ano o primeiro homem pisou na lua?",
    a: "1970",
    b: "1500",
    c: "1969",
    d: "2001",
    certa: "c"
    },
    {
    pergunta: "Quantos paises existem no mundo?",
    a: "15",
    b: "272",
    c: "190",
    d: "193",
    certa: "d"
    },
    {
    pergunta: "Em que ano o JavaScript foi lançado?",
    a: "2020",
    b: "2019",
    c: "1995",
    d: "nenhuma das alternativas",
    certa: "c"
    }
];
var perguntaEl = document.querySelector(".pergunta")
var textoA = document.querySelector("#textoA");
var textoB = document.querySelector("#textoB");
var textoC = document.querySelector("#textoC");
var textoD = document.querySelector("#textoD");
var quiz = document.querySelector("#quiz");

var resposta = undefined;

var pontos = 0;

var btnProximo = document.getElementById("proximo")

var perguntaAtual = 0;

console.log(textoA, textoB, textoC, textoD, btnProximo);

carregaQuiz();

function carregaQuiz() {
    desmarcar()

    var quizAtual = quizInfos[perguntaAtual];

    perguntaEl.textContent = quizAtual.pergunta;
    textoA.textContent = quizAtual.a;
    textoB.textContent = quizAtual.b;
    textoC.textContent = quizAtual.c;
    textoD.textContent = quizAtual.d;


}

function getSelecionado(){
    var respostas = document.querySelectorAll(".resposta")

    for (var i = 0; i < respostas.length; i++){
        if(respostas[i].checked){
            console.log(respostas[i].id);

            return respostas[i].id;
        };
    };

    return;
}

function desmarcar() {
    var respostas = document.querySelectorAll(".resposta");
    for (var i = 0; i < respostas.length; i++){
        respostas[i].checked = false;
        
    };
}

btnProximo.addEventListener("click", function(){

    var resposta =  getSelecionado();

    if(resposta) {
        if( resposta === quizInfos[perguntaAtual].certa){
            pontos++;
        }

        perguntaAtual++;
    }

    if (perguntaAtual < quizInfos.length) {
        carregaQuiz();
    } else {
        quiz.innerHTML = `<h2>Você acertou ${pontos} de ${quizInfos.length} perguntas </h2> <button onclick="location.reload()">Reiniciar</button>`
    }
    
});