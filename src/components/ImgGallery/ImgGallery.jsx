import { useState } from 'react';
import ReactBnbGallery from 'react-bnb-gallery';
import 'react-bnb-gallery/dist/style.css';
import './ImgGallery.scss';

const ImgGallery = ({ photos, creek }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  if (photos) {
    return (
      <section className='gallery'>
        <div className='gallery__items'>
          <ReactBnbGallery
            show={isOpen}
            photos={photos}
            activePhotoIndex={photoIndex}
            onClose={() => setIsOpen(false)}
          />
          {photos.map((photo, index) => {
            return (
              <img
                className='gallery__photo'
                src={photo.photo}
                key={JSON.stringify(photo)}
                alt={creek.name}
                onClick={() => {
                  setPhotoIndex(index);
                  return setIsOpen(true);
                }}
              />
            );
          })}
        </div>
      </section>
    );
  } else {
    return <p>cargando...</p>;
  }
};

export default ImgGallery;

//<button onClick={() => setIsOpen(true)}>Open gallery</button>
