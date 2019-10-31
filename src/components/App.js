import React, { useState } from 'react';

import NavBar from './NavBar';
import Map from './Map';
import About from './About';
import Footer from './Footer';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <NavBar />
      <Map />
      <About />
      <Footer />
    </div>
  );
}
