import React, { useState } from 'react';
import { motion } from 'framer-motion'; // <--- IMPORTAMOS

export const Skills = () => {

    const [tab, setTab] = useState('hard');

    // DATOS: Skills
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
        { nombre: "Comunicación Efectiva", icon: "🗣️", desc: "Transmisión clara de ideas técnicas." },
        { nombre: "Resolución", icon: "🛡️", desc: "Enfoque analítico ante desafíos complejos." },
    ];

    return (
        <div className='page'>
            <h1 className='heading'>Skills</h1>

            <section className='skills-interactive'>

                <div className='toggle-container'>
                    <button className={`toggle-btn ${tab === 'hard' ? 'active' : ''}`} onClick={() => setTab('hard')}>
                        Hard Skills
                    </button>
                    <button className={`toggle-btn ${tab === 'soft' ? 'active' : ''}`} onClick={() => setTab('soft')}>
                        Soft Skills
                    </button>
                </div>

                <div className='skills-grid'>
                    {tab === 'hard' ? (
                        hardSkills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className='skill-card hard'
                                /* ANIMACIÓN POP */
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <div className='skill-image-container'>
                                    <img src={skill.imagen} alt={skill.nombre} />
                                </div>
                                <h3>{skill.nombre}</h3>
                            </motion.div>
                        ))
                    ) : (
                        softSkills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className='skill-card soft'
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <div className='skill-icon'>{skill.icon}</div>
                                <h3>{skill.nombre}</h3>
                                <p>{skill.desc}</p>
                            </motion.div>
                        ))
                    )}
                </div>
            </section>
        </div>
    )
}