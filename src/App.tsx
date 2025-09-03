import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import WhyChoose from './components/WhyChoose';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import BackgroundElements from './components/BackgroundElements';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 relative overflow-hidden">
      <BackgroundElements />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <WhyChoose />
        <HowItWorks />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}

export default App;