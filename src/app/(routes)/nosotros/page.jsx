'use client'
import { motion } from 'framer-motion'
import AboutHero from '@/components/about/AboutHero.jsx'
import MissionSection from '@/components/about/MissionSection.jsx'
import WhyChooseUs from '@/components/about/WhyChooseUs.jsx'
import AboutCTA from '@/components/about/AboutCTA.jsx'

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-b from-gray-50/50 to-white">
      <AboutHero />
      <MissionSection />
      <WhyChooseUs />
      <AboutCTA />
    </main>
  )
} 