import React from 'react';
import Comment from './Comment';

const Article = () => {
  return (
      <article className='article__container'>
        <div className='article__top-content'>
        <h2 className="article__title">About SamvidDhi</h2>
        <h3 className="authers__name">- SamvidDhi</h3>
        </div>
        <p className='article__content'>
        Samviddhi LLP is a research and product development group started in 2021, which is striving to solve complex problems with the help of modern artificial intelligence. Our purpose is to serve AI on a scale in meaningful ways which we will publish very soon. We are an aligned and focused team of researchers and software developers with a good number of research and IT working experience. While working on our major products, we are providing web/mobile application development, software, data science and analytics consultancy for businesses.
        </p>
        <p className='article__content'>
        Samviddhi LLP is a research and product development group started in 2021, which is striving to solve complex problems with the help of modern artificial intelligence. Our purpose is to serve AI on a scale in meaningful ways which we will publish very soon. We are an aligned and focused team of researchers and software developers with a good number of research and IT working experience. While working on our major products, we are providing web/mobile application development, software, data science and analytics consultancy for businesses.
        </p>
        <Comment />
      </article>
  )
}

export default Article;
