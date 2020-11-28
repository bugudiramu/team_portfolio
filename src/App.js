import './App.css';
import React from 'react';
import ContactUs from './pages/contact/ContactUs';

import Footer from './pages/footer/Footer';
import Testimonial from './pages/testimonials/Testimonial';
import Services from './pages/services/Services';
import ProductInfo from './pages/productInfo/ProductInfo';
import CoreFeatures from './pages/coreFeatures/CoreFeatures';
function App() {
  return (
    <div className='App'>
      {/* <CustomPinkButton />
      <CustomCyanButton /> */}
      <CoreFeatures />
      <Services />
      <ProductInfo />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
