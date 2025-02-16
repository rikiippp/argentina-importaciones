import Image from 'next/image';

export default function ContactHero() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-72 h-72 bg-blue-100/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-orange-100/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
          {/* Contenido de texto */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Hagamos crecer tu
              <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent"> negocio juntos</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto lg:mx-0">
              Nuestro equipo está listo para ayudarte a expandir tus horizontes comerciales. 
              Importar nunca fue tan sencillo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://wa.me/TUNUMERO" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-hover text-white px-8 py-4 rounded-xl transition-all duration-300 font-medium hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 448 512" 
                  className="w-6 h-6 fill-current group-hover:animate-bounce"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
                Iniciar chat
              </a>
              <button className="inline-flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl transition-all duration-300 font-medium hover:scale-105">
                Ver servicios
              </button>
            </div>
          </div>

          {/* Imagen isométrica */}
          <div className="flex-1 relative flex justify-center items-center">
            <div className="relative w-[400px] h-[420px]">
              <Image 
                src="/pngs/contact-iso.png" 
                alt="Comunicación digital"
                fill
                quality={100}
                className="object-contain hover:-translate-y-2 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 400px"
                priority
              />
              {/* Elementos decorativos flotantes reposicionados */}
              <div className="absolute -top-8 -right-10 w-20 h-20 bg-blue-500/10 rounded-xl rotate-12 animate-float"></div>
              <div className="absolute -bottom-8 -left-10 w-16 h-16 bg-orange-500/10 rounded-xl -rotate-12 animate-float animation-delay-2000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 