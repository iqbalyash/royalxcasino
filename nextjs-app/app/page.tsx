'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Games from '@/components/Games'
import Bonuses from '@/components/Bonuses'
import HowToPlay from '@/components/HowToPlay'
import ResponsibleGaming from '@/components/ResponsibleGaming'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { useButtonAnimations } from '@/hooks/useButtonAnimations'

export default function Home() {
  useSmoothScroll()
  useButtonAnimations()

  return (
    <>
      <a className="skip-link screen-reader-text" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="site-main">
        <Hero />
        <About />
        <Games />
        <Bonuses />
        <HowToPlay />
        <ResponsibleGaming />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
