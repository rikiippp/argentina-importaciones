import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Logo e información de la empresa */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/svgs/logos/LOGO.svg"
                alt="Argentina Importaciones"
                width={50}
                height={50}
              />
              <div className="font-akira flex flex-col">
                <span className="text-xl leading-tight">ARGENTINA</span>
                <span className="text-sm -mt-1">IMPORTACIONES</span>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Especialistas en importaciones y soluciones logísticas internacionales. Tu socio confiable en comercio exterior.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4">
              {['Servicios', 'Sobre Nosotros', 'Contacto', 'Calculadora'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-orange transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-orange">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>Cordoba, Argentina</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-orange">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>+54 11 1234-5678</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-orange">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span>info@argentinaimportaciones.com</span>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div className="flex flex-col items-start w-full">
            <h4 className="text-lg font-semibold mb-8">Síguenos</h4>
            <div className="flex items-center gap-3">
              {[
                { name: 'instagram', icon: 'INSTAGRAM.svg' },
                { name: 'facebook', icon: 'FACEBOOK.svg' },
                { name: 'whatsapp', icon: 'WHATSAPP.svg' }
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="group transition-all duration-300 hover:-translate-y-1"
                  aria-label={social.name}
                >
                  <div className="w-11 h-11 flex items-center justify-center rounded-full 
                    bg-white/5 group-hover:bg-orange/20 transition-all duration-300">
                    <Image
                      src={`/svgs/icons/${social.icon}`}
                      alt={social.name}
                      width={22}
                      height={22}
                      className="opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center">
              © {new Date().getFullYear()} Argentina Importaciones. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">

              <Link href="/privacidad" className="text-gray-400 hover:text-orange transition-colors duration-300">
                Política de Privacidad
              </Link>
              <Link href="/terminos" className="text-gray-400 hover:text-orange transition-colors duration-300">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 