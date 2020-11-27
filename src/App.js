import './App.css';
import React from 'react';
import ContactUs from './pages/contact/ContactUs';

import Footer from './pages/footer/Footer';
function App() {
  return (
    <div className='App'>
      {/* <CustomPinkButton />
      <CustomCyanButton /> */}
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
