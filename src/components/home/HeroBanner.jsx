'use client'
import { useEffect, useState, useRef, useMemo } from 'react'
import Image from 'next/image'
// import TrustIndicators from './TrustIndicators.jsx'
import '../../styles/hero.css'
import '../../styles/buttons.css'
import CloudsLayer from './CloudsLayer.jsx'


export default function HeroBanner() {
  const [textIndex, setTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState("Conectamos tu empresa con China, importando calidad")
  const [isDeleting, setIsDeleting] = useState(false)

  const memoizedTexts = useMemo(() => [
    "Conectamos tu empresa con China, importando calidad",
    "Llevamos tu negocio al siguiente nivel con productos exclusivos",
    "Importaciones rápidas, seguras y sin complicaciones"
  ], [])

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      setIsDeleting(true)
    }, 3000)

    return () => clearTimeout(initialDelay)
  }, [])

  useEffect(() => {
    const typeSpeed = 80
    const deleteSpeed = 40
    const pauseTime = 4000

    const type = () => {
      const currentText = memoizedTexts[textIndex]

      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1))

        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 2))

        if (displayText === '') {
          setIsDeleting(false)
          setTextIndex((prev) => (prev + 1) % memoizedTexts.length)
        }
      }
    }

    const timer = setTimeout(type, isDeleting ? deleteSpeed : typeSpeed)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, textIndex, memoizedTexts])

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
        <div className="hero-text-section">
          <div className="hero-content">
            <h1 className="hero-text">
              {displayText}
              <span className="animate-blink">|</span>
            </h1>
          </div>
          <p className="hero-description">
            Nuestro equipo transforma desafíos en oportunidades, guiándote en cada paso para que puedas expandir tu negocio de manera segura y eficiente.</p>
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
        </div>

        {/* Trust Indicators */}
        {/* <div className="trust-indicators">
          <TrustIndicators />
        </div> */}
      </div>
    </section>
  )
}