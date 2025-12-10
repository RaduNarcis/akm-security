import React from 'react';
import './Hero.css';
import heroBg from '../assets/hero-bg.webp';

const Hero = () => {
    return (
        <section id="home" className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1>Siguranță Profesională pentru <span className="highlight">Tine</span> și <span className="highlight">Afacerea Ta</span></h1>
                <p>AKM SERV PRIVAT SECURITY SRL oferă servicii de pază și protecție la cele mai înalte standarde, garantând liniștea și securitatea obiectivelor dumneavoastră.</p>
                <div className="hero-buttons">
                    <a href="#contact" className="btn btn-primary">Cere Ofertă</a>
                    <a href="#services" className="btn btn-outline">Serviciile Noastre</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
