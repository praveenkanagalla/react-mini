import React from "react";
import { useState, useRef, useEffect } from 'react';

function Modal({ setOpenModal }) {
  const [title, setTitle] = useState('');
  const [auther, setAuther] = useState('');
  const [body, setBody] = useState('');

  const handleClick = () => {
    const articles = JSON.parse(localStorage.getItem('articles') || "[]");
    const article = { title:title, auther:auther, body:body, comments: [] };  
    articles.unshift(article);
    // article = articles;

    localStorage.setItem('articles',JSON.stringify(articles));
    setOpenModal(false);   
  }


  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpenModal(false); 
      }      
    };
    document.addEventListener("mousedown", handler);    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  return (
    <div className="modalBackground">
      <div className="modalContainer" ref={menuRef}>
        <div className="titleCloseBtn">
          <button onClick={() => { setOpenModal(false);}}>X</button>
        </div>
        <div className='new-article'>
          <h2 className='Article__heading'>Create New Article</h2>
          <form>
            <label className='article__lable'>Article Title:</label>
                <input className='article__input' type="text" name="name" required value={title} onChange={(e) => setTitle(e.target.value)} />            
            <label className='article__lable'>Auther Name:</label>
                <input className='article__input' type="text" name="name" required value={auther} onChange={(e) => setAuther(e.target.value)} />            
            <label className='article__lable'>Article Content:</label>
                <textarea className='article__textarea' name="textValue" type="text" required value={body} onChange={(e) => setBody(e.target.value)} />            
            <input className='article__submit' type="button" value="Add Article" onClick={handleClick} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;