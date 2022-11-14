import React from "react";
import { useState, useRef, useEffect } from 'react';

function EditArticle({ setOpenModalEdit, onModalDataChange, articleDesc }) {
  const [body, setBody] = useState(articleDesc);

  const handleClick = () => {
    onModalDataChange(body);
    const articleJSON = JSON.parse(localStorage.getItem('articles'));
    articleJSON[0].body = body;
    localStorage.setItem('articles', JSON.stringify(articleJSON));
    
    setOpenModalEdit(false);   
  }


  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if(!menuRef.current.contains(e.target)){
        setOpenModalEdit(false); 
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
          <button onClick={() => { setOpenModalEdit(false);}}>X</button>
        </div>
        <div className='new-article'>
          <h2 className='Article__heading'>Edit This Article Content</h2>
          <form>
            <label className='article__lable'>Article Content:</label>
                <textarea className='article__textarea' name="textValue" type="text" required value={body} 
                onChange={(e) => setBody( e.target.value )}/>            
            <input className='article__submit' type="button" value="Update Article" onClick={handleClick} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditArticle;


// onChange={(e) => { this.setState({ title: e.target.value }) }}
