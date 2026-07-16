import React from 'react';
import { Rocket, Shield, Palette, Code2, Globe, Cpu } from 'lucide-react';

const features = [
  {
    icon: <Rocket size={28} />,
    title: 'Lightning Fast',
    description: 'Optimized performance with React 18 and modern build tools. Experience blazing fast load times.'
  },
  {
    icon: <Shield size={28} />,
    title: 'Secure by Default',
    description: 'Built with security best practices. Your data and application are protected from day one.'
  },
  {
    icon: <Palette size={28} />,
    title: 'Beautiful Design',
    description: 'Stunning UI with gradient effects, smooth animations, and a modern dark theme.'
  },
  {
    icon: <Code2 size={28} />,
    title: 'Clean Code',
    description: 'Well-structured, maintainable code following React best practices and modern standards.'
  },
  {
    icon: <Globe size={28} />,
    title: 'Fully Responsive',
    description: 'Looks perfect on any device - mobile, tablet, or desktop. Adaptive layouts for all screens.'
  },
  {
    icon: <Cpu size={28} />,
    title: 'Modern Stack',
    description: 'Built with React 18, CSS3, and Lucide icons. No unnecessary dependencies.'
  }
];

function Features() {
  return (
    <section className="features" id="features">
      <div className="section-header">
        <h2>Why Choose Us?</h2>
        <p>Everything you need to build amazing applications locally</p>
      </div>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">
              {feature.icon}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
