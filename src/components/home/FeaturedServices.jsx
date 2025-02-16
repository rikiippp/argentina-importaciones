'use client'
import { motion } from 'framer-motion'
import LottieAnimation from '../common/LottieAnimation.jsx'
import { serviceAnimations } from '../common/LottieAnimation.jsx'
import '../../styles/featuredServices.css'

const services = [
  {
    title: "Asesoramiento Personalizado",
    description: "Te ayudamos a seleccionar los mejores productos.",
  },
  {
    title: "Gestión Integral",
    description: "Nos encargamos de todo el proceso de importación.",
  },
  {
    title: "Capacitación",
    description: "Aprendé con expertos en comercio exterior.",
  }
]

export default function FeaturedServices() {
  return (
    <section className="featured-services py-24 relative overflow-hidden">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-smoky mb-6">
            Soluciones personalizadas para importar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Diseñamos cada servicio pensando en el crecimiento de tu negocio
          </p>
        </motion.div>

        <div className="services-grid grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6 max-w-[1400px] mx-auto">
          {/* Card 1 - Grande */}
          <motion.div 
            className="service-card service-card--large md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col h-full justify-between relative">
              <div className="max-w-[50%] relative z-10">
                <h3 className="text-2xl font-bold mb-3">{services[0].title}</h3>
                <p className="text-gray-600">{services[0].description}</p>
                <button className="text-blue-500 hover:text-blue-600 mt-auto flex items-center">
                  Ver más
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <LottieAnimation 
                animationData={serviceAnimations.dashboard.data}
                style={serviceAnimations.dashboard.style}
                className="pointer-events-none"
              />
            </div>
          </motion.div>

          {/* Card 2 - Pequeña */}
          <motion.div 
            className="service-card service-card--small md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col h-full justify-between relative">
              <div className="max-w-[80%] relative z-10">
                <h3 className="text-2xl font-bold mb-3">{services[1].title}</h3>
                <p className="text-gray-600">{services[1].description}</p>
                <button className="text-orange-500 hover:text-orange-600 mt-auto flex items-center">
                  Ver más
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <LottieAnimation 
                animationData={serviceAnimations.workflow.data}
                style={serviceAnimations.workflow.style}
                className="pointer-events-none"
              />
            </div>
          </motion.div>

          {/* Card 3 - Pequeña */}
          <motion.div 
            className="service-card service-card--small md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col h-full justify-between relative">
              <div className="max-w-[80%] relative z-10">
                <h3 className="text-2xl font-bold mb-3">{services[2].title}</h3>
                <p className="text-gray-600">{services[2].description}</p>
                <button className="text-emerald-500 hover:text-emerald-600 mt-auto flex items-center">
                  Ver más
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <LottieAnimation 
                animationData={serviceAnimations.education.data}
                style={serviceAnimations.education.style}
                className="pointer-events-none"
              />
            </div>
          </motion.div>

          {/* Card 4 - Grande - CTA */}
          <motion.div 
            className="service-card service-card--large md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col h-full justify-center items-center text-center relative">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">¿Listo para importar?</h3>
                <p className="text-xl text-gray-600 mb-6">Comenzá tu proyecto con nosotros</p>
                <button className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
                  Contactanos
                </button>
              </div>
              <LottieAnimation 
                animationData={serviceAnimations.success.data}
                style={serviceAnimations.success.style}
                className="pointer-events-none opacity-50"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 