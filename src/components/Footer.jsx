import React from 'react';
import logo from '../assets/logo.webp';
import partner7spice from '../assets/partners/7spice_logo.png';
import partnerBytex from '../assets/partners/bytex.jpg';
import partnerFrigoglass from '../assets/partners/frigoglass.jpg';
import partnerKosarom from '../assets/partners/kosarom.jpg';
import partnerVelPitar from '../assets/partners/LOGO-Vel-Pitar.png';
import partnerAcademiaIasi from '../assets/partners/Logo-Academia-Romana-Filiala-Iasi.png';
import partnerTreiBrutari from '../assets/partners/Logo-Trei-Brutari-small.png';
import partnerAcademia from '../assets/partners/academia_romana.png';
import partnerMambu from '../assets/partners/mambu-logo-2023.png';
import partnerMcm from '../assets/partners/mcm-center.jpeg';
import partnerMoldovaCenter from '../assets/partners/moldova-center-logo.jpeg';
import partnerPanifcom from '../assets/partners/panifcom_logo_alb_svg.png';
import partnerSignant from '../assets/partners/singant-health-logo.png';
import './Footer.css';

const Footer = ({ onOpenPrivacy, onOpenTerms }) => {
    // Array of partner logos
    const partners = [
        { src: partner7spice, alt: "7 Spice" },
        { src: partnerBytex, alt: "Bytex" },
        { src: partnerFrigoglass, alt: "Frigoglass" },
        { src: partnerKosarom, alt: "Kosarom" },
        { src: partnerVelPitar, alt: "Vel Pitar" },
        { src: partnerAcademiaIasi, alt: "Academia Romana Iasi" },
        { src: partnerTreiBrutari, alt: "Trei Brutari" },
        { src: partnerAcademia, alt: "Academia Romana" },
        { src: partnerMambu, alt: "Mambu" },
        { src: partnerMcm, alt: "MCM Center" },
        { src: partnerMoldovaCenter, alt: "Moldova Center" },
        { src: partnerPanifcom, alt: "Panifcom" },
        { src: partnerSignant, alt: "Signant Health" },
    ];

    // Tripling the array for smooth infinite scrolling
    const marqueePartners = [...partners, ...partners, ...partners];

    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-top-section">
                    <div className="footer-logo">
                        <img src={logo} alt="AKM Logo" className="footer-logo-img" />
                        <div className="footer-logo-text">
                            <h2>AKM SERV <span>PRIVAT</span></h2>
                            <p>SECURITY</p>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h3>Link-uri Rapide</h3>
                        <ul>
                            <li><a href="#hero">Acasă</a></li>
                            <li><a href="#services">Servicii</a></li>
                            <li><a href="#about">Despre Noi</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-partners">
                    <h3>Parteneri</h3>
                    <div className="partners-marquee">
                        <div className="partners-track">
                            {/* Map through the tripled array */}
                            {marqueePartners.map((partner, index) => (
                                <img key={index} src={partner.src} alt={partner.alt} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 AKM SERV <span>PRIVAT</span> SECURITY SRL. Toate drepturile rezervate.</p>
                    <div className="footer-legal">
                        <button onClick={onOpenPrivacy}>Politica de confidențialitate</button>
                        <span className="separator">|</span>
                        <button onClick={onOpenTerms}>Termeni și condiții</button>
                        <span className="separator">|</span>
                        <a href="https://anpc.ro/" target="_blank" rel="noopener noreferrer">Protecția consumatorului</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
