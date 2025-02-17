'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

export default function CalculadoraPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    tipoProducto: '',
    precioProducto: '',
    peso: '',
    cantidad: '1',
    direccion: '',
    ciudad: '',
    codigoPostal: ''
  })

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50/50 to-white">
      {/* Hero Section - Mantenemos diseño, reducimos espacio inferior */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-orange/20 rounded-full blur-2xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-2xl" />
        </div>
        
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-orange font-medium text-sm md:text-base uppercase tracking-wider mb-4 inline-block">
              Herramienta de Cálculo
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange to-orange-600">
              Calculadora de Importación
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Obtené un estimado de los costos de importación en segundos. Nuestra calculadora te ayuda a planificar tu inversión.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculadora Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              {/* Steps Mejorados */}
              <div className="bg-gradient-to-r from-orange/5 to-orange-600/5 p-6 border-b border-gray-100">
                <div className="max-w-3xl mx-auto">
                  <div className="flex items-center justify-between relative">
                    <div className="flex-1 flex items-center justify-center">
                      <div className="flex items-center">
                        <div 
                          className={`w-8 h-8 rounded-full flex items-center justify-center font-medium transition-colors ${
                            step >= 1 ? 'bg-orange text-white' : 'bg-gray-200 text-gray-500'
                          }`}
                          style={{ aspectRatio: '1' }}
                        >
                          1
                        </div>
                        <span className="ml-3 font-medium text-gray-700 whitespace-nowrap">Producto</span>
                      </div>
                      <div className="hidden md:block w-full max-w-[100px] h-[2px] bg-gray-200 mx-4">
                        <div 
                          className="h-full bg-orange transition-all duration-300"
                          style={{ width: step >= 2 ? '100%' : '0%' }}
                        />
                      </div>
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                      <div className="flex items-center">
                        <div 
                          className={`w-8 h-8 rounded-full flex items-center justify-center font-medium transition-colors ${
                            step >= 2 ? 'bg-orange text-white' : 'bg-gray-200 text-gray-500'
                          }`}
                          style={{ aspectRatio: '1' }}
                        >
                          2
                        </div>
                        <span className="ml-3 font-medium text-gray-700 whitespace-nowrap">Envío</span>
                      </div>
                      <div className="hidden md:block w-full max-w-[100px] h-[2px] bg-gray-200 mx-4">
                        <div 
                          className="h-full bg-orange transition-all duration-300"
                          style={{ width: step >= 3 ? '100%' : '0%' }}
                        />
                      </div>
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                      <div className="flex items-center">
                        <div 
                          className={`w-8 h-8 rounded-full flex items-center justify-center font-medium transition-colors ${
                            step === 3 ? 'bg-orange text-white' : 'bg-gray-200 text-gray-500'
                          }`}
                          style={{ aspectRatio: '1' }}
                        >
                          3
                        </div>
                        <span className="ml-3 font-medium text-gray-700 whitespace-nowrap">Resultados</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contenido del Form según step */}
              <div className="p-6 md:p-8">
                {step === 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-6">
                      <div className="form-group">
                        <label className="block text-gray-700 font-medium mb-2">
                          Tipo de Producto
                        </label>
                        <select 
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange focus:ring-2 focus:ring-orange/20 transition-colors bg-white"
                          value={formData.tipoProducto}
                          onChange={(e) => setFormData({...formData, tipoProducto: e.target.value})}
                        >
                          <option value="">Seleccionar categoría</option>
                          <option value="electronica">Electrónica</option>
                          <option value="ropa">Ropa y Accesorios</option>
                          <option value="hogar">Hogar y Jardín</option>
                          <option value="otros">Otros</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="block text-gray-700 font-medium mb-2">
                          Precio del Producto (USD)
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                          <input 
                            type="number"
                            className="w-full pl-8 pr-4 py-3 rounded-xl border border-gray-200 focus:border-orange focus:ring-2 focus:ring-orange/20 transition-colors"
                            placeholder="Ej: 100"
                            value={formData.precioProducto}
                            onChange={(e) => setFormData({...formData, precioProducto: e.target.value})}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="form-group">
                        <label className="block text-gray-700 font-medium mb-2">
                          Peso Aproximado
                        </label>
                        <div className="relative">
                          <input 
                            type="number"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange focus:ring-2 focus:ring-orange/20 transition-colors"
                            placeholder="Ej: 0.5"
                            value={formData.peso}
                            onChange={(e) => setFormData({...formData, peso: e.target.value})}
                          />
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">kg</span>
                        </div>
                      </div>

                      <div className="form-group">
                        <label className="block text-gray-700 font-medium mb-2">
                          Cantidad
                        </label>
                        <div className="relative">
                          <input 
                            type="number"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange focus:ring-2 focus:ring-orange/20 transition-colors"
                            min="1"
                            value={formData.cantidad}
                            onChange={(e) => setFormData({...formData, cantidad: e.target.value})}
                          />
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">unidades</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-6 md:col-span-2">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Dirección de Entrega
                        </label>
                        <input 
                          type="text"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange focus:ring-2 focus:ring-orange/20 transition-colors"
                          placeholder="Calle, número, piso, depto."
                          value={formData.direccion}
                          onChange={(e) => setFormData({...formData, direccion: e.target.value})}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Ciudad
                      </label>
                      <input 
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange focus:ring-2 focus:ring-orange/20 transition-colors"
                        value={formData.ciudad}
                        onChange={(e) => setFormData({...formData, ciudad: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Código Postal
                      </label>
                      <input 
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange focus:ring-2 focus:ring-orange/20 transition-colors"
                        value={formData.codigoPostal}
                        onChange={(e) => setFormData({...formData, codigoPostal: e.target.value})}
                      />
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-50">
                        <p className="text-gray-600 mb-2 text-sm">Costo Producto</p>
                        <p className="text-2xl font-bold text-orange">$100</p>
                      </div>
                      <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-50">
                        <p className="text-gray-600 mb-2 text-sm">Impuestos</p>
                        <p className="text-2xl font-bold text-orange">$35</p>
                      </div>
                      <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-50">
                        <p className="text-gray-600 mb-2 text-sm">Total Estimado</p>
                        <p className="text-2xl font-bold text-orange">$135</p>
                      </div>
                    </div>

                    <p className="mt-6 text-sm text-gray-500 text-center">
                      * Los valores son aproximados y pueden variar según diversos factores.
                    </p>
                  </div>
                )}

                {/* Botones de navegación */}
                <div className="mt-8 flex justify-between">
                  {step > 1 && (
                    <button
                      onClick={() => setStep(step - 1)}
                      className="text-gray-600 font-medium hover:text-orange transition-colors"
                    >
                      Anterior
                    </button>
                  )}
                  
                  <button
                    onClick={() => step < 3 ? setStep(step + 1) : null}
                    className="ml-auto bg-orange text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg inline-flex items-center"
                  >
                    {step < 3 ? (
                      <>
                        <span>Siguiente</span>
                        <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </>
                    ) : (
                      <span>Calcular Costo</span>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hero Contact Section Mejorado */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-orange/5 via-orange/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl md:text-3xl font-bold">
                ¿Necesitás ayuda con tu importación?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Nuestro equipo de expertos está listo para asesorarte en todo el proceso
              </p>
              <Link href="/contacto">
                <button className="mt-8 bg-orange text-white px-8 py-4 rounded-full font-medium hover:bg-orange-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center">
                  <span>Contactar Experto</span>
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Estilos adicionales para mobile */}
      <style jsx>{`
        @media (max-width: 768px) {
          .flex-1 {
            padding: 0 8px;
          }
          .whitespace-nowrap {
            font-size: 14px;
          }
        }
      `}</style>
    </main>
  )
} 