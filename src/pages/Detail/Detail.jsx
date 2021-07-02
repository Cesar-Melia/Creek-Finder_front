import { BackButton } from '../../components';
import { ImgGallery } from '../../components';
// import Carousel from 'react-bootstrap/Carousel';
import ReactBnbGallery from 'react-bnb-gallery';
import 'react-bnb-gallery/dist/style.css';

const Detail = (props) => {
  if (props.creek) {
    const photos = props.creek.img.map((img, index) => {
      return { photo: img, number: index + 1 };
    });

    return (
      <main>
        <BackButton text='Volver' />
        <ImgGallery photos={photos} creek={props.creek} />
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
