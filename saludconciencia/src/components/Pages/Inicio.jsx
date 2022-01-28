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
import {FaWhatsapp, FaInstagram, FaYoutube, FaTwitter, FaFacebook} from 'react-icons/fa'
import {IoLogoTiktok} from 'react-icons/io5'
import ArticulosRecientes from './ArticulosRecientes'

const Inicio = (props) => {
    const linksRS = {
        twitter: "https://twitter.com/EjercicioCien",
        facebook: "https://www.facebook.com/1saludconciencia",
        instagram: "https://www.instagram.com/saludcon.ciencia/",
        youtube: "https://www.youtube.com/channel/UCMU7Cs7WktzjDg5rOZdshDw",
        tiktok: "https://www.tiktok.com/@salud_conciencia?lang=es"
    }

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
    const slide5MobileTitulo = useRef(null)
    
    useEffect(()=>{
        //slide1 !== null && slide1.current.scrollIntoView({behavior: 'smooth'})
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
                window.screen.width <= 576 ?
                    slide5MobileTitulo.current.scrollIntoView({behavior: 'smooth'}) :
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
            <div className="index__slide__1" ref={slide1}>
                <div className="index__slide__1-box">
                    <div className="index__slide__1__textleft">
                        <div className="lexend lexend__bold text__green index__slide__1__textleft-up">
                            <span>Tu Salud en </span><span>un solo lugar.</span>
                        </div>
                        <div className="index__slide__1__textleft-mid poppins poppins__light text__gray">
                            <span>Recursos. Consejos. Asesorías.</span>
                            <span>Lo mejor de la ciencia, a tu servicio.</span>
                        </div>
                        <div className="index__slide__1__textleft-down poppins poppins__semibold">
                            <Link to="/" className="index__slide__1__textleft-down-link" onClick={()=>goToSlide(1)}><span>Conoce más</span></Link>
                        </div>
                    </div>
                    <figure className="index__slide__1__figure">
                        <img src={presentacion_1} alt="Presentación del concepto" className="index__slide__1__figure-img"/>
                    </figure>
                </div>
            </div>

            {/* Slide 2 */}
            <div className="index__slide__2" ref={slide2}>
                <div className="index__slide__2-box">
                    <div className="index__slide__2__textleft">
                        <div className="lexend lexend__bold text__black index__slide__2__textleft-up">
                            <span className="index__slide__2__textleft-up-desktop-item">Ciencia para </span>
                            <span className="index__slide__2__textleft-up-desktop-item">tus oidos.</span>
                            <span className="index__slide__2__textleft-up-mobile">Ciencia para tus oidos.</span>
                        </div>
                        <div className="index__slide__2__textleft-mid poppins poppins__light text__gray">
                            <span className="index__slide__2__textleft-mid-desktop-item">Escucha información fresca, útil</span>
                            <span className="index__slide__2__textleft-mid-desktop-item">y relevante sobre tu salud.</span>
                            <span className="index__slide__2__textleft-mid-mobile">Escucha información fresca, útil y relevante sobre tu salud.</span>
                        </div>
                        <div className="index__slide__2__textleft-down poppins poppins__semibold poppins__semibold-15">
                            <Link to="/" className="index__slide__2__textleft-down-link-1" onClick={()=>goToSlide(2)}><span>Escúchanos Aquí.</span></Link>
                        </div>
                    </div>
                    <figure className="index__slide__2__figure">
                        <img src={podcast} alt="Chica escuchando podcast" className="index__slide__2__figure-img" />
                    </figure>
                </div>
            </div>

            {/* Slide 3 */}
            <div className="index__slide__2" ref={slide3}>
                <div className="index__slide__2-box">
                    <div className="index__slide__2__textleft">
                        <div className="lexend lexend__bold text__blue index__slide__2__textleft-up">
                            <span className="index__slide__2__textleft-up-desktop-item">Entrena con</span>
                            <span className="index__slide__2__textleft-up-desktop-item">quien te</span>
                            <span className="index__slide__2__textleft-up-desktop-item">motiva.</span>
                            <span className="index__slide__2__textleft-up-mobile">Entrena con quien te motiva.</span>
                        </div>
                        <div className="index__slide__2__textleft-mid poppins poppins__light text__gray">
                            <span className="index__slide__2__textleft-mid-desktop-item">Entrenamientos gratuitos y</span>
                            <span className="index__slide__2__textleft-mid-desktop-item">guiados para toda la familia.</span>
                            <span className="index__slide__2__textleft-mid-mobile">Entrenamientos gratuitos y guiados para toda la familia.</span>
                        </div>
                        <div className="index__slide__2__textleft-down poppins poppins__semibold poppins__semibold-15">
                            <a href="https://youtube.com/playlist?list=PLdTB8tVWJU5jjqRSWFElLYnPBRaYjD18I" className="index__slide__2__textleft-down-link-2" target="_blank" rel="noreferrer noopener"><span>Comienza Aquí.</span></a>
                        </div>
                    </div>
                    <figure className="index__slide__2__figure">
                        <img src={entrenamiento} alt="Chica haciendo yoga" className="index__slide__2__figure-img-2" />
                    </figure>
                </div>
            </div>

            {/* Slide 4 */}
            <div className="index__slide__2" ref={slide4}>
                <div className="index__slide__2-box">
                    <div className="index__slide__2__textleft">
                        <div className="lexend lexend__bold text__green index__slide__2__textleft-up">
                            <span className="index__slide__2__textleft-up-desktop-item">La mejor</span>
                            <span className="index__slide__2__textleft-up-desktop-item">manera de</span>
                            <span className="index__slide__2__textleft-up-desktop-item">cuidarte.</span>
                            <span className="index__slide__2__textleft-up-mobile">La mejor manera de cuidarte.</span>
                        </div>
                        <div className="index__slide__2__textleft-mid poppins poppins__light text__gray">
                            <span className="index__slide__2__textleft-mid-desktop-item">Asesoría Integral en Salud,</span>
                            <span className="index__slide__2__textleft-mid-desktop-item">un enfoque personalizado</span>
                            <span className="index__slide__2__textleft-mid-desktop-item">y amigable para ti.</span>
                            <span className="index__slide__2__textleft-mid-mobile">Asesoria Integral en Salud, un enfoque personalizado y amigable para ti.</span>
                        </div>
                        <div className="index__slide__2__textleft-down poppins poppins__semibold poppins__semibold-15">
                            <Link to="/para-ti" className="index__slide__2__textleft-down-link-3" onClick={()=>goToSlide(4)}><span>Conoce más</span></Link>
                        </div>
                    </div>
                    <figure className="index__slide__2__figure">
                        <img src={familia_salud} alt="Familia saludable" className="index__slide__2__figure-img-3" />
                    </figure>
                </div>
            </div>

            {/* Slide 5 */}
            <div className="index__slide__5" ref={slide5}>
                <div className="index__slide__5__top">
                    <div className="index__slide__5__top-box lexend lexend__light">
                        ¿Cómo podemos ayudarte?
                    </div>
                </div>
                <div className="index__slide__5__down">
                    <div className="index__slide__5__card">
                        <div className="index__slide__5__card-title-1 text__green lexend lexend__regular">
                            <Link to="/para-ti" className="index__slide__5__card-title-1-link">
                                Ejercicio
                            </Link>
                        </div>
                        <figure className="index__slide__5__card__container">
                            <Link to="/para-ti">
                                <img src={ejercicio} alt="Chica preparandose para ejercitarse" className="index__slide__5__card-img" />
                            </Link>
                            <div className="index__slide__5__card-body-green poppins poppins__medium">
                                <span className="index__slide__5__card-body-green-desktop">Entrenamientos para gimnasio o la sala de tu casa.</span>
                                <span className="index__slide__5__card-body-green-desktop">No hay problema, tenemos una rutina para ti.</span>
                                <span className="index__slide__5__card-body-green-mobile">Entrenamientos para gimnasio o la sala de tu casa. No hay problema, tenemos una rutina para ti.</span>
                            </div>
                        </figure>

                    </div>

                    <div className="index__slide__5__card">
                        <div className="index__slide__5__card-title-2 text__blue lexend lexend__regular">
                            <Link to="/para-ti" className="index__slide__5__card-title-2-link">
                                Hábitos
                            </Link>
                        </div>
                        <figure className="index__slide__5__card__container">
                            <Link to="/para-ti">
                                <img src={habitos} alt="Chica preparandose para ejercitarse" className="index__slide__5__card-img" />
                            </Link>
                            <div className="index__slide__5__card-body-blue poppins poppins__medium">
                                <span className="index__slide__5__card-body-blue-desktop">¿Crees que la salud solo es dieta y ejercicio?</span>
                                <span className="index__slide__5__card-body-blue-desktop">Abordamos otros aspectos de tu vida que son clave para una vida saludable.</span>
                                <span className="index__slide__5__card-body-blue-mobile">¿Crees que la salud solo es dieta y ejercicio? Abordamos otros aspectos de tu vida que son clave para una vida saludable.</span>
                            </div>
                        </figure>
                    </div>

                    <div className="index__slide__5__card">
                        <div className="index__slide__5__card-title-3 text__black lexend lexend__regular">
                            <Link to="/para-ti" className="index__slide__5__card-title-3-link">
                                Alimentación
                            </Link>
                        </div>
                        <figure className="index__slide__5__card__container">
                            <Link to="/para-ti">
                                <img src={alimentacion} alt="Chica preparandose para ejercitarse" className="index__slide__5__card-img" />
                            </Link>
                            <div className="index__slide__5__card-body-black poppins poppins__medium">
                                <span className="index__slide__5__card-body-black-desktop">Basta de comer chayote hervido.</span>
                                <span className="index__slide__5__card-body-black-desktop">Una asesoría nutricional humana, realista y personalizada a tus gustos.</span>
                                <span className="index__slide__5__card-body-black-mobile">Basta de comer chayote hervido. Una asesoria nutricional humana, realista y personalizada a tus gustos.</span>
                            </div>
                        </figure>
                    </div>
                </div>
            </div>

            {/* Slide 5 Mobile 1  */}
            <div className="index__slide__5-mobile" ref={slide5MobileTitulo}>
                <div className="index__slide__5-mobile__titulo lexend lexend__light">
                    ¿Cómo podemos ayudarte?
                </div>
                <div className="index__slide__5-mobile__card">
                    <div className="index__slide__5-mobile__card-title-1 text__green lexend lexend__regular">
                        <Link to="/para-ti" className="index__slide__5-mobile__card-title-1-link">
                            Ejercicio
                        </Link>
                    </div>
                    <figure className="index__slide__5-mobile__card__container">
                        <Link to="/para-ti">
                            <img src={ejercicio} alt="Chica preparandose para ejercitarse" className="index__slide__5-mobile__card-img" />
                        </Link>
                        <div className="index__slide__5-mobile__card-body-green poppins poppins__medium">
                            <span>Entrenamientos para gimnasio o la sala de tu casa.</span>
                            <span>No hay problema, tenemos una rutina para ti.</span>
                        </div>
                    </figure>
                </div>
            </div>

            <div className="index__slide__5-mobile">
                <div className="index__slide__5-mobile__titulo lexend lexend__light">
                    ¿Cómo podemos ayudarte?
                </div>
                <div className="index__slide__5-mobile__card">
                    <div className="index__slide__5-mobile__card-title-1 text__blue lexend lexend__regular">
                        <Link to="/para-ti" className="index__slide__5-mobile__card-title-2-link">
                            Hábitos
                        </Link>
                    </div>
                    <figure className="index__slide__5-mobile__card__container">
                        <Link to="/para-ti">
                            <img src={habitos} alt="Chica preparandose para ejercitarse" className="index__slide__5-mobile__card-img" />
                        </Link>
                        <div className="index__slide__5-mobile__card-body-blue poppins poppins__medium">
                            <span>¿Crees que la salud solo es dieta y ejercicio?</span>
                            <span>Abordamos otros aspectos de tu vida que son clave para una vida saludable.</span>
                        </div>
                    </figure>
                </div>
            </div>

            <div className="index__slide__5-mobile">
                <div className="index__slide__5-mobile__titulo lexend lexend__light">
                    ¿Cómo podemos ayudarte?
                </div>
                <div className="index__slide__5-mobile__card">
                    <div className="index__slide__5-mobile__card-title-3 text__black lexend lexend__regular">
                        <Link to="/para-ti" className="index__slide__5-mobile__card-title-3-link">
                            Alimentación
                        </Link>
                    </div>
                    <figure className="index__slide__5-mobile__card__container">
                        <Link to="/para-ti">
                            <img src={alimentacion} alt="Chica preparandose para ejercitarse" className="index__slide__5-mobile__card-img" />
                        </Link>
                        <div className="index__slide__5-mobile__card-body-black poppins poppins__medium">
                            <span>Basta de comer chayote hervido.</span>
                            <span>Una asesoría nutricional humana, realista y personalizada a tus gustos.</span>
                        </div>
                    </figure>
                </div>
            </div>


            {/* Slide 6 Tal vez eliminada*/}
            {/* <div className="index__slide" style={{
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
            </div> */}

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
            <ArticulosRecientes/>
            {/* Slide 9 */}
            <div className="index__slide__9" ref={slide9}>
                <div className="index__slide__9-img">
                    <img src={contacto} alt="Contacto Salud Conciencia" />
                </div>
                <div className="index__slide__9__textright">
                    <div className="index__slide__9__textright-top lexend lexend__bold">
                        <span className="index__slide__9__textright-top-desktop">¿Te gustaría saber más </span>
                        <span className="index__slide__9__textright-top-desktop">sobre algún tema </span>
                        <span className="index__slide__9__textright-top-desktop">en particular?</span>
                        <span className="index__slide__9__textright-top-mobile">¿Te gustaría saber más sobre algún tema en particular?</span>
                    </div>
                    <div className="index__slide__9__textright-mid poppins poppins__regular">
                        <span className="index__slide__9__textright-mid-desktop">¡Contáctanos en nuestras </span>
                        <span className="index__slide__9__textright-mid-desktop">redes sociales!</span>
                        <span className="index__slide__9__textright-mid-mobile poppins poppins__regular">¡Contáctanos en nuestras redes sociales!</span>
                    </div>
                    <div className="index__slide__9__textright-down">
                        <div className="index__icons"><a href={linksRS.twitter} target="_blank" rel="noreferrer noopener"><FaTwitter className="index__icons-item index__icons-item-twitter"/></a></div>
                        <div className="index__icons"><a href={linksRS.tiktok} target="_blank" rel="noreferrer noopener"><IoLogoTiktok className="index__icons-item index__icons-item-tiktok"/></a></div>
                        <div className="index__icons">
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
                                <FaInstagram className="index__icons-item index__icons-item-instagram" />
                            </a>
                        </div>
                        <div className="index__icons"><a href={linksRS.youtube} target="_blank" rel="noreferrer noopener"><FaYoutube className="index__icons-item index__icons-item-youtube"/></a></div>
                        <div className="index__icons"><a href={linksRS.facebook} target="_blank" rel="noreferrer noopener"><FaFacebook className="index__icons-item index__icons-item-facebook"/></a></div>
                    </div>
                </div>
            </div>

            {/* Footer */}
        </div>
    )
}

export default withRouter(Inicio)
