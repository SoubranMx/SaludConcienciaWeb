import React, {useEffect} from 'react'
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
import FaWhatsapp from 'react-icons/fa'

const Inicio = (props) => {
    useEffect(()=>{
        if(auth.currentUser){
            props.history.push('/admin')
        }
    },[props.history])

    
    return (
        <div className="index__container">
            {/* Slide 1 */}
            <div className="index__slide" >
                <div className="index__slide__1-box">
                    <div className="index__slide__1__textleft">
                        <div className="lexend lexend__bold lexend__bold-48 text__green index__slide__1__textleft-up line-height-42">
                            <span>Tu Salud en </span><span>un solo lugar.</span>
                        </div>
                        <div className="index__slide__1__textleft-mid poppins poppins__light poppins__light-20 text__gray line-height-24">
                            <span>Recursos. Consejos. Asesorías.</span>
                            <span>Lo mejor de la ciencia, a tu servicio.</span>
                        </div>
                        <div className="index__slide__1__textleft-down poppins poppins__semibold poppins__semibold-15">
                            <Link to="/" className="index__slide__1__textleft-down-link"><span>Conoce más</span></Link>
                        </div>
                    </div>
                    <img src={presentacion_1} alt="Presentación del concepto" className="index__slide__1-img"/>
                </div>
            </div>

            {/* Slide 2 */}
            <div className="index__slide" >
                <div className="index__slide__2__textleft">
                    <div className="lexend lexend__bold lexend__bold-48 text__black index__slide__2__textleft-up line-height-48">
                        <span>Ciencia para </span><span>tus oidos.</span>
                    </div>
                    <div className="index__slide__2__textleft-mid poppins poppins__light poppins__light-20 text__gray line-height-24">
                        <span>Escucha información fresca, útil</span>
                        <span>y relevante sobre tu salud.</span>
                    </div>
                    <div className="index__slide__2__textleft-down poppins poppins__semibold poppins__semibold-15">
                        <Link to="/" className="index__slide__2__textleft-down-link-1"><span>Conoce más</span></Link>
                    </div>
                </div>
                <figure className="index__slide__2__figure">
                    <img src={podcast} alt="Chica escuchando podcast" className="index__slide__2__figure-img" />
                </figure>
            </div>

            {/* Slide 3 */}
            <div className="index__slide" >
                <div className="index__slide__2__textleft">
                    <div className="lexend lexend__bold lexend__bold-48 text__blue index__slide__2__textleft-up line-height-48">
                        <span>Entrena con</span><span>quien te</span><span>motiva.</span>
                    </div>
                    <div className="index__slide__2__textleft-mid poppins poppins__light poppins__light-20 text__gray line-height-24">
                        <span>Entrenamientos gratuitos y</span>
                        <span>guiados para toda la familia.</span>
                    </div>
                    <div className="index__slide__2__textleft-down poppins poppins__semibold poppins__semibold-15">
                        <Link to="/" className="index__slide__2__textleft-down-link-2"><span>Conoce más</span></Link>
                    </div>
                </div>
                <figure className="index__slide__2__figure">
                    <img src={entrenamiento} alt="Chica haciendo yoga" className="index__slide__2__figure-img" />
                </figure>
            </div>

            {/* Slide 4 */}
            <div className="index__slide" >
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
                        <Link to="/" className="index__slide__2__textleft-down-link-3"><span>Conoce más</span></Link>
                    </div>
                </div>
                <figure className="index__slide__2__figure">
                    <img src={familia_salud} alt="Chica haciendo yoga" className="index__slide__2__figure-img" />
                </figure>
            </div>

            {/* Slide 5 */}
            <div className="index__slide" >
                <div className="index__slide__5">
                    <div className="index__slide__5__top">
                        <div className="index__slide__5__top-box lexend lexend__light lexend__light-48 line-height-48">
                            ¿Cómo podemos ayudarte?
                        </div>
                    </div>
                    <div className="index__slide__5__down">
                        <div className="index__slide__5__card">
                            <div className="index__slide__5__card-title-1 text__green lexend lexend__light lexend__light-39">Ejercicio</div>
                            <figure className="index__slide__5__card__container">
                                <img src={ejercicio} alt="Chica preparandose para ejercitarse" className="index__slide__5__card-img" />
                                <div className="index__slide__5__card-body-green poppins poppins__medium poppins__medium-14">
                                    <span>Entrenamientos para gimnasio o la sala de tu casa.</span>
                                    <span>No hay problema, tenemos una rutina para ti.</span>
                                </div>
                            </figure>
                        </div>

                        <div className="index__slide__5__card">
                            <div className="index__slide__5__card-title-2 text__blue lexend lexend__light lexend__light-39">Hábitos</div>
                            <figure className="index__slide__5__card__container">
                                <img src={habitos} alt="Chica preparandose para ejercitarse" className="index__slide__5__card-img" />
                                <div className="index__slide__5__card-body-blue poppins poppins__medium poppins__medium-14">
                                    <span>¿Crees que la salud solo es dieta y ejercicio?</span>
                                    <span>Abordamos otros aspectos de tu vida que son clave para una vida saludable.</span>
                                </div>
                            </figure>
                        </div>

                        <div className="index__slide__5__card">
                            <div className="index__slide__5__card-title-3 text__black lexend lexend__light lexend__light-39">Alimentación</div>
                            <figure className="index__slide__5__card__container">
                                <img src={alimentacion} alt="Chica preparandose para ejercitarse" className="index__slide__5__card-img" />
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
            }}>
               <div className="index__slide__6__textleft">
                    <div className="index__slide__6__textleft-up lexend lexend__bold lexend__bold-50 line-height-48">
                       <span>Asesoría Integral</span><span>en Salud</span>
                    </div>
                    <div className="index__slide__6__textleft-mid poppins poppins__regular poppins__regular-20 line-height-26-4">
                       <span>Ejercicio, Hábitos y Alimentación</span>
                       <span>en un solo lugar, a un precio inmejorable</span>
                    </div>
                    <div className="index__slide__6__textleft-down poppins poppins__semibold poppins__semibold-15">
                        <Link to="/" className="index__slide__6__textleft-down-link"><span>Conoce más</span></Link>
                    </div>
                </div> 
            </div>

            {/* Slide 7 */}
            <div className="index__slide" style={{backgroundColor: 'violet'}}>
                <h1>Whatsapp</h1>
            </div>

            {/* Slide 8 */}
            <div className="index__slide" style={{backgroundColor: 'lightcoral'}}>
                <h1>Articulos</h1>
            </div>

            {/* Slide 9 */}
            <div className="index__slide" style={{backgroundColor: 'chocolate'}}>
                <h1>Contactanos</h1>
            </div>

            {/* Footer */}
            <div className="index__slide" style={{backgroundColor: 'darksalmon'}}>
                <h1>Gato</h1>
            </div>
        </div>
    )
}

export default withRouter(Inicio)
