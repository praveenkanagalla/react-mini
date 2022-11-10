import user from './user.png'

const UserComments = ({ comments }) => {


  const commentsList = [...comments].reverse().map((comment, index) => <div className='comment__container' key={index}>
                        <img src={user} className='user__icon' alt='userIcon' />
                        <p className='comment__content' >{ comment.content }</p>
                    </div>)
                    
 

  return (
    <div>
      {commentsList}
    </div>
  );
}

export default UserComments;