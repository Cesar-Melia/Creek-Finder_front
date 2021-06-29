import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import leafGreen from '../../assets/leaf-green.png';
import leafShadow from '../../assets/leaf-shadow.png';

const MapImage = (props) => {
  const positionMenorca = [39.9505, 4.0559];
  const zoom = 11;

  const grenIcon = L.icon({
    iconUrl: leafGreen,
    shadowUrl: leafShadow,
    iconSize: [38, 95], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -76],
  });

  return (
    <Map className='map' center={positionMenorca} zoom={zoom}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {/* <Marker position={positionGreenIcon} icon={grenIcon}>
        <Popup>I am a green leaf</Popup>
      </Marker> */}
    </Map>
  );
};

export default MapImage;
