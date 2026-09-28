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

// Del puntaje más alto al más bajo: el primero cuyo mínimo se alcanza es el resultado
const profiles = [
    { min: 8, name: "Perfil estratega", text: "Analizás, priorizás y encontrás soluciones claras." },
    { min: 5, name: "Perfil colaborativo", text: "Combinás análisis y trabajo en equipo para avanzar." },
    { min: 0, name: "Perfil resolutivo", text: "Actuás rápido y aprendés mientras buscás una solución." }
];
const maxScore = questions.length * 3;

const questionBox = document.querySelector(".test-question");
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
    const profile = profiles.find((item) => score >= item.min);

    // El resultado reemplaza a la caja de la pregunta en lugar de quedar debajo de ella
    questionBox.hidden = true;
    progressLabel.textContent = "Test completado";
    progressBar.style.width = "100%";
    result.innerHTML = `
        <p class="eyebrow">Tu resultado</p>
        <h3>${profile.name}</h3>
        <p>${profile.text}</p>
        <p class="test-score">Puntaje: ${score} de ${maxScore}</p>`;
    result.hidden = false;
    restartButton.hidden = false;
}

function restartTest() {
    currentQuestion = 0;
    score = 0;
    questionBox.hidden = false;
    result.hidden = true;
    restartButton.hidden = true;
    showQuestion();
}

restartButton.addEventListener("click", restartTest);
showQuestion();
