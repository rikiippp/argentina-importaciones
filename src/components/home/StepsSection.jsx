'use client'
import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// const steps = [
//   {
//     number: '01',
//     title: 'Iniciá tu Proyecto',
//     description: 'Compartí tu visión con nosotros. Un equipo experto analizará tu caso y te contactará en 24hs.',
//     image: '/paso-1.png',
//     color: '#4CAF50'
//   },
//   {
//     number: '02',
//     title: 'Recibí tu Plan',
//     description: 'Presentamos estrategias claras y opciones optimizadas para tu presupuesto y objetivos.',
//     image: '/paso-2.png',
//   },
//   {
//     number: '03',
//     title: 'Trabajamos por vos',
//     description: 'Gestionamos todo el proceso mientras vos monitoreás cada paso desde nuestra plataforma.',
//     image: '/paso-3.png',
//   },
//   {
//     number: '04',
//     title: 'Hacé Crecer tu Negocio',
//     description: 'Recibí tu mercadería en tiempo y forma, respaldado por expertos en cada etapa.',
//     image: '/paso-4.png',
//   }
// ];

const steps = [
  {
    number: '01',
    title: 'Consultá Gratis',
    description: 'Contanos qué querés importar. En 24hs te contacta un especialista con las mejores opciones.',
    image: '/webps/images/STEP-1.webp'
  },
  {
    number: '02',
    title: 'Elegí tu Plan',
    description: 'Te presentamos diferentes alternativas según tu presupuesto y urgencia.',
    image: '/webps/images/STEP-2.webp'
  },
  {
    number: '03',
    title: 'Seguí tu Carga',
    description: 'Monitoreá el estado de tu importación en tiempo real desde nuestra plataforma.',
    image: '/webps/images/STEP-3.webp'
  },
  {
    number: '04',
    title: 'Recibí tu Mercadería',
    description: 'Nos encargamos de la logística hasta la puerta de tu negocio.',
    image: '/webps/images/STEP-4.webp'
  }
]

const imageAdjustments = {
  '01': {
    transform: 'translateY(10px)',
    scale: 1
  },
  '02': {
    transform: 'translateY(20px)',
    scale: 1
  },
  '03': {
    transform: 'translateY(10px)',
    scale: 1
  },
  '04': {
    transform: 'translateY(25px)',
    scale: 1.2
  }
};

export default function StepsSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "85% start"]
  })

  const lineWidth = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"])

  return (
    <section ref={containerRef} className="py-12 md:py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange/10 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <span className="text-orange font-medium text-base md:text-lg inline-block mb-2">
            Proceso Simple
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            Tu Camino al Éxito
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-xl md:max-w-2xl mx-auto">
            Un proceso simple y efectivo para hacer crecer tu negocio
          </p>
        </motion.div>

        {/* Línea horizontal para desktop */}
        <div className="hidden lg:block absolute top-[35%] left-0 w-full h-[2px] bg-gray-100">
          <motion.div 
            className="h-full bg-gradient-to-r from-orange/20 via-orange/30 to-orange/20"
            style={{ 
              width: lineWidth,
              boxShadow: '0 0 10px rgba(255, 165, 0, 0.1)'
            }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 sm:gap-12 md:gap-16 lg:gap-20 max-w-[90rem] mx-auto relative px-4 sm:px-0">
          {/* Línea vertical para mobile */}
          <div className="lg:hidden absolute left-4 w-[2px] h-[100%] bg-gradient-to-b from-transparent via-gray-100 to-transparent"
            style={{
              top: '-10px'
            }}
          >
            <motion.div 
              className="w-full bg-gradient-to-b from-orange/10 via-orange/40 to-orange/10"
              style={{ 
                height: lineWidth,
                transformOrigin: 'top',
                boxShadow: '0 0 10px rgba(255, 165, 0, 0.2)'
              }}
            />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative px-6 sm:px-0 group hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Indicador de paso actual */}
              <div className="absolute -left-2 top-1/2 w-2 h-2 rounded-full bg-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300 lg:hidden" />
              
              {/* Resto del contenido existente */}
              <motion.div 
                className="absolute -top-6 md:-top-8 lg:-top-10 left-2 sm:left-0 text-5xl md:text-6xl lg:text-7xl font-bold"
                style={{ 
                  color: '#FFA500',
                  opacity: 0.7,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                }}
                whileHover={{ scale: 1.05, opacity: 0.9 }}
              >
                {step.number}
              </motion.div>

              {/* Mejora en la presentación y centrado de imágenes */}
              <div className="mb-8 sm:mb-4 md:mb-6 relative h-[220px] sm:h-[220px] md:h-[250px] lg:h-[280px] flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative group w-full flex items-center justify-center"
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="object-contain transition-all duration-300 group-hover:drop-shadow-2xl mx-auto"
                    style={{
                      width: 'clamp(160px, 80%, 240px)',
                      height: 'clamp(160px, 80%, 240px)',
                      ...imageAdjustments[step.number],
                      filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.1))'
                    }}
                  />
                </motion.div>
              </div>

              <div className="text-center pt-6 md:pt-8 relative">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-xl md:text-2xl font-bold mb-3 px-4 sm:px-0 group-hover:text-orange transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base max-w-[280px] mx-auto leading-relaxed px-4 sm:px-0">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 