import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export const FilterButton = ({ title, icon, onClick }) => {
    const [isActive, setIsActive] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const buttonStyle = {
        backgroundColor: isActive || isHovered ? 'orange' : 'white',
        color: isActive || isHovered ? 'white' : 'black',
        padding: '8px 16px',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        height: '40px'
    };

    const iconStyle = {
        width: '20px',
        height: '20px',
        marginRight: '8px',
    };

    useEffect(() => {
        return () => setIsActive(false);
    }, []);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClick = () => {
        setIsActive(true);
        onClick(); // Trigger the provided onClick function
    };

    return (
        <button
            style={buttonStyle}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {icon && <Image width="10" height="10" loading="lazy" src={icon} alt="Icon" style={iconStyle} />}
            {title}
        </button>
    );
};
