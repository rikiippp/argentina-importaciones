'use client'
import { motion } from 'framer-motion'
import { HiPhone, HiMail, HiLocationMarker, HiClock } from 'react-icons/hi'

const ContactSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-orange font-medium"
          >
            Contacto
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold mt-2"
          >
            ¿Necesitás ayuda con tu importación?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-gray-600 mt-4 max-w-2xl mx-auto"
          >
            Completá el formulario y te contactaremos en menos de 24 horas hábiles
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulario */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange focus:border-transparent transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange focus:border-transparent transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono/WhatsApp
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange focus:border-transparent transition-all"
                  placeholder="+54 9 11 XXXX-XXXX"
                />
              </div>

              <div>
                <label htmlFor="tipo" className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de consulta
                </label>
                <select
                  id="tipo"
                  name="tipo"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange focus:border-transparent transition-all"
                >
                  <option value="">Seleccionar tipo de consulta</option>
                  <option value="importacion">Importación general</option>
                  <option value="courier">Courier internacional</option>
                  <option value="container">Container completo</option>
                  <option value="otro">Otra consulta</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange focus:border-transparent transition-all"
                  placeholder="Describe brevemente tu consulta..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange text-white py-4 rounded-lg font-medium hover:bg-orange-600 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-orange"
              >
                Enviar Consulta
              </button>
            </form>
          </motion.div>

          {/* Información de contacto */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8 md:pl-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Información de Contacto</h3>
              <p className="text-gray-600">
                Estamos disponibles para ayudarte en todo el proceso de importación.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <HiPhone className="w-6 h-6 text-orange flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium">Teléfono</h4>
                  <p className="text-gray-600">+54 9 11 XXXX-XXXX</p>
                  <p className="text-gray-600">+54 9 11 XXXX-XXXX</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <HiMail className="w-6 h-6 text-orange flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">contacto@argentinaimportaciones.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <HiLocationMarker className="w-6 h-6 text-orange flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium">Dirección</h4>
                  <p className="text-gray-600">Av. Ejemplo 1234, Piso 4</p>
                  <p className="text-gray-600">Buenos Aires, Argentina</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <HiClock className="w-6 h-6 text-orange flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium">Horario de Atención</h4>
                  <p className="text-gray-600">Lunes a Viernes</p>
                  <p className="text-gray-600">9:00 - 18:00 hs</p>
                </div>
              </div>
            </div>

            {/* Mapa o imagen de ubicación */}
            <div className="rounded-xl overflow-hidden h-48 bg-gray-100">
              {/* Aquí puedes agregar un mapa de Google o una imagen */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection 