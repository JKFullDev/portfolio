import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { trabajos } from '../data/trabajos';

export const Proyecto = () => {

    const [proyecto, setProyecto] = useState({});
    const params = useParams();

    useEffect(() => {
        let proyectoEncontrado = trabajos.filter(trabajo => trabajo.id === params.id);
        setProyecto(proyectoEncontrado[0]);
    }, [params.id]);

    return (
        <div className='page page-work'>
            <div className='mask'>
                {proyecto.id &&
                    <img src={"/images/" + proyecto.id + ".png"} alt={"Imagen de " + proyecto.nombre} />
                }
            </div>

            <h1 className='heading'>{proyecto.nombre}</h1>
            <div className='techs'>{proyecto.tecnologias}</div>
            <p className='description'>{proyecto.descripcion}</p>

            <div className='btns-project'>
                <a href={proyecto.url} target='_blank' rel='noreferrer' className='btn-work'>
                    🌐 Ver Proyecto
                </a>

                {proyecto.github &&
                    <a href={proyecto.github} target='_blank' rel='noreferrer' className='btn-work btn-github'>
                        📂 Ver Código
                    </a>
                }
            </div>
        </div>
    )
}