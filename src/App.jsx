import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/custom.css';

import { portfolioData } from './data/portfolioData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Theme state: default to system preference or saved preference
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  const [showBackToTop, setShowBackToTop] = useState(false);

  // Apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // Back to top scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="portfolio-app">
      {/* Navigation */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        personal={portfolioData.personal}
      />

      <main>
        {/* Hero Section */}
        <Hero personal={portfolioData.personal} />

        {/* About Section */}
        <About
          personal={portfolioData.personal}
          education={portfolioData.education}
        />

        {/* Selected Projects */}
        <Projects projects={portfolioData.projects} />

        {/* Work Experience & Education */}
        <Experience
          experience={portfolioData.experience}
          education={portfolioData.education}
        />

        {/* Skills & Toolkit */}
        <Skills skills={portfolioData.skills} />

        {/* Contact Form & Channels */}
        <Contact personal={portfolioData.personal} />
      </main>

      {/* Footer */}
      <Footer personal={portfolioData.personal} />

      {/* Floating Back to Top Button */}
      <button
        type="button"
        className={`btn btn-primary back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Scroll to top"
      >
        <i className="bi bi-arrow-up"></i>
      </button>
    </div>
  );
}
