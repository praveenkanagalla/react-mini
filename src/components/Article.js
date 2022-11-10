import React from 'react';
import Comment from './Comment';

const Article = ({addComment, data }) => {

  if (!data) {
    return <></>
  }

  return (
    <article className='article__container'>
      <div className='article__top-content'>
        <h2 className="article__title"> {data.title}</h2>
        <h3 className="authers__name">- {data.auther}</h3>
      </div>
      <p className='article__content'>{data.body}</p>
      <Comment comments={data.comments || []} addComment={addComment} />
    </article>
  );
}

export default Article;