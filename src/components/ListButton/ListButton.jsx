import { withRouter } from 'react-router-dom';
import './ListButton.scss';

const ListButton = (props) => {
  console.log(props);

  return (
    <button
      onClick={() => {
        props.history.push('/creeks');
      }}
      className='list-button'
    >
      Mapa
    </button>
  );
};

export default withRouter(ListButton);
