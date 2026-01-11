import React, { useState } from 'react';

export const SobreMi = () => {

    const [tab, setTab] = useState('hard');

    // CAMBIO: Ahora usamos 'imagen' en lugar de 'icon'
    // Asegúrate de guardar tus logos en public/images/logos/
    const hardSkills = [
        { nombre: "React.js", imagen: "/images/logos/react.png" },
        { nombre: "JavaScript", imagen: "/images/logos/js.png" },
        { nombre: "CSS3", imagen: "/images/logos/css.png" },
        { nombre: "HTML5", imagen: "/images/logos/html.png" },
        { nombre: "Java", imagen: "/images/logos/java.png" },
        { nombre: "PHP", imagen: "/images/logos/php.png" },
        { nombre: "MySQL", imagen: "/images/logos/mysql.png" },
        { nombre: "Node.js", imagen: "/images/logos/node.png" },
        { nombre: "Git", imagen: "/images/logos/git.png" },
        { nombre: "Wordpress", imagen: "/images/logos/wordpress.png" },
    ];

    const softSkills = [
        { nombre: "Trabajo en Equipo", icon: "🤝", desc: "Colaboración fluida y apoyo constante." },
        { nombre: "Proactividad", icon: "⚡", desc: "Iniciativa para resolver problemas reales." },
        { nombre: "Aprendizaje Ágil", icon: "🧠", desc: "Capacidad para dominar nuevas tecnologías." },
        { nombre: "Comunicación efectiva", icon: "🗣️", desc: "Transmisión clara de ideas técnicas." },
        { nombre: "Resolución", icon: "🛡️", desc: "Enfoque analítico ante desafíos complejos." },
    ];

    return (
        <div className='page sobre-mi'>
            <h1 className='heading'>Sobre Mí & Habilidades</h1>

            <section className='bio-section'>
                <div className='bio-container'>
                    <div className='bio-text'>
                        <h2>Hola, soy Juan Carlos 👋</h2>
                        <p>
                            Soy un Desarrollador Full Stack apasionado por transformar ideas en código funcional.
                            Mi enfoque combina la lógica del backend con la creatividad del frontend para construir
                            experiencias web modernas, rápidas y escalables.
                        </p>
                        <a href="/CV_DAW.pdf" download="CV_JuanCarlos_Alonso.pdf" className='btn-download'>
                            📄 Descargar CV en PDF
                        </a>
                    </div>
                </div>
            </section>

            <section className='skills-interactive'>
                <div className='toggle-container'>
                    <button
                        className={`toggle-btn ${tab === 'hard' ? 'active' : ''}`}
                        onClick={() => setTab('hard')}
                    >
                        Hard Skills
                    </button>
                    <button
                        className={`toggle-btn ${tab === 'soft' ? 'active' : ''}`}
                        onClick={() => setTab('soft')}
                    >
                        Soft Skills
                    </button>
                </div>

                <div className='skills-grid animate-fade'>
                    {tab === 'hard' ? (
                        /* HARD SKILLS*/
                        hardSkills.map((skill, index) => (
                            <div key={index} className='skill-card hard'>
                                {/* Contenedor de imagen ajustado */}
                                <div className='skill-image-container'>
                                    <img src={skill.imagen} alt={skill.nombre} />
                                </div>
                                <h3>{skill.nombre}</h3>
                            </div>
                        ))
                    ) : (
                        /* SOFT SKILLS*/
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