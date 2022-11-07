import Comment from './Comment';
import { useState, useEffect } from 'react';

const Cards = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('articles'));
    if (items) {
    setItems(items);
    }
  }, []);

  const changeCard = () => {
    alert("Congratulations change Your Card!!!");
  }

  return (
    <div>
      {[...items].reverse().map(article => <article className='article__container card__container' onClick={changeCard}>
                              <div className='article__top-content card__top-content'>
                                <h2 className="article__title card__title" key={article.id}>{ article.title }</h2>
                                <h3 className="authers__name card__name" key={article.id}>- { article.auther }</h3>
                              </div>
                              <p className='article__content card__content' key={article.id}>{ article.body }</p>
                              <Comment />
                            </article>)}
    </div>
  );
}

export default Cards;
