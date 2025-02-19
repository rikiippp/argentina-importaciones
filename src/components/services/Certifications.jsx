'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const certifications = [
  {
    title: "ISO 9001:2015",
    description: "Certificación internacional de gestión de calidad",
    image: "/webps/images/NO-IMAGE.webp"
  },
  {
    title: "Operador Confiable",
    description: "Certificado por Aduana Argentina",
    image: "/webps/images/NO-IMAGE.webp"
  },
  {
    title: "IATA Member",
    description: "Miembro activo de la Asociación Internacional de Transporte Aéreo",
    image: "/webps/images/NO-IMAGE.webp"
  }
]

export default function Certifications() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Respaldados por la <span className="text-orange">Excelencia</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl">
            Nuestras certificaciones avalan nuestro compromiso con la calidad y la mejora continua
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="certification-card"
            >
              <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3">{cert.title}</h3>
              <p className="text-gray-600">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 