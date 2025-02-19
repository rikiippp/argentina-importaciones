'use client'
import { useEffect } from 'react'
import ContactSection from '@/components/shared/ContactSection.jsx'
import ContactHero from '@/components/contact/ContactHero.jsx'
import ContactFAQ from '@/components/contact/ContactFAQ.jsx'

const ContactPage = () => {
  useEffect(() => {
    // Verificar si hay un hash en la URL
    if (window.location.hash === '#faq') {
      const faqSection = document.getElementById('faq')
      if (faqSection) {
        setTimeout(() => {
          faqSection.scrollIntoView({ behavior: 'smooth' })
        }, 100) // Pequeño delay para asegurar que todo esté cargado
      }
    }
  }, [])

  return (
    <>
      <div className="pt-28 pb-20">
        <ContactHero />
        <ContactSection />
        <ContactFAQ />
      </div>
    </>
  )
}
export default ContactPage
