import React, { useState, useEffect, useRef } from 'react';
import './CustomSelect.css';

const CustomSelect = ({ options, value, onChange, placeholder, disabled }) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef(null);

    const handleToggle = () => {
        if (!disabled) {
            setIsOpen(!isOpen);
        }
    };

    const handleSelect = (optionValue) => {
        onChange(optionValue);
        setIsOpen(false);
    };

    const selectedLabel = options.find(opt => opt.value === value)?.label || placeholder;

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="custom-select-container" ref={selectRef}>
            <div
                className={`custom-select-trigger ${isOpen ? 'open' : ''} ${disabled ? 'disabled' : ''}`}
                onClick={handleToggle}
            >
                <span>{selectedLabel}</span>
                <div className="arrow"></div>
            </div>

            {isOpen && (
                <ul className="custom-options">
                    <li
                        className="custom-option placeholder"
                        onClick={() => handleSelect("")}
                    >
                        {placeholder}
                    </li>
                    {options.map((option) => (
                        <li
                            key={option.value}
                            className={`custom-option ${value === option.value ? 'selected' : ''}`}
                            onClick={() => handleSelect(option.value)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomSelect;
