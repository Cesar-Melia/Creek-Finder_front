import React, { useEffect, useState } from 'react';
import { CommentsItem, InputComment } from '../../components';
import { getComments } from '../../api/comments.api';

import './CommentsList.scss';

const Comments = ({ creekId }) => {
  const [comments, setComments] = useState([]);
  const [switcherComment, setSwitcherComent] = useState(false);

  useEffect(() => {
    const getCommentsData = async () => {
      setComments(await getComments(creekId));
    };

    getCommentsData();
  }, [switcherComment]);

  const switchComments = () => {
    setSwitcherComent(!switcherComment);
  };

  return (
    <div className='comment-list'>
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
