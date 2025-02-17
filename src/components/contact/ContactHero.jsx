'use client'
import { motion } from 'framer-motion'

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-700 pt-32 pb-20">

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Necesitás ayuda con tu importación?
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
            Estamos aquí para ayudarte en cada paso del proceso. Completá el formulario y te contactaremos en menos de 24 horas hábiles.
          </p>
        </motion.div>
      </div>
    </section>
  )
} 