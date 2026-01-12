import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Servicios = () => {
    return (
        <div className='page'>
            <h1 className='heading'>Mis Servicios</h1>

            <section className='services-container'>

                {/* SERVICIO 1 */}
                <motion.article
                    className='service-card'
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2 }}
                >
                    <div className='icon'>💻</div>
                    <h2>Desarrollo Web Full Stack</h2>
                    <p>
                        Creo aplicaciones web modernas y escalables desde cero.
                        Domino el stack MERN (Mongo, Express, React, Node) y PHP para
                        desarrollar funcionalidades complejas y paneles de administración a medida.
                    </p>
                    <ul className='service-tags'>
                        <li>React / Next.js</li>
                        <li>APIs REST</li>
                        <li>Bases de Datos</li>
                    </ul>
                </motion.article>

                {/* SERVICIO 2 */}
                <motion.article
                    className='service-card'
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2 }}
                >
                    <div className='icon'>🤖</div>
                    <h2>Integración de IA & Chatbots</h2>
                    <p>
                        Llevo tu web al siguiente nivel integrando Inteligencia Artificial.
                        Desde chatbots inteligentes con la API de OpenAI hasta asistentes
                        virtuales que mejoran la atención al cliente 24/7.
                    </p>
                    <ul className='service-tags'>
                        <li>OpenAI API</li>
                        <li>Chatbots</li>
                        <li>Prompt Engineering</li>
                    </ul>
                </motion.article>

                {/* SERVICIO 3 */}
                <motion.article
                    className='service-card'
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2 }}
                >
                    <div className='icon'>⚙️</div>
                    <h2>Automatización de Procesos</h2>
                    <p>
                        ¿Tareas repetitivas? Las automatizo. Conecto tus aplicaciones favoritas
                        (Gmail, Notion, Excel) mediante scripts o herramientas como Make/n8n
                        para que ahorres horas de trabajo manual.
                    </p>
                    <ul className='service-tags'>
                        <li>Make / n8n</li>
                        <li>Scripts PHP</li>
                        <li>Web Scraping</li>
                    </ul>
                </motion.article>

                {/* SERVICIO 4 */}
                <motion.article
                    className='service-card'
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2 }}
                >
                    <div className='icon'>🚀</div>
                    <h2>Webs Corporativas & SEO</h2>
                    <p>
                        Diseño y desarrollo sitios web en WordPress optimizados para buscadores.
                        Ideales para pymes o marcas personales que necesitan presencia online
                        rápida, bonita y autogestionable.
                    </p>
                    <ul className='service-tags'>
                        <li>WordPress</li>
                        <li>SEO Básico</li>
                        <li>Landing Pages</li>
                    </ul>
                </motion.article>

            </section>

            {/* LLAMADA A LA ACCIÓN FINAL */}
            <div className='cta-section'>
                <h2>¿Tienes una idea en mente?</h2>
                <p>Cuéntame tu proyecto y busquemos la mejor solución tecnológica.</p>
                <Link to="/contacto" className='btn-cta'>Contáctame</Link>
            </div>

        </div>
    )
}