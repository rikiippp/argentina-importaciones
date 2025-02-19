'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
// import TrustIndicators from './TrustIndicators.jsx'
import '../../styles/hero.css'
import '../../styles/buttons.css'
import CloudsLayer from './CloudsLayer.jsx'


export default function HeroBanner() {
  return (
    <section className="hero-container">
      {/* Background y gradiente */}
      <div className="hero-background" />

      {/* Nubes */}
      <CloudsLayer />

      {/* Contenido principal */}
      <div className="hero-content-wrapper">
        {/* Paracaídas */}
        <div className="parachute-wrapper">
          <Image
            src="/webps/images/BOX-PARACHUTE.webp"
            alt=""
            width={300}
            height={300}
            className="animate-float-parachute"
            priority
          />
        </div>

        {/* Texto y botones */}
        <motion.div 
          className="hero-text-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <div className="hero-content">
            <h1 className="hero-text">
              Conectamos tu empresa
              <br />
              con <span className="text-orange">China</span>, importando
              <br />
              <span className="text-orange">calidad</span>
            </h1>
          </div>
          <p className="hero-description">
            Nuestro equipo transforma desafíos en oportunidades, guiándote en cada paso para que puedas expandir tu negocio de manera segura y eficiente.
          </p>
          <div className="hero-buttons">
            <button
              className="button-base button-primary text-white px-6 py-3 rounded-md font-medium flex items-center justify-center"
              aria-label="Comenzar proceso de importación ahora"
            >
              Empezar Ahora
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>

            <button
              className="button-base button-secondary text-white px-6 py-3 rounded-md font-medium group"
              aria-label="Explorar nuestros servicios de importación"
            >
              Explorar Servicios
            </button>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        {/* <div className="trust-indicators">
          <TrustIndicators />
        </div> */}
      </div>
    </section>
  )
}