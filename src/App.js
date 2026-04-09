import { useEffect } from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeBanner from './components/MarqueeBanner';
import IntroSection from './components/IntroSection';
import ServicesSection from './components/ServicesSection';
import StatsSection from './components/StatsSection';
import PortfolioSection from './components/PortfolioSection';
import ProcessSection from './components/ProcessSection';
import TeamSection from './components/TeamSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function App() {
  // Scroll-reveal: adds .visible to .rv elements on enter
  useScrollReveal();

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        const section = document.querySelector(target.getAttribute('href'));
        if (section) {
          e.preventDefault();
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="app">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <MarqueeBanner />
        <IntroSection />
        <ServicesSection />
        <StatsSection />
        <PortfolioSection />
        <ProcessSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
