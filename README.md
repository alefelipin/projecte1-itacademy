# ITAlumni

El proyecto denominado **Exalumni** se desarrolla en una plataforma web **mobile-first** orientada a la comunidad de exalumnos y exalumnas de **IT Academy de Barcelona Activa**.

ITAlumni nace para mantener activa la relación entre personas que han finalizado su formación en IT Academy, facilitando el **networking profesional**, el acceso a **oportunidades laborales** y, dentro del alcance definido para el producto, la participación en actividades y recursos de la comunidad.


## Contexto del proyecto

Barcelona Activa, agencia de desarrollo local del Ayuntamiento de Barcelona, impulsa iniciativas de formación y empleabilidad como IT Academy. El proyecto responde a una necesidad detectada después de la finalización de los bootcamps: evitar que se pierda el vínculo entre exalumnos/as y ofrecer un punto de encuentro digital para continuar creando comunidad y oportunidades profesionales.

La plataforma está dirigida principalmente a:

- **Exalumnos/as de IT Academy**, especialmente perfiles junior, recién graduados o en transición laboral.
- **Técnicos/as de inserción laboral**, que necesitan un canal para compartir oportunidades y recursos.
- **Administradores/as**, responsables de la gestión básica de contenidos y usuarios dentro del alcance funcional definido.

## Objetivos

Los principales objetivos del proyecto son:

- Mantener conectada la comunidad de exalumnos/as de IT Academy.
- Dar visibilidad a perfiles técnicos emergentes.
- Facilitar la búsqueda y exploración de otros miembros de la comunidad.
- Centralizar oportunidades laborales relacionadas con perfiles tecnológicos.
- Facilitar el acceso a actividades y eventos de interés profesional.
- Ofrecer una experiencia clara, accesible y adaptada primero a dispositivos móviles.

## Alcance del MVP

La documentación del MVP prioriza cuatro áreas funcionales:

### Épica 3 — Red entre exalumnos

- Búsqueda y exploración de miembros.
- Visualización de información pública de perfiles.
- Filtros básicos.
- Solicitudes y aceptación de conexiones.
- La mensajería directa queda fuera del MVP.

### Épica 4 — Bolsa de trabajo

- Visualización de ofertas laborales.
- Filtrado de ofertas.
- Aplicación directa o redirección a plataformas externas.
- Posibilidad de guardar ofertas como favoritas.
- Publicación de ofertas por perfiles técnicos o administradores.

### Épica 5 — Eventos y actividades

- Calendario de eventos.
- Visualización de información de actividades.
- Inscripción a eventos abiertos o privados.
- Gestión limitada por parte de técnicos/as o administradores/as.

### Épica 8 — Administración

- Creación y publicación de ofertas.
- Gestión básica de contenidos.
- La administración avanzada y las estadísticas quedan fuera del MVP.

## Estado actual del front-end

El repositorio se encuentra actualmente en desarrollo. La implementación disponible cubre una parte del MVP y varias pantallas necesarias para construir sus flujos principales.

| Área | Estado actual |
| --- | --- |
| Landing page | Implementada |
| Registro | Implementado a nivel front-end con validaciones básicas |
| Home | Implementada |
| Networking | Implementado con vistas mobile/desktop y búsqueda mediante JavaScript |
| Job Opportunities | Implementada con vistas mobile/desktop y filtros mediante JavaScript |
| Perfiles completos | Pendiente |
| Sistema real de conexiones | Pendiente |
| Favoritos de ofertas | Pendiente |
| Eventos y calendario | Pendiente |
| Administración | Pendiente |
| Backend y persistencia | No implementados |

La aplicación actual es un **prototipo front-end estático**. No existe todavía autenticación real, base de datos ni persistencia de usuarios, conexiones, candidaturas o favoritos.

## Páginas implementadas

### `index.html`

Landing pública de ITAlumni.

Incluye:

- presentación de la plataforma;
- navegación principal en desktop;
- CTA de registro;
- sección de beneficios;
- testimonios;
- newsletter y footer en la versión desktop;
- navegación hacia registro, networking y oportunidades laborales.

La versión móvil sigue un enfoque simplificado y prioriza logo, descripción y botón de acceso.

### `signup.html`

Pantalla de registro de usuario.

Incluye:

