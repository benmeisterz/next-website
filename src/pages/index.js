import Image from 'next/image'
import Footer from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'

export default function Home() {
  return (
    <div>
      {/* section */}
      <Nav />
      <Hero />
      <Footer />
    </div>
  )
}
