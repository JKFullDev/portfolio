import React from 'react';
import { motion } from 'framer-motion';

export const SobreMi = () => {
    return (
        <div className='page sobre-mi'>
            <h1 className='heading'>Sobre Mí</h1>

            <section className='about-container'>

                {/* COLUMNA 1: FOTO CON EFECTO */}
                <motion.div
                    className='about-image-wrapper'
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className='image-frame'>
                        <img src="/images/foto-cv.png" alt="Juan Carlos Alonso" />
                    </div>
                </motion.div>

                {/* COLUMNA 2: TEXTO Y BIO */}
                <motion.div
                    className='about-content'
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h2 className='sub-heading'>Desarrollador Web Full Stack</h2>
                    <p>
                        ¡Hola! Soy <strong>Juan Carlos</strong>. Me apasiona comprender cómo funcionan las aplicaciones 'bajo el capó', centrándome en la creación de lógica robusta y arquitecturas de datos eficientes.
                    </p>
                    <p>
                        Actualmente, dedico mi formación a dominar el stack MERN, pero siempre con una mirada puesta en el Backend. Mi objetivo no es solo que el código cumpla su función, sino que sea limpio, estructurado y escalable desde la base. Me interesa especialmente la integridad de los datos y la optimización de procesos.
                    </p>

                    {/* PEQUEÑOS DATOS CURIOSOS (STATS) */}
                    <div className='stats-grid'>
                        <div className='stat-item'>
                            <span className='stat-number'>Full Stack</span>
                            <span className='stat-label'>Perfil Técnico</span>
                        </div>
                        <div className='stat-item'>
                            <span className='stat-number'>100%</span>
                            <span className='stat-label'>Compromiso</span>
                        </div>
                        <div className='stat-item'>
                            <span className='stat-number'>∞</span>
                            <span className='stat-label'>Ganas de Aprender</span>
                        </div>
                    </div>

                    <a href="/CV_DAW.pdf" download="CV_JuanCarlos_Alonso.pdf" className='btn-main-download'>
                        📄 Descargar CV Actualizado
                    </a>
                </motion.div>

            </section>
        </div>
    )
}