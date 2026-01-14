import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
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

    const enviarEmail = async (e) => {
        e.preventDefault();
        console.log("Intentando enviar formulario...", formulario); // LOG 1

        if (!formulario.nombre || !formulario.email || !formulario.motivo) {
            toast.error("Por favor, rellena todos los campos obligatorios.");
            return;
        }

        const data = {
            service_id: 'service_xwrbl7w',
            template_id: 'template_o2oeisw',
            user_id: 'PcNtBofStCSBj7WWL',
            template_params: {
                nombre: formulario.nombre,
                apellido: formulario.apellido,
                email: formulario.email,
                motivo: formulario.motivo
            }
        };

        const promesaEnvio = fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then(async (response) => {
                console.log("Respuesta del servidor:", response); // LOG 2
                if (response.ok) {
                    setFormulario({ nombre: '', apellido: '', email: '', motivo: '' });
                    return '¡Mensaje enviado correctamente! Te responderé pronto.';
                } else {
                    const text = await response.text();
                    console.error("Error en respuesta:", text); // LOG ERROR
                    throw new Error(text);
                }
            })
            .catch((error) => {
                console.error("Error capturado en el catch:", error); // LOG ERROR FINAL
                throw error;
            });

        toast.promise(promesaEnvio, {
            loading: 'Enviando mensaje...',
            success: (mensaje) => mensaje,
            error: 'Hubo un error al enviar. Mira la consola (F12).',
        });
    };

    return (
        <div className='page'>
            <h1 className='heading'>Contacto</h1>

            <div className='contact-container'>
                <motion.div
                    className='contact-info'
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3>Hablemos</h3>
                    <p>Estoy disponible para nuevos proyectos y oportunidades laborales. ¿Tienes una idea en mente? ¡Cuéntame!</p>
                    <div className='info-item'><span>📧</span><p>jcarlos.al.hr@gmail.com</p></div>
                    <div className='info-item'><span>📍</span><p>Madrid, España</p></div>
                </motion.div>

                <motion.form
                    className='contact-form'
                    onSubmit={enviarEmail}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className='form-group'>
                        <input type="text" name="nombre" placeholder="Nombre" value={formulario.nombre} onChange={changed} required />
                        <input type="text" name="apellido" placeholder="Apellidos" value={formulario.apellido} onChange={changed} />
                    </div>
                    <input type="email" name="email" placeholder="Email" value={formulario.email} onChange={changed} required />
                    <textarea name="motivo" placeholder="Motivo de contacto" value={formulario.motivo} onChange={changed} required ></textarea>
                    <input type="submit" value="Enviar Mensaje" />
                </motion.form>
            </div>

            <Toaster
                position="top-center"
                containerStyle={{
                    top: 100,
                    zIndex: 99999
                }}
            />
        </div>
    )
}