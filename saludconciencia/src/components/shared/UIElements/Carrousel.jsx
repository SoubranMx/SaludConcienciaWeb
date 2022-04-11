import React, {useEffect} from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useDispatch, useSelector } from 'react-redux';

import img1 from './img/prueba1.png';
import { cargarImgCarouselAccion } from '../../../redux/carouselDucks';
import {FaInstagram, FaYoutube, FaTwitter, FaFacebook} from 'react-icons/fa'
import {IoLogoTiktok} from 'react-icons/io5'

import "../../../sass/_carouselIndex.scss"

const Carrousel = (linksRS) => {
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
            <>
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
                <div className='index__slide__0__carousel-mobile'>
                    <div className="carousel__mobile-index__icons"><a href={linksRS.twitter} target="_blank" rel="noreferrer noopener"><FaTwitter className="carousel__mobile-index__icons-item carousel__mobile-index__icons-item-twitter"/></a></div>
                    <div className="carousel__mobile-index__icons"><a href={linksRS.tiktok} target="_blank" rel="noreferrer noopener"><IoLogoTiktok className="carousel__mobile-index__icons-item carousel__mobile-index__icons-item-tiktok"/></a></div>
                        <div className="carousel__mobile-index__icons">
                            <a href={linksRS.instagram} target="_blank" rel="noreferrer noopener">
                                <svg width="0" height="0" style={{display: 'none'}}>
                                    <radialGradient id="rg" r="150%" cx="30%" cy="107%">
                                        <stop stopColor="#fdf497" offset="0" />
                                        <stop stopColor="#fdf497" offset="0.05" />
                                        <stop stopColor="#fd5949" offset="0.45" />
                                        <stop stopColor="#d6249f" offset="0.6" />
                                        <stop stopColor="#285AEB" offset="0.9" />
                                    </radialGradient>
                                </svg>
                                <FaInstagram className="carousel__mobile-index__icons-item carousel__mobile-index__icons-item-instagram" />
                            </a>
                        </div>
                    <div className="carousel__mobile-index__icons"><a href={linksRS.youtube} target="_blank" rel="noreferrer noopener"><FaYoutube className="carousel__mobile-index__icons-item carousel__mobile-index__icons-item-youtube"/></a></div>
                    <div className="carousel__mobile-index__icons"><a href={linksRS.facebook} target="_blank" rel="noreferrer noopener"><FaFacebook className="carousel__mobile-index__icons-item carousel__mobile-index__icons-item-facebook"/></a></div>
                </div>
            </>
        )
    );
};

export default Carrousel;
