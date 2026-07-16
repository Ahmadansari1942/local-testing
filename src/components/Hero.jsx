import React from 'react';
import { Sparkles, ArrowRight, Play } from 'lucide-react';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-badge">
          <Sparkles size={16} />
          <span>v2.0 Now Available</span>
        </div>
        <h1>
          Build Faster with<br />
          Local Testing
        </h1>
        <p>
          A powerful, modern React application designed for seamless local development. 
          Beautiful UI, responsive design, and production-ready code.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">
            Start Building <ArrowRight size={20} />
          </button>
          <button className="btn-secondary">
            <Play size={20} style={{ marginRight: '8px', display: 'inline', verticalAlign: 'middle' }} />
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
