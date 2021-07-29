import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ReactBnbGallery from 'react-bnb-gallery';
import 'react-bnb-gallery/dist/style.css';
import './CreekListItem.scss';

const CreekListItem = ({ creek }) => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const photos = creek.img;

  return (
    <div className='item'>
      <div className='item__text-block'>
        <div className='item__name-block'>
          <h3
            className='item__name'
            onClick={() => {
              // setDetailId(creek._id);
              history.push(`/detail/${creek._id}`);
            }}
          >
            {creek.name}
          </h3>
          <span className='item__province'>{creek.province}</span>
        </div>

        <div className='item__info'>
          <span>Playa de {creek.type}</span>
        </div>
      </div>
      <div>
        {creek.img &&
          creek.img.map((img, index) => {
            if (index < 3) {
              return (
                <img
                  src={img}
                  alt={creek.name + index}
                  className='item__photo'
                  key={JSON.stringify(img)}
                  onClick={() => {
                    setPhotoIndex(index);
                    return setIsOpen(true);
                  }}
                />
              );
            }
            return null;
          })}
      </div>
      <ReactBnbGallery show={isOpen} photos={photos} activePhotoIndex={photoIndex} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default CreekListItem;
