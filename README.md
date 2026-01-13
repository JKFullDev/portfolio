# 👨‍💻 Portfolio Profesional | Juan Carlos Alonso

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

Este es mi portfolio personal, desarrollado como una **Single Page Application (SPA)** moderna utilizando **React 19**. El proyecto se centra en ofrecer una experiencia de usuario (UX) de alto nivel con un diseño "Premium Dark", animaciones fluidas y una arquitectura de código escalable.

🔗 **Demo del proyecto:** [Ver Portafolio Online](https://portfolio-nine-gamma-31.vercel.app/inicio)

## 🚀 Características Principales

-   **Navegación SPA:** Enrutamiento instantáneo sin recargas con `react-router-dom`.
-   **Gestión de Proyectos Real:** Sistema de filtrado dinámico para separar **Proyectos Profesionales** (Clientes reales) de **Proyectos Personales**.
-   **Diseño Interactivo 3D:** Tarjetas de proyectos con efecto de profundidad y seguimiento del ratón (*Tilt effect*) mediante `react-parallax-tilt`.
-   **Animaciones "Scroll Reveal":** Los elementos (secciones, tarjetas, habilidades) aparecen suavemente a medida que el usuario navega, gracias a `framer-motion`.
-   **Feedback de Usuario:** Formulario de contacto inteligente con validación en tiempo real y notificaciones visuales (*Toasts*) de éxito/error usando `react-hot-toast`.
-   **Fondo de Partículas:** Red neuronal interactiva implementada con `tsparticles` que reacciona al movimiento del cursor.
-   **Gestión de Contenidos:** Separación estricta entre lógica y datos (`src/data/trabajos.js`), permitiendo añadir nuevos proyectos y logros fácilmente.
-   **SEO Optimizado:** Gestión dinámica de metadatos con `react-helmet-async`.
-   **Totalmente Responsive:** Adaptado a móviles, tablets y escritorio (Breakpoint personalizado en 1030px para tablets).

## 🛠️ Stack Tecnológico

### Core & Frameworks
-   **React 19**: Hooks avanzados (`useState`, `useEffect`, `useCallback`) y gestión de estado.
-   **React Router DOM**: Gestión de rutas y navegación SPA.

### UI & Estilos
-   **CSS3 Nativo**: Uso intensivo de Variables CSS, Flexbox, Grid y animaciones `keyframes` (sin frameworks de CSS pesados).
-   **Glassmorphism**: Estética moderna con fondos semitransparentes y desenfoques (`backdrop-filter`).

### Animaciones & Librerías UX
-   **Framer Motion**: Transiciones de página y animaciones de entrada (*Scroll Reveal*).
-   **React Parallax Tilt**: Efecto de inclinación 3D en tarjetas de proyectos.
-   **React Hot Toast**: Sistema de notificaciones elegante y ligero.
-   **TSParticles**: Fondo interactivo de partículas.

## 📂 Estructura del Proyecto

El código sigue una arquitectura basada en componentes reutilizables:

```text
src/
 ├── components/       # Componentes funcionales
 │   ├── layout/       # Header, Footer y Navegación
 │   ├── Proyecto.js   # Ficha detalle con logros y stack
 │   ├── Contacto.js   # Formulario con validación y Toasts
 │   ├── Skills.js     # Sección interactiva de habilidades
 │   └── ...
 ├── data/             # Fuente de verdad de datos (trabajos.js)
 ├── router/           # Configuración de rutas
 ├── index.css         # Sistema de diseño global y variables
 └── App.js            # Punto de entrada y configuración de Toaster
```

## 🔧 Instalación y Ejecución
Clona el repositorio:

```Bash
git clone https://github.com/JKFullDev/portfolio.git
```

Instala las dependencias (ignorando conflictos de peer-dependencies debidos a la versión de React 19):
```Bash
npm install --legacy-peer-deps
```

Arranca el proyecto en modo desarrollo:
```Bash
npm start
```

## 📬 Contacto

LinkedIn: [Juan Carlos Alonso Hernando](https://www.linkedin.com/in/jcah-dev/)

Email: jcarlos.al.hr@gmail.com

Ubicación: Madrid, España