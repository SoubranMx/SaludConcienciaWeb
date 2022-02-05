import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from './img/prueba1.png';
import img2 from './img/prueba2.png';
import img3 from './img/prueba3.png';
import img4 from './img/prueba4.png';
import img5 from './img/prueba5.png';

const Carrousel = () => {
  return (
    <Carousel
        showThumbs={false}
        showStatus={false}
    >
        <div>
            <img src={img1} alt="" />
        </div>
        <div>
            <img src={img2} alt="" />
        </div>
        <div>
            <img src={img3} alt="" />
        </div>
    </Carousel>
  );
};

export default Carrousel;
