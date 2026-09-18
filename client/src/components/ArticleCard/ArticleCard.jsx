import { Link } from 'react-router'
import './Article.css'

function ArticleCard({ title, romanNumeral, number, description }) {
    return (
        <div className='article-container'>
            <p className='article-title'>Article {romanNumeral} - {title}</p>
            <hr />
            <Link to={`/article/${number}`} className='article-link'>
                <img src={`/thumbnails/article-${number}.webp`} />
            </Link>

            <div className='article-description-container'>
                <p className='article-description'>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ArticleCard