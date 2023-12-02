import './index.css'
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import { Footer } from './components/Footer';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Download from './components/Download';
import Newsletter from './components/Newsletter';
import Benefits from './components/Benefits';


function App() {

  return (
    <div className='flex flex-col w-full bg-white h-full '>
      <Header />
      <Hero />
      <Brands />
      <Features />
      <Benefits />
      <Testimonials />
      <Download />
      <Newsletter />
      <Footer />

    </div>
  )
}

export default App
