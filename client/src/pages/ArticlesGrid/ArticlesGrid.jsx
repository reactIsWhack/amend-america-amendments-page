import './ArticlesGrid.css';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import articles from '../../data/articles';
import { useState } from 'react';
import categories from '../../data/categories';
import summaries from '../../data/summaries';

function ArticlesGrid() {
    const [articlesToDisplay, setArticlesToDisplay] = useState(articles);
    const [categorySelection, setCategorySelection] = useState("");

    const optionsJSX = categories.map((category, idx) => {
        return <option key={idx}>{category}</option>
    })


    const handleOnChange = (event) => {
        const category = event.target.value;
        setCategorySelection(category);
        const newArticles = [];
        for (const article of articles) {
            if (article.category != category && category != "all" && category != "recommended") continue;

            newArticles.push(article);
        }
        setArticlesToDisplay(newArticles);
    }

    const articlesJSX = articlesToDisplay.map(article => {
        return <ArticleCard
            title={article.title}
            number={article.number}
            romanNumeral={article.romanNumeral}
            summary={summaries[article.number - 1]}
            key={article.number}
        />
    })

    return (
        <div className='articles-page'>
            <select className="category-select" value={categorySelection} onChange={handleOnChange}>
                <option value="all">All Articles</option>
                <option value="recommended">Recommended</option>
                {optionsJSX}
            </select>
            <div className='articles-grid'>
                {articlesJSX}
            </div>
        </div>
    )
}

export default ArticlesGrid