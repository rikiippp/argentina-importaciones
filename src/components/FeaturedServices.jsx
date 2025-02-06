'use client'
import { motion } from 'framer-motion'
import { FaShip, FaPlane, FaTruck, FaWarehouse } from 'react-icons/fa'

const services = [
  {
    icon: <FaShip />,
    title: "Importación Marítima",
    description: "Gestión completa de cargas marítimas con seguimiento en tiempo real.",
    color: "bg-gradient-to-br from-blue-50 to-blue-100",
    borderColor: "border-blue-200",
    iconColor: "text-blue-500",
    hoverColor: "hover:border-blue-300"
  },
  {
    icon: <FaPlane />,
    title: "Importación Aérea",
    description: "Soluciones rápidas para cargas urgentes con cobertura global.",
    color: "bg-gradient-to-br from-orange-50 to-orange-100",
    borderColor: "border-orange-200",
    iconColor: "text-orange-500",
    hoverColor: "hover:border-orange-300"
  },
  {
    icon: <FaTruck />,
    title: "Transporte Terrestre",
    description: "Distribución nacional puerta a puerta con seguimiento GPS.",
    color: "bg-gradient-to-br from-emerald-50 to-emerald-100",
    borderColor: "border-emerald-200",
    iconColor: "text-emerald-500",
    hoverColor: "hover:border-emerald-300"
  },
  {
    icon: <FaWarehouse />,
    title: "Almacenaje",
    description: "Espacios seguros y controlados para tu mercadería.",
    color: "bg-gradient-to-br from-violet-50 to-violet-100",
    borderColor: "border-violet-200",
    iconColor: "text-violet-500",
    hoverColor: "hover:border-violet-300"
  }
]

export default function FeaturedServices() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-0 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-72 h-72 bg-orange-100/50 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-smoky mb-6">
            Soluciones que Impulsan tu Negocio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones integrales diseñadas para potenciar tus importaciones y hacer crecer tu empresa
          </p>
        </motion.div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className={`
                relative p-8 rounded-2xl ${service.color} border-2 ${service.borderColor} ${service.hoverColor}
                transition-all duration-300 h-full
                hover:shadow-2xl hover:-translate-y-2
              `}>
                {/* Icono con fondo decorativo */}
                <div className="relative mb-8">
                  <div className={`
                    w-16 h-16 flex items-center justify-center rounded-xl
                    ${service.iconColor} text-3xl
                    bg-white shadow-lg shadow-gray-200/50
                    group-hover:scale-110 transition-transform duration-300
                  `}>
                    {service.icon}
                  </div>
                  <div className={`
                    absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100
                    transition-opacity duration-300 blur-xl -z-10
                    bg-gradient-to-r ${service.color}
                  `}></div>
                </div>

                {/* Contenido */}
                <h3 className="text-2xl font-bold text-smoky mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                {/* Botón */}
                <button className={`
                  inline-flex items-center text-sm font-semibold ${service.iconColor}
                  group/btn transition-all duration-300
                `}>
                  Ver detalles
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 