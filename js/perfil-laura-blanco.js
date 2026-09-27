/**
 * Perfil: Laura Belén Blanco (Grupo 15)
 * Función: Encontrá el bug - muestra una ficha con datos de mi perfil donde
 * algunos tienen errores a propósito. El visitante hace clic en los datos que
 * cree incorrectos: si es un bug se marca como reportado, si no, cuenta como
 * falso positivo. Al encontrar todos los bugs se muestra el resultado final.
 */

document.addEventListener('DOMContentLoaded', () => {
  const items = [
    { label: 'Nombre', value: 'Laura Belén Blnaco', bug: true,
      detail: 'Error de tipeo: dice "Blnaco" en vez de "Blanco".' },
    { label: 'Película', value: 'Eternal Sunshine of the Spotless Mind — Michel Gondry (2004)', bug: false },
    { label: 'Película', value: 'Into the Wild — Christopher Nolan (2007)', bug: true,
      detail: 'Dato incorrecto: la dirigió Sean Penn, no Christopher Nolan.' },
    { label: 'Disco', value: 'Mothership — Led Zeppelin (2007)', bug: false },
    { label: 'Disco', value: 'Never Say Die! — Black Sabbath (1987)', bug: true,
      detail: 'Año con los dígitos invertidos: el disco salió en 1978.' },
    { label: 'Entrada para ver Gladiator', value: '$ -2.500', bug: true,
      detail: 'Precio negativo: el sistema debería validar que el importe sea mayor a cero.' },
    { label: 'Disco', value: 'Al final de este viaje... — Silvio Rodríguez (1978)', bug: false }
  ];

  const totalBugs = items.filter((item) => item.bug).length;

  const sheet = document.getElementById('bug-sheet');
  const countLabel = document.getElementById('bug-count');
  const falseLabel = document.getElementById('bug-false');
  const feedback = document.getElementById('bug-feedback');
  const restartButton = document.getElementById('bug-restart');

  let found = 0;
  let falsePositives = 0;

  function updateStatus() {
    countLabel.textContent = `Bugs encontrados: ${found} de ${totalBugs}`;
    falseLabel.textContent = `Falsos positivos: ${falsePositives}`;
  }

  function finishGame() {
    if (falsePositives === 0) {
      feedback.textContent = `¡Reporte perfecto! Encontraste los ${totalBugs} bugs sin ningún falso positivo.`;
    } else {
      const palabra = falsePositives === 1 ? 'falso positivo' : 'falsos positivos';
      feedback.textContent = `Encontraste los ${totalBugs} bugs con ${falsePositives} ${palabra}. `
        + 'En QA también cuenta no reportar lo que funciona bien.';
    }

    // Se bloquean los datos que quedaron sin revisar
    sheet.querySelectorAll('.bug-item:not(:disabled)').forEach((button) => {
      button.disabled = true;
    });

    restartButton.focus();
  }

  function checkItem(item, button, result) {
    restartButton.hidden = false;
    button.disabled = true;

    if (item.bug) {
      found += 1;
      button.classList.add('is-bug');
      result.innerHTML = `<span class="icon" aria-hidden="true">🐞</span> Bug reportado. ${item.detail}`;
      feedback.textContent = `¡Bien! ${item.detail}`;
    } else {
      falsePositives += 1;
      button.classList.add('is-ok');
      result.innerHTML = '<span class="icon" aria-hidden="true">✓</span> Este dato está bien.';
      feedback.textContent = 'Falso positivo: ese dato funciona correctamente.';
    }

    updateStatus();

    if (found === totalBugs) {
      finishGame();
    }
  }

  function renderSheet() {
    sheet.innerHTML = '';

    items.forEach((item) => {
      const li = document.createElement('li');
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'bug-item';

      const label = document.createElement('span');
      label.className = 'bug-item-label';
      label.textContent = item.label;

      const value = document.createElement('span');
      value.className = 'bug-item-value';
      value.textContent = item.value;

      const result = document.createElement('span');
      result.className = 'bug-item-result';

      button.append(label, value, result);
      button.addEventListener('click', () => checkItem(item, button, result));

      li.appendChild(button);
      sheet.appendChild(li);
    });
  }

  function startGame() {
    found = 0;
    falsePositives = 0;
    feedback.textContent = 'Elegí un dato para revisarlo.';
    // El reinicio aparece recién cuando se empieza a jugar
    restartButton.hidden = true;
    renderSheet();
    updateStatus();
  }

  restartButton.addEventListener('click', () => {
    startGame();
    sheet.querySelector('.bug-item').focus();
  });

  startGame();
});