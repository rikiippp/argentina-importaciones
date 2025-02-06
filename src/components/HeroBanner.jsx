'use client'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import TrustIndicators from './TrustIndicators.jsx'
import '../styles/hero.css'


export default function HeroBanner() {
  const [textIndex, setTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState("Conectamos tu negocio con el mundo desde China a Argentina")
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = [
    "Conectamos tu negocio con el mundo desde China a Argentina",
    "Importaciones rápidas, seguras y sin complicaciones",
    "Importar nunca fue tan fácil: tu puerta al comercio internacional"
  ]

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      setIsDeleting(true)
    }, 3000)

    return () => clearTimeout(initialDelay)
  }, [])

  useEffect(() => {
    const typeSpeed = 100
    const deleteSpeed = 40
    const pauseTime = 2500

    const type = () => {
      const currentText = texts[textIndex]

      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1))
        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1))
        if (displayText === '') {
          setIsDeleting(false)
          setTextIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }

    const timer = setTimeout(type, isDeleting ? deleteSpeed : typeSpeed)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, textIndex, texts])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const parachute = document.querySelector('.parachute-follow')
      if (!parachute) return

      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      
      const moveX = ((clientX - innerWidth / 2) / innerWidth) * 40
      const moveY = ((clientY - innerHeight / 2) / innerHeight) * 20

      parachute.style.setProperty('--mouse-x', `${moveX}px`)
      parachute.style.setProperty('--mouse-y', `${moveY}px`)
    }

    // Iniciar animación base automáticamente
    const parachute = document.querySelector('.parachute-follow')
    if (parachute) {
      parachute.style.setProperty('--mouse-x', '0px')
      parachute.style.setProperty('--mouse-y', '0px')
    }

    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])


  return (
    <section
      id="hero"
      className="hero-container"
      role="banner"
      aria-label="Bienvenida a Argentina Importaciones"
    >
      {/* Nubes con mejor accesibilidad */}
      <div 
        className="absolute inset-0 clouds-container" 
        aria-hidden="true"
        role="presentation"
      >
        <Image
          src="/cloud-1.png"
          alt=""
          width={750}
          height={550}
          className="will-change-transform animate-float-cloud cloud-layer-1"
          role="presentation"
          loading="eager"
        />
        <Image
          src="/cloud-2.png"
          alt=""
          width={750}
          height={550}
          className="will-change-transform animate-float-cloud2 cloud-layer-2"
          role="presentation"
          loading="eager"
        />
        <Image
          src="/cloud-3.png"
          alt=""
          width={3010}
          height={800}
          className="will-change-transform animate-float-cloud3 cloud-layer-3"
          role="presentation"
          loading="eager"
        />
      </div>

      {/* Contenido del Banner */}
      <div className="container-custom relative min-h-screen flex items-center justify-center">
        <div className="flex items-center gap-8 max-w-6xl mx-auto">
          {/* Contenido texto */}
          <div className="max-w-2xl">
            <h1
              className="text-4xl md:text-5xl font-bold mb-6 text-white hero-text"
              aria-live="polite"
              aria-atomic="true"
            >
              <div className="hero-content">
                <span className="inline-block">
                  {displayText}
                  <span
                    className="animate-blink"
                    aria-hidden="true"
                  >|
                  </span>
                </span>
              </div>
            </h1>
            <p
              className="text-white text-lg mb-8 hero-description"
              aria-label="Descripción de nuestros servicios"
            >
              Transformamos la complejidad en simplicidad. Con tecnología de punta
              y experiencia comprobada, hacemos que importar sea tan simple como hacer un click.
            </p>
            <div className="flex gap-4">
              <button
                className="group button-primary text-white px-6 py-3 rounded-md font-medium flex items-center"
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
                className="button-secondary text-white px-6 py-3 rounded-md font-medium group"
                aria-label="Explorar nuestros servicios de importación"
              >
                Explorar Servicios
              </button>
            </div>
          </div>

          {/* Paracaídas con mejor accesibilidad */}
          <div 
            className="hidden lg:block" 
            aria-hidden="true"
            role="presentation"
          >
            <Image
              src="/box-parachute.png"
              alt=""
              width={390}
              height={390}
              className="w-auto h-auto will-change-transform animate-float-parachute parachute-follow parachute-container"
              role="presentation"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <TrustIndicators />

      {/* Nueva onda divisoria */}
      <div className="hero-wave" aria-hidden="true"></div>
    </section>
  )
}