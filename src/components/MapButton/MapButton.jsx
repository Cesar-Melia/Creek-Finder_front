import { withRouter } from 'react-router-dom';
import './MapButton.scss';

const MapButton = (props) => {
  console.log(props);

  return (
    <button
      onClick={() => {
        props.history.push('/map');
      }}
      className='map-button'
    >
      Mapa
    </button>
  );
};

export default withRouter(MapButton);
