'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import '../../styles/layout.css'


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const pathname = usePathname()
  
  const isHomePage = pathname === '/'

  useEffect(() => {
    setIsClient(true)

    const handleScroll = () => {
      // Mejorar la detección del scroll
      const scrollY = window.scrollY
      const heroHeight = document.querySelector('#hero')?.offsetHeight || 800
      const scrollThreshold = heroHeight * 0.15 // 15% del hero height

      // Suavizar la transición con un umbral
      if (scrollY > scrollThreshold) {
        !scrolled && setScrolled(true)
      } else {
        scrolled && setScrolled(false)
      }

      // Detectar sección activa
      const sections = ['hero', 'steps', 'about', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Estado inicial

    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  // Agregamos un efecto para manejar el scroll cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const navLinks = [
    { href: '/#', label: 'Inicio', section: 'hero' },
    { href: '/nosotros', label: 'Nosotros', section: 'about' },
    { href: '/servicios', label: 'Servicios', section: 'services' },
    { href: '/products', label: '¿Qué puedo traer?', section: 'products' },
    { href: '/contacto', label: 'Contacto', section: 'contact' }
  ]


  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-500 ease-in-out py-4
        ${scrolled && !isMenuOpen
          ? 'bg-white/90 backdrop-blur-md shadow-sm'
          : isHomePage 
            ? 'bg-transparent' 
            : 'bg-white/90 backdrop-blur-md shadow-sm'
        }
      `}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between lg:justify-center">
          {/* Logo */}
          <div className="lg:mr-40">
            <Link href="/" className="flex items-center space-x-3 group">
              <Image
                src="/svgs/logos/LOGO.svg"
                alt="Argentina Importaciones"
                width={50}
                height={50}
                className="transition-all duration-300 group-hover:scale-105"

              />
              <div className={`font-akira flex flex-col transition-colors duration-300 ${
                (scrolled && !isMenuOpen) || !isHomePage ? 'text-smoky' : 'text-white'
              }`}>
                <span className="text-xl leading-tight ">ARGENTINA</span>
                <span className="text-sm -mt-1">IMPORTACIONES</span>
              </div>
            </Link>
          </div>

          {/* Links de navegación - Desktop */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map(({ href, label, section }) => (
              <Link
                key={href}
                href={href}
                className={`relative group nav-link-hover whitespace-nowrap text-[17px] transition-all duration-300 ${
                  (scrolled && !isMenuOpen) || !isHomePage ? 'text-smoky' : 'text-white'
                }`}
              >
                <span>{label}</span>
                <span className={`nav-underline absolute bottom-0 left-0 h-0.5 bg-orange transition-all duration-300
                  ${activeSection === section ? 'w-full' : 'w-0 group-hover:w-full'}
                `}></span>
              </Link>
            ))}

            <Link
              href="/calculadora"
              className="calculator-button text-[17px] text-white px-5 py-2.5 rounded-md 
                transition-all duration-500 hover:scale-105"
            >
              Calculadora
            </Link>
          </div>

          {/* Botón hamburguesa */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center mr-4"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5">
              <span className={`absolute w-full h-0.5 top-0 transition-colors duration-300
                ${isHomePage && !scrolled ? 'bg-white' : 'bg-smoky'}
              `} />
              <span className={`absolute w-full h-0.5 top-2 transition-colors duration-300
                ${isHomePage && !scrolled ? 'bg-white' : 'bg-smoky'}
              `} />
              <span className={`absolute w-full h-0.5 top-4 transition-colors duration-300
                ${isHomePage && !scrolled ? 'bg-white' : 'bg-smoky'}
              `} />
            </div>
          </button>


          {/* Menú móvil tipo sidebar */}
          <div 
            className={`
              lg:hidden fixed inset-y-0 right-0 sidebar-menu
              transition-all duration-300 ease-in-out z-[99]
              ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            `}
            onClick={(e) => e.stopPropagation()} // Evita que los clicks se propaguen
          >
            <div className="sidebar-content">
              {/* Header del sidebar con botón de cierre */}
              <div className="sticky top-0 flex justify-end bg-[#111111] py-4 px-4">
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="sidebar-close"
                  aria-label="Cerrar menú"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-6 h-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Links de navegación */}
              <nav className="flex-1">
                {navLinks.map(({ href, label, section }) => (
                  <Link 
                    key={href} 
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`sidebar-nav-link block ${
                      activeSection === section ? 'text-orange' : ''
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Botón Calculadora */}
            <div className="mt-auto p-6 bg-[#111111]">
              <Link 
                href="/calculadora"
                onClick={() => setIsMenuOpen(false)}
                className="calculator-button block w-full text-center text-white 
                  font-medium py-3 rounded-md"
              >
                Calculadora
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 