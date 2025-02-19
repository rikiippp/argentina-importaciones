'use client'
import { motion } from 'framer-motion'

export default function ContactCTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700" />
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-grid-pattern" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              ¿Listo para Optimizar sus
              <span className="text-orange"> Importaciones</span>?
            </h2>
            <p className="text-white/90 text-xl leading-relaxed max-w-2xl mx-auto">
              Nuestro equipo de expertos está disponible para analizar sus necesidades 
              y diseñar una solución personalizada para su empresa.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="pt-4"
            >
              <a 
                href="/contacto" 
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contactar Ahora
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 