import { useState } from 'react';
import ReactBnbGallery from 'react-bnb-gallery';
import 'react-bnb-gallery/dist/style.css';
import './ImgGallery.scss';

const ImgGallery = ({ photos, creek }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (photos) {
    return (
      <section>
        <div className='gallery d-flex flex-wrap'>
          {photos.map((photo) => {
            return (
              <img
                className='gallery__photo'
                src={photo.photo}
                key={JSON.stringify(photo)}
                alt={creek.name}
                onClick={() => setIsOpen(true)}
              />
            );
          })}
        </div>

        <ReactBnbGallery show={isOpen} photos={photos} onClose={() => setIsOpen(false)} />
      </section>
    );
  } else {
    return <p>cargando...</p>;
  }
};

export default ImgGallery;

//<button onClick={() => setIsOpen(true)}>Open gallery</button>
