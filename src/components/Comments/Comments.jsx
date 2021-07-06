import React, { useEffect } from 'react';
import InputComment from '../InputComment/InputComment';

import './Comments.scss';
const BASE_URL = 'http://localhost:3500';
const Comments = ({ creek }) => {
  const comments = creek.comments;
  return (
    <div className='comment-container'>
      <div>
        <InputComment />
      </div>

      {comments.map((comment) => {
        return (
          <div className='comment-container__comment' key={JSON.stringify(comment)}>
            {comment.text}
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
