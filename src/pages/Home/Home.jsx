import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import './Home.scss'

const Home = ({ creeks }) => {
  return (
    <AliceCarousel autoPlay autoPlayInterval="3000">
      {creeks.map(creek => {
        return (
          <div className="slidercont">
            <img src={creek.img} alt="" className="slidercont__img" />
            <span className="slidercont__name">{creek.name}</span>
          </div>

        )
      })}
    </AliceCarousel>
  );
};

export default Home;
