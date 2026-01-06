import React from 'react';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-content'>

                {/* COLUMNA 1: Marca Personal */}
                <div className='footer-section'>
                    <h2 className='footer-logo'>JC</h2>
                    <p>
                        Desarrollador Web Full Stack especializado en crear
                        experiencias digitales funcionales y modernas.
                    </p>
                </div>

                {/* COLUMNA 2: Navegación Rápida */}
                <div className='footer-section'>
                    <h3>Explora</h3>
                    <ul className='footer-links'>
                        <li><NavLink to="/inicio">Inicio</NavLink></li>
                        <li><NavLink to="/portafolio">Portafolio</NavLink></li>
                        <li><NavLink to="/servicios">Servicios</NavLink></li>
                        <li><NavLink to="/curriculum">Currículum</NavLink></li>
                        <li><NavLink to="/contacto">Contacto</NavLink></li>
                    </ul>
                </div>

                {/* COLUMNA 3: Contacto */}
                <div className='footer-section'>
                    <h3>Conectemos</h3>
                    <p>¿Tienes un proyecto en mente?</p>
                    <p className='contact-highlight'>jcarlos.al.hr@gmail.com</p>
                    <p>Madrid, España</p>

                    <div className='social-links'>
                        <a href="https://linkedin.com/in/jcah-dev" target='_blank' rel='noreferrer'>LinkedIn</a>
                        {/* Si tienes GitHub ponlo aquí, si no, borra esta línea */}
                        {/* <a href="https://github.com/TU_USUARIO" target='_blank' rel='noreferrer'>GitHub</a> */}
                    </div>
                </div>
            </div>

            <div className='footer-bottom'>
                &copy; {new Date().getFullYear()} Juan Carlos Alonso Hernando - Todos los derechos reservados
            </div>
        </footer>
    )
}