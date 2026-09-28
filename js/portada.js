const searchInput = document.querySelector("[data-member-search]");
const memberCards = [...document.querySelectorAll("[data-member]")];
const emptyState = document.querySelector("[data-empty-state]");
const memberTrack = document.querySelector(".member-grid");
const memberCarousel = document.querySelector(".member-carousel");
const previousButton = document.querySelector("[data-carousel-previous]");
const nextButton = document.querySelector("[data-carousel-next]");
const carouselStatus = document.querySelector("[data-carousel-status]");
let currentMember = 0;

function normalize(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase();
}

function filterMembers() {
  const query = normalize(searchInput.value.trim());
  const matchingCards = [];

  memberCards.forEach((card) => {
    const matches = normalize(card.dataset.member).includes(query);
    card.hidden = !matches;
    if (matches) matchingCards.push(card);
  });

  currentMember = 0;
  emptyState.hidden = matchingCards.length > 0;
  updateCarousel(matchingCards);
}

// La separación 3D de las tarjetas la define --carousel-depth en base.css, que
// la baja en los breakpoints de 900px y 400px. Leerla desde acá evita que el
// transform inline pise el valor responsive.
function carouselDepth() {
  const raw = memberCarousel
    ? getComputedStyle(memberCarousel).getPropertyValue("--carousel-depth")
    : "";
  const parsed = parseFloat(raw);
  return Number.isFinite(parsed) ? parsed : 220;
}

function updateCarousel(visibleCards = memberCards.filter((card) => !card.hidden)) {
  if (!memberTrack || !carouselStatus) return;

  const activeCard = visibleCards[currentMember];
  const cardCount = visibleCards.length;
  const depth = carouselDepth();
  memberCards.forEach((card) => {
    const cardIndex = visibleCards.indexOf(card);
    const relativeIndex = cardIndex - currentMember;
    const normalizedIndex = cardCount
      ? (relativeIndex + cardCount) % cardCount
      : 0;
    const angle = normalizedIndex === 0
      ? 0
      : normalizedIndex <= cardCount / 2
        ? normalizedIndex * 72
        : (normalizedIndex - cardCount) * 72;

    card.classList.toggle("is-active", card === activeCard);
    card.classList.toggle("is-previous", normalizedIndex === cardCount - 1);
    card.classList.toggle("is-next", normalizedIndex === 1);
    card.style.transform = `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${depth}px) scale(${card === activeCard ? 1 : 0.78})`;
    card.style.opacity = card === activeCard ? "1" : normalizedIndex === 1 || normalizedIndex === cardCount - 1 ? "0.75" : "0.35";
  });
  memberTrack.style.transform = "rotateY(0deg)";

  const total = visibleCards.length;
  carouselStatus.textContent = total ? `Perfil ${currentMember + 1} de ${total}` : "Sin perfiles";
  previousButton.disabled = currentMember === 0 || total === 0;
  nextButton.disabled = currentMember >= total - 1 || total === 0;
}

function moveCarousel(direction) {
  const visibleCards = memberCards.filter((card) => !card.hidden);
  currentMember = Math.min(Math.max(currentMember + direction, 0), visibleCards.length - 1);
  updateCarousel(visibleCards);
}

if (searchInput && emptyState) {
  searchInput.addEventListener("input", filterMembers);
}

previousButton?.addEventListener("click", () => moveCarousel(-1));
nextButton?.addEventListener("click", () => moveCarousel(1));
window.addEventListener("resize", () => updateCarousel());
updateCarousel();