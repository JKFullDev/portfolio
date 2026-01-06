import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Inicio = () => {
    return (
        <div className='home'>

            <h1>
                Hola, soy Juan Carlos Alonso y soy <strong>Desarrollador Full-Stack</strong> en Madrid,
                y ofrezco mis servicios de <strong>programación</strong>  y desarrollo en todo tipo de
                proyectos web.
            </h1>

            <h2 className='title'>
                Te ayudo a crear tu sitio o aplicación web, tener más visibilidad y
                relevancia en internet. <Link to="/contacto">Contacta conmigo</Link>
            </h2>

            <section className='last-works'>
                <h2 className='heading'>Algunos de mis proyectos</h2>
                <p>Estos son alguno de mis trabajos de desarrollo web</p>

                <ListadoTrabajos limite="3" />

            </section>

        </div>
    )
}
