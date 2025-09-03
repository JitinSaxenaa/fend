import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import WhyChoose from "./components/WhyChoose";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import HospitalFinderPage from "./HospitalFinderPage";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import BackgroundElements from "./components/BackgroundElements";

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ Home Page */}
        <Route
          path="/"
          element={
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
          }
        />

        {/* ✅ Hospital Finder Page */}
        <Route path="/hospitals" element={<HospitalFinderPage />} />
      </Routes>
    </Router>
  );
}

export default App;
