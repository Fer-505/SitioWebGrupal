# Release Plan — TP1: Sitio Web Grupal
### Desarrollo de Sistemas Web · Front End · 2026 2C
**Objetivo:** calificación "Supera" en las 10 categorías de la rúbrica.

---

## Supuestos de partida

- Equipo de 5 integrantes: Nicolás Zalazar (@Nicoalazar), Laura Belén Blanco (@LauBelen), Christian Albornoz (@albor77), Laura Olivera (@laura108814) y Fernando Guevara (@Fer-505).
- **Entrega: lunes 28/09/2026.** Calendario acordado por el equipo (ver tabla abajo). Los Sprints 1 y 2 se ejecutan en paralelo: el responsable de portada y el de paleta/tipografía avanzan el Sprint 1 mientras cada integrante arma su perfil sobre el template base.
- Tablero: GitHub Projects (vista Kanban: `Backlog` / `En progreso` / `Review` / `Done`), un Issue por tarea de este documento.
- Convención de commits: **Conventional Commits** (`feat:`, `fix:`, `docs:`, `style:`, `chore:`, `refactor:`).
- Convención de ramas: `feature/<nombre-tarea>`, merge a `main` vía PR (aunque sea un solo aprobador) — esto solo ya suma en "historial de commits ordenado" para el ítem Supera de gestión de repo.

## Calendario

| Sprint | Fechas 2026 |
|---|---|
| Sprint 0 — Gobernanza + decisiones de diseño | Lun 14/09 |
| Sprint 1 + 2 en paralelo — Portada/arquitectura y Perfiles individuales | Mar 15/09 → Sáb 19/09 |
| Sprint 3 — Responsive & sistema visual | Lun 21/09 → Mié 23/09 |
| Sprint 4 — QA cruzado + Bitácora + README + uso de IA | Jue 24/09 → Vie 25/09 |
| Sprint 5 — Deploy + checklist rúbrica | Sáb 26/09 |
| **Entrega** | **Lun 28/09** |

El domingo 27/09 queda como margen para imprevistos: no se planifican tareas ese día.

---

## Mapeo rúbrica → dónde se gana el "Supera"

| Criterio de rúbrica | Sprint(s) donde se resuelve | Qué lo hace "Supera" (no solo "Propone") |
|---|---|---|
| Gestión de repo y publicación | 0, 5 | Commits distribuidos en el tiempo entre TODO el equipo, no concentrados al final |
| Navegación y enlaces | 1, 2 | Menú consistente + probado en cada página, no solo en portada |
| Portada principal | 1 | Identidad visual propia del equipo, no plantilla genérica |
| Tarjeta individual | 2 | Mismo template/componente reusado en los 5 perfiles — cero inconsistencias |
| Diseño adaptativo | 3 | Testeado real en los 3 breakpoints + intermedios, sin overflow ni textos pisados |
| Estética/CSS/tipografía | 1, 3 | Paleta + Google Fonts documentadas y aplicadas sistemáticamente, CSS organizado (variables, no repetición) |
| Interactividad JS | 1, 2 | Lógica que aporta algo real (no un `alert()` de relleno) |
| Bitácora | 0→5 (transversal) | Entradas incrementales con fecha real, decisiones y problemas concretos — nunca escrita de una sentada al final |
| README obligatorio | 0→5 (transversal) | Completo desde el esqueleto del Sprint 0, con capturas y explicación de cada función JS |
| Uso de IA | 0→5 (transversal) | Registro honesto de qué se pidió, qué se revisó/cambió con criterio propio |

---

## Sprint 0 — Gobernanza del proyecto · **Lun 14/09**
**Antes de escribir una sola línea de código.** Este sprint es el que más impacto tiene en el ítem "gestión de repositorio" y es el que todos los grupos se saltean.

