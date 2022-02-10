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

    return carousel === undefined ? (
        <div className="container d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
            <div className="spinner-border" role="status" style={{width: "3rem", height: "3rem"}}>
                <span className="visually-hidden">Cargando...</span>
            </div>
        </div>
    ):(
        carousel.length === 0 ? (
            <Carousel
                showThumbs={false}
                showStatus={false}
            >
                <div>
                    <img src={img1} alt="" />
                </div>
            </Carousel>
        ):
        (
            <Carousel
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                infiniteLoop={true}
            >
                {carousel.map((img,index) => (
                    <div key={index}>
                        <img src={img.imgURL} alt="" />
                    </div>
                ))}
            </Carousel>
        )
    );
};

export default Carrousel;
