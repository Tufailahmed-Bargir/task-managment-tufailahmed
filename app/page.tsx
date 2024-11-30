// 'use client'
import Header from '../components/header'
import Hero from '../components/hero'
import Features from '../components/features'
import Testimonials from '../components/testimonials'
import CTA from '../components/cta'
import Footer from '../components/footer'
import { getSession, useSession } from 'next-auth/react'
import { NEXT_AUTH_CONFIG } from '@/lib/auth'

import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation'

 


 

export default async function () {
 
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
