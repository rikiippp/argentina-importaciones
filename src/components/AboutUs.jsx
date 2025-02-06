'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'

const stats = [
  {
    number: 200,
    prefix: '+',
    text: 'Proveedores Verificados',
    icon: '/user-icon.png',
    color: 'from-blue-500/20 via-blue-400/10 to-transparent',
    shadowColor: 'shadow-blue-500/20'
  },
  {
    number: 24,
    suffix: '/7',
    text: 'Soporte Personalizado',
    icon: '/clock-icon.png',
    color: 'from-orange/20 via-orange/10 to-transparent',
    shadowColor: 'shadow-orange/20'
  },
  {
    number: 1000,
    prefix: '+',
    text: 'Envíos Exitosos',
    icon: '/box-icon.png',
    color: 'from-green-500/20 via-green-400/10 to-transparent',
    shadowColor: 'shadow-green-500/20'
  },
  {
    number: 50,
    prefix: '+',
    text: 'Ciudades Alcanzadas',
    icon: '/globe-icon.png',
    color: 'from-purple-500/20 via-purple-400/10 to-transparent',
    shadowColor: 'shadow-purple-500/20'
  }
]

const features = [
  {
    title: 'Gestión Integral Personalizada',
    description: 'Investigamos el mercado, seleccionamos los proveedores más confiables y supervisamos cada etapa del proceso para garantizar resultados de calidad.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
      </svg>
    )
  },
  {
    title: 'Conectá con el Mundo',
    description: 'Accedé a proveedores y fabricantes de cualquier país y adelantate a las nuevas tendencias del mercado.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    )
  },
  {
    title: 'Costos Claros y Competitivos',
    description: 'Con nosotros, sabés exactamente lo que vas a pagar. No hay costos ocultos ni sorpresas: solo comisiones transparentes entre el 3% y el 7%.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    )
  }
]

export default function AboutUs() {
  return (
    <section className="py-20 bg-[#EEF3FF] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Grupo de imágenes principales */}
          <div className="lg:w-1/2 relative">
            <div className="delivery-scene">
              {/* Confeti */}
              <img 
                src="/confetti-step.png" 
                alt="Confeti"
                className="confetti"
              />
              
              {/* Camión */}
              <img 
                src="/truck-step.png" 
                alt="Camión de entrega"
                className="delivery-truck"
              />
              
              {/* Repartidor */}
              <img 
                src="/delivery-guy.png" 
                alt="Repartidor"
                className="delivery-guy"
              />
            </div>
          </div>

          {/* Contenido */}
          <div className="lg:w-1/2">
            <span className="text-orange font-medium">¿Por qué elegirnos?</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-6">
              Nosotros hacemos el trabajo pesado,
              <br />
              vos concéntrate en crecer.
            </h2>
            <p className="text-gray-600 mb-8">
              Crecer debería ser tu prioridad, no lidiar con procesos complicados ni trámites interminables. En Argentina Importaciones nos convertimos en tu socio estratégico: pensamos soluciones a medida, optimizamos tiempos y hacemos que el camino hacia la importación sea más simple, eficiente y seguro.
            </p>

            {/* Features */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-orange flex items-center justify-center flex-shrink-0">
                  <img src="/user-icon.png" alt="Gestión" className="w-6 h-6" />
                </div>
                <div>

                  <h3 className="font-bold text-xl mb-1">Gestión Integral Personalizada</h3>
                  <p className="text-gray-600">Investigamos el mercado, seleccionamos los proveedores más confiables y supervisamos cada etapa del proceso para garantizar resultados de calidad.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-orange flex items-center justify-center flex-shrink-0">
                  <img src="/user-icon.png" alt="Global" className="w-6 h-6" />
                </div>
                <div>

                  <h3 className="font-bold text-xl mb-1">Conectá con el Mundo</h3>
                  <p className="text-gray-600">Accedé a proveedores y fabricantes de cualquier país y adelantate a las nuevas tendencias del mercado.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-orange flex items-center justify-center flex-shrink-0">
                  <img src="/user-icon.png" alt="Costos" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Costos Claros y Competitivos</h3>
                  <p className="text-gray-600">Con nosotros, sabés exactamente lo que vas a pagar. No hay costos ocultos ni sorpresas: solo comisiones transparentes entre el 3% y el 7%.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -5 }}
                className={`relative bg-white rounded-2xl p-6 
                shadow-lg hover:shadow-xl transition-all duration-300
                overflow-hidden group`}
              >
                {/* Gradiente de fondo */}
                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${stat.color} opacity-100`} />
                
                {/* Efecto de brillo en hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                  blur transform -skew-x-12 group-hover:translate-x-full"/>
                
                {/* Contenido */}
                <div className="relative z-10">
                  {/* Icono con círculo */}
                  <div className="mb-4 relative">
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center
                        shadow-lg group-hover:shadow-xl transition-shadow relative z-10"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img
                        src={stat.icon}
                        alt=""
                        className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                      />
                    </motion.div>
                    {/* Círculo decorativo */}
                    <div className={`absolute -top-2 -right-2 w-16 h-16 rounded-2xl 
                      bg-gradient-to-br ${stat.color} ${stat.shadowColor} opacity-50 blur-sm`}
                    />
                  </div>
                  
                  {/* Número y texto */}
                  <div>
                    <h3 className="text-4xl font-bold text-gray-800 mb-2 flex items-baseline">
                      <span className="mr-1">{stat.prefix}</span>
                      <CountUp
                        end={stat.number}
                        duration={2.5}
                        separator=","
                        className="tabular-nums"
                      />
                      <span className="ml-1">{stat.suffix}</span>
                    </h3>
                    <p className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors">
                      {stat.text}
                    </p>
                  </div>

                  {/* Línea decorativa animada */}
                  <motion.div 
                    className={`h-0.5 bg-gradient-to-r ${stat.color} mt-4`}
                    initial={{ width: "30%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 