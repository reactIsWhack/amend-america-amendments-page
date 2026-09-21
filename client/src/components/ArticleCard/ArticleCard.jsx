import { Link } from 'react-router'
import './Article.css'

function ArticleCard({ title, romanNumeral, number, summary }) {
    return (
        <div className='article-container'>
            <p className='article-title'>Article {romanNumeral} - {title}</p>
            <hr />
            <Link to={`https://amendamerica.org/article-${romanNumeral.toLowerCase()}`} className='article-link'>
                <img src={`/thumbnails/article-${number}.webp`} />
            </Link>

            <div className='article-summary-container'>
                <p className='article-summary'>
                    {summary}
                </p>
            </div>
        </div>
    )
}

export default ArticleCard