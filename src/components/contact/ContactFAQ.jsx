'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: "¿Por qué elegir a Argentina Importaciones para importar desde China?",
    answer: "Porque somos expertos en el mercado chino. Conocemos a fondo cómo trabajar con proveedores de confianza y manejamos todo el proceso de importación, desde la negociación hasta el despacho aduanero, garantizando costos claros y un servicio sin complicaciones."
  },
  {
    question: "¿Qué tipo de productos puedo importar desde China?",
    answer: "Podés importar una amplia gama de productos: tecnología, textiles, insumos industriales, productos de tendencia, y mucho más. Si no estás seguro de si un producto se puede importar, contactanos y te asesoramos."
  },
  {
    question: "¿Cómo funcionan las comisiones?",
    answer: "Trabajamos con comisiones del 3% al 7%, dependiendo del tipo de producto y el volumen de la importación. Nuestros costos son transparentes y sin sorpresas."
  },
  {
    question: "¿Cuánto tiempo tarda una importación desde China?",
    answer: "El tiempo depende del tipo de transporte:\n• Transporte marítimo: entre 30 y 60 días, ideal para grandes volúmenes.\n• Transporte aéreo: entre 10 y 20 días, recomendado para envíos urgentes o productos de menor volumen."
  },
  {
    question: "¿Qué pasa si hay problemas con la aduana?",
    answer: "No te preocupes, nosotros nos encargamos de gestionar todo el despacho aduanero. Nos aseguramos de que tu importación llegue sin inconvenientes y con la documentación correcta."
  },
  {
    question: "¿Puedo importar a nombre de mi empresa?",
    answer: "¡Sí! Podés importar a tu nombre o al de tu empresa. Nosotros te asesoramos para que elijas la opción más conveniente según tu situación."
  },
  {
    question: "¿Puedo importar en pequeñas cantidades?",
    answer: "Sí, podés empezar con pequeñas cantidades para probar el mercado. Te ayudamos a gestionar desde pequeños pedidos hasta grandes importaciones."
  }
]

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Preguntas Frecuentes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Encontrá las respuestas a las dudas más comunes sobre importaciones
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 bg-white rounded-lg border border-gray-100 
                         hover:border-orange/20 transition-all duration-300 
                         flex justify-between items-start gap-4"
              >
                <span className="font-medium text-gray-800">{faq.question}</span>
                <span 
                  className={`transform transition-transform duration-300 text-orange
                           ${openIndex === index ? 'rotate-180' : ''} mt-1`}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-orange/5 rounded-b-lg border-x border-b border-orange/10">
                      <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 