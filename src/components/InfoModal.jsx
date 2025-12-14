import React, { useEffect } from 'react';
import './InfoModal.css';

const InfoModal = ({ isOpen, onClose, title, content }) => {
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
        <div className="info-modal-overlay" onClick={onClose}>
            <div className="info-modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="info-modal-header">
                    <h2>{title}</h2>
                    <button className="info-close-btn" onClick={onClose}>&times;</button>
                </div>
                <div className="info-modal-body">
                    {content}
                </div>
            </div>
        </div>
    );
};

export default InfoModal;
