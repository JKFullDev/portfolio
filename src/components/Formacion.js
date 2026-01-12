import React from 'react';
import { motion } from 'framer-motion'; // <--- IMPORTAMOS ANIMACIÓN

export const Formacion = () => {

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

    return (
        <div className='page'>
            <h1 className='heading'>Formación</h1>

            <section className='education-section'>

                {/* ANIMACIÓN TÍTULO SECCIÓN */}
                <motion.h2
                    className='section-title'
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    Estudios Oficiales
                </motion.h2>

                <div className='education-grid'>
                    {estudiosOficiales.map((item, index) => (
                        <motion.div
                            key={index}
                            className='edu-card'
                            /* ANIMACIÓN TARJETAS */
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }} // Retraso en cascada
                        >
                            <div className='edu-header'>
                                <span className='edu-year'>{item.fecha}</span>
                                <h3>{item.titulo}</h3>
                                <span className='edu-center'>{item.centro}</span>
                            </div>
                            <div className='edu-body'>
                                <p>{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.h2
                    className='section-title'
                    style={{ marginTop: '50px' }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    Formación Complementaria
                </motion.h2>

                <div className='education-grid'>
                    {cursosComplementarios.map((item, index) => (
                        <motion.div
                            key={index}
                            className='edu-card complementaria'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className='edu-header'>
                                <span className='edu-year'>{item.fecha}</span>
                                <h3>{item.titulo}</h3>
                                <span className='edu-center'>{item.centro}</span>
                            </div>
                            <div className='edu-body'>
                                <p>{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </section>
        </div>
    )
}