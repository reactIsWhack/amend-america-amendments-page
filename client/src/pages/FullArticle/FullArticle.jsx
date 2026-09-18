import React from 'react'
import { useParams } from 'react-router'
import NavigationButton from '../../components/NavigationButton/NavigationButton';
import './FullArticle.css'
import articles from '../../data/articles';

function FullArticle() {
    const { articleNumber } = useParams();

    return (
        <div className='full-article-page'>
            {articleNumber > 1 && <NavigationButton text={'TO PREVIOUS ARTICLE'} articleNumber={articleNumber} change={-1} />}
            {articleNumber < articles.length && <NavigationButton text={'TO NEXT ARTICLE'} articleNumber={articleNumber} change={1} />}
        </div>
    )
}

export default FullArticle