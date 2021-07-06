import { BackButton } from '../../components';
import { ImgGallery, AddFavorite } from '../../components';
import { Comments } from '../../components';
import Weather from '../../components/Weather/Weather';

import './Detail.scss';

const Detail = (props) => {
  props.showFooter(true);

  if (props.creek) {
    const photos = props.creek.img.map((img, index) => {
      return { photo: img, number: index + 1 };
    });

    return (
      <main>
        <h1 className='detail__title'>{props.creek.name}</h1>
        <ImgGallery photos={photos} creek={props.creek} />
        <div className='detail__text-block'>
          <div className='detail__favorite-block'>
            <h5 className='detail__type'>Playa de {props.creek.type}</h5>
            <AddFavorite creekId={props.creek._id} />
          </div>
          <p className='detail__description'>{props.creek.description}</p>
        </div>

        <BackButton text='Volver' />
        <Weather lat={props.creek.lat} lng={props.creek.lng} />
        <h3 className='detail__comment-title'>Comentarios</h3>
        <div className='detail__comments'>
          <Comments creek={props.creek} />
        </div>
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
