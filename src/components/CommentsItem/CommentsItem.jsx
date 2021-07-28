import './CommentsItem.scss';

const CommentsItem = ({ comment }) => {
  const date = new Date(comment.date);

  const formatDate = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()} (${date.getHours()}:${date.getMinutes()})`;

  return (
    <div className='comment-container' key={JSON.stringify(comment)}>
      <div className='comment-container__user-block'>
        <div className='comment-container__user-round-img'>
          <img src={comment.user.img} alt={comment.user.name} className='comment-container__user-img' />
        </div>

        <span>{comment.user.userName}</span>
      </div>
      <div className='comment-container__text-block'>
        <span className='comment-container__date'>{formatDate}</span>
        <p className='comment-container__text'>{comment.text}</p>
      </div>
    </div>
  );
};

export default CommentsItem;
