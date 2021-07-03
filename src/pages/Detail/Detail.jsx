import { BackButton } from '../../components';
import { ImgGallery } from '../../components';
import Weather from '../../components/Weather/Weather'

import './Detail.scss';

const Detail = (props) => {
  if (props.creek) {
    const photos = props.creek.img.map((img, index) => {
      return { photo: img, number: index + 1 };
    });

    return (
      <main>
        <h1 className='detail__title'>{props.creek.name}</h1>
        <ImgGallery photos={photos} creek={props.creek} />
        <div className='detail__text-block'>
          <h4 className='detail__type'>Playa de {props.creek.type}</h4>
          <p className='detail__description'>{props.creek.description}</p>
        </div>
        <BackButton text='Volver' />
        <Weather lat={props.creek.lat} lng={props.creek.lng} />


      </main>
    );
  } else {
    return (
      <main>
        <p>cargando...</p>
      </main>
    );
  }
};

export default Detail;
