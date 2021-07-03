import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useHistory } from 'react-router-dom';
import { ListButton } from '../../components';

import './MapImage.scss';
import leafGreen from '../../assets/umbrella-50.png';

const MapImage = ({ creeks, setDetailId }) => {
  const history = useHistory();
  console.log(history);
  const positionMenorca = [39.9505, 4.0559];
  const zoom = 11;

  const grenIcon = L.icon({
    iconUrl: leafGreen,
    // shadowUrl: leafShadow,
    iconSize: [50, 50], // size of the icon
    // shadowSize: [50, 64], // size of the shadow
    iconAnchor: [25, 45], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -50],
  });

  return (
    <div className='map-image'>
      <ListButton className='list-button' />
      <Map className='map-image' center={positionMenorca} zoom={zoom}>
        <TileLayer
          attribution='<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.jawg.io/jawg-terrain/{z}/{x}/{y}{r}.png?access-token=p3g9U1eXuX4kSvLCpTgXgl1LjGcfCjXEhDFRRS2oBbxTCdXmJReCcot7HemafMoY'
        />
        {creeks.map((creek) => {
          return (
            <Marker
              position={[creek.lat, creek.lng]}
              icon={grenIcon}
              key={JSON.stringify(creek)}
              onMouseOver={(ev) => {
                ev.target.openPopup();
              }}
              onMouseOut={(ev) => {
                ev.target.closePopup();
              }}
              onClick={() => {
                // setDetailId(creek._id);
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
