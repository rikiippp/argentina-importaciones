import HeroBanner from '@/components/HeroBanner.jsx'
import StepsSection from '@/components/StepsSection.jsx'
import TrustedProviders from '@/components/TrustedProviders.jsx'
import Testimonials from '@/components/Testimonials.jsx'
// import AboutUs from '@/components/AboutUs.jsx'
import ContactHero from '@/components/ContactHero.jsx'
import FeaturedServices from '@/components/FeaturedServices.jsx'


export default function Home() {
  return (
    <main>
      <HeroBanner />
      <TrustedProviders />
      <FeaturedServices />
      <StepsSection />
      <Testimonials />
      <ContactHero />

    </main>
  )
} 