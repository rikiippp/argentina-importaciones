'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutCTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-600" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 text-center md:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Impulse su Negocio con 
              <span className="text-orange block mt-2">Importaciones Inteligentes</span>
            </h2>
            <p className="text-white/90 text-xl leading-relaxed mb-12">
              Permítanos ser su socio estratégico en el comercio internacional. 
              Contáctenos hoy y descubra cómo podemos ayudarle a alcanzar sus objetivos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="/contacto" 
                className="btn-primary"
              >
                Agendar Consulta
              </a>
              <a 
                href="/servicios" 
                className="btn-secondary"
              >
                Conocer Servicios
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              <Image
                src="/webps/images/NO-IMAGE.webp"
                alt="Importaciones Inteligentes"
                fill
                className="object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 