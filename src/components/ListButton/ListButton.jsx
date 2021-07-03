import { withRouter } from 'react-router-dom';
import './ListButton.scss';

const ListButton = (props) => {
  return (
    <button
      onClick={() => {
        props.history.push('/creeks');
      }}
      className='list-button'
    >
      Lista
    </button>
  );
};

export default withRouter(ListButton);
