import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ListadoTrabajos } from './ListadoTrabajos';

export const Inicio = () => {
    // Lógica del efecto de escritura
    const [text, setText] = useState('');
    const fullText = "Desarrollador Full Stack";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;
            if (index > fullText.length) clearInterval(interval);
        }, 100); // Velocidad de escritura (ms)
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='home'>
            <h1>
                Hola, soy Juan Carlos <br />
                {/* Texto animado con cursor parpadeante */}
                <span className='typewriter'>{text}</span><span className='cursor'>|</span>
            </h1>

            <h2 className='title'>
                Te ayudo a crear sitios web modernos, rápidos y escalables.
                <br /> ¿Tienes un proyecto? <Link to="/contacto">Hablemos.</Link>
            </h2>

            <section className='last-works'>
                <h2 className='heading'>Últimos Proyectos</h2>
                <ListadoTrabajos limite="3" />
            </section>
        </div>
    )
}