- formulario de nombre, apellidos, correo electrónico y contraseña;
- aceptación de términos;
- alternativas visuales de registro mediante servicios sociales;
- enlace de acceso para usuarios existentes;
- validaciones básicas mediante JavaScript.

Actualmente el registro es una simulación de front-end y no crea una cuenta persistente.

### `home.html`

Pantalla principal posterior al acceso.

Incluye accesos a:

- **Networking**;
- **Job Opportunities**;
- navegación inferior para Home, Networking, Job Portal y Profile.

### `networking.html`

Área de exploración de miembros de la comunidad.

Incluye:

- listado de perfiles;
- buscador de alumni;
- interfaz adaptada a mobile y desktop;
- información de nombre, empleo y ubicación según la vista;
- acciones visuales de `Message` y `Connect`;
- sección de actividad reciente;
- sugerencias de contactos;
- filtrado de resultados mediante JavaScript.

Las acciones de conexión y mensajería son actualmente elementos de interfaz y no representan todavía una comunicación real entre usuarios.

### `job-opportunities.html`

Bolsa de oportunidades laborales.

Incluye:

- tarjetas de ofertas para mobile y desktop;
- filtros por industria;
- filtros por experiencia o perfil tecnológico;
- información auxiliar no visible utilizada para mejorar el filtrado;
- botones de aplicación o consulta;
- lógica de filtrado mediante JavaScript.

Las candidaturas y redirecciones reales a plataformas externas todavía no forman parte de la implementación actual.

## Tecnologías

El proyecto se ha desarrollado sin frameworks de front-end.

- **HTML5**
- **CSS3**
- **JavaScript Vanilla**
- **Google Fonts**
  - Source Sans 3
  - Wallpoet
- **Git y GitHub** para control de versiones

No se requiere Node.js, npm ni un proceso de build para ejecutar la versión actual.

## Arquitectura y estructura

La estructura del proyecto sigue una separación sencilla entre páginas, estilos, lógica y recursos:

```text
projecte1-itacademy/
├── index.html
├── signup.html
├── home.html
├── networking.html
├── job-opportunities.html
│
├── css/
│   └── main.css
│
├── js/
│   └── pages/
│       ├── signup.js
│       ├── networking.js
│       └── jobs.js
│
└── src/
    └── assets/
        ├── icons/
        ├── images/
        └── logos/
```

`main.css` concentra actualmente los estilos globales, componentes reutilizables y estilos específicos de cada página.

## Mobile-first y responsive design

El proyecto se desarrolla siguiendo un enfoque **mobile-first**, requisito explícito del briefing y del MVP.

Los estilos base corresponden a la experiencia móvil y las adaptaciones para desktop se realizan mediante media queries.

Breakpoint principal utilizado actualmente:

```css
@media (min-width: 1024px) {
  /* estilos desktop */
}
```

Las clases de utilidad:

```css
.mobile-only
.desktop-only
```

permiten controlar qué elementos se muestran según el tamaño de pantalla.

## Componentes reutilizables

Durante el desarrollo se han ido refactorizando estilos compartidos para reducir duplicación. Entre los componentes comunes se encuentran:

- botones base `.btn` y sus modificadores;
- header mobile;
- header desktop;
- footer mobile;
- navegación;
- campos de búsqueda;
- tarjetas de networking;
- tarjetas de ofertas laborales;
- utilidades `.mobile-only` y `.desktop-only`.

Los modificadores de botones permiten reutilizar estilos de color, tamaño, borde y tipografía sin crear un componente diferente para cada página.

## JavaScript

La lógica actual se mantiene separada por página.

### `signup.js`

Gestiona validaciones básicas del formulario de registro antes de continuar el flujo.

### `networking.js`

Gestiona la búsqueda y filtrado de perfiles de alumni a partir del contenido disponible en las tarjetas.

### `jobs.js`

Gestiona el filtrado de ofertas laborales utilizando los filtros de la interfaz y los datos disponibles en cada oferta.

La aplicación utiliza actualmente JavaScript del navegador y no depende de librerías externas.

## UX/UI

El proyecto parte de wireframes, mockups de alta fidelidad y un design system definidos en Figma.

El proceso de implementación ha seguido un enfoque iterativo, comparando las vistas desarrolladas con los mockups para ajustar:

