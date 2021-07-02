import { withRouter } from 'react-router-dom';

const BackButton = (props) => {
  console.log(props);

  return (
    <button
      onClick={() => {
        props.history.goBack();
      }}
      className='button'
    >
      Back
    </button>
  );
};

export default withRouter(BackButton);
