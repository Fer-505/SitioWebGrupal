/**
 * Perfil: Nicolás Zalazar (Grupo 15)
 * Función: Comparador de gustos - muestra mis películas/discos de a uno en
 * tarjetas con botones "Me gusta" / "No es lo mío" y calcula al final
 * el % de coincidencia con lo que el visitante marcó.
 */

document.addEventListener('DOMContentLoaded', () => {
  const items = [
    { type: 'Película', title: 'Inglourious Basterds', meta: 'Quentin Tarantino (2009)' },
    { type: 'Película', title: 'Interstellar', meta: 'Christopher Nolan (2014)' },
    { type: 'Película', title: 'Harry Potter and the Half-Blood Prince', meta: 'David Yates (2009)' },
    { type: 'Disco', title: 'Gulp!', meta: 'Patricio Rey y sus Redonditos de Ricota (1985)' },
    { type: 'Disco', title: 'Chances', meta: 'Illya Kuryaki and the Valderramas (2012)' },
    { type: 'Disco', title: 'Antihumano', meta: 'Attaque 77 (2003)' }
  ];

  const tierMessages = [
    { min: 0, max: 0, text: 'No te gustó nada de mi lista.'},
    { min: 1, max: 33, text: 'Algo en común tenemos.' },
    { min: 34, max: 66, text: 'Compartimos varios gustos.' },
    { min: 67, max: 99, text: 'Compartimos la mayoría de los gustos.' },
    { min: 100, max: 100, text: '¡Compartimos los mismos gustos.!' }
  ];

  const cardArea = document.getElementById('taste-card-area');
  const deckProgressFill = document.getElementById('taste-deck-progress-fill');
  const progressEl = document.getElementById('taste-progress');
  const typeEl = document.getElementById('taste-card-type');
  const titleEl = document.getElementById('taste-card-title');
  const metaEl = document.getElementById('taste-card-meta');
  const okButton = document.getElementById('taste-ok');
  const noButton = document.getElementById('taste-no');

  const resultArea = document.getElementById('taste-result-area');
  const resultPercentageEl = document.getElementById('taste-result-percentage');
  const meterFill = document.getElementById('taste-meter-fill');
  const resultEl = document.getElementById('taste-result');
  const restartButton = document.getElementById('taste-restart');

  let currentIndex = 0;
  let likedCount = 0;

  function tierFor(percentage) {
    return tierMessages.find((t) => percentage >= t.min && percentage <= t.max);
  }

  function showCard(index) {
    const item = items[index];
    progressEl.textContent = `Tarjeta ${index + 1} de ${items.length}`;
    deckProgressFill.style.width = `${Math.round((index / items.length) * 100)}%`;
    typeEl.textContent = item.type;
    titleEl.textContent = item.title;
    metaEl.textContent = item.meta;
  }

  function showResult() {
    const percentage = Math.round((likedCount / items.length) * 100);
    const tier = tierFor(percentage);

    deckProgressFill.style.width = '100%';
    okButton.disabled = true;
    noButton.disabled = true;
    cardArea.hidden = true;
    resultArea.hidden = false;
    resultPercentageEl.textContent = `${percentage}%`;
    meterFill.style.width = `${percentage}%`;
    resultEl.textContent = tier.text;
  }

  function answer(liked) {
    if (liked) likedCount++;
    currentIndex++;

    if (currentIndex < items.length) {
      showCard(currentIndex);
    } else {
      showResult();
    }
  }

  function restart() {
    currentIndex = 0;
    likedCount = 0;
    okButton.disabled = false;
    noButton.disabled = false;
    cardArea.hidden = false;
    resultArea.hidden = true;
    resultPercentageEl.textContent = '0%';
    meterFill.style.width = '0%';
    showCard(0);
  }

  okButton.addEventListener('click', () => answer(true));
  noButton.addEventListener('click', () => answer(false));
  restartButton.addEventListener('click', restart);

  showCard(0);
});
