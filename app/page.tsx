import Header from '../components/header'
import Hero from '../components/hero'
import Features from '../components/features'
import Testimonials from '../components/testimonials'
import CTA from '../components/cta'
import Footer from '../components/footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

