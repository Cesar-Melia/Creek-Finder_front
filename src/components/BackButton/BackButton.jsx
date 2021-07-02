import { withRouter } from 'react-router-dom';
import './BackButton.scss';

const BackButton = (props) => {
  console.log(props);

  return (
    <button
      onClick={() => {
        props.history.goBack();
      }}
      className='button'
    >
      {props.text}
    </button>
  );
};

export default withRouter(BackButton);
