'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function MissionSection() {
  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 order-2 md:order-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Nuestra <span className="text-orange">Misión</span>
            </h2>
            <div className="space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                Facilitar el acceso de empresas argentinas a productos y tecnologías 
                internacionales, simplificando el proceso de importación y garantizando 
                la calidad en cada operación.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Nos comprometemos a ser el socio estratégico que su empresa necesita 
                para crecer en el mercado global, brindando soluciones eficientes y 
                personalizadas.
              </p>
              <ul className="space-y-4 mt-8">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-orange/40 mt-2.5 shrink-0" />
                  <p className="text-gray-600">Compromiso con la excelencia y la calidad</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-orange/40 mt-2.5 shrink-0" />
                  <p className="text-gray-600">Transparencia en cada operación</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-orange/40 mt-2.5 shrink-0" />
                  <p className="text-gray-600">Innovación constante en nuestros procesos</p>
                </li>
              </ul>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 order-1 md:order-2"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/webps/images/NO-IMAGE.webp"
                alt="Nuestra misión"
                fill
                className="object-cover rounded-2xl shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 