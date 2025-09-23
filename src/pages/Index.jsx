import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonial';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="w-full">
        <Hero />
        <Services />
        <About />
        <Testimonials/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
