'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

const resources = [
  {
    title: 'Guías y Documentación',
    description: 'Documentos y guías paso a paso para entender el proceso de importación.',
    icon: '/webps/images/NO-IMAGE.webp',
    link: '/guias',
    color: 'from-orange-500/10 to-orange-600/5'
  },
  {
    title: 'Calculadora',
    description: 'Calcula los costos aproximados de tu importación.',
    icon: '/webps/images/NO-IMAGE.webp',
    link: '/calculadora',
    color: 'from-orange-400/10 to-orange-500/5'
  },
  {
    title: 'Preguntas Frecuentes',
    description: 'Respuestas a todas tus dudas sobre importación, costos y procesos.',
    icon: '/webps/images/NO-IMAGE.webp',
    link: '/contacto#faq',
    color: 'from-orange-300/10 to-orange-400/5'
  }
];

export default function ResourceCenter() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-orange font-medium tracking-wide uppercase text-sm">Centro de Recursos</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Todo lo que Necesitas para Importar
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Accede a guías, calculadoras y herramientas diseñadas para hacer tu proceso de importación más simple y transparente.
          </p>
        </motion.div>

        {/* Grid de Recursos - Optimizado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.3,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className={`h-48 rounded-xl mb-8 flex items-center justify-center bg-gradient-to-br ${resource.color} group-hover:scale-[1.02] transition-transform duration-300`}>
                  <Image
                    src={resource.icon}
                    alt={resource.title}
                    width={80}
                    height={80}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-orange transition-colors duration-300">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {resource.description}
                </p>
                <a 
                  href={resource.link}
                  className="inline-flex items-center text-orange font-medium hover:text-orange-600 transition-colors"
                >
                  Explorar 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="bg-orange text-white px-8 py-4 rounded-full font-medium hover:bg-orange-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            Comenzar mi Importación
          </button>
        </motion.div>
      </div>
    </section>
  );
} 