import React, {useEffect} from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useDispatch, useSelector } from 'react-redux';

import img1 from './img/prueba1.png';
import img2 from './img/prueba2.png';
import img3 from './img/prueba3.png';
import img4 from './img/prueba4.png';
import img5 from './img/prueba5.png';
import { cargarImgCarouselAccion } from '../../../redux/carouselDucks';

const Carrousel = () => {
    const dispatch = useDispatch();
    const carousel = useSelector(store=>store.carousel.carousel)

    useEffect(()=>{
        dispatch(cargarImgCarouselAccion())
    },[])

    return carousel.length === 0 ? (
        <Carousel
            showThumbs={false}
            showStatus={false}
        >
            <div>
                <img src={img3} alt="" />
            </div>
            <div>
                <img src={img4} alt="" />
            </div>
            <div>
                <img src={img5} alt="" />
            </div>
        </Carousel>
    ):(
        <Carousel
            showThumbs={false}
            showStatus={false}
        >
            {carousel.map((img,index) => (
                <div key={index}>
                    <img src={img.imgURL} alt="" />
                </div>
            ))}
        </Carousel>
    );
};

export default Carrousel;
