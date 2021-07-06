import React, { useEffect, useState } from 'react';
import InputComment from '../InputComment/InputComment';

import './Comments.scss';

const BASE_URL = 'http://localhost:3500';

const Comments = ({ creekId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(`${BASE_URL}/comments/${creekId}`);
      const resData = await res.json();

      setComments(resData);
    };

    getComments();
  });

  return (
    <div className='comment-container'>
      <div>
        <InputComment />
      </div>

      {comments.map((comment) => {
        return (
          <div className='comment-container__comment' key={JSON.stringify(comment)}>
            <div className='comment-container__user-block'>
              <img src={comment.user.img} alt={comment.user.name} className='comment-container__user-img' />
              <span>{comment.user.userName}</span>
            </div>
            <div className='comment-container__text'>
              <p>{comment.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
