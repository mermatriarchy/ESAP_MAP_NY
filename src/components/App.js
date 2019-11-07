import React from 'react';

import NavBar from './NavBar';
import GoogleMap from './GoogleMap';
import About from './About';
import Footer from './Footer';

export default function App() {
  return (
    <div>
      <NavBar />
      <GoogleMap />
      <About />
      <Footer />
    </div>
  );
}
