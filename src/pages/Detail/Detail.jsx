import { useState } from 'react';
import { BackButton } from '../../components';
// import Carousel from 'react-bootstrap/Carousel';
import ReactBnbGallery from 'react-bnb-gallery';
import 'react-bnb-gallery/dist/style.css';
// import { withRouter } from 'react-router-dom';

const Detail = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  if (props.creek) {
    const PHOTOS = props.creek.img.map((img) => img);
    return (
      <main>
        <BackButton />
        <button onClick={() => setIsOpen(true)}>Open gallery</button>
        <ReactBnbGallery show={isOpen} photos={PHOTOS} onClose={() => setIsOpen(false)} />
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
