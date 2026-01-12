import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export const HeaderNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Función unificada para cerrar menú y subir al principio
    const handleNavigation = () => {
        setMenuOpen(false);
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Desplazamiento suave
        });
    };

    return (
        <header className='header'>

            {/* LOGO CLICABLE A INICIO */}
            <Link to="/inicio" className='logo' onClick={handleNavigation}>
                <span className="logo-symbol">&lt;</span>
                <span className="logo-text">JC</span>
                <span className="logo-symbol">/&gt;</span>
            </Link>

            {/* BOTÓN HAMBURGUESA */}
            <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="line top"></div>
                <div className="line middle"></div>
                <div className="line bottom"></div>
            </div>

            {/* NAVEGACIÓN */}
            <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                <ul>
                    <li>
                        <NavLink to="/inicio" onClick={handleNavigation}>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sobre-mi" onClick={handleNavigation}>Sobre Mí</NavLink>
                    </li>
                    <li>
                        <NavLink to="/formacion" onClick={handleNavigation}>Formación</NavLink>
                    </li>
                    <li>
                        <NavLink to="/skills" onClick={handleNavigation}>Skills</NavLink>
                    </li>
                    <li>
                        <NavLink to="/proyectos" onClick={handleNavigation}>Proyectos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/servicios" onClick={handleNavigation}>Servicios</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto" onClick={handleNavigation}>Contacto</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}