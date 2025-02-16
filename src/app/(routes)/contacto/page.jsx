import ContactSection from '@/components/shared/ContactSection.jsx'
import ContactHero from '@/components/contact/ContactHero.jsx'
import ContactFAQ from '@/components/contact/ContactFAQ.jsx'


export const metadata = {
  title: 'Contacto | Argentina Importaciones',
  description: 'Contactanos para resolver todas tus dudas sobre importación. Atención personalizada y respuesta en menos de 24 horas hábiles.',
  keywords: 'contacto, importaciones, consultas, argentina'
}

const ContactPage = () => {
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