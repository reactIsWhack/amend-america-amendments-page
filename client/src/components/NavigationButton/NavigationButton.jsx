import React from 'react'
import './NavigationButton.css';
import { Link } from 'react-router';

function NavigationButton({ text, articleNumber, change }) {
    return (
        <Link to={`/article/${Number(articleNumber) + change}`}>
            <button className='navigation-btn'>{text}</button>
        </Link>
    )
}

export default NavigationButton