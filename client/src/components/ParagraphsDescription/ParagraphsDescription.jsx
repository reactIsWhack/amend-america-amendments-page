import './ParagraphsDescription.css';

function ParagraphsDescription({ paragraphs }) {
    return (
        paragraphs.map(paragraph => {
            return <p className='paragraph-description'>{paragraph}</p>;
        })
    )
}

export default ParagraphsDescription