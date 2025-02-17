'use client'
import { motion } from 'framer-motion'
import LottieAnimation from '../common/LottieAnimation.jsx'
import { serviceAnimations } from '../common/LottieAnimation.jsx'
import '../../styles/featuredServices.css'
import '@/styles/animations.css'

const services = [
  {
    title: "Asesoramiento Personalizado",
    description: "Guía experta en cada paso de tu importación...",
    animation: serviceAnimations.dashboard,
    color: "text-blue-500",
    hoverColor: "hover:text-blue-600"
  },
  {
    title: "Gestión Integral",
    description: "Nos encargamos de todo el proceso de importación.",
    animation: serviceAnimations.workflow,
    color: "text-orange-500",
    hoverColor: "hover:text-orange-600"
  },
  {
    title: "Capacitación",
    description: "Aprendé con expertos en comercio exterior.",
    animation: serviceAnimations.education,
    color: "text-emerald-500",
    hoverColor: "hover:text-emerald-600"
  }
]

export default function FeaturedServices() {
  return (
    <section className="featured-services py-24 relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Servicios Destacados
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Soluciones integrales para tus necesidades de importación
          </p>
        </motion.div>

        <div className="services-grid grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6 max-w-[1400px] mx-auto">
          {/* Card 1 - Grande */}
          <motion.div
            className="service-card service-card--large md:col-span-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex flex-col h-full justify-between relative p-8">
              <div className="max-w-[50%] relative z-10">
                <h3 className="text-2xl font-bold mb-4">{services[0].title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{services[0].description}</p>
                <a 
                  href="#"
                  className={`inline-flex items-center font-medium ${services[0].color} ${services[0].hoverColor} transition-colors mt-auto group`}
                >
                  Ver más
                  <svg 
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              <LottieAnimation
                animationData={services[0].animation.data}
                style={services[0].animation.style}
                className="pointer-events-none"
              />
            </div>
          </motion.div>

          {/* Cards pequeñas */}
          {services.slice(1).map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card service-card--small md:col-span-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex flex-col h-full justify-between relative p-6">
                <div className="max-w-[80%] relative z-10">
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <a 
                    href="#"
                    className={`inline-flex items-center font-medium ${service.color} ${service.hoverColor} transition-colors mt-auto group`}
                  >
                    Ver más
                    <svg 
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
                <LottieAnimation
                  animationData={service.animation.data}
                  style={service.animation.style}
                  className="pointer-events-none"
                />
              </div>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            className="service-card service-card--large md:col-span-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex flex-col h-full justify-center items-center text-center relative p-8">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">¿Listo para importar?</h3>
                <p className="text-xl text-gray-600 mb-8">Comenzá tu proyecto con nosotros</p>
                <a 
                  href="/contacto"
                  className="px-8 py-4 bg-orange text-white rounded-full font-medium hover:bg-orange-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Contactanos
                </a>
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