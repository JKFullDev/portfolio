import React from 'react';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>

                {/* COLUMNA 1: MARCA */}
                <div className='footer-brand'>
                    <div className='logo'>
                        <span className="logo-symbol">&lt;</span>
                        <span className="logo-text">JC</span>
                        <span className="logo-symbol">/&gt;</span>
                    </div>
                    <p>Desarrollando experiencias web modernas y escalables.</p>
                </div>

                {/* COLUMNA 2: ENLACES */}
                <div className='footer-links'>
                    <h3>Navegación</h3>
                    <ul>
                        <li><NavLink to="/inicio">Inicio</NavLink></li>
                        <li><NavLink to="/sobre-mi">Sobre Mí</NavLink></li>
                        <li><NavLink to="/proyectos">Proyectos</NavLink></li>
                        <li><NavLink to="/servicios">Servicios</NavLink></li>
                        <li><NavLink to="/contacto">Contacto</NavLink></li>
                    </ul>
                </div>

                {/* COLUMNA 3: SOCIAL */}
                <div className='footer-social'>
                    <h3>Conectemos</h3>
                    <div className='social-icons'>
                        <a href="https://linkedin.com/in/jcah-dev" target='_blank' rel='noreferrer'>LinkedIn</a>
                        <a href="https://github.com/JKFullDev" target='_blank' rel='noreferrer'>GitHub</a>
                    </div>
                    <p className='email-tag'>jcarlos.al.hr@gmail.com</p>
                </div>

            </div>

            <div className='footer-bottom'>
                &copy; {new Date().getFullYear()} Juan Carlos Alonso Hernando. Todos los derechos reservados
            </div>
        </footer>
    )
}