import { BackButton } from '../../components';
import { ImgGallery } from '../../components';
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
        <div>
          <h4>Playa de {props.creek.type}</h4>
          <p>{props.creek.description}</p>
        </div>
        <BackButton text='Volver' />
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
