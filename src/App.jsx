import Navbar from './components/Navbar'
import Hero from './components/Hero'
import DomainSearch from './components/DomainSearch'
import About from './components/About'
import Experience from './components/Experience'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import WhyChooseUs from './components/WhyChooseUs'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollTop from './components/ScrollTop'
import Preloader from './components/Preloader'
import Mimi from './components/Mimi'
export default function App() {
  return (<>
    <Preloader />
    <Navbar />
    <main>
      <Hero /><DomainSearch /><About /><Experience /><Services /><Portfolio />
      <WhyChooseUs /><Process /><Testimonials /><FAQ /><CTA /><Contact />
    </main>
    <Footer /><WhatsAppButton /><ScrollTop /><Mimi />
  </>)
}
