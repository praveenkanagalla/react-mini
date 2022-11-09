import { useState, useEffect } from 'react';
import user from './user.png'

const UserComments = () => {
  const [comments, setComments] = useState('[]');

  useEffect(() => {
    const comments = JSON.parse(localStorage.getItem('allComments'));
    if (comments) {
        setComments(comments);
    }
  },[]);

  const commentsList = [...comments].reverse().map(comment => <div className='comment__container'>
                        <img src={user} className='user__icon' />
                        <p className='comment__content' >{ comment.content }</p>
                    </div>)
                    
 

  return (
    <div>
      {commentsList}
    </div>
  );
}

export default UserComments;