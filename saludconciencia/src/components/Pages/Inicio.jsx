import React, {useEffect, useRef} from 'react'
import { withRouter, Link } from 'react-router-dom'

import { auth } from '../../firebase'
import '../../sass/_inicio.scss'
//Images
import presentacion_1 from './img/presentacion_1.jpg'
import podcast from './img/chica_podcast.jpg'
import entrenamiento from './img/chica_entrenamiento.jpg'
import contacto from './img/chica_contacto.jpg'
import ejercicio from './img/ejercicio.jpg'
import familia_salud from './img/familia_salud.jpg'
import alimentacion from './img/alimentacion.jpg'
import asesoria from './img/asesoria_integral.jpg'
import habitos from './img/habitos.jpg'
//Iconos
import {FaWhatsapp, FaInstagram, FaYoutube, FaTwitter} from 'react-icons/fa'
import {IoLogoTiktok} from 'react-icons/io5'

const Inicio = (props) => {
    useEffect(()=>{
        if(auth.currentUser){
            props.history.push('/admin')
        }
    },[props.history])
    
    const slide1 = useRef(null)
    const slide2 = useRef(null)
    const slide3 = useRef(null)
    const slide4 = useRef(null)
    const slide5 = useRef(null)
    const slide6 = useRef(null)
    const slide7 = useRef(null)
    const slide8 = useRef(null)
    const slide9 = useRef(null)
    
    useEffect(()=>{
        slide1 !== null && slide1.current.scrollIntoView({behavior: 'smooth'})
    },[slide1])

    const goToSlide = (slideActual) => {
        switch(slideActual){
            case 1:
                slide2.current.scrollIntoView({behavior: 'smooth', block: 'start'})
                break;
            case 2:
                slide3.current.scrollIntoView({behavior: 'smooth', block: 'start'})
                break;
            case 3:
                slide4.current.scrollIntoView({behavior: 'smooth', block: 'start'})
                break;
            case 4:
                slide5.current.scrollIntoView({behavior: 'smooth', block: 'start'})
                break;
            case 5:
                slide6.current.scrollIntoView({behavior: 'smooth', block: 'start'})
                break;
            case 6:
                slide8.current.scrollIntoView({behavior: 'smooth', block: 'start'})
                break;
            case 7:
                slide8.current.scrollIntoView({behavior: 'smooth', block: 'start'})
                break;
            case 8:
                slide9.current.scrollIntoView({behavior: 'smooth', block: 'start'})
                break;
            case 9:
                break;
            default:
                break;
        }
    }
    
    return (
        <div className="index__container">
            {/* Slide 1 */}
            <div className="index__slide" ref={slide1}>
                <div className="index__slide__1-box">
                    <div className="index__slide__1__textleft">
                        <div className="lexend lexend__bold lexend__bold-60 text__green index__slide__1__textleft-up line-height-60">
                            <span>Tu Salud en </span><span>un solo lugar.</span>
                        </div>
                        <div className="index__slide__1__textleft-mid poppins poppins__light poppins__light-22-5 text__gray line-height-24">
                            <span>Recursos. Consejos. Asesorías.</span>
                            <span>Lo mejor de la ciencia, a tu servicio.</span>
                        </div>
                        <div className="index__slide__1__textleft-down poppins poppins__semibold poppins__semibold-15">
                            <Link to="/" className="index__slide__1__textleft-down-link" onClick={()=>goToSlide(1)}><span>Conoce más</span></Link>
                        </div>
                    </div>
                    <img src={presentacion_1} alt="Presentación del concepto" className="index__slide__1-img"/>
                </div>
            </div>

            {/* Slide 2 */}
            <div className="index__slide" ref={slide2}>
                <div className="index__slide__2__textleft">
                    <div className="lexend lexend__bold lexend__bold-48 text__black index__slide__2__textleft-up line-height-48">
                        <span>Ciencia para </span><span>tus oidos.</span>
                    </div>
                    <div className="index__slide__2__textleft-mid poppins poppins__light poppins__light-20 text__gray line-height-24">
                        <span>Escucha información fresca, útil</span>
                        <span>y relevante sobre tu salud.</span>
                    </div>
                    <div className="index__slide__2__textleft-down poppins poppins__semibold poppins__semibold-15">
                        <Link to="/" className="index__slide__2__textleft-down-link-1" onClick={()=>goToSlide(2)}><span>Conoce más</span></Link>
                    </div>
                </div>
                <figure className="index__slide__2__figure">
                    <img src={podcast} alt="Chica escuchando podcast" className="index__slide__2__figure-img" />
                </figure>
            </div>

            {/* Slide 3 */}
            <div className="index__slide" ref={slide3}>
                <div className="index__slide__2__textleft">
                    <div className="lexend lexend__bold lexend__bold-48 text__blue index__slide__2__textleft-up line-height-48">
                        <span>Entrena con</span><span>quien te</span><span>motiva.</span>
                    </div>
                    <div className="index__slide__2__textleft-mid poppins poppins__light poppins__light-20 text__gray line-height-24">
                        <span>Entrenamientos gratuitos y</span>
                        <span>guiados para toda la familia.</span>
                    </div>
                    <div className="index__slide__2__textleft-down poppins poppins__semibold poppins__semibold-15">
                        <Link to="/" className="index__slide__2__textleft-down-link-2" onClick={()=>goToSlide(3)}><span>Conoce más</span></Link>
                    </div>
                </div>
                <figure className="index__slide__2__figure">
                    <img src={entrenamiento} alt="Chica haciendo yoga" className="index__slide__2__figure-img-2" />
                </figure>
            </div>

            {/* Slide 4 */}
            <div className="index__slide" ref={slide4}>
                <div className="index__slide__2__textleft">
                    <div className="lexend lexend__bold lexend__bold-48 text__green index__slide__2__textleft-up line-height-48">
                        <span>La mejor</span><span>manera de</span><span>cuidarte.</span>
                    </div>
                    <div className="index__slide__2__textleft-mid poppins poppins__light poppins__light-20 text__gray line-height-24">
                        <span>Asesoría Integral en Salud,</span>
                        <span>un enfoque personalizado</span>
                        <span>y amigable para ti.</span>
                    </div>
                    <div className="index__slide__2__textleft-down poppins poppins__semibold poppins__semibold-15">
                        <Link to="/" className="index__slide__2__textleft-down-link-3" onClick={()=>goToSlide(4)}><span>Conoce más</span></Link>
                    </div>
                </div>
                <figure className="index__slide__2__figure">
                    <img src={familia_salud} alt="Chica haciendo yoga" className="index__slide__2__figure-img" />
                </figure>
            </div>

            {/* Slide 5 */}
            <div className="index__slide" ref={slide5}>
                <div className="index__slide__5">
                    <div className="index__slide__5__top">
                        <div className="index__slide__5__top-box lexend lexend__light lexend__light-48 line-height-48">
                            ¿Cómo podemos ayudarte?
                        </div>
                    </div>
                    <div className="index__slide__5__down">
                        <div className="index__slide__5__card">
                            <div className="index__slide__5__card-title-1 text__green lexend lexend__regular lexend__regular-39">
                                <Link to="/" className="index__slide__5__card-title-1-link">
                                    Ejercicio
                                </Link>
                            </div>
                            <figure className="index__slide__5__card__container">
                                <Link to="/">
                                    <img src={ejercicio} alt="Chica preparandose para ejercitarse" className="index__slide__5__card-img" />
                                </Link>
                                <div className="index__slide__5__card-body-green poppins poppins__medium poppins__medium-14">
                                    <span>Entrenamientos para gimnasio o la sala de tu casa.</span>
                                    <span>No hay problema, tenemos una rutina para ti.</span>
                                </div>
                            </figure>

                        </div>

                        <div className="index__slide__5__card">
                            <div className="index__slide__5__card-title-2 text__blue lexend lexend__regular lexend__regular-39">
                                <Link to="/" className="index__slide__5__card-title-2-link">
                                    Hábitos
                                </Link>
                            </div>
                            <figure className="index__slide__5__card__container">
                                <Link to="/">
                                    <img src={habitos} alt="Chica preparandose para ejercitarse" className="index__slide__5__card-img" />
                                </Link>
                                <div className="index__slide__5__card-body-blue poppins poppins__medium poppins__medium-14">
                                    <span>¿Crees que la salud solo es dieta y ejercicio?</span>
                                    <span>Abordamos otros aspectos de tu vida que son clave para una vida saludable.</span>
                                </div>
                            </figure>
                        </div>

                        <div className="index__slide__5__card">
                            <div className="index__slide__5__card-title-3 text__black lexend lexend__regular lexend__regular-39">
                                <Link to="/" className="index__slide__5__card-title-3-link">
                                    Alimentación
                                </Link>
                            </div>
                            <figure className="index__slide__5__card__container">
                                <Link to="/">
                                    <img src={alimentacion} alt="Chica preparandose para ejercitarse" className="index__slide__5__card-img" />
                                </Link>
                                <div className="index__slide__5__card-body-black poppins poppins__medium poppins__medium-14">
                                    <span>Basta de comer chayote hervido.</span>
                                    <span>Una asesoría nutricional humana, realista y personalizada a tus gustos.</span>
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slide 6 */}
            <div className="index__slide" style={{
                backgroundImage: `url(${asesoria})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}
            ref={slide6}>
               <div className="index__slide__6__textleft">
                    <div className="index__slide__6__textleft-up lexend lexend__bold lexend__bold-50 line-height-48">
                       <span>Asesoría Integral</span><span>en Salud</span>
                    </div>
                    <div className="index__slide__6__textleft-mid poppins poppins__regular poppins__regular-20 line-height-26-4">
                       <span>Ejercicio, Hábitos y Alimentación</span>
                       <span>en un solo lugar, a un precio inmejorable</span>
                    </div>
                    <div className="index__slide__6__textleft-down poppins poppins__semibold poppins__semibold-15">
                        <Link to="/" className="index__slide__6__textleft-down-link" onClick={()=>goToSlide(6)}><span>Conoce más</span></Link>
                    </div>
                </div> 
            </div>

            {/* Slide 7 Por ahora no*/}
            {/* <div className="index__slide" >
                <div className="index__slide__7">
                    <div className="index__slide__7__textleft">
                        <div className="index__slide__7__textleft-up lexend lexend__bold lexend__bold-50">
                            Contáctanos
                        </div>
                        <div className="index__slide__7__textleft-down poppins poppins__regular poppins__regular-30">
                            Concreta tu asesoría aquí
                        </div>
                    </div>
                    <FaWhatsapp className="index__slide__7-logo" />
                </div>
            </div> */}

            {/* Slide 8 */}
            <div className="index__slide" style={{backgroundColor: 'lightcoral'}} ref={slide8}>
                <h1>Articulos</h1>
            </div>

            {/* Slide 9 */}
            <div className="index__slide" ref={slide9}>
                <div className="index__slide__9">
                    <div className="index__slide__9-img">
                        <img src={contacto} alt="Contacto Salud Conciencia" />
                    </div>
                    <div className="index__slide__9__textright">
                        <div className="index__slide__9__textright-top lexend lexend__bold lexend__bold-35 line-height-42">
                            <span>¿Te gustaría saber más </span>
                            <span>sobre algún tema </span>
                            <span>en particular?</span>
                        </div>
                        <div className="index__slide__9__textright-mid poppins poppins__regular poppins__regular-30">
                            <span>¡Contáctanos en nuestras </span>
                            <span>redes sociales!</span>
                        </div>
                        <div className="index__slide__9__textright-down">
                            <div className="index__icons"><Link to="/"><FaTwitter className="index__icons-item index__icons-item-twitter"/></Link></div>
                            <div className="index__icons"><Link to="/"><IoLogoTiktok className="index__icons-item index__icons-item-tiktok"/></Link></div>
                            <div className="index__icons">
                                <Link to="/">
                                    <svg width="0" height="0">
                                        <radialGradient id="rg" r="150%" cx="30%" cy="107%">
                                            <stop stopColor="#fdf497" offset="0" />
                                            <stop stopColor="#fdf497" offset="0.05" />
                                            <stop stopColor="#fd5949" offset="0.45" />
                                            <stop stopColor="#d6249f" offset="0.6" />
                                            <stop stopColor="#285AEB" offset="0.9" />
                                        </radialGradient>
                                    </svg>
                                    <FaInstagram className="index__icons-item index__icons-item-instagram" />
                                </Link>
                            </div>
                            <div className="index__icons"><Link to="/"><FaYoutube className="index__icons-item index__icons-item-youtube"/></Link></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
        </div>
    )
}

export default withRouter(Inicio)
