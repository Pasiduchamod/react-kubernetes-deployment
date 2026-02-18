import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">DevOps Ready React</h1>
          <p className="hero-subtitle">
            A modern, high-performance foundation for your next big project. 
            Automate, Deploy, Scale.
          </p>
          <button className="cta-button" onClick={() => alert('Deployment sequence initiated!')}>
            Start Building
          </button>
        </div>
      </section>

      <section className="features-grid">
        <FeatureCard 
          title="Fast Refresh" 
          desc="Powered by Vite, experience lightning fast HMR and instant server start."
        />
        <FeatureCard 
          title="CI/CD Ready" 
          desc="Pre-configured with Vitest and easy to integrate with GitHub Actions or Jenkins."
        />
        <FeatureCard 
          title="Secure by Design" 
          desc="Built with best practices in mind making it safe for enterprise deployment."
        />
      </section>
    </div>
  );
};

const FeatureCard = ({ title, desc }) => (
  <div className="feature-card">
    <div className="feature-line"></div>
    <h3 className="feature-title">{title}</h3>
    <p className="feature-desc">{desc}</p>
  </div>
);

export default LandingPage;
