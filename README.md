# Grupo 15 — Sitio Web Grupal

> **TP1 · Desarrollo de Sistemas Web · Front End · 2026 2C**
> Sitio web grupal con portada, perfiles individuales, navegación interna y bitácora de desarrollo.

🔗 **Publicación:** prevista en Vercel para Sprint 5 (26/09/2026); aún no publicada al 25/09/2026.
📋 **Tablero de tareas:** [GitHub Project](https://github.com/Nicoalazar/SitioWebGrupal/projects) · [Issues](https://github.com/Nicoalazar/SitioWebGrupal/issues)
🗺️ **Plan de trabajo:** [docs/release-plan.md](docs/release-plan.md)

---

## Índice

1. [Descripción del proyecto](#1-descripción-del-proyecto)
2. [Integrantes](#2-integrantes)
3. [Roles del equipo](#3-roles-del-equipo)
4. [Tecnologías utilizadas](#4-tecnologías-utilizadas)
5. [Convenciones de trabajo](#5-convenciones-de-trabajo)
6. [Estructura de archivos y carpetas](#6-estructura-de-archivos-y-carpetas)
7. [Guía de estilos](#7-guía-de-estilos)
8. [Funciones JavaScript](#8-funciones-javascript)
9. [Bitácora de desarrollo](#9-bitácora-de-desarrollo)
10. [Publicación en Vercel](#10-publicación-en-vercel)
11. [Uso de IA y criterio de privacidad](#11-uso-de-ia-y-criterio-de-privacidad)
12. [Evolución del proyecto](#12-evolución-del-proyecto)

---

## 1. Descripción del proyecto

Somos un equipo de cinco estudiantes que aprende haciendo. Este sitio presenta nuestras habilidades e intereses y registra las decisiones tomadas durante el desarrollo del TP1.

El sitio se compone de:

- **Portada (`index.html`)**: nombre y propósito del equipo, listado de integrantes con enlaces a sus perfiles.
- **Perfiles individuales**: una página por integrante con foto/avatar, nombre, ciudad, edad, cuatro habilidades, tres películas y tres discos favoritos, más una interacción JavaScript propia.
- **Bitácora (`bitacora.html`)**: registro fechado de decisiones, dificultades y cambios durante el desarrollo.

---

## 2. Integrantes

<!-- Cada integrante agrega su propia fila en un commit propio (Sprint 0) -->

| Nombre | GitHub | Página individual |
|---|---|---|
| Nicolás Zalazar | [@Nicoalazar](https://github.com/Nicoalazar) | [`nicolas-zalazar.html`](nicolas-zalazar.html) |
| Laura Belén Blanco | [@LauBelen](https://github.com/LauBelen) | [`laura-blanco.html`](laura-blanco.html) |
| Christian Albornoz | [@albor77](https://github.com/albor77) | [`christian-albornoz.html`](christian-albornoz.html) |
| Laura Olivera | [@laura108814](https://github.com/laura108814) | [`laura-olivera.html`](laura-olivera.html) |
| Fernando Guevara | [@Fer-505](https://github.com/Fer-505) | [`fernando-guevara.html`](fernando-guevara.html) |

---

## 3. Roles del equipo

| Rol | Responsable | Alcance |
|---|---|---|
| Portada (`index.html`) | Laura Olivera | Estructura, contenido y función JS de la portada |
| Paleta y tipografía | Laura Olivera | Definir colores, Google Fonts e iconografía; mantener `css/base.css` |
| Template de perfil | No quedó registrado | Diseñar la estructura base que reutilizan todos los perfiles |
| Bitácora y documentación | Nicolás Zalazar | Mantener `bitacora.html` y el README actualizados por sprint |
| Página individual | Cada integrante | Cada persona es dueña de su propio perfil y su función JS |

**Canal de comunicación del equipo:** grupo de WhatsApp
**Frecuencia de sincronización:** no quedó registrada una cadencia fija.

---

## 4. Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| **HTML5** | Estructura semántica de todas las páginas |
| **CSS3** | Estilos propios, variables CSS, diseño responsive con media queries |
| **JavaScript (vanilla)** | Interacciones dinámicas en portada y perfiles, sin frameworks ni librerías |
| **Google Fonts** | Tipografía del sitio _(ver [Guía de estilos](#7-guía-de-estilos))_ |
| **Git + GitHub** | Control de versiones, Issues y GitHub Projects para gestión de tareas |
| **Vercel** | Publicación del sitio estático |

---

## 5. Convenciones de trabajo

### Ramas

- `main`: rama estable. Solo recibe cambios vía Pull Request.
- `development`: rama de integración de los sprints.
- `feature/<nombre-tarea>` o `<n>-<slug-del-issue>`: una rama por tarea/issue. Ejemplo: `1-sprint-0-gobernanza-del-proyecto`.

Flujo: `feature/*` → PR hacia `development` → al cerrar un sprint, PR de `development` hacia `main`.

### Commits — Conventional Commits

Todos los commits siguen el formato `<tipo>: <descripción en minúsculas, en imperativo>`:

| Tipo | Cuándo usarlo | Ejemplo |
|---|---|---|
| `feat:` | Nueva funcionalidad o página | `feat: agregar filtro de integrantes en portada` |
| `fix:` | Corrección de un error | `fix: corregir enlace roto al perfil de Ana` |
| `style:` | Cambios de CSS / formato sin afectar lógica | `style: ajustar espaciado de tarjetas en 400px` |
| `docs:` | README, bitácora, comentarios | `docs: documentar función JS de la portada` |
| `refactor:` | Reorganizar código sin cambiar comportamiento | `refactor: mover variables de color a base.css` |
| `chore:` | Tareas de mantenimiento, configuración | `chore: agregar .gitignore` |

### Pull Requests

- Cada PR referencia su issue (`Closes #N`).
- Se usa la plantilla de `.github/PULL_REQUEST_TEMPLATE.md`.
- Al menos otra persona del equipo revisa antes del merge.

### Ritmo de trabajo

- Trabajo organizado en sprints (ver [docs/release-plan.md](docs/release-plan.md)).
- Cada integrante hace **al menos un commit propio por sprint**.
- Al cerrar cada sprint se actualizan `bitacora.html` y este README.

---

## 6. Estructura de archivos y carpetas

<!-- Actualizar a medida que se agregan páginas y archivos -->

```
SitioWebGrupal/
├── index.html                 # Portada (Sprint 1)
├── bitacora.html              # Bitácora de desarrollo
├── nicolas-zalazar.html       # Perfiles individuales, uno por integrante (Sprint 2)
├── laura-blanco.html
├── christian-albornoz.html
├── laura-olivera.html
├── fernando-guevara.html
├── css/
│   ├── base.css               # Tokens (:root), reset, layout y componentes de portada
│   ├── nav.css                # Cabecera y navegación, compartidas por las 7 páginas
│   └── perfil.css             # Vista de perfil y las 5 interacciones JS (Sprint 2)
├── js/
│   ├── portada.js             # Buscador y carrusel de la portada (Sprint 1)
│   ├── perfil-nicolas.js      # Una función por perfil (Sprint 2)
│   ├── perfil-laura-blanco.js
│   ├── perfil-christian.js
│   ├── perfil-laura-olivera.js
│   └── perfil-fer.js
├── img/
│   ├── perfiles/              # Fotos o avatares de los integrantes (Sprint 2)
│   └── capturas/              # Evidencias de las funciones JavaScript
├── docs/
│   └── release-plan.md        # Plan de sprints del equipo
├── .github/
│   └── PULL_REQUEST_TEMPLATE.md
├── .gitignore
└── README.md
```

---

## 7. Guía de estilos

### Paleta de colores

| Variable CSS | Hex | Uso |
|---|---|---|
| `--color-primary` | `#111746` | Header y bloques destacados |
| `--color-secondary` | `#342275` | Enlaces y etiquetas |
| `--color-accent` | `#53d6d2` | Acentos y estados activos |
| `--color-bg` | `#090d2d` | Fondo general |
| `--color-text` | `#f6f5ff` | Texto principal |

### Tipografía (Google Fonts)

| Uso | Fuente | Pesos |
|---|---|---|
| Títulos | Space Grotesk | 500, 600, 700 |
| Cuerpo | DM Sans | 400, 500, 700 |

### Escala tipográfica

Ningún `font-size` se escribe suelto: todos salen de estos tokens, definidos en el `:root` de `css/base.css`.

| Variable CSS | Valor | Uso |
|---|---|---|
| `--fs-xs` | `0.8rem` | Etiquetas, `.eyebrow`, metadatos |
| `--fs-sm` | `0.9rem` | Texto secundario, footer, pies de lista |
| `--fs-base` | `1.05rem` | Cuerpo de texto |
| `--fs-md` | `1.15rem` | Texto destacado y citas |
| `--fs-lg` | `1.25rem` | Títulos de tarjeta |
| `--fs-xl` | `2rem` | Cifras y títulos de bloque |
| `--fs-2xl` | `2.5rem` | Porcentaje del comparador de gustos |
| `--fs-h1` / `--fs-h2` / `--fs-h3` | `clamp(...)` | Títulos, fluidos según el ancho |
| `--fs-hero` | `clamp(2.8rem, 7vw, 5.5rem)` | Título de la portada |

### Iconografía

**No se usa ninguna librería de íconos.** El sitio se apoya en los glifos que ya venía usando (flechas `←` `→`, los números `01`-`04` de la portada y algunos emojis en las interacciones), con un criterio único: todo glifo decorativo va envuelto en `<span class="icon" aria-hidden="true">`.

```html
<a href="index.html" class="hero-button hero-button--light">
  <span class="icon" aria-hidden="true">←</span> Volver al inicio
</a>
```

El `aria-hidden` es lo importante: sin él, un lector de pantalla anuncia "flecha izquierda Volver al inicio". El tamaño se controla con `--icon-size`, así que los íconos escalan con el texto que acompañan.

### Breakpoints

Enfoque **desktop-first**: cada bloque `@media (max-width: …)` ajusta lo que dejó el anterior.

| Nombre | Ancho | Qué cambia |
|---|---|---|
| Desktop | `1200px` | La grilla de servicios baja de 4 a 3 columnas; el hero reduce su alto mínimo |
| Tablet | `900px` | Todo pasa a una columna; **el header se apila** y los widgets de perfil reducen su padding |
| Mobile | `400px` | Se achican el gutter, el avatar y la profundidad del carrusel; los widgets reducen el padding otra vez |

El apilado del header vive en 900px y no en 400px a propósito: el logo mide hasta 15rem y compite con el menú, así que en un celular de 412px el encabezado desbordaba.

### Cómo crear un perfil

Todos los perfiles cargan `css/base.css`, `css/nav.css` y `css/perfil.css`, **en ese orden** (los dos últimos usan los tokens que define el `:root` de `base.css`). No se inventan colores ni tamaños en el HTML: salen todos de las variables.

Estructura del template que comparten los 5 perfiles:

```html
<main class="site-main">
	<div class="container">
		<nav class="profile-nav-bar" aria-label="Navegación de retorno">…</nav>

		<section class="profile-intro profile-header-card">
			<div class="profile-avatar-container">
				<img class="profile-photo" width="1024" height="1024"
				     src="img/perfiles/nombre-apellido.jpg" alt="Avatar de Nombre Apellido">
			</div>
			<div class="profile-main-info">
				<p class="eyebrow">Perfil del equipo</p>
				<h1>Nombre Apellido</h1>
				<ul class="profile-meta">
					<li><strong>Ciudad:</strong> …</li>
					<li><strong>Edad:</strong> …</li>
				</ul>
			</div>
		</section>

		<!-- Habilidades, películas y discos: 3 service-card -->
		<section class="profile-details-grid" aria-label="Información del perfil">…</section>

		<!-- La interacción JS propia, en una tarjeta destacada -->
		<section class="service-card service-card--featured mi-widget">…</section>

		<nav class="profile-pagination" aria-label="Navegación entre compañeros">…</nav>
	</div>
</main>
```

Si tu interacción necesita un contenedor propio, sumá su clase al grupo de widgets de `css/perfil.css` en lugar de repetir el bloque de `margin-top`, `border-radius` y `padding`. Las barras de progreso ya tienen un componente compartido: `.progress-track` con un `.progress-fill` adentro.

Las fotos se guardan en `img/perfiles/`. Para cambiar la apariencia se usan clases existentes y variables de `:root`, por ejemplo `service-card--featured`, `hero-button` y `profile-photo`. Si se necesita una nueva variante, se agrega primero a `css/base.css` para que pueda reutilizarla todo el equipo.

### Accesibilidad y responsive

- Las páginas usan HTML semántico, `lang="es"` y navegación compartida.
- El enlace "Saltar al contenido principal" permite navegar con teclado.
- Los controles interactivos tienen foco visible y nombres comprensibles.
- El buscador tiene etiqueta accesible y el carrusel comunica su posición con `aria-live`.
- Se respeta `prefers-reduced-motion` para reducir las transiciones.
- Los glifos decorativos llevan `aria-hidden="true"` para que no los lean los lectores de pantalla.
- Las fotos de perfiles deben tener texto alternativo y los controles deben poder usarse con teclado y tacto.
- Las imágenes declaran `width` y `height` para que no salte el layout mientras cargan.

**Cómo probar el responsive.** Las 7 páginas se verificaron en los 3 breakpoints y en anchos intermedios (412px, 600px, 768px) sin overflow horizontal ni errores de consola. Para repetir la prueba, abrir cada página y ejecutar en la consola del navegador:

```js
[...document.querySelectorAll('body *')]
  .filter(el => el.getBoundingClientRect().right > document.documentElement.clientWidth + 1)
```

Debe devolver un array vacío. Conviene incluir 412px en la prueba: es el ancho de un celular común y es donde el header se rompía antes del Sprint 3.

---

## 8. Funciones JavaScript

<!-- Sprint 1 y 2: una subsección por función, con captura en img/capturas/ -->

### Portada

**Función:** búsqueda y filtrado de integrantes
**Archivo:** `js/portada.js`
**Qué hace:** filtra las tarjetas por nombre a medida que se escribe y muestra un mensaje cuando no hay coincidencias.
**Por qué la elegimos:** permite encontrar rápidamente un perfil y aporta una interacción útil para una portada con varios integrantes.

![Captura del filtro de integrantes](img/capturas/portada-funcion.png)

### Perfil — Nicolás Zalazar

**Función:** Comparador de gustos
**Archivo:** `js/perfil-nicolas.js`
**Qué hace:** muestra mis películas y discos favoritos de a una tarjeta por vez; el visitante responde "Me gusta" o "No es lo mío" en cada una y, al terminar el mazo, la página calcula el porcentaje de coincidencia con una barra de progreso y un mensaje que cambia según el nivel de compatibilidad. Incluye un botón para reiniciar el recorrido.
**Por qué la elegí:** una lista de favoritos se lee y se olvida; convertirla en una comparación hace que el visitante se detenga en cada película y disco, y le da un resultado propio al final.

![Captura](img/capturas/perfil-nicolas.png)

### Perfil — Laura Belén Blanco

**Función:** Encontrá el bug
**Archivo:** `js/perfil-laura-blanco.js`
**Qué hace:** muestra una ficha con datos de mi perfil donde cuatro tienen errores a propósito (un nombre mal escrito, un director equivocado, un año invertido y un precio negativo). El visitante hace clic en los datos que cree incorrectos: si es un bug, se tacha y se explica el error; si no, cuenta como falso positivo. Al encontrar los cuatro bugs se muestra un resumen y se puede volver a jugar.
**Por qué la elegí:** trabajo como QA Tester y quise mostrar en qué consiste ese trabajo con una interacción simple.

![Captura de la actividad Encontrá el bug de Laura Blanco](img/capturas/perfil-laura-blanco.png)

### Perfil — Christian Albornoz

**Función:** Espacio cinéfilo: citas y trivia
**Archivo:** `js/perfil-christian.js`
**Qué hace:** el visitante elige *Forrest Gump*, *Big Fish* o *Flores de Fuego (Hana-bi)*. La actividad escribe una cita de la película letra por letra y propone una pregunta con tres respuestas; por ejemplo, pregunta por el año y protagonista de *Forrest Gump*, quién dirigió *Big Fish* o el premio de *Hana-bi*. Al responder, desactiva las tres opciones y señala si la respuesta fue correcta. Elegir otra película o pulsar «Volver a intentar» limpia el feedback y vuelve a habilitar una pregunta.
**Por qué la elegí:** el cine es uno de mis intereses principales y quise compartir películas que me marcaron de una forma activa: la cita escrita en tiempo real presenta cada película y la trivia invita al visitante a poner a prueba lo que sabe de ella.

![Captura de la trivia cinéfila de Christian](img/capturas/perfil-christian.png)

### Perfil — Laura Olivera

**Función:** test de resolución bajo presión
**Archivo:** `js/perfil-laura-olivera.js`
**Qué hace:** presenta tres situaciones: una falla antes de una entrega, una tarea urgente poco clara y un cambio que rompe el proyecto. Cada una ofrece tres respuestas que otorgan 3, 2 o 1 punto. La barra y el indicador muestran el avance; al responder la tercera pregunta, el puntaje total define el resultado: estratega (8–9), colaborativo (5–7) o resolutivo (3–4). «Volver a intentar» oculta el resultado, reinicia el puntaje y vuelve a la primera situación.
**Por qué la elegí:** relacionar decisiones ante problemas urgentes con distintos enfoques de resolución y colaboración.

![Captura](img/capturas/perfil-laura-olivera.png)

### Perfil — Fernando Guevara

**Función:** foto interactiva, fichas de discos y rincón musical
**Archivo:** `js/perfil-fer.js`
**Qué hace:** reúne tres controles. Al activar la foto con clic, Enter o Espacio, gira y alterna entre el retrato y un saludo. En la lista, los discos «Harvest Moon», «Reveal» y «Guess Who» despliegan u ocultan una nota personal; también responden a Enter y Espacio. En el rincón musical, los botones de esos tres discos actualizan el dato curioso mostrado y señalan cuál está seleccionado.
**Por qué la elegí:** presentar mis gustos musicales junto con notas personales y datos breves sobre cada disco.

![Captura](img/capturas/perfil-fernando.png)

---

## 9. Bitácora de desarrollo

La bitácora completa está en [`bitacora.html`](bitacora.html), accesible desde el menú principal del sitio.
Registra, por sprint, las decisiones tomadas, los problemas encontrados y cómo se resolvieron.

---

## 10. Publicación en Vercel

**Estado:** no publicado al 25/09/2026. El plan del equipo programa el deploy en Vercel para el Sprint 5 (26/09/2026).

**URL:** todavía no disponible. Cuando se publique, agregar aquí la URL de producción y probar los enlaces y breakpoints del sitio publicado.

---

## 11. Uso de IA y criterio de privacidad

### Herramientas y modelos utilizados

| Herramienta | Modelo | Plan | Experiencia previa del equipo |
|---|---|---|---|
| Claude Code | Claude Opus 5 y Claude Opus 5.5 | Pago | Uso frecuente antes de este TP |
| Gemini | Gemini 2.5 Flash / Web | Gratuito | Uso frecuente antes de este TP |
| GitHub Copilot Chat | Modelo asignado a esta sesión; identificador no registrado | Free | Usado en la revisión del Sprint 4; experiencia previa específica no registrada |

### En qué asistió

- **Planificación y documentación:** Claude Code ayudó a generar el plan de sprints (`docs/release-plan.md`) y el esqueleto inicial del README a partir de la consigna; el equipo revisó y ajustó esos documentos.
- **Código y diseño:** Claude Code asistió en parte del carrusel de `js/portada.js` y en interacciones JavaScript de los perfiles.
- **Imágenes:** Gemini generó los cinco avatares a partir de imágenes adjuntas. Prompt informado por el equipo: «contruye un avatar en base a la imagen adjuntada».
- **Debugging y QA:** GitHub Copilot asistió la auditoría del navegador del 25/09: interacciones y errores de consola en las siete páginas, sin errores JS. En la revisión cruzada del 26/09, Claude Code se usó para auditar el Sprint 4 contra el plan, buscar la causa de los bugs encontrados y verificar las correcciones en el navegador en 400, 412, 900 y 1200px. Los casos concretos están en la sección siguiente.

### Imágenes y avatares generados con IA

El equipo confirmó que **los cinco avatares de perfil** se generaron con Gemini usando una imagen adjunta como referencia. La versión exacta de Gemini no quedó registrada. El criterio informado fue elegir y adaptar el diseño a las necesidades de cada perfil.

No se confirmó que hubiera un aviso visible junto a cada avatar. En las páginas, el texto alternativo identifica las imágenes como avatares/fotos de perfil, pero no indica que fueron generadas con IA. Este README deja explícita la herramienta y el origen para no presentar los resultados como fotografías originales.

### Qué revisamos, adaptamos o cambiamos con criterio propio

El equipo eligió qué diseños de avatar correspondían a cada perfil y adaptó su presentación al componente compartido: las páginas usan `.profile-photo`, dimensiones explícitas y texto alternativo, mientras CSS controla el recorte responsive. No quedó anotado qué retoques visuales se hicieron dentro de cada imagen generada.

En el código, el equipo no dejó fija la profundidad del carrusel: la trasladó al token CSS `--carousel-depth` y `js/portada.js` lee ese valor para que responda a los breakpoints. Las interacciones de perfil se integraron a sus controles y contenidos concretos; el equipo comprobó sus estados en navegador. Para esta revisión se probaron las cinco actividades y se corrigió el reinicio y la visibilidad de controles.

Tres casos de la revisión cruzada del 26/09 muestran cómo se repartió el trabajo entre el equipo y la IA:

- **El bug lo encontramos nosotros; la IA encontró la causa.** Nicolás detectó que los botones claros desaparecían al pasar el mouse. Claude Code rastreó el problema hasta `--color-surface`: la variable había sido clara con la primera paleta y quedó azul noche con el diseño 2. El equipo validó la corrección en el navegador y pidió que el bug quedara registrado en la bitácora, cosa que la IA no había hecho por su cuenta.
- **La IA detectó una regresión y el equipo decidió cómo resolverla.** Al revisar el commit del reinicio de la trivia, Claude Code notó que se había hecho sobre una versión vieja del perfil de Christian y que había deshecho mejoras del Sprint 3 (dimensiones de imágenes, íconos accesibles, `defer`). El equipo decidió restaurarlas conservando la lógica nueva del reinicio, en lugar de revertir el commit entero
**Refactorización y control de selectores en la trivia cinéfila:** Durante la asistencia para el reinicio de la trivia de Christian, la IA propuso selectores genéricos (`.cinema-btn`) que capturaban erróneamente tanto los botones de película como el nuevo botón de reinicio. Christian identificó el conflicto de ámbito, acotó la selección en JavaScript estrictamente a `.cinema-selector .cinema-btn`, reemplazó la manipulación directa de estilos inline (`style.display`) por el atributo semántico `hidden`, y delegó el espaciado a clases utilitarias en `css/perfil.css`..
- **No reescribimos la historia.** La entrada del Sprint 1 de la bitácora describe una paleta amarilla que ya no se usa. Antes de tocarla revisamos el historial de `css/base.css` y confirmamos que esa paleta existió de verdad, como primera propuesta, antes del diseño 2. Por eso la dejamos como estaba y agregamos una aclaración: la bitácora tiene que reflejar lo que pasó en su fecha.

En los tres casos, la IA propuso cambios y el equipo los revisó antes de incorporarlos. Ningún commit lo hizo la IA: los commits los hizo cada integrante.

### Criterio de privacidad

Los avatares se generaron enviando imágenes adjuntas a Gemini; por eso no se afirma que las imágenes de origen permanecieran solo en el equipo. El sitio muestra los datos de perfil publicados por sus integrantes y no incluye domicilios ni teléfonos. No se registraron las opciones de retención o privacidad seleccionadas en Gemini.

---

## 12. Evolución del proyecto

<!-- BORRADOR: propuesta a validar por el equipo antes de la entrega -->

Estas son las líneas que el equipo propone ampliar en los próximos TPs. Cada una parte de un límite concreto que encontramos en este sitio:

- **Generar los perfiles desde datos.** Hoy los cinco perfiles repiten el mismo HTML y cualquier cambio en el template hay que hacerlo cinco veces (lo vivimos al alinear el perfil de Fernando). La idea es guardar los datos de cada integrante en un JSON y armar las páginas con JavaScript a partir de ese archivo.
- **Componentes compartidos.** El header, el footer y la paginación entre compañeros están copiados en las siete páginas. Queremos extraerlos a un único lugar para que un enlace se corrija una sola vez.
- **Persistir el estado de las interacciones.** Guardar en `localStorage` el resultado del comparador de gustos, la trivia y el test, para que el visitante vea su puntaje anterior al volver.
- **Pruebas automatizadas.** Convertir la verificación de overflow y de errores de consola que hicimos a mano en los Sprints 3 y 4 en un script que corra antes de cada merge.
- **Modo claro.** La paleta ya está tokenizada en `:root`, así que agregar un tema claro con `prefers-color-scheme` no requiere tocar los componentes.