- [ ] Crear repo público independiente con nombre descriptivo (no "tp1-grupo-x")
- [ ] Configurar rama `main`, convención de ramas `feature/*`
- [ ] Acordar y documentar Conventional Commits en el README (sección tecnologías/convenciones)
- [ ] Crear GitHub Project con columnas Backlog/En progreso/Review/Done y cargar TODAS las tareas de este plan como Issues
- [ ] Repartir roles explícitos: responsable de portada, responsable de paleta/tipografía, responsable de template de perfil, cada integrante dueño de su propia página
- [ ] Fijar canal de comunicación del equipo (queda como evidencia de proceso para la bitácora)
- [ ] Crear `README.md` esqueleto con TODAS las secciones vacías/con placeholder: título, descripción, integrantes + links GitHub, tecnologías, estructura de carpetas, guía de estilos (paleta hex + fuentes + iconografía), funciones JS (portada + por perfil), URL Vercel, sección de evolución
- [ ] Cada integrante agrega su nombre + link a su perfil de GitHub en el README
- [ ] Crear `bitacora.html` vacío con la fecha de hoy y la primera entrada real ("definimos roles, stack y convenciones")
- [ ] Crear estructura de carpetas: `index.html` + páginas individuales en raíz, `/css`, `/js`, `/img`

**Acceptance criteria:** repo público, board creado y poblado, README con estructura completa (aunque vacía), primer commit de cada integrante hecho.

**Riesgo a vigilar:** si alguien no tiene un commit propio a las 48h de este sprint, escalarlo ahí — no en la semana de entrega.

---

## Sprint 1 — Arquitectura, portada y sistema visual base · **Mar 15/09 → Sáb 19/09** (en paralelo con Sprint 2)
**Dependencia:** Sprint 0 cerrado (estructura de carpetas y roles definidos).

- [x] Definir paleta de colores (hex) y tipografía de Google Fonts — documentarlas en el README apenas se elijan, no después
- [x] Crear `css/base.css` con variables CSS (`:root { --color-primary: ... }`) para reuso en todas las páginas
- [x] Construir `index.html`: nombre del equipo, propósito, listado completo de integrantes con links funcionales a sus páginas individuales
- [x] Construir componente de navegación (menú) reusable, pensado para copiar/pegar en portada, perfiles y bitácora sin romper enlaces
- [x] Implementar al menos una interacción dinámica en la portada (ideas con peso real: filtro/búsqueda del listado de integrantes, dark mode toggle, carrusel de "sobre el equipo" — evitar `alert()` decorativo)
- [x] Documentar esa función JS en el README (qué hace, por qué, captura de pantalla)
- [x] Actualizar bitácora: decisiones de paleta/tipografía y por qué se eligieron

**Affected files:** `index.html`, `css/base.css`, `css/nav.css`, `js/portada.js`, `README.md`, `bitacora.html`

**Acceptance criteria:** portada funcional, navegación probada, una interacción JS documentada con captura.

---

## Sprint 2 — Perfiles individuales · **Mar 15/09 → Sáb 19/09** (en paralelo con Sprint 1)
**Dependencia:** Sprint 1 (nav y variables CSS ya definidas — cada perfil las hereda, no reinventa estilos).

Repetir por cada uno de los 5 integrantes (una tarea/issue por perfil):

- [ ] Página individual (`nombre-apellido.html`) usando el mismo template estructural que el resto (esto es lo que separa "Cumple" de "Supera" en este ítem)
- [ ] Foto, avatar o mascota + nombre + ciudad + edad
- [ ] Cuatro habilidades, tres películas favoritas, tres discos favoritos
- [ ] Una interacción JS propia de esa página (no repetir la misma idea entre perfiles — si los 5 hacen un acordeón, es "Cumple"; si cada uno aporta algo distinto, es "Supera")
- [ ] Botones de navegación funcionales hacia portada/bitácora/otros perfiles
- [ ] Documentar la función JS propia en el README

**Acceptance criteria:** todos los perfiles visualmente consistentes entre sí (mismo header, mismo footer, misma estructura de tarjeta), cero copy-paste con errores de otro integrante, todas las interacciones JS distintas entre sí.

**Punto de control de equipo:** hacer una revisión cruzada rápida (30 min) antes de cerrar el sprint — que un integrante revise el perfil de otro. Esto es lo que la rúbrica llama "maquetación prolija y uniforme en todos los perfiles".

---

## Sprint 3 — Sistema de diseño y responsive · **Lun 21/09 → Mié 23/09**
**Dependencia:** Sprints 1 y 2 (portada + todos los perfiles ya maquetados).

