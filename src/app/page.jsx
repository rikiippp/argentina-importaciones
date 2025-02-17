import HeroBanner from '@/components/home/HeroBanner.jsx'
import StepsSection from '@/components/home/StepsSection.jsx'
import TrustedProviders from '@/components/home/TrustedProviders.jsx'
import dynamic from 'next/dynamic'
import ContactHero from '@/components/home/ContactHero.jsx'
import FeaturedServices from '@/components/home/FeaturedServices.jsx'

const Testimonials = dynamic(() => import('@/components/home/Testimonials.jsx'))
const ResourceCenter = dynamic(() => import('@/components/home/ResourceCenter.jsx'))

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <TrustedProviders />
      <FeaturedServices />
      <StepsSection />
      <ResourceCenter />
      <Testimonials />
      <ContactHero />
    </main>
  )
} 