import React from 'react'
import './ArticlesGrid.css';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import articles from '../../data/articles';

function ArticlesGrid() {
    const articlesJSX = articles.map(article => {
        return <ArticleCard
            title={article.title}
            number={article.number}
            romanNumeral={article.romanNumeral}
            description={article.description}
            key={article.number}
        />
    })

    return (
        <div className='articles-grid'>
            {articlesJSX}
        </div>
    )
}

export default ArticlesGrid