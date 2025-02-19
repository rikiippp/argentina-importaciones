'use client'
import { motion } from 'framer-motion'
import ServiceHero from '@/components/services/ServiceHero.jsx'
import CoreServices from '@/components/services/CoreServices.jsx'
import ProcessSection from '@/components/services/ProcessSection.jsx'
import Certifications from '@/components/services/Certifications.jsx'
import ContactCTA from '@/components/shared/ContactCTA.jsx'

export default function ServicesPage() {
  return (
    <main className="bg-gradient-to-b from-gray-50/50 to-white">
      <ServiceHero />
      <CoreServices />
      <ProcessSection />
      <Certifications />
      <ContactCTA />
    </main>
  )
} 