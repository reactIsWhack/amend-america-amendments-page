import React from 'react'
import thumbnail from '../../assets/thumbnails/article-1.webp';
import './Article.css'

function Article() {
    return (
        <div className='article-container'>
            <p className='article-title'>Article I - Citizenship</p>
            <hr />
            <img src={thumbnail} />

            <div className='article-description-container'>
                <p className='article-description'>
                    Guarantees equal citizenship for all Americans and prohibits the creation of second-class citizens. It protects citizenship from political abuse while ensuring equal rights and protections under the law.
                </p>
            </div>
        </div>
    )
}

export default Article