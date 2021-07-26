import React, { useEffect, useState } from 'react';
import InputComment from '../InputComment/InputComment';
import { CommentsItem } from '../../components';

import './CommentsList.scss';

const BASE_URL = 'http://localhost:3500';

const Comments = ({ creekId }) => {
  const [comments, setComments] = useState([]);
  const [switcherComent, setSwitcherComent] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(`${BASE_URL}/comments/${creekId}`);
      const resData = await res.json();

      setComments(resData);
    };

    getComments();
  }, [switcherComent]);

  const switchComments = () => {
    setSwitcherComent(!switcherComent);
  };

  return (
    <div className='comment-container'>
      <div>
        <InputComment creekId={creekId} setSwitcherComent={switchComments} />
      </div>

      {comments.map(comment => {
        return <CommentsItem comment={comment} />;
      })}
    </div>
  );
};

export default Comments;
