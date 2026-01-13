import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { trabajos } from '../data/trabajos';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

export const Proyectos = () => {

    // Estado para controlar qué categoría se muestra ('profesional' o 'personal')
    const [categoria, setCategoria] = useState('personal');

    // Filtramos los trabajos según la categoría seleccionada
    const trabajosFiltrados = trabajos.filter(trabajo => trabajo.tipo === categoria);

    return (
        <div className='page'>
            <h1 className='heading'>Mis Proyectos</h1>

            {/* SISTEMA DE PESTAÑAS (BOTONES) */}
            <div className='projects-tabs'>
                <button
                    className={`tab-btn ${categoria === 'personal' ? 'active' : ''}`}
                    onClick={() => setCategoria('personal')}
                >
                    👨‍💻 Proyectos Personales
                </button>
                <button
                    className={`tab-btn ${categoria === 'profesional' ? 'active' : ''}`}
                    onClick={() => setCategoria('profesional')}
                >
                    💼 Proyectos Profesionales
                </button>

            </div>

            {/* GRID DE PROYECTOS */}
            <motion.section
                className='works'
                layout
            >
                <AnimatePresence mode="popLayout">
                    {trabajosFiltrados.map((trabajo) => (
                        <motion.div
                            key={trabajo.id}
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Tilt
                                tiltMaxAngleX={10}
                                tiltMaxAngleY={10}
                                scale={1.02}
                                transitionSpeed={2500}
                                glareEnable={true}
                                glareMaxOpacity={0.3}
                                glareColor="#ffffff"
                                style={{ height: '100%' }}
                            >
                                <Link to={"/proyecto/" + trabajo.id} className='work-item'>
                                    <div className='mask'>
                                        <img
                                            src={"/images/" + trabajo.id + ".png"}
                                            alt={trabajo.nombre}
                                            onError={(e) => e.target.src = "/images/Proyecto1.png"}
                                        />
                                    </div>
                                    <span>{trabajo.categorias}</span>
                                    <h2>{trabajo.nombre}</h2>
                                    <h3>{trabajo.tecnologias}</h3>
                                </Link>
                            </Tilt>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.section>

            {/* MENSAJE SI NO HAY PROYECTOS */}
            {trabajosFiltrados.length === 0 && (
                <p className='no-projects'>Próximamente más proyectos en esta sección...</p>
            )}

        </div>
    )
}