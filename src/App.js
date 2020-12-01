import './App.css';
import React from 'react';
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
import About from './components/about/About';
function App() {
  return (
    <div className='App'>
      {/* <CustomPinkButton />
      <CustomCyanButton /> */}
      <Navigation />
      <Hero />
      <Services />
      <ProductInfo />
      <CoreFeatures />
      <Projects />
      <About />
      <ContactUs />
      <Maps />
      <Footer />
    </div>
  );
}

export default App;
{
  /* <Switch>
          <Route path="/" exact component={Hero} />
          <Route path="/features" component={CoreFeatures} />
          <Route path="/" exact component={Services} />
          <Route path="/features" component={ProductInfo} />
          <Route path="/" exact component={Projects} />
          <Route path="/features" component={ContactUs} />
          <Route path="/features" component={Maps} />
          <Route path="/features" component={Footer} />
      </Switch> */
}
