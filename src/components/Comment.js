import React from 'react'
import UserComments from './UserComments';
import { useState } from 'react';

const Comment = ({ addComment, comments }) => {

  const [content, setContent] = useState('');

  const handleClick = () => {
    if (content) {
      addComment({
        content: content
      });
      setContent("");
    }
  }

  return (
    <div>
      <div className='comment__btn-section'>
        <input className='comment__placeholder' type="text" value={content} placeholder='Add a comment...' required onChange={(e) => setContent(e.target.value)} /> 
        <input className='comment__btn' type="button" value="Post" onClick={handleClick} />
      </div>
      <div className="comment__section"> 
        <h2 className="comment__title">Comments...</h2>
        <div><UserComments comments={comments} /></div>
      </div>
    </div>
  )
}

export default Comment;