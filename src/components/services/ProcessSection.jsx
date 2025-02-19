'use client'
import { motion } from 'framer-motion'

const steps = [
  {
    number: "01",
    title: "Análisis Inicial",
    description: "Evaluación detallada de sus necesidades y objetivos comerciales.",
    details: [
      "Identificación de productos clave",
      "Análisis de mercado y competencia",
      "Evaluación de costos y tiempos"
    ]
  },
  {
    number: "02",
    title: "Planificación Estratégica",
    description: "Desarrollo de una estrategia personalizada de importación.",
    details: [
      "Selección de proveedores verificados",
      "Optimización de costos logísticos",
      "Plan de importación detallado"
    ]
  },
  {
    number: "03",
    title: "Ejecución",
    description: "Implementación precisa y monitoreo constante del proceso.",
    details: [
      "Gestión de documentación",
      "Control de calidad en origen",
      "Seguimiento logístico en tiempo real"
    ]
  },
  {
    number: "04",
    title: "Optimización Continua",
    description: "Mejora constante basada en resultados y retroalimentación.",
    details: [
      "Análisis de resultados",
      "Identificación de mejoras",
      "Implementación de optimizaciones"
    ]
  }
]

export default function ProcessSection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 via-white to-gray-50/80" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestro <span className="text-orange">Proceso</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Un enfoque sistemático y probado para garantizar el éxito de su proyecto
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="process-item"
            >
              <div className="process-number-wrapper">
                <div className="process-number-bg" />
                <span className="process-number">{step.number}</span>
              </div>
              <div className="process-content">
                <div className="process-header">
                  <h3 className="process-title">{step.title}</h3>
                  <p className="process-description">{step.description}</p>
                </div>
                <ul className="process-details">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="process-detail">
                      <span className="process-bullet" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 