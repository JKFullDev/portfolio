import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; // <--- Importamos Link
import { trabajos } from '../data/trabajos';

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
                <a href={proyecto.url} target="_blank" rel="noreferrer" className='btn-work btn-live'>
                    🚀 Ver Demo Online
                </a>
                <a href={proyecto.github} target="_blank" rel="noreferrer" className='btn-work btn-repo'>
                    &lt;/&gt; Ver Código en GitHub
                </a>
            </div>
        </div>
    )
}