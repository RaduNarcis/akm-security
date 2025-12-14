import React, { useEffect } from 'react';
import './PrivacyModal.css';
import { privacyTitle, privacyText } from './PrivacyContent';

const PrivacyModal = ({ isOpen, onClose }) => {
    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="privacy-modal-overlay" onClick={onClose}>
            <div className="privacy-modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="privacy-modal-header">
                    <h2>{privacyTitle}</h2>
                    <button className="privacy-close-btn" onClick={onClose}>&times;</button>
                </div>
                <div className="privacy-modal-body">
                    {privacyText}
                </div>
            </div>
        </div>
    );
};

export default PrivacyModal;
