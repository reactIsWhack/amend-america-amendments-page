import { useParams } from 'react-router'
import NavigationButton from '../../components/NavigationButton/NavigationButton';
import './FullArticle.css'
import articles from '../../data/articles';
import NoArticleFound from './NoArticleFound/NoArticleFound';
import logo from '../../../public/logo.png'
import ParagraphsDescription from '../../components/ParagraphsDescription/ParagraphsDescription';

function FullArticle() {
    let { articleNumber } = useParams();
    articleNumber = Number(articleNumber);
    const article = articles.find(articleItem => articleItem.number == articleNumber);


    return (
        <div className='full-article-page'>
            {article ?
                <>
                    {articleNumber > 1 && <NavigationButton text={'TO PREVIOUS ARTICLE'} link={`/article/${articleNumber - 1}`} />}
                    {articleNumber < articles.length && <NavigationButton text={'TO NEXT ARTICLE'} link={`/article/${articleNumber + 1}`} />}

                    <div className='article-title-container'>
                        <p className='article-numeral'>ARTICLE {article.romanNumeral}</p>
                        <hr />
                    </div>

                    <div className='paragraph-description-container'>
                        <ParagraphsDescription paragraphs={article.fullDescriptionParagraphs} />
                    </div>

                    <div className='logo-container'>
                        <img className='logo' src={logo} />
                    </div>
                </> : <NoArticleFound />}
        </div>
    )
}

export default FullArticle