import React, { useState } from 'react';

import Nav from './Nav';
import Map from './Map';
import About from './About';
import Footer from './Footer';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Nav />
      <Map />
      <About />
      <Footer />
    </div>
  );
}
