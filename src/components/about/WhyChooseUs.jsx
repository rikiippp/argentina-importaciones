'use client'
import { motion } from 'framer-motion'

const features = [
  {
    title: "Experiencia Internacional",
    description: "Más de 5 años gestionando importaciones exitosas desde Asia y otros mercados globales.",
    stats: "500+",
    statsLabel: "Operaciones Exitosas"
  },
  {
    title: "Tecnología de Vanguardia",
    description: "Plataforma digital propia para seguimiento en tiempo real de sus operaciones.",
    stats: "24/7",
    statsLabel: "Monitoreo Constante"
  },
  {
    title: "Equipo Especializado",
    description: "Profesionales certificados en comercio internacional y logística global.",
    stats: "100%",
    statsLabel: "Dedicación"
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Por Qué <span className="text-orange">Elegirnos</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            Combinamos experiencia, tecnología y dedicación para garantizar 
            el éxito de sus importaciones.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="feature-card"
            >
              <div className="feature-stats">
                <span className="stats-number">{feature.stats}</span>
                <span className="stats-label">{feature.statsLabel}</span>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nuestra experiencia y compromiso nos permiten ofrecer soluciones 
            que realmente impulsan el crecimiento de su empresa.
          </p>
        </motion.div>
      </div>
    </section>
  )
} 