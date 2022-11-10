import { useEffect } from 'react';

const Cards = ({articles, onArticleClick}) => {

  useEffect(() => {
    if (articles?.length) {
      onArticleClick(0);
    }
  },[]);

  const articleList = articles.map((article,index)  => <article className='article__container card__container'
  key={index} onClick={() => { onArticleClick(index) } }>
                      <div className='article__top-content card__top-content'>
                        <h2 className="article__title card__title" >{ article.title }</h2>
                        <h3 className="authers__name card__name" >- { article.auther }</h3>
                      </div>
                      <p className='article__content card__content' >{ article.body }</p>
                    </article>)
                    
 

  return (
    <div>
      {articleList}
    </div>
  );
}

export default Cards;