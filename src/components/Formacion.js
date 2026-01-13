import React from 'react';
import { motion } from 'framer-motion';

export const Formacion = () => {

    // DATOS: Formación Académica
    const estudiosOficiales = [
        {
            titulo: "CFGS Desarrollo de Aplicaciones Web",
            centro: "Prometeo by ThePowerFP",
            fecha: "Actualidad",
            desc: "Titulación oficial centrada en la arquitectura de aplicaciones web. Formación exhaustiva en diseño de interfaces, lógica de servidor, gestión avanzada de bases de datos y metodologías ágiles.",
        },
        {
            titulo: "Máster Full Stack Developer",
            centro: "Prometeo by ThePowerFP",
            fecha: "Actualidad",
            desc: "Programa intensivo enfocado en el stack MERN (MongoDB, Express, React, Node.js). Desarrollo de aplicaciones SPA escalables, consumo de APIs y gestión de estado global."
        },
        {
            titulo: "Bachillerato de Ciencias y Tecnología",
            centro: "I.E.S. Pradolongo",
            fecha: "2021",
            desc: "Base académica sólida centrada en lógica matemática y fundamentos tecnológicos, clave para el pensamiento computacional.",
            certificado: "/images/titulos/bachillerato.pdf"
        },
    ];

    // DATOS: Formación Complementaria
    const cursosComplementarios = [
        {
            titulo: "Máster en PHP, SQL, POO, MVC, Laravel",
            centro: "Udemy (Víctor Robles)",
            fecha: "2024",
            desc: "Formación backend profesional. Dominio de PHP 8, bases de datos relacionales y patrones MVC. Desarrollo con Laravel y Symfony.",
        },
        {
            titulo: "Máster en React: Hooks, MERN & Redux",
            centro: "Udemy (Víctor Robles)",
            fecha: "Actualidad",
            desc: "Especialización profunda en el ecosistema React. Desarrollo de SPAs modernas utilizando Hooks, Context API y Redux."
        },
        {
            titulo: "Máster PowerIA v.3",
            centro: "Prometeo by ThePowerFP",
            fecha: "Actualidad",
            desc: "Formación avanzada en Inteligencia Artificial aplicada al desarrollo. Uso de Copilots y automatización."
        },
    ];

    // COMPONENTE AUXILIAR TARJETA
    const CardFormacion = ({ item, index, tipo }) => (
        <motion.div
            key={index}
            className={`edu-card ${tipo}`}
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

                {/* BOTÓN DESCARGA TÍTULO (PDF) */}
                {item.certificado && (
                    <a
                        href={item.certificado}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='btn-certificado'
                        onClick={(e) => e.stopPropagation()}
                        title="Ver certificado oficial en PDF"
                    >
                        Ver Título
                    </a>
                )}
            </div>
        </motion.div>
    );

    return (
        <div className='page'>
            <h1 className='heading'>Formación</h1>

            <section className='education-section'>

                {/* Bloque 1: Oficial */}
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
                        <CardFormacion item={item} index={index} key={index} tipo="oficial" />
                    ))}
                </div>

                {/* Bloque 2: Complementaria */}
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
                        <CardFormacion item={item} index={index} key={index} tipo="complementaria" />
                    ))}
                </div>

            </section>
        </div>
    )
}