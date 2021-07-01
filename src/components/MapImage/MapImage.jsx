import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import './MapImage.scss';
import leafGreen from '../../assets/umbrella-50.png';

const MapImage = ({ creeks, setDetailId }) => {
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
    <Map className='map' center={positionMenorca} zoom={zoom}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
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
            onClick={(ev) => {
              setDetailId(creek._id);
            }}
          >
            <Popup className='map-image__pop-up'>
              <p className='map-image__pop-text'>{creek.name}</p>
              <img src={creek.img} className='map-image__pop-img' alt='creek' />
            </Popup>
          </Marker>
        );
      })}
    </Map>
  );
};

export default MapImage;
