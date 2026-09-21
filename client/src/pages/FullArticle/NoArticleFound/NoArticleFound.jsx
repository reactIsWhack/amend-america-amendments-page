import NavigationButton from '../../../components/NavigationButton/NavigationButton'
import './NoArticleFound.css';

function NoArticleFound({ articleNumber }) {
    return (
        <>
            <p className='no-article-found'>Article {articleNumber} does not exist</p>
            <NavigationButton text={'RETURN TO ARTICLES PAGE'} link={'/'} />
        </>
    )
}

export default NoArticleFound