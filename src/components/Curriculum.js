import React from 'react'

export const Curriculum = () => {
    return (
        <div className='page curriculum'>
            <h1 className='heading'>Currículum</h1>

            <div className='curriculum-header'>
                <div className='profile-container'>
                    {/* La foto tal cual la tienes, sin editar */}
                    <img src="/images/foto-cv.png" alt="Juan Carlos Alonso" className='profile-pic' />

                    <div className='profile-text'>
                        <h2>Juan Carlos Alonso Hernando</h2>
                        <h3>Desarrollador Web Full Stack</h3>

                        {/* SECCIÓN DE CONTACTO AÑADIDA */}
                        <div className='contact-mini'>
                            <span className='item'>📍 Madrid, 28026</span>
                            <span className='item'>📞 617 36 41 94</span>
                            <span className='item'>✉️ jcarlos.al.hr@gmail.com</span>
                            <span className='item'>🔗 <a href="https://linkedin.com/in/jcah-dev" target="_blank" rel="noreferrer">linkedin.com/in/jcah-dev</a></span>
                        </div>
                    </div>
                </div>

                <a href="/CV_DAW.pdf" download="CV_JuanCarlos_Alonso.pdf" className='btn-download'>
                    Descargar PDF Oficial
                </a>
            </div>

            <section className='curriculum-section'>
                <h2>Formación Académica</h2>
                <ul className='timeline'>
                    <li>
                        <span className='date'>2024 - Actualidad</span>
                        <div className='info'>
                            <h3>CFGS Desarrollo de Aplicaciones Web</h3>
                            <p>Prometeo by The PowerFP, Madrid</p>
                        </div>
                    </li>
                    <li>
                        <span className='date'>2024 - Actualidad</span>
                        <div className='info'>
                            <h3>Máster Full Stack Developer</h3>
                            <p>Prometeo by The PowerFP, Madrid</p>
                        </div>
                    </li>
                    <li>
                        <span className='date'>2024 - Actualidad</span>
                        <div className='info'>
                            <h3>Máster PowerIA v.3</h3>
                            <p>Prometeo by The PowerFP, Madrid</p>
                        </div>
                    </li>
                    <li>
                        <span className='date'>2019 - 2021</span>
                        <div className='info'>
                            <h3>Bachillerato Ciencias Tecnológicas</h3>
                            <p>I.E.S. Pradolongo, Madrid</p>
                        </div>
                    </li>
                </ul>
            </section>

            <section className='curriculum-section'>
                <h2>Experiencia Laboral</h2>
                <ul className='timeline'>
                    <li>
                        <span className='date'>2025</span>
                        <div className='info'>
                            <h3>Desarrollador Full Stack (Prácticas)</h3>
                            <p className='place'>Dartia, Madrid</p>
                            <p className='description'>Automatización de procesos, scripts en PHP y colaboración en lanzamiento de MVP.</p>
                        </div>
                    </li>
                    <li>
                        <span className='date'>2023 - 2024</span>
                        <div className='info'>
                            <h3>Conductor de Taxi</h3>
                            <p className='place'>Taxi Madrid</p>
                            <p className='description'>Comunicación efectiva con clientes y gestión de incidencias en tiempo real.</p>
                        </div>
                    </li>
                    <li>
                        <span className='date'>2022 - 2023</span>
                        <div className='info'>
                            <h3>Cajero / Reponedor</h3>
                            <p className='place'>Mercadona</p>
                            <p className='description'>Trabajo en equipo y gestión eficiente de procesos en un entorno de alta demanda.</p>
                        </div>
                    </li>
                    <li>
                        <span className='date'>2021 - 2022</span>
                        <div className='info'>
                            <h3>Repartidor</h3>
                            <p className='place'>Papa John's</p>
                            <p className='description'>Organización de tiempos y resolución de incidencias en entregas.</p>
                        </div>
                    </li>
                </ul>
            </section>

            <section className='curriculum-section'>
                <h2>Stack Tecnológico</h2>
                <div className='skills-container'>
                    <div className='skill-group'>
                        <h3>Web & Frameworks</h3>
                        <div className='tags'>
                            <span>HTML</span><span>CSS</span><span>JavaScript</span>
                            <span>React</span><span>Next.js</span><span>Angular</span>
                            <span>PHP</span><span>Node.js</span>
                        </div>
                    </div>
                    <div className='skill-group'>
                        <h3>IA & Automatización</h3>
                        <div className='tags'>
                            <span>OpenAI</span><span>Microsoft Copilots</span>
                            <span>Make</span><span>n8n</span>
                        </div>
                    </div>
                    <div className='skill-group'>
                        <h3>Herramientas</h3>
                        <div className='tags'>
                            <span>Git</span><span>Docker</span><span>MySQL Workbench</span><span>PostgreSQL</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECCIONES NUEVAS: HABILIDADES PERSONALES E IDIOMAS */}
            <div className='two-columns'>
                <section className='curriculum-section'>
                    <h2>Habilidades Personales</h2>
                    <ul className='check-list'>
                        <li>Trabajo en equipo y comunicación efectiva</li>
                        <li>Resolución de problemas</li>
                        <li>Organización y gestión del tiempo</li>
                        <li>Actitud positiva</li>
                        <li>Proactividad</li>
                    </ul>
                </section>

                <section className='curriculum-section'>
                    <h2>Idiomas</h2>
                    <ul className='check-list'>
                        <li><strong>Español:</strong> Nativo</li>
                        <li><strong>Inglés:</strong> C1 (Cursando actualmente)</li>
                    </ul>
                </section>
            </div>

            {/* SECCIÓN NUEVA: MÁS INFORMACIÓN */}
            <section className='curriculum-section'>
                <h2>Más Información</h2>
                <ul className='info-list'>
                    <li>🚗 Carnet de conducir (B y A2) y vehículo propio.</li>
                    <li>💻 Interés en desarrollo web full stack, automatización y aplicaciones basadas en IA.</li>
                    <li>📚 Formación continua a través de recursos online (freeCodeCamp, documentación oficial, comunidades de desarrolladores).</li>
                    <li>🎨 Diseño de webs usando Wordpress.</li>
                </ul>
            </section>

        </div>
    )
}