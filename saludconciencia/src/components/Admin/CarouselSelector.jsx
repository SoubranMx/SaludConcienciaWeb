import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import { uploadImgCarouselAccion } from '../../redux/carouselDucks';


import '../../sass/_carouselJS.scss'

const CarouselSelector = () => {
    //States
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();
    const loading = useSelector(store => store.carousel.loading)
    const carouselActual = useSelector(store => store.carousel.carousel)

    //Funcs
    const uploadImg = async(imagen) => {
        const imagenCarousel = imagen.target.files[0]
        
        if(imagenCarousel === undefined){
            console.log("No se seleccionó una imagen");
            return
        }
        if(imagenCarousel.size <= 1000000){
            if(imagenCarousel.type === "image/png" || imagenCarousel.type === "image/jpeg" || imagenCarousel.type === "image/jpg"){
                dispatch(uploadImgCarouselAccion(imagen.target.files[0]))
                //console.log(imagen.target.files[0].name);

            }else{
                console.log("Solo archivos .png o .jpg");
            }
        }else{
            console.log("Archivos menores o iguales a 1MB");
        }
    }

    return (
        <div className='container carouselContainer'>
            <h1>Selección de imágenes del Carrusel</h1>
            <div className="carouselContainer__main">
                {carouselActual.length !== 0 ? (
                    <div>No hay imágenes actualmente</div>
                )
                :(
                    <Carousel 
                        showThumbs={false}
                        showStatus={false}
                    >
                        {carouselActual.map(img => (
                            <div>
                                <img src={img.imgURL} alt="" />
                            </div>
                        ))}
                    </Carousel>
                )}
            </div>
            <div className="carouselContainer__carga">
                <input 
                    type="file"
                    className='form-control'
                    id="imgCarouselUpload"
                    style={{display: 'none'}}
                    onChange={e=>uploadImg(e)}
                    //disabled={loading}
                />
                <label 
                    htmlFor="imgCarouselUpload" 
                    //className={loading ? 'btn btn-dark disabled' : 'btn btn-dark'}
                    className="btn btn-dark"
                >
                    Subir imagen
                </label>
            </div>
        </div>
    );
};

export default CarouselSelector;
