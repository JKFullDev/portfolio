# 👨‍💻 Portafolio Personal - Juan Carlos Alonso

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Este es mi portfolio personal, desarrollado como una **Single Page Application (SPA)** moderna utilizando **React 19**. El objetivo de este proyecto es demostrar mis capacidades técnicas en el desarrollo Frontend, la integración de librerías de vanguardia y el diseño de interfaces de usuario (UI) con un enfoque "Premium Dark".

## 🚀 Características Principales

-   **Navegación Fluida:** Implementación de `react-router-dom` para una experiencia de usuario sin recargas de página.
-   **Diseño Premium Dark:** Interfaz basada en *Glassmorphism*, con un uso estratégico de variables CSS para mantener la coherencia visual y facilitar el mantenimiento.
-   **Animaciones Avanzadas:** Uso de `framer-motion` para transiciones entre páginas y `tsparticles` para un fondo dinámico e interactivo.
-   **Arquitectura de Datos:** Separación de la lógica y el contenido mediante un archivo centralizado de datos (`trabajos.js`), lo que permite escalar el portfolio fácilmente.
-   **SEO & Meta-tags:** Integración de `react-helmet-async` para la gestión dinámica de títulos y meta-descripciones, optimizando el posicionamiento y la indexación.
-   **Totalmente Responsive:** Adaptabilidad completa mediante Media Queries personalizadas, incluyendo un menú lateral de tipo "hamburger" para dispositivos móviles.

## 🛠️ Stack Tecnológico

-   **Core:** React 19 (Hooks: useState, useEffect, useCallback, useParams).
-   **Estilos:** CSS3 nativo con Variables Dinámicas y Flexbox/Grid.
-   **Animaciones:** Framer Motion & tsparticles-slim.
-   **Navegación:** React Router 7 (BrowserRouter, Routes, Route, Navigate).
-   **SEO:** React Helmet Async.

## 📂 Estructura del Proyecto

```text
src/
 ├── components/       # Componentes funcionales (Inicio, Proyecto, SobreMi, etc.)
 ├── data/             # Lógica de datos (trabajos.js)
 ├── router/           # Configuración de rutas y wrappers de animación
 ├── index.css         # Hoja de estilos global y variables
 └── App.js            # Punto de entrada de la aplicación

## 🔧 Instalación y Ejecución
Clona el repositorio:

```Bash
git clone [https://github.com/JKFullDev/portfolio.git](https://github.com/JKFullDev/portfolio.git)
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