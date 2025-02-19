'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-blue-600" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      <div className="container mx-auto px-4 md:px-6 relative pt-20 pb-24">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
              Expertos en <span className="text-orange">Importación</span>
            </h1>
            <p className="text-white/90 text-xl md:text-2xl max-w-2xl leading-relaxed">
              Transformamos la complejidad del comercio internacional en oportunidades 
              de crecimiento para empresas argentinas.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative aspect-[4/3] w-full max-w-2xl mx-auto">
              <Image
                src="/webps/images/NO-IMAGE.webp"
                alt="Comercio Internacional"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 