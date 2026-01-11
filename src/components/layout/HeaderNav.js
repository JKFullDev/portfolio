import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const HeaderNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className='header'>

            {/* NUEVO LOGO SIMÉTRICO <JC /> */}
            <div className='logo'>
                <span className="logo-symbol">&lt;</span>
                <span className="logo-text">JC</span>
                <span className="logo-symbol">/&gt;</span>
            </div>

            {/* BOTÓN HAMBURGUESA MEJORADO */}
            <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="line top"></div>
                <div className="line middle"></div>
                <div className="line bottom"></div>
            </div>

            {/* NAVEGACIÓN */}
            <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                <ul>
                    <li>
                        <NavLink to="/inicio" onClick={closeMenu}>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portafolio" onClick={closeMenu}>Portafolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/servicios" onClick={closeMenu}>Servicios</NavLink>
                    </li>
                    <li>
                        <NavLink to="/curriculum" onClick={closeMenu}>Curriculum</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto" onClick={closeMenu}>Contacto</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}