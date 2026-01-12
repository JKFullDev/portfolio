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
import { Skills } from '../components/Skills';
import { Formacion } from '../components/Formacion';

export const MisRutas = () => {
    return (
        <BrowserRouter>
            <HeaderNav />

            {/* AÑADIMOS 'layout' AQUÍ PARA CENTRAR SOLO EL CONTENIDO */}
            <section className='content layout'>
                <Routes>
                    {/* ... tus rutas siguen igual ... */}
                    <Route path='/' element={<Navigate to="/inicio" />} />
                    <Route path='/inicio' element={<Inicio />} />
                    <Route path='/proyectos' element={<Proyectos />} />
                    <Route path='/servicios' element={<Servicios />} />
                    <Route path='/sobre-mi' element={<SobreMi />} />
                    <Route path='/skills' element={<Skills />} />
                    <Route path='/formacion' element={<Formacion />} />
                    <Route path='/contacto' element={<Contacto />} />
                    <Route path='/proyecto/:id' element={<Proyecto />} />
                    <Route path='*' element={<h1 className='heading'>Error 404</h1>} />
                </Routes>
            </section>

            <Footer />
        </BrowserRouter>
    )
}