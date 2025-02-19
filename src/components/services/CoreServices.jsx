'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const services = [
  {
    title: "Importación Directa",
    description: "Gestión integral del proceso de importación, desde la identificación y validación de proveedores hasta la entrega final en sus instalaciones.",
    features: [
      "Verificación exhaustiva de proveedores",
      "Negociación directa y transparente",
      "Control de calidad en origen",
      "Logística puerta a puerta"
    ],
    icon: "/svgs/icons/COMING-SOON.svg"
  },
  {
    title: "Consultoría Estratégica",
    description: "Asesoramiento especializado para optimizar su cadena de suministro internacional y maximizar el retorno de inversión.",
    features: [
      "Análisis de mercado y competencia",
      "Optimización de costos operativos",
      "Estrategia personalizada de importación",
      "Gestión integral de riesgos"
    ],
    icon: "/svgs/icons/COMING-SOON.svg"
  },
  {
    title: "Gestión Aduanera",
    description: "Manejo experto de todos los aspectos aduaneros y regulatorios para garantizar importaciones sin contratiempos.",
    features: [
      "Clasificación arancelaria precisa",
      "Gestión de documentación",
      "Despacho aduanero eficiente",
      "Cumplimiento normativo"
    ],
    icon: "/svgs/icons/COMING-SOON.svg"
  }
]

export default function CoreServices() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Soluciones <span className="text-orange">Integrales</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl">
            Ofrecemos servicios especializados que cubren todo el espectro de la importación internacional.
          </p>
        </motion.div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}
            >
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-3xl font-bold mb-6">{service.title}</h3>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + (idx * 0.1) }}
                        className="flex items-start"
                      >
                        <span className="text-orange mr-4 text-xl">→</span>
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
              <div className="flex-1 relative min-h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-br from-orange/5 to-blue-500/5 rounded-2xl" />
                {/* Aquí irá la imagen/ilustración del servicio */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 