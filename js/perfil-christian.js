/**
 * Perfil: Christian Albornoz (Grupo 15)
 * Función: Espacio Cinéfilo - Generador de Citas con Typewriter y Trivia interactiva.
 */

document.addEventListener('DOMContentLoaded', () => {
    const moviesData = {
        forrest: {
            quote: "«Mamá siempre decía que la vida era como una caja de bombones, nunca sabés qué te va a tocar.»",
            question: "¿En qué año se estrenó Forrest Gump y quién la protagonizó?",
            options: [
                { text: "1994 — Tom Hanks", correct: true },
                { text: "1996 — Robin Williams", correct: false },
                { text: "1992 — Kevin Costner", correct: false }
            ]
        },
        bigfish: {
            quote: "«Un hombre cuenta sus historias tantas veces que se convierte en ellas. Siguen viviendo después de él, y así se hace inmortal.»",
            question: "¿Quién dirigió la película Big Fish (El Gran Pez)?",
            options: [
                { text: "Steven Spielberg", correct: false },
                { text: "Tim Burton", correct: true },
                { text: "Terry Gilliam", correct: false }
            ]
        },
        hanabi: {
            quote: "«En el silencio absoluto de la tragedia, la belleza aún encuentra un rincón para florecer.»",
            question: "¿Qué prestigioso galardón internacional obtuvo Flores de Fuego (Hana-bi) en 1997?",
            options: [
                { text: "León de Oro en el Festival de Venecia", correct: true },
                { text: "Palma de Oro en el Festival de Cannes", correct: false },
                { text: "Oso de Oro en el Festival de Berlín", correct: false }
            ]
        }
    };

    const buttons = document.querySelectorAll('.cinema-selector .cinema-btn');
    const quoteEl = document.getElementById('cinema-quote');
    const questionEl = document.getElementById('trivia-question');
    const optionsEl = document.getElementById('trivia-options');
    const feedbackEl = document.getElementById('trivia-feedback');
    const resetBtn = document.getElementById('trivia-reset-btn');

    let typewriterTimer = null;

    function runTypewriter(text) {
        if (typewriterTimer) clearInterval(typewriterTimer);
        quoteEl.textContent = '';
        let index = 0;

        typewriterTimer = setInterval(() => {
            if (index < text.length) {
                quoteEl.textContent += text.charAt(index);
                index++;
            } else {
                clearInterval(typewriterTimer);
                typewriterTimer = null;
            }
        }, 28);
    }

    function resetTrivia() {
        feedbackEl.textContent = '';
        feedbackEl.className = 'trivia-result';
        if (resetBtn) resetBtn.hidden = true;

        const allButtons = optionsEl.querySelectorAll('.trivia-opt-btn');
        allButtons.forEach(b => {
            b.disabled = false;
            b.classList.remove('is-correct', 'is-wrong');
        });
    }

    function displayMovie(movieKey) {
        const movie = moviesData[movieKey];
        if (!movie) return;

        resetTrivia();
        runTypewriter(movie.quote);

        questionEl.textContent = movie.question;
        optionsEl.innerHTML = '';

        movie.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'trivia-opt-btn';
            btn.textContent = opt.text;

            btn.addEventListener('click', () => {
                const allButtons = optionsEl.querySelectorAll('.trivia-opt-btn');
                allButtons.forEach(b => b.disabled = true);

                if (opt.correct) {
                    btn.classList.add('is-correct');
                    feedbackEl.textContent = '¡Correcto! Excelente memoria cinéfila.';
                    feedbackEl.className = 'trivia-result success';
                } else {
                    btn.classList.add('is-wrong');
                    feedbackEl.textContent = 'No era esa opción, pero vale el intento.';
                    feedbackEl.className = 'trivia-result error';
                }

                if (resetBtn) resetBtn.hidden = false;
            });

            optionsEl.appendChild(btn);
        });
    }

    // Event listener del botón reset
    if (resetBtn) {
        resetBtn.addEventListener('click', resetTrivia);
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('is-active'));
            btn.classList.add('is-active');
            displayMovie(btn.dataset.movie);
        });
    });

    // Inicializar en la primera película
    displayMovie('forrest');
});