import React from 'react'

export const Contacto = () => {
    return (
        <div className='page'>
            <h1 className='heading'>Contacto</h1>

            <div className='contact-container'>

                {/* COLUMNA 1: Información directa */}
                <div className='contact-info'>
                    <h3>Hablemos de tu proyecto</h3>
                    <p>
                        ¿Tienes una idea en mente? Estoy disponible para trabajos freelance y colaboraciones.
                        Rellena el formulario o contáctame directamente.
                    </p>

                    <div className='info-item'>
                        <span className='icon'>📍</span>
                        <p>Madrid, 28026</p>
                    </div>
                    <div className='info-item'>
                        <span className='icon'>📞</span>
                        <p>617 36 41 94</p>
                    </div>
                    <div className='info-item'>
                        <span className='icon'>✉️</span>
                        <p>jcarlos.al.hr@gmail.com</p>
                    </div>
                </div>

                {/* COLUMNA 2: Formulario Estilizado */}
                <form className='contact-form' action="mailto:jcarlos.al.hr@gmail.com" method="post" encType="text/plain">
                    <div className='input-group'>
                        <input type='text' name='nombre' placeholder='Nombre' required />
                        <input type='text' name='apellidos' placeholder='Apellidos' required />
                    </div>

                    <input type='email' name='email' placeholder='Email' required />

                    <textarea name='motivo' placeholder='Motivo de contacto' required></textarea>

                    <input type='submit' value='Enviar Mensaje' className='btn-submit' />
                </form>

            </div>
        </div>
    )
}