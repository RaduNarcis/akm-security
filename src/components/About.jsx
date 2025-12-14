import React from 'react';
import './About.css';
import aboutImage from '../assets/about-team.webp';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container about-container">
                <div className="about-image">
                    <img src={aboutImage} alt="Echipa AKM Security" width="1024" height="1024" loading="lazy" />
                    <div className="experience-badge">
                        <span className="years">20+</span>
                        <span className="text">Ani de<br />Experiență</span>
                    </div>
                </div>
                <div className="about-content">
                    <h2 className="section-title text-left">Despre noi</h2>
                    <h3>Partenerul tău de încredere în securitate</h3>
                    <p>
                        La <strong>AKM SERV PRIVAT SECURITY SRL</strong>, ne dedicăm protejării a ceea ce contează cel mai mult pentru dumneavoastră. Cu o echipă de profesioniști atent selecționați și instruiți la cele mai înalte standarde, oferim soluții de securitate complete și personalizate.
                    </p>
                    <p>
                        Misiunea noastră este să asigurăm un mediu sigur pentru clienții noștri, fie că este vorba de reședințe private, sedii de firme, șantiere sau evenimente speciale. Integritatea, vigilența și profesionalismul sunt valorile care ne guvernează fiecare acțiune.
                    </p>
                    <ul className="about-features">
                        <li>
                            <span className="check">✓</span>
                            Personal avizat și instruit
                        </li>
                        <li>
                            <span className="check">✓</span>
                            Tehnologie de ultimă generație
                        </li>
                        <li>
                            <span className="check">✓</span>
                            Disponibilitate 24/7
                        </li>
                        <li>
                            <span className="check">✓</span>
                            Acoperire națională
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
