import './App.css';
import React, { useEffect } from 'react';
import ContactUs from './pages/contact/ContactUs';
import Footer from './pages/footer/Footer';
import Testimonial from './pages/testimonials/Testimonial';
import Maps from './components/maps/Maps';
import Services from './pages/services/Services';
import ProductInfo from './pages/productInfo/ProductInfo';
import CoreFeatures from './pages/coreFeatures/CoreFeatures';
import Navigation from './components/navigation/Navigation';
import Hero from './components/hero/Hero';
import Projects from './components/projects/Projects';
import Aos from 'aos';
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])
  return (
    <div className='App' data-aos="fade-up">
      {/* <CustomPinkButton />
      <CustomCyanButton /> */}
      <Navigation />
      <Hero />
      <CoreFeatures />
      <Services />
      <ProductInfo />
      <Projects />
      <ContactUs />
      <Maps />
      <Footer />
    </div>
  );
}

export default App;
