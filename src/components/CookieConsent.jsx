import React, { useState, useEffect } from 'react';
import './CookieConsent.css';

const CookieConsent = ({ onAccept, onOpenPrivacy }) => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            // Small delay for animation effect
            setTimeout(() => setShowBanner(true), 1000);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setShowBanner(false);
        if (onAccept) onAccept();
    };

    if (!showBanner) return null;

    return (
        <div className={`cookie-consent ${showBanner ? 'show' : ''}`}>
            <div className="cookie-content">
                <h3>Acest site folosește cookies</h3>
                <p>
                    Folosim module cookie pentru a vă îmbunătăți experiența de navigare.
                    Prin utilizarea site-ului sunteți de acord cu folosirea lor.
                </p>
                <div className="cookie-buttons">
                    <button className="cookie-btn-accept" onClick={handleAccept}>
                        Am înțeles !
                    </button>
                    <button className="cookie-btn-info" onClick={onOpenPrivacy}>
                        Aici poți afla mai multe despre cookies
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
