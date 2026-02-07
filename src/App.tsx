import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import CarRental from '@/components/CarRental'
import TourPackages from '@/components/TourPackages'
import Gallery from '@/components/Gallery'
import CTASection from '@/components/CTASection'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutUs />
      <CarRental />
      <TourPackages />
      <Gallery />
      <CTASection />
      <Testimonials />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App

