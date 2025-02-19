'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const partners = Array(8).fill({
  id: 1,
  name: 'Partner',
  logo: '/svgs/logos/PARTNER.svg'
}).map((item, index) => ({ ...item, id: index + 1 }))

export default function TrustedProviders() {
  return (
    <section className="py-8 md:py-12 relative overflow-hidden">
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
            Ellos confían en nosotros
          </span>
        </motion.div>

        {/* Carrusel simplificado */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div className="flex space-x-12 animate-scroll-normal">
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="relative w-32 h-20 flex-shrink-0 group"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 