- jerarquía visual;
- espaciados;
- tamaños;
- alineación;
- tarjetas;
- navegación;
- filtros;
- estados activos;
- comportamiento responsive.

Figma del proyecto:

https://www.figma.com/design/pZkXuXJxfMEPzX3tyglYhm/ITAlumni

## Accesibilidad

La accesibilidad forma parte de los requisitos del proyecto y se toma como referencia WCAG.

La implementación incluye progresivamente:

- HTML semántico;
- `aria-label` en elementos de navegación y acciones cuando es necesario;
- textos alternativos en imágenes;
- contraste de colores;
- campos de formulario identificables;
- botones con tipos explícitos;
- estructura de navegación coherente;
- diseño responsive y legible.

La revisión de accesibilidad continúa siendo parte del proceso de desarrollo y deberá validarse de forma completa antes de considerar finalizada la aplicación.

## Sitemap funcional

La documentación funcional organiza la plataforma completa en cuatro grandes áreas:

1. **Landing Page**
2. **Dashboard**
   - My Profile
   - Comunidad
   - Bolsa de trabajo
   - Eventos
   - Recursos
   - Mur / Foro
3. **Gestión técnica**
4. **Administración**

Sitemap original del proyecto:

https://github.com/it-academy-front-end/sprints-refactoring/blob/main/moodle/3-projectes/projecte-1-italumni/annexos/annex-2-projecte-1-sitemap-italumni.png

La versión disponible en este repositorio implementa únicamente una parte de esa arquitectura funcional.

## Ejecución local

Al tratarse actualmente de una aplicación estática, no es necesario instalar dependencias.

1. Clona el repositorio:

```bash
git clone <https://github.com/alefelipin/projecte1-itacademy>
```

2. Entra en la carpeta del proyecto:

```bash
cd projecte1-itacademy
```

3. Abre `index.html` en el navegador.

También puede utilizarse una extensión como **Live Server** en Visual Studio Code para trabajar con recarga automática durante el desarrollo.

## Flujo de navegación actual

```text
Landing
  │
  ├── Registro
  │
  ├── Networking
  │
  └── Job Opportunities
          │
          └── Home / navegación interna
```

Dentro de las pantallas privadas simuladas, la navegación conecta principalmente:

```text
Home ↔ Networking ↔ Job Opportunities
```

## Próximos pasos

De acuerdo con el MVP y el estado actual del repositorio, las siguientes iteraciones deberán completar principalmente:

- perfiles profesionales editables;
- solicitudes y aceptación real de conexiones;
- almacenamiento de favoritos;
- flujo real de aplicación a ofertas;
- calendario e inscripción a eventos;
- creación y publicación de ofertas para técnicos/as o administradores/as;
- gestión básica de roles;
- persistencia de datos;
- autenticación real;
- validaciones más completas de formularios;
- revisión integral de accesibilidad.

Quedan para fases posteriores, según la definición del MVP:

- mensajería directa;
- muro comunitario;
- notificaciones automáticas;
- administración avanzada;
- estadísticas e informes;
- gamificación.

## Metodología de desarrollo

El proyecto se ha desarrollado de forma incremental y mobile-first, trabajando las distintas páginas y funcionalidades por iteraciones.

Se ha utilizado Git para mantener un historial de cambios y separar el trabajo de desarrollo antes de integrarlo en la rama principal. Durante el proceso también se han aplicado refactorizaciones para:

- reducir duplicación de HTML y CSS;
- reutilizar componentes;
- mantener nomenclaturas consistentes;
- separar la lógica JavaScript por página;
- mejorar la adaptación entre mobile y desktop.

## Documentación de referencia

El desarrollo parte de la documentación oficial proporcionada para el Proyecto 1 de IT Academy:

- Briefing del proyecto ITAlumni.
- Análisis funcional y sitemap.
- Diseño UX/UI y mockups.
- Definición del MVP.
- Casos de uso, historias de usuario, criterios de aceptación y escenarios Gherkin.

## Proyecto académico

ITAlumni se desarrolla como parte del itinerario formativo de **IT Academy — Barcelona Activa**, con el objetivo de aplicar de forma práctica conocimientos de maquetación, responsive design, accesibilidad, JavaScript, control de versiones y desarrollo iterativo de producto.
