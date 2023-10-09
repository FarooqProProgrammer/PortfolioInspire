import React, { useCallback, useEffect, useContext } from 'react'

import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import AnimatedCursor from "react-animated-cursor"
import Blog from './components/Blog'
import { About, Contact, Cta, Footer, Header, Hero, Portfolio, Service, Theme } from './components'
import { ColorContext } from './Hooks/useTheme'
import useRgb from './Hooks/useRgb'
import Education from './components/Education'
import Skills from './components/Skills'

export default function App() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);



 

  return (
    <div className='w-full h-screen'>
      <Particles
        className='relative -z-50'
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#000",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />

      <Header />
      <Hero />
      <About />
      <Education />
        <Skills />
      <Service />
      <Portfolio />
      <Blog />
      <Contact />
      <Cta />
      <Footer />
      <Theme />
      <AnimatedCursor

        color={`${255},${255},${0}`}
      />
    </div>
  )
}
