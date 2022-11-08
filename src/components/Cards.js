import Comment from './Comment';
import { useState, useEffect } from 'react';

const Cards = ({onArticleClick}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('articles'));
    if (items) {
    setItems(items);
    onArticleClick(items[items.length-1]);
    }
  }, []);

  const articleList = [...items].reverse().map(article => <article className='article__container card__container' key={article.index} onClick={() => { onArticleClick(article) } }>
                      <div className='article__top-content card__top-content'>
                        <h2 className="article__title card__title" >{ article.title }</h2>
                        <h3 className="authers__name card__name" >- { article.auther }</h3>
                      </div>
                      <p className='article__content card__content' >{ article.body }</p>
                      <Comment />
                    </article>)
 

  return (
    <div>
      {articleList}
    </div>
  );
}

export default Cards;