import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import PhoneHero from '@/components/PhoneHero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Playground</title>
        <meta name="description" content="Playground" />
      </Head>
      {/* <Header /> */}
      <main>
        <PhoneHero />
        {/* <Hero /> */}
        {/* <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs /> */}
      </main>
      {/* <Footer /> */}
    </>
  )
}
