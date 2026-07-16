import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <Zap size={24} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
        LocalTesting
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="#about">About</a></li>
      </ul>
      <button className="nav-cta">Get Started</button>
    </nav>
  );
}

export default Navbar;
