'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const partners = Array(8).fill({
  id: 1,
  name: 'Partner',
  logo: '/logos/partner.svg'
}).map((item, index) => ({ ...item, id: index + 1 }))

export default function TrustedProviders() {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 -left-10 w-40 h-40 bg-orange/10 rounded-full blur-2xl hidden sm:block" />
        <div className="absolute bottom-10 right-0 w-60 h-60 bg-blue-400/10 rounded-full blur-3xl hidden sm:block" />
      </div>

      <div className="container-custom">
        {/* Header mejorado */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4 sm:mb-6 md:mb-8 px-4"
        >
          <span className="text-orange font-medium mb-1 sm:mb-2 inline-block text-sm sm:text-base md:text-lg">
            Más de 150 empresas confían en nosotros
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-smoky">
            Nuestros <span className="text-orange">Partners</span> Estratégicos
          </h2>
        </motion.div>

        {/* Carrusel de logos con gradiente mejorado */}
        <div className="relative max-w-[400px] sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto px-4 sm:px-8 md:px-12">
          <div className="overflow-hidden relative"> {/* Contenedor para controlar el overflow */}
            {/* Primera fila de logos */}
            <div className="flex space-x-6 sm:space-x-12 md:space-x-16 animate-scroll sm:animate-scroll-normal">
              {partners.map((partner) => (
                <motion.div
                  key={partner.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="relative w-28 sm:w-28 md:w-32 lg:w-36 h-16 sm:h-20 md:h-24 flex-shrink-0 group"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain filter grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:drop-shadow-lg"
                  />
                </motion.div>
              ))}
            </div>

            {/* Segunda fila de logos - espaciado mínimo */}
            <div className="flex space-x-6 sm:space-x-12 md:space-x-16 mt-3 sm:mt-3 md:mt-4 animate-scroll-reverse sm:animate-scroll-reverse-normal">
              {[...partners].reverse().map((partner) => (
                <motion.div
                  key={`reverse-${partner.id}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="relative w-28 sm:w-28 md:w-32 lg:w-36 h-16 sm:h-20 md:h-24 flex-shrink-0 group"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain filter grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:drop-shadow-lg"
                  />
                </motion.div>
              ))}
            </div>

            {/* Gradientes mejorados */}
            <div className="absolute inset-y-0 left-0 w-10 sm:w-16 md:w-24 bg-gradient-to-r from-white via-white to-transparent" />
            <div className="absolute inset-y-0 right-0 w-10 sm:w-16 md:w-24 bg-gradient-to-l from-white via-white to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
} 