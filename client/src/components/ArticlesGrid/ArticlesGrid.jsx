import React from 'react'
import './ArticlesGrid.css';
import Article from '../Article/Article';

function ArticlesGrid() {
    return (
        <div className='articles-grid'>
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
        </div>
    )
}

export default ArticlesGrid