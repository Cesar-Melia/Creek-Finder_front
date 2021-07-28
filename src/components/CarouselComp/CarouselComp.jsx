import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import './CarouselComp.scss';

const CarouselComp = ({ creeks }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const sortTopCreeks = () => {
    const sortedCreeks = creeks
      .sort((a, b) => {
        if (a.timesFav > b.timesFav) {
          return -1;
        }
        if (a.timesFav < b.timesFav) {
          return 1;
        }
        return 0;
      })
      .slice(0, 10);

    return sortedCreeks;
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} touch='true' className='carousel'>
      {sortTopCreeks().map(creek => {
        return (
          <Carousel.Item interval={5000} key={JSON.stringify(creek)}>
            <img className='carousel__img' src={creek.img[0]} alt={creek.name} />
            <Carousel.Caption>
              <h3 className='carousel__title'>{creek.name}</h3>
              <h3 className='carousel__subtitle'>{creek.province}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default CarouselComp;
