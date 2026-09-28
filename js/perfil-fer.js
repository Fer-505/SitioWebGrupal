document.addEventListener('DOMContentLoaded', () => {
    // --- 1. LÓGICA DE LOS DISCOS ---
    const discos = document.querySelectorAll('.discos-list li');

    discos.forEach((disco) => {
        const extra = disco.querySelector('.disco-extra');

        if (extra) {
            extra.style.display = 'none';
        }

        disco.style.cursor = 'pointer';
        disco.setAttribute('tabindex', '0');
        disco.setAttribute('aria-expanded', 'false');

        const toggle = () => {
            const expandido = disco.getAttribute('aria-expanded') === 'true';

            if (expandido) {
                if (extra) extra.style.display = 'none';
                disco.setAttribute('aria-expanded', 'false');
            } else {
                if (extra) extra.style.display = 'inline';
                disco.setAttribute('aria-expanded', 'true');
            }
        };

        disco.addEventListener('click', toggle);
        disco.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggle();
            }
        });
    });

    // --- 2. EFECTO DE GIRO Y RECTÁNGULO PARA LA FOTO ---
    const profilePhoto = document.querySelector('.profile-photo');

    if (profilePhoto) {
        let container = profilePhoto.parentElement;
        if (!container.classList.contains('profile-photo-container')) {
            container = document.createElement('div');
            profilePhoto.parentNode.insertBefore(container, profilePhoto);
            container.appendChild(profilePhoto);
            container.className = 'profile-photo-container';
        }

        container.style.transition = 'transform 0.4s ease';
        container.style.cursor = 'pointer';
        container.title = 'Hacé clic para ver el mensaje!';
        container.setAttribute('tabindex', '0');
        container.setAttribute('role', 'button');
        container.setAttribute('aria-label', 'Girar la foto para ver un mensaje');

        const fotoHTML = profilePhoto.outerHTML;

        const textoHTML = `<div class="profile-photo-flip-message">Pase nomás! Sientese como en casa y salú! <span class="icon" aria-hidden="true">🍷</span></div>`;

        let mostrandoTexto = false;

        const girar = () => {
            container.style.transform = 'rotateY(90deg) scale(0.95)';

            setTimeout(() => {
                mostrandoTexto = !mostrandoTexto;

                if (mostrandoTexto) {
                    container.innerHTML = textoHTML;
                } else {
                    container.innerHTML = fotoHTML;
                }

                container.style.transform = 'rotateY(0deg) scale(1)';
            }, 200);
        };

        container.addEventListener('click', girar);
        container.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                girar();
            }
        });
    }
        // --- 3. RINCÓN MUSICAL: DATO POR DISCO ---
    const musicButtons = document.querySelectorAll('.music-btn');
    const musicFact = document.getElementById('music-fact');

    const datosDiscos = {
        harvest: '"Harvest Moon" (1992) es considerado la secuela espiritual de "Harvest" (1972): Neil Young la grabó exactamente 20 años después.',
        reveal: '"Reveal" (2001) es de la etapa de R.E.M. como trío, después de que el baterista Bill Berry dejara la banda en 1997.',
        guesswho: '"Guess Who" (1972) es uno de los discos de B.B. King con más influencia funk y soul, bastante alejado del blues más tradicional.'
    };

    musicButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            musicButtons.forEach((b) => {
                b.classList.remove('is-active');
                b.setAttribute('aria-pressed', 'false');
            });
            btn.classList.add('is-active');
            btn.setAttribute('aria-pressed', 'true');
            musicFact.textContent = datosDiscos[btn.dataset.disco];
        });
    });

    if (musicFact && musicButtons.length) {
        musicFact.textContent = datosDiscos[musicButtons[0].dataset.disco];
    }
});