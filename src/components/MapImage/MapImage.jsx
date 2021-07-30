import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useHistory } from 'react-router-dom';
import { ListButton } from '../../components';

import './MapImage.scss';
import umbrella from '../../assets/umbrella-50.png';

const MapImage = ({ creeks, setDetailId }) => {
  const history = useHistory();
  console.log(history);
  const positionSpain = [39.249, -3.55];
  const zoom = 6;

  const umbrellaIcon = L.icon({
    iconUrl: umbrella,
    iconSize: [50, 50], // size of the icon
    iconAnchor: [25, 45], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -50],
  });

  return (
    <div className='map-image'>
      <ListButton className='list-button' />
      <Map className='map-image' center={positionSpain} zoom={zoom}>
        <TileLayer
          attribution='<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.jawg.io/jawg-terrain/{z}/{x}/{y}{r}.png?access-token=p3g9U1eXuX4kSvLCpTgXgl1LjGcfCjXEhDFRRS2oBbxTCdXmJReCcot7HemafMoY'
        />
        {creeks.map(creek => {
          return (
            <Marker
              position={[creek.lat, creek.lng]}
              icon={umbrellaIcon}
              key={JSON.stringify(creek)}
              onMouseOver={ev => {
                ev.target.openPopup();
              }}
              onMouseOut={ev => {
                ev.target.closePopup();
              }}
              onClick={() => {
                history.push(`/detail/${creek._id}`);
              }}
            >
              <Popup className='map-image__pop-up'>
                <p className='map-image__pop-text'>{creek.name}</p>
                <img src={creek.img[0]} className='map-image__pop-img' alt='creek' />
              </Popup>
            </Marker>
          );
        })}
      </Map>
    </div>
  );
};

export default MapImage;
