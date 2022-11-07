import React from 'react';
import { useState } from 'react';

export default function NewArticle() {
    const [title, setTitle] = useState('');
    const [auther, setAuther] = useState('');
    const [body, setBody] = useState('');

    const handleSumbit = (e) => {
        e.proventDefault();
        const Article = { title, auther, body };

        console.log(Article);
    }

  return (
    <div className='new-article'>
        <h2 className='Article__heading'>Create New Article</h2>
        <form onSubmit={handleSumbit}>
            <label className='article__lable'>Article Title:</label>
                <input className='article__input' type="text" name="name" required value={title} onChange={(e) => setTitle(e.target.value)} />            
            <label className='article__lable'>Auther Name:</label>
                <input className='article__input' type="text" name="name" required value={auther} onChange={(e) => setAuther(e.target.value)} />            
            <label className='article__lable'>Article Content:</label>
                <textarea className='article__textarea' name="textValue" type="text" required value={body} onChange={(e) => setBody(e.target.value)} />            
            <input className='article__submit' type="submit" value="Submit" />
        </form>
    </div>
  )
}
