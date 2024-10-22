import React from 'react'
import Layout from '@/components/Layout/Layout'
import Hero from '@/components/Hero/Hero'
import Features from '@/components/Features/Features'
import HowItWorks from '@/components/HowItWorks/HowItWorks'
import Testimonials from '@/components/Testimonials/Testimonials'
import FAQ from '@/components/FAQ/FAQ'
import CTA from '@/components/CTA/CTA'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
    </Layout>
  )
}