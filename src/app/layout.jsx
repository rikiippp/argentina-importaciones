import { Roboto } from 'next/font/google'
import Navbar from '@/components/layout/Navbar.jsx'
import Footer from '@/components/layout/Footer.jsx'
import './globals.css'
import '../styles/buttons.css'
import ScrollToTop from '@/components/common/ScrollToTop'
  

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
})

export const metadata = {
  title: 'Argentina Importaciones',
  description: 'Servicios de importación en Argentina',
  icons: {
    icon: '/svgs/logos/LOGO.svg',
    shortcut: '/svgs/logos/LOGO.svg',
    apple: '/svgs/logos/LOGO.svg',
  },


}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/svgs/logos/LOGO.svg" />
        <link 
          rel="preload" 
          href="/webps/images/BOX-PARACHUTE.webp" 
          as="image"
        />
      </head>
      <body className={`${roboto.variable} font-roboto`}>
        <main>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow relative z-10">
              {children}
            </main>
            <Footer />
          </div>
        </main>
        <ScrollToTop />
      </body>
    </html>
  )
} 