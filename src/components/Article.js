import React from 'react';
import '../styles/Article.css'

const Article = props => {
    return ( 
        <article className="article">
            <h3 className="article__title">{props.title}</h3>
            <p className="article__author">{props.author}</p>
            <p className="article__content">{props.text}</p>
        </article>
     );
}
 
export default Article;