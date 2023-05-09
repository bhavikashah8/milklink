import './App.css';
import React, { useState, useEffect } from 'react';

import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import WhyPage from './Components/WhyPage';
import RegisterFarmer from './Components/Modals/registerYourself';

function App() {
  const [showModal, setShowModal] = useState(false);
  function handleClose() {
    setShowModal(false);
  }

  useEffect(() => {
    setShowModal(true);
  }, []);
  return (
    <div className="App">
      {showModal && <RegisterFarmer onClose={handleClose} />}
      <div>
        <Home />
        <About />
        <WhyPage />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
