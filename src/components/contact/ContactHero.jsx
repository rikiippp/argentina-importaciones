'use client'
import { motion } from 'framer-motion'

export default function ContactHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center top-0">
      <div className="absolute inset-0 bg-blue-600" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
            Contáctenos
          </h1>
          <p className="text-white/90 text-xl md:text-2xl leading-relaxed">
            Estamos aquí para ayudarle con todas sus necesidades de importación
          </p>
        </motion.div>
      </div>
    </section>
  )
} 