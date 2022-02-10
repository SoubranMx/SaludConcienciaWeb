import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import { cargarImgCarouselAccion, eliminarImgCarouselAccion, uploadImgCarouselAccion } from '../../redux/carouselDucks';
import { nanoid } from 'nanoid';


import '../../sass/_carouselJS.scss'

const CarouselSelector = () => {
    //States
    const [isLoading, setIsLoading] = useState(true)
    const [carouselItemActivo, setcarouselItemActivo] = useState(0)
    const [carouselActualState, setCarouselActualState] = useState(undefined)
    
    
    const dispatch = useDispatch();
    const loading = useSelector(store => store.carousel.loading)
    const carouselActual = useSelector(store => store.carousel.carousel)

    
    useEffect(()=>{
        console.log("Antes de cargar las imagenes => ")
        dispatch(cargarImgCarouselAccion())
    },[])

    useEffect(()=>{
        const loadCarousel = () => {
            setCarouselActualState([...carouselActual])
        }
        if(carouselActual === undefined || carouselActual!==carouselActualState)
            loadCarousel()
    },[carouselActual])

    useEffect(()=>{
        const load = () => {
            if (loading === true)
                setIsLoading(true)
            else
                setIsLoading(false)
        }
        
        if(loading !== undefined)
            load();
    }, [loading])

    //Funcs
    const uploadImg = async(imagen) => {
        const imagenCarousel = imagen.target.files[0]
        
        if(imagenCarousel === undefined){
            console.log("No se seleccionó una imagen");
            return
        }
        if(imagenCarousel.size <= 1000000){
            if(imagenCarousel.type === "image/png" || imagenCarousel.type === "image/jpeg" || imagenCarousel.type === "image/jpg"){
                dispatch(uploadImgCarouselAccion(imagen.target.files[0], nanoid()))
                //console.log(imagen.target.files[0].name);

            }else{
                console.log("Solo archivos .png o .jpg")
            }
        }else{
            console.log("Archivos menores o iguales a 1MB")
        }
    }

    const onClickItemHandler = (index, item) => {
        //console.log(index, item);
        setcarouselItemActivo(index)
    }

    const onDeleteHandler = () => {
        console.log("Item a borrar > ", carouselItemActivo)
        
        dispatch(eliminarImgCarouselAccion(carouselItemActivo))
        setcarouselItemActivo(0)
    }

    return isLoading === true ? (
        <div>Cargando ...</div>
    ):(
        <div className='container carouselContainer'>
            <h1>Selección de imágenes del Carrusel</h1>
            <div className="carouselContainer__main">
                {carouselActualState.length === 0 || carouselActualState === undefined ? (
                    <div>No hay imágenes actualmente</div>
                    ):(
                        <Carousel 
                            showThumbs={false}
                            showStatus={false}
                            onChange={(index, item)=>onClickItemHandler(index, item)}
                            selectedItem={carouselItemActivo}
                        >
                            {carouselActualState.map((img,index) => (
                                <div key={index}>
                                    <img src={img.imgURL} alt="" />
                                </div>
                            ))}
                        </Carousel>
                    )
                }
                {
                    carouselActualState.length === 0 || carouselActualState === undefined ? (
                        <div></div>
                    ):(
                        <div className="carouselContainer__item">
                            <span className='lexend lexend__bold'>Imagen: {carouselActualState[carouselItemActivo].name} </span>
                            <span> Orden:{carouselItemActivo + 1}</span>
                            <div 
                                className="carouselContainer__item-delete btn btn-danger lexend lexend__bold"
                                onClick={()=>onDeleteHandler()}
                            >
                                Borrar
                            </div>
                        </div>
                    )
                }
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
