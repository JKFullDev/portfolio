import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                // 1. ESTO ES LO QUE LO MANDA AL FONDO
                fullScreen: {
                    enable: true,
                    zIndex: -1 // Z-index negativo para que esté detrás
                },
                background: {
                    color: {
                        value: "#0f0f0f", // Tu color de fondo
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: { enable: true, mode: "push" },
                        onHover: { enable: true, mode: "grab" },
                        resize: true,
                    },
                    modes: {
                        push: { quantity: 4 },
                        grab: { distance: 140, links: { opacity: 1 } },
                    },
                },
                particles: {
                    color: { value: "#fa4529" },
                    links: {
                        color: "#fa4529",
                        distance: 150,
                        enable: true,
                        opacity: 0.2,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: { default: "bounce" },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: { enable: true, area: 800 },
                        value: 80,
                    },
                    opacity: { value: 0.5 },
                    shape: { type: "circle" },
                    size: { value: { min: 1, max: 3 } },
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticlesBackground;