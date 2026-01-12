import React from 'react';
import { Link } from 'react-router-dom';
import { trabajos } from '../data/trabajos';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt'; // <--- IMPORTAMOS LA LIBRERÍA

export const ListadoTrabajos = ({ limite }) => {
    return (
        <section className='works'>
            {
                trabajos.slice(0, limite).map((trabajo, index) => {
                    return (
                        <motion.div
                            key={trabajo.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Tilt
                                tiltMaxAngleX={10}
                                tiltMaxAngleY={10}
                                scale={1.05}
                                transitionSpeed={2500}

                            >
                                <Link to={"/proyecto/" + trabajo.id} className='work-item'>
                                    <div className='mask'>
                                        <img src={"/images/" + trabajo.id + ".png"} alt={trabajo.nombre} />
                                    </div>
                                    <span>{trabajo.categorias}</span>
                                    <h2>{trabajo.nombre}</h2>
                                    <h3>{trabajo.tecnologias}</h3>
                                </Link>
                            </Tilt>
                        </motion.div>
                    );
                })
            }
        </section>
    )
}