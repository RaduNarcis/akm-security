import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.webp';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <div className="logo">
                    <img src={logo} alt="AKM SERV Logo" className="logo-img" width="1024" height="1024" />
                    <div className="logo-text">
                        <h1>AKM <span>SERV</span></h1>
                        <p className="subtitle">PRIVAT SECURITY</p>
                    </div>
                </div>

                <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Acasă</a></li>
                        <li><a href="#services" onClick={() => setMobileMenuOpen(false)}>Servicii</a></li>
                        <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>Despre Noi</a></li>
                        <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
                    </ul>
                </nav>

                <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </header>
    );
};

export default Header;
