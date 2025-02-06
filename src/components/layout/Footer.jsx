import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Información de la empresa */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nombre Empresa</h3>
            <p className="text-gray-400">
              Especialistas en importaciones y soluciones logísticas internacionales
            </p>
          </div>
          
          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#nosotros">Sobre Nosotros</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          
          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📍 Dirección de la empresa</li>
              <li>📞 +123 456 789</li>
              <li>✉️ contacto@empresa.com</li>
            </ul>
          </div>
          
          {/* Redes sociales */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              {/* Aquí irían los iconos de redes sociales */}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Nombre Empresa. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 