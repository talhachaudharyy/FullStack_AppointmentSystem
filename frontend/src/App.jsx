import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import backgroundImage from './assets/hero-bg.jpg';
import Hero from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import InfoSection from './components/InfoSection';
import Appointment from './components/Appointment';
import Care from './components/Care';
import ChartSection from './components/ChartSection';
import Doctors from './components/Doctors';
import Footer from './components/Footer';



function App() {
  return (
      <div>
        <div className="bg-cover bg-no-repeat min-h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <Navbar />
          <Hero />
        </div>
        <div className='App'>
          <FeatureSection />
          <InfoSection />
          <Appointment />
          <ChartSection />
          <Care />
          <Doctors />
          <Footer />
        </div>
      </div>
   
  );
}

export default App;
