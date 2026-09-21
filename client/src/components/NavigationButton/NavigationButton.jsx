import React from 'react'
import './NavigationButton.css';
import { Link } from 'react-router';

function NavigationButton({ text, link }) {
    return (
        <Link to={link}>
            <button className='navigation-btn'>{text}</button>
        </Link>
    )
}

export default NavigationButton