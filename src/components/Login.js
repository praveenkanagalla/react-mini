import React from "react";
import { useState } from 'react';

function Login({ setOpenModal }) {
  const [title, setTitle] = useState('');
  const [auther, setAuther] = useState('');
  const [body, setBody] = useState('');

  const handleClick = () => {
    const articles = JSON.parse(localStorage.getItem('articles') || "[]");
    const article = { title:title, auther:auther, body:body };  
    articles.push(article);

    console.log('articles',JSON.stringify(articles));
    localStorage.setItem('articles',JSON.stringify(articles));
    setOpenModal(false);
  }

  return (
    <div className="modalBackground">
      <div className="modalContainer login__Container">
        <div className="titleCloseBtn">
          <button onClick={() => { setOpenModal(false);}}>X</button>
        </div>
        <div className='new-article'>
          <h2 className='Article__heading'>Login Here...</h2>
          <form>
                <input className='login__input' type="text" name="name" required value={title} onChange={(e) => setTitle(e.target.value)} />            
                <input className='login__input' type="text" name="name" required value={auther} onChange={(e) => setAuther(e.target.value)} />                      
            <input className='article__submit' type="button" value="Login" onClick={handleClick} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;