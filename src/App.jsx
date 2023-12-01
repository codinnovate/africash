import './index.css'
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import { Footer } from './components/Footer';
import Features from './components/Features';


function App() {

  return (
    <div className='flex flex-col w-full bg-white h-full '>
      <Header />
      <Hero />
      <Brands />
      <Features />
      <Footer />

    </div>
  )
}

export default App
