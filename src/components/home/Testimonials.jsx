'use client'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import '@/styles/testimonials.css'

export default function Testimonials() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2
  })

  const mapPoints = [
    { id: 1, location: { x: 46, y: 30 } },
    { id: 2, location: { x: 45, y: 20 } },
    { id: 3, location: { x: 60, y: 45 } },
    { id: 4, location: { x: 25, y: 50 } }
  ];

  const testimonials = [
    {
      id: 1,
      name: "David Garibay",
      role: "Empresario",
      text: "U-top is absolutely Awesome. Alice is my agent and she always responds immediately. Goods come in great condition.",
      rating: 5,
      position: 'left',
      verticalPosition: 8,
      extraStyles: { left: '9%' }
    },
    {
      id: 2,
      name: "Juan Pérez",
      role: "Importador Mayorista",
      text: "Excelente servicio. Facilitaron todo el proceso de importación y cumplieron con los tiempos establecidos.",
      rating: 5,
      position: 'right',
      verticalPosition: 20
    },
    {
      id: 3,
      name: "Simon Harris",
      role: "Emprendedor",
      text: "I had so many concerns before the trip and did a lot of research. But after I arrived and met U-Top, they took very good care.",
      rating: 5,
      position: 'right',
      verticalPosition: 52,
      extraStyles: { right: '18%' }
    },
    {
      id: 4,
      name: "María González",
      role: "Comerciante",
      text: "El servicio superó mis expectativas. La atención personalizada y el seguimiento constante hicieron toda la diferencia.",
      rating: 5,
      position: 'left',
      verticalPosition: 42
    }
  ]

  return (
    <section ref={sectionRef} className="py-12 relative overflow-hidden bg-transparent">
      <div className="container-custom">
        {/* Header con animación */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-smoky mb-2">
            Historias de Éxito
          </h2>
          <h3 className="text-3xl font-bold text-orange">
            Empresas que Transformaron su Negocio
          </h3>
        </motion.div>

        <div className="relative max-w-7xl mx-auto min-h-[800px] md:h-[800px]">
          {/* Contenedor del mapa con clase para responsive */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[400px] h-full map-container">
            <motion.div
              className="relative w-full h-full map-float"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-full">
                <Image
                  src="/svgs/images/ARG-MAP.svg"
                  alt="Mapa de Argentina"
                  fill
                  className="object-contain"
                  priority
                />

                {mapPoints.map((point) => (
                  <motion.div
                    key={point.id}
                    className="absolute z-20"
                    style={{
                      left: `${point.location.x}%`,
                      top: `${point.location.y}%`,
                      transform: 'translate(-20%, -20%)'
                    }}
                  >
                    <div className="relative">
                      <div
                        className="absolute rounded-full map-point-ping"
                        style={{
                          inset: '-6px',
                          backgroundColor: 'rgba(255, 153, 0, 0.2)',
                        }}
                      />
                      <div className="relative w-5 h-5 bg-orange rounded-full" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contenedor de testimonios */}
          <div className="absolute w-full h-full md:overflow-visible">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute w-[380px] testimonial-card ${
                  testimonial.position === 'left' ? 'slide-in-left' : 'slide-in-right'
                } delay-${index + 1} ${isInView ? 'in-view' : ''}`}
                style={{
                  top: `${testimonial.verticalPosition}%`,
                  ...(testimonial.position === 'left' 
                    ? { left: testimonial.extraStyles?.left || '3%' }
                    : { right: testimonial.extraStyles?.right || '3%' }
                  )
                }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ 
                    duration: 0.5,
                    delay: (index * 0.3) + 1
                  }}
                >
                  <motion.div 
                    className="flex gap-1"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: (index * 0.3) + 1 }}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.svg
                        key={i}
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{
                          delay: (index * 0.3) + 1 + (i * 0.1),
                          type: "spring",
                          stiffness: 200
                        }}
                        className="w-5 h-5 text-orange"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    ))}
                  </motion.div>

                  <motion.p 
                    className="text-gray-600 leading-relaxed my-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: (index * 0.3) + 1.3 }}
                  >
                    {testimonial.text}
                  </motion.p>

                  <motion.div 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: (index * 0.3) + 1.4 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center">
                      <span className="text-orange font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 