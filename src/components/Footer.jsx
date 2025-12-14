import React from 'react';
import logo from '../assets/logo.webp';
import './Footer.css';

const Footer = ({ onOpenPrivacy, onOpenTerms }) => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-logo">
                    <img src={logo} alt="AKM SERV Logo" className="footer-logo-img" width="1024" height="1024" loading="lazy" />
                    <div className="footer-logo-text">
                        <h2>AKM <span>SERV</span></h2>
                        <p>PRIVAT SECURITY</p>
                    </div>
                </div>
                <div className="footer-links">
                    <h3>Link-uri utile</h3>
                    <ul>
                        <li><a href="#home">Acasă</a></li>
                        <li><a href="#services">Servicii</a></li>
                        <li><a href="#about">Despre noi</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
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
