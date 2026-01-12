import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

export const Contacto = () => {

    const [formulario, setFormulario] = useState({
        nombre: '',
        apellido: '',
        email: '',
        motivo: ''
    });

    const changed = ({ target }) => {
        const { name, value } = target;
        setFormulario({ ...formulario, [name]: value });
    }

    const enviarEmail = (e) => {
        e.preventDefault();

        if (!formulario.nombre || !formulario.email || !formulario.motivo) {
            toast.error("Por favor, rellena todos los campos obligatorios.");
            return;
        }

        const promesaEnvio = new Promise((resolve) => {
            setTimeout(() => { resolve(); }, 2000);
        });

        toast.promise(promesaEnvio, {
            loading: 'Enviando mensaje...',
            success: () => {
                setFormulario({ nombre: '', apellido: '', email: '', motivo: '' });
                return '¡Mensaje enviado correctamente! Te responderé pronto.';
            },
            error: 'Hubo un error al enviar.',
        });
    };

    return (
        <div className='page'>
            <h1 className='heading'>Contacto</h1>

            <div className='contact-container'>

                {/* COLUMNA 1: INFO (Entra desde la izquierda) */}
                <motion.div
                    className='contact-info'
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3>Hablemos</h3>
                    <p>Estoy disponible para nuevos proyectos y oportunidades laborales. ¿Tienes una idea en mente? ¡Cuéntame!</p>

                    <div className='info-item'>
                        <span>📧</span>
                        <p>jcarlos.al.hr@gmail.com</p>
                    </div>
                    <div className='info-item'>
                        <span>📍</span>
                        <p>Madrid, España</p>
                    </div>
                </motion.div>

                {/* COLUMNA 2: FORMULARIO (Entra desde la derecha) */}
                <motion.form
                    className='contact-form'
                    onSubmit={enviarEmail}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className='form-group'>
                        <input
                            type="text" name="nombre" placeholder="Nombre"
                            value={formulario.nombre} onChange={changed} required
                        />
                        <input
                            type="text" name="apellido" placeholder="Apellidos"
                            value={formulario.apellido} onChange={changed}
                        />
                    </div>

                    <input
                        type="email" name="email" placeholder="Email"
                        value={formulario.email} onChange={changed} required
                    />

                    <textarea
                        name="motivo" placeholder="Motivo de contacto"
                        value={formulario.motivo} onChange={changed} required
                    ></textarea>

                    <input type="submit" value="Enviar Mensaje" />
                </motion.form>
            </div>
        </div>
    )
}