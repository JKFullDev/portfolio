import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Inicio } from '../components/Inicio';
import { Proyectos } from '../components/Proyectos';
import { Servicios } from '../components/Servicios';
import { Contacto } from '../components/Contacto';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';
import { Proyecto } from '../components/Proyecto';
import { SobreMi } from '../components/SobreMi';

export const MisRutas = () => {
    return (
        <BrowserRouter>
            {/* HEADER Y NAVEGACION */}
            <HeaderNav />

            {/* CONTENIDO CENTRAL */}
            <section className='content'>
                <Routes>
                    <Route path='/' element={<Navigate to="/inicio" />} />
                    <Route path='/inicio' element={<Inicio />} />
                    <Route path='/proyectos' element={<Proyectos />} />
                    <Route path='/servicios' element={<Servicios />} />
                    <Route path='/sobre-mi' element={<SobreMi />} />
                    <Route path='/contacto' element={<Contacto />} />
                    <Route path='/proyecto/:id' element={<Proyecto />} />
                    <Route path='*' element={
                        <div className='page'>
                            <h1 className='heading'>Error 404</h1>
                        </div>
                    } />
                </Routes>
            </section>

            {/* FOOTER */}
            <Footer />

        </BrowserRouter>
    )
}
