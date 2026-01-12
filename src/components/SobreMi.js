import React, { useState } from 'react';

export const SobreMi = () => {

    const [tab, setTab] = useState('hard');
    // DATOS: Formación Académica
    const estudiosOficiales = [
        {
            titulo: "CFGS Desarrollo de Aplicaciones Web",
            centro: "Prometeo by The PowerFP",
            fecha: "Actualidad",
            desc: "Titulación oficial centrada en la arquitectura de aplicaciones web. Formación exhaustiva en diseño de interfaces, lógica de servidor, gestión avanzada de bases de datos y metodologías ágiles."
        },
        {
            titulo: "Máster Full Stack Developer",
            centro: "Prometeo by The PowerFP",
            fecha: "Actualidad",
            desc: "Programa intensivo enfocado en el stack MERN (MongoDB, Express, React, Node.js). Desarrollo de aplicaciones SPA escalables, consumo de APIs y gestión de estado global."
        },
        {
            titulo: "Bachillerato de Ciencias y Tecnología",
            centro: "I.E.S. Pradolongo",
            fecha: "2021",
            desc: "Base académica sólida centrada en lógica matemática y fundamentos tecnológicos, clave para el pensamiento computacional."
        },
    ];

    // DATOS: Formación Complementaria
    const cursosComplementarios = [
        {
            titulo: "Máster en PHP, SQL, POO, MVC, Laravel",
            centro: "Udemy (Víctor Robles)",
            fecha: "Actualidad",
            desc: "Formación backend profesional. Dominio de PHP 8, bases de datos relacionales (SQL/MySQL) y patrones de arquitectura de software (MVC). Desarrollo avanzado con frameworks líderes como Laravel y Symfony, además de CMS WordPress."
        },
        {
            titulo: "Máster en React: Hooks, MERN & Redux",
            centro: "Udemy (Víctor Robles)",
            fecha: "Actualidad",
            desc: "Especialización profunda en el ecosistema React. Desarrollo de SPAs modernas utilizando Hooks, Context API y Redux. Creación de aplicaciones Full Stack complejas integrando el stack MERN."
        },
        {
            titulo: "Máster PowerIA v.3",
            centro: "Prometeo by The PowerFP",
            fecha: "Actualidad",
            desc: "Formación avanzada en Inteligencia Artificial aplicada al desarrollo. Uso de Copilots, automatización de procesos y optimización de código mediante herramientas de IA generativa."
        },
    ];

    // DATOS: Skills (Mantener igual que antes, solo asegúrate de tener los logos)
    const hardSkills = [
        { nombre: "React.js", imagen: "/images/logos/react.png" },
        { nombre: "JavaScript", imagen: "/images/logos/js.png" },
        { nombre: "CSS3", imagen: "/images/logos/css.png" },
        { nombre: "HTML5", imagen: "/images/logos/html.png" },
        { nombre: "Java", imagen: "/images/logos/java.png" },
        { nombre: "PHP", imagen: "/images/logos/php.png" },
        { nombre: "MySQL", imagen: "/images/logos/sql.png" },
        { nombre: "Node.js", imagen: "/images/logos/node.png" },
        { nombre: "Git", imagen: "/images/logos/git.png" },
        { nombre: "Wordpress", imagen: "/images/logos/wordpress.png" },
    ];

    const softSkills = [
        { nombre: "Trabajo en Equipo", icon: "🤝", desc: "Colaboración fluida y apoyo constante." },
        { nombre: "Proactividad", icon: "⚡", desc: "Iniciativa para resolver problemas reales." },
        { nombre: "Aprendizaje Ágil", icon: "🧠", desc: "Capacidad para dominar nuevas tecnologías." },
        { nombre: "Comunicación", icon: "🗣️", desc: "Transmisión clara de ideas técnicas." },
        { nombre: "Resolución", icon: "🛡️", desc: "Enfoque analítico ante desafíos complejos." },
    ];

    return (
        <div className='page sobre-mi'>
            <h1 className='heading'>Sobre Mí</h1>

            {/* BIO */}
            <section className='bio-section'>
                <div className='bio-container'>
                    <div className='bio-text'>
                        <h2>Hola, soy Juan Carlos</h2>
                        <p>
                            Soy un apasionado del desarrollo web en plena formación, cursando actualmente DAW y especializándome con un Máster Full Stack. Mi enfoque se centra en construir bases sólidas: desde la lógica del Backend con PHP hasta la creación de interfaces dinámicas con React.

                            No busco solo escribir código, sino entender cómo la tecnología y la IA pueden resolver problemas reales. Estoy en constante aprendizaje, devorando documentación y construyendo proyectos que desafíen mis límites. Mi objetivo ahora mismo es encontrar mi primera oportunidad profesional donde pueda aportar mi energía y seguir creciendo como desarrollador.
                        </p>
                        <a href="/CV_DAW.pdf" download="CV_JuanCarlos_Alonso.pdf" className='btn-download'>
                            📄 Descargar CV en PDF
                        </a>
                    </div>
                </div>
            </section>

            {/* NUEVA SECCIÓN DE FORMACIÓN CON TARJETAS */}
            <section className='education-section'>

                {/* Bloque 1: Oficial */}
                <h2 className='section-title'>Estudios Oficiales</h2>
                <div className='education-grid'>
                    {estudiosOficiales.map((item, index) => (
                        <div key={index} className='edu-card'>
                            <div className='edu-header'>
                                <span className='edu-year'>{item.fecha}</span>
                                <h3>{item.titulo}</h3>
                                <span className='edu-center'>{item.centro}</span>
                            </div>
                            <div className='edu-body'>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bloque 2: Complementaria */}
                <h2 className='section-title' style={{ marginTop: '50px' }}>Formación Complementaria</h2>
                <div className='education-grid'>
                    {cursosComplementarios.map((item, index) => (
                        <div key={index} className='edu-card complementaria'>
                            <div className='edu-header'>
                                <span className='edu-year'>{item.fecha}</span>
                                <h3>{item.titulo}</h3>
                                <span className='edu-center'>{item.centro}</span>
                            </div>
                            <div className='edu-body'>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </section>

            {/* SKILLS */}
            <section className='skills-interactive'>
                <h2 className='section-title' style={{ marginTop: '60px' }}>Mis Habilidades</h2>

                <div className='toggle-container'>
                    <button className={`toggle-btn ${tab === 'hard' ? 'active' : ''}`} onClick={() => setTab('hard')}>
                        Hard Skills
                    </button>
                    <button className={`toggle-btn ${tab === 'soft' ? 'active' : ''}`} onClick={() => setTab('soft')}>
                        Soft Skills
                    </button>
                </div>

                <div className='skills-grid animate-fade'>
                    {tab === 'hard' ? (
                        hardSkills.map((skill, index) => (
                            <div key={index} className='skill-card hard'>
                                <div className='skill-image-container'>
                                    <img src={skill.imagen} alt={skill.nombre} />
                                </div>
                                <h3>{skill.nombre}</h3>
                            </div>
                        ))
                    ) : (
                        softSkills.map((skill, index) => (
                            <div key={index} className='skill-card soft'>
                                <div className='skill-icon'>{skill.icon}</div>
                                <h3>{skill.nombre}</h3>
                                <p>{skill.desc}</p>
                            </div>
                        ))
                    )}
                </div>
            </section>
        </div>
    )
}