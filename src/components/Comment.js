import React from 'react'
import UserComments from './UserComments';
import { useState } from 'react';

const Comment = () => {
  const [content, setContent] = useState('');

  const handleClick = () => {
    const allComments = JSON.parse(localStorage.getItem('allComments') || "[]");
    const comment = { content:content };  
    allComments.push(comment);

    localStorage.setItem('allComments',JSON.stringify(allComments));
    setContent("");
  }
  return (
    <div>
      <div className='comment__btn-section'>
        <input className='comment__placeholder' type="text" value={content} placeholder='Add a comment...' required onChange={(e) => setContent(e.target.value)} /> 
        <input className='comment__btn' type="button" value="Post" onClick={handleClick} />
      </div>
      <div className="comment__section"> 
        <h2 className="comment__title">Comments</h2>
        <div><UserComments /></div>
      </div>
    </div>
  )
}

export default Comment;