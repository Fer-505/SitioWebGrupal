const questions = [
    {
        title: "El sistema falla antes de una entrega. ¿Qué hacés primero?",
        options: [
            { text: "Reviso el error y priorizo la causa principal.", points: 3 },
            { text: "Pido ayuda al equipo y reparto la investigación.", points: 2 },
            { text: "Pruebo cambios rápidos hasta encontrar una solución.", points: 1 }
        ]
    },
    {
        title: "Recibís una tarea urgente y poco clara. ¿Cómo avanzás?",
        options: [
            { text: "Hago preguntas concretas para definir el objetivo.", points: 3 },
            { text: "Investigo el contexto y propongo una primera versión.", points: 2 },
            { text: "Empiezo por lo más sencillo y ajusto después.", points: 1 }
        ]
    },
    {
        title: "Un cambio rompe una parte del proyecto. ¿Cuál es tu reacción?",
        options: [
            { text: "Vuelvo al último cambio seguro y analizo qué pasó.", points: 3 },
            { text: "Comparo versiones con Git y consulto al equipo.", points: 2 },
            { text: "Sigo adelante y trato de corregirlo al final.", points: 1 }
        ]
    }
];

const questionTitle = document.querySelector("#test-question-title");
const optionsContainer = document.querySelector("#test-options");
const progressLabel = document.querySelector("#test-progress-label");
const progressBar = document.querySelector("#test-progress-bar");
const result = document.querySelector("#test-result");
const restartButton = document.querySelector("#test-restart");
let currentQuestion = 0;
let score = 0;

function showQuestion() {
    const question = questions[currentQuestion];
    questionTitle.textContent = question.title;
    progressLabel.textContent = `Situación ${currentQuestion + 1} de ${questions.length}`;
    progressBar.style.width = `${((currentQuestion) / questions.length) * 100}%`;
    optionsContainer.innerHTML = "";

    question.options.forEach((option) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "test-option";
        button.textContent = option.text;
        button.addEventListener("click", () => {
            score += option.points;
            currentQuestion += 1;
            if (currentQuestion < questions.length) showQuestion();
            else showResult();
        });
        optionsContainer.appendChild(button);
    });
}

function showResult() {
    const profile = score >= 8
        ? "Perfil estratega: analizás, priorizás y encontrás soluciones claras."
        : score >= 5
            ? "Perfil colaborativo: combinás análisis y trabajo en equipo para avanzar."
            : "Perfil resolutivo: actuás rápido y aprendés mientras buscás una solución.";

    questionTitle.textContent = "Tu resultado";
    optionsContainer.innerHTML = "";
    progressLabel.textContent = "Test completado";
    progressBar.style.width = "100%";
    result.textContent = profile;
    result.hidden = false;
    restartButton.hidden = false;
}

function restartTest() {
    currentQuestion = 0;
    score = 0;
    result.hidden = true;
    restartButton.hidden = true;
    showQuestion();
}

restartButton.addEventListener("click", restartTest);
showQuestion();
