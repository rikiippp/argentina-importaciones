import { Roboto } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import './globals.css'

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
})

export const metadata = {
  title: 'Argentina Importaciones',
  description: 'Servicios de importación en Argentina',
  icons: {
    icon: '/icons/logo.png',
    shortcut: '/icons/logo.png',
    apple: '/icons/logo.png',
  },

}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link 
          href="https://fonts.cdnfonts.com/css/akira-expanded" 
          rel="stylesheet"
        />
        <link rel="icon" href="/icons/logo.png" />
      </head>
      <body className={`${roboto.variable} font-roboto`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
} 