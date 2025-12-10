import React from 'react';
import logo from '../assets/logo.webp';
import './Footer.css';

const Footer = () => {
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
                <div className="footer-legal">
                    <p>&copy; {new Date().getFullYear()} AKM SERV PRIVAT SECURITY SRL. Toate drepturile rezervate.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
