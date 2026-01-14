import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { trabajos } from '../data/trabajos';
import { motion } from 'framer-motion';

export const Proyecto = () => {
    const [proyecto, setProyecto] = useState({});
    const params = useParams();

    useEffect(() => {
        let proyectoFiltrado = trabajos.filter(trabajo => trabajo.id === params.id);
        setProyecto(proyectoFiltrado[0]);
    }, [params.id]);

    return (
        <div className='page page-work'>

            {/* BOTÓN VOLVER (NUEVO) */}
            <div className='back-container'>
                <Link to="/proyectos" className='btn-back'>
                    &#8592; Volver a Proyectos
                </Link>
            </div>

            {/* Contenido del Proyecto */}
            <h1 className='heading'>{proyecto.nombre}</h1>

            <div className='mask'>
                {proyecto.id && (
                    <img src={"/images/" + proyecto.id + ".png"} alt={proyecto.nombre} />
                )}
            </div>

            <div className='tech-stack'>
                {proyecto.tecnologias && proyecto.tecnologias.split(',').map((tech, index) => (
                    <span key={index} className='tech-tag'>{tech.trim()}</span>
                ))}
            </div>

            <p className='description'>{proyecto.descripcion}</p>

            <div className='btns-project'>
                {proyecto.url && (
                    <a href={proyecto.url} target="_blank" rel="noreferrer" className='btn-work btn-live'>
                        Ver Aplicación
                    </a>
                )}
                {proyecto.github && (
                    <a href={proyecto.github} target="_blank" rel="noreferrer" className='btn-work btn-github-project'>
                        Ver Código en GitHub
                    </a>
                )}
            </div>

            {/* SECCIÓN DE LOGROS */}
            {proyecto.logros && (
                <motion.div
                    className='achievements-section'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.05 }}
                >
                    <h3>Logros y Objetivos Alcanzados</h3>
                    <ul>
                        {proyecto.logros.map((logro, index) => (
                            <li key={index}>
                                <span className="check">✔</span> {logro}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </div>
    )
}