- [x] Auditar CSS: eliminar duplicación, mover todo lo repetido a `base.css`, confirmar que las variables de color/tipografía se usan en TODAS las páginas (no solo portada)
- [x] Implementar breakpoints obligatorios: 400px, 900px, 1200px
- [x] Testear cada página en los 3 breakpoints + un par de anchos intermedios (no solo los exactos — ahí es donde aparecen los overflows)
- [x] Revisar iconografía (si se usa) y consistencia de espaciados/márgenes entre páginas
- [x] Ajustar imágenes/avatares para que no rompan el layout en mobile
- [x] Actualizar bitácora: problemas de responsive encontrados y cómo se resolvieron (esto es contenido real de bitácora, no relleno)

**Acceptance criteria:** cero overflow horizontal, cero texto superpuesto, en los 3 breakpoints, en las 7 páginas del sitio (portada + 5 perfiles + bitácora).

---

## Sprint 4 — QA cruzado, Bitácora y README finales, documentación de IA · **Jue 24/09 → Vie 25/09**
**Dependencia:** Sprints 1–3 cerrados funcionalmente.

- [ ] Revisión cruzada completa: cada integrante navega el sitio como usuario nuevo, sin usar el botón Atrás, y reporta enlaces rotos o fricciones
- [x] Abrir consola del navegador en cada página y confirmar cero errores de JS
- [x] Cerrar la Bitácora: revisar que tenga entradas fechadas y reales de cada sprint (no una sola entrada final) — decisiones, dificultades, cambios de rumbo
- [x] Completar la sección de uso de IA en el README:
  - [x] Qué herramientas/modelos se usaron (nombrarlos)
  - [x] Plan gratuito o pago, y experiencia previa del equipo con esas herramientas
  - [x] Qué contenido/código/debugging asistieron concretamente
  - [x] Si se generaron avatares/imágenes con IA: modelo usado y criterio de los prompts
  - [x] Qué se revisó, adaptó o cambió con criterio propio antes de incorporar resultados generados — esta es la parte que separa "Propone" de "Supera" en este ítem, no la saltees
- [x] Completar README: capturas de pantalla de cada función JS, estructura de archivos final, guía de estilos con hex reales
- [ ] Sección "evolución" en el README: qué se planea ampliar en próximos TPs

**Acceptance criteria:** README completo sin placeholders, bitácora con mínimo una entrada real por sprint, sección de IA con ejemplos concretos (no genérica tipo "usamos ChatGPT para ayudar con el código").

---

## Sprint 5 — Deploy y checklist de entrega final · **Sáb 26/09**
**Dependencia:** Sprint 4 cerrado.

- [ ] Deploy en Vercel
- [ ] Probar el sitio publicado (no solo local) en los 3 breakpoints
- [ ] Agregar la URL de Vercel al README
- [ ] Confirmar que el repositorio es **público**
- [ ] Confirmar que el README está completo y es el punto de partida real para navegar el proyecto
- [ ] Revisar historial de commits: ¿se ve participación distribuida en el tiempo de todo el equipo, o un dump de último día? Si es lo segundo, todavía hay tiempo de que cada integrante haga commits reales de ajustes menores
- [ ] Cargar el enlace del repositorio en la planilla única de entregas

**Checklist final antes de entregar (repasar los 10 ítems de la rúbrica uno por uno):**
- [ ] Repo público + Vercel + README documentado
- [ ] Navegación sin dependencia del botón Atrás, probada en las 7 páginas
- [ ] Portada con nombre, propósito e integrantes con links funcionales
- [ ] Los 5 perfiles con estructura idéntica y datos completos
- [ ] Responsive probado en 400/900/1200px sin errores
- [ ] CSS organizado, Google Fonts y paleta consistente
- [ ] JS sin errores de consola, una función distinta por perfil + una en portada
- [ ] Bitácora con entradas reales fechadas por sprint
- [ ] README sin secciones vacías
- [ ] Sección de uso de IA con ejemplos concretos de qué se revisó con criterio propio

---

## Tareas transversales (repetir en cada sprint, no dejar para el final)

- [ ] Actualizar bitácora con la entrada del sprint recién cerrado
- [ ] Completar en README las secciones que ese sprint haya generado contenido nuevo
- [ ] Cada integrante hace al menos un commit propio por sprint
