import { withRouter } from 'react-router-dom';
import './BackButton.scss';

const BackButton = props => {
  return (
    <button
      onClick={() => {
        props.history.goBack();
      }}
      className='back-button'
    >
      {props.text}
    </button>
  );
};

export default withRouter(BackButton);
