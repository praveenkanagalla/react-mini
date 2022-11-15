import React from 'react';
import Comment from './Comment';
import pencil from './pencil.png'
import { useState, useEffect } from "react";
import EditArticle from './EditArticle';

const Article = ({addComment, data }) => {
  const [modalOpenEdit, setModalOpenEdit] = useState(false);
  const [articleDesc, setArticleDesc] = useState(data.body);

  useEffect(() => {
    setArticleDesc(data.body);
  }, [data.body]);

  const handleClick = () => {
    // onArticleEditClick();
    // console.log(data.body);
    setModalOpenEdit(true);      
  }

  const onModalDataChange = (modalData) => {
    setArticleDesc(modalData);
  };

  if (!data) {
    return <></>
  }

  
  return (
    
    <article className='article__container'>
      <div className='article__top-content'>
        <h2 className="article__title"> {data.title}</h2>
        <div className='edit__btn-section'>
          <button onClick = { handleClick } className="edit__btn">
            <label>Edit</label>
            <img src={pencil} className='pencil__icon' alt='userIcon' />
          </button>
        </div>
        {modalOpenEdit && <EditArticle setOpenModalEdit={setModalOpenEdit} onModalDataChange={onModalDataChange} articleDesc={articleDesc}/>}
        <h3 className="authers__name">- {data.auther}</h3>
      </div>
      <div className='article__content'>{articleDesc}</div>
      <Comment comments={data.comments || []} addComment={addComment} />
    </article>
  );
}

export default Article;