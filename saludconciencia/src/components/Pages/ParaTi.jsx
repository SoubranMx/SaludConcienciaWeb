import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { auth } from '../../firebase'

import slide1_img from './img/paraTi_portada.jpg';
import julian from './img/paraTi_Julian.jpg';
import '../../sass/_paraTi.scss';

const ParaTi = (props) => {
    useEffect(()=>{
        if(auth.currentUser){
            props.history.push('/admin')
        }
    },[props.history])

    useEffect(()=>{
       console.log("Width => ", window.screen.width)
       console.log("Height => ", window.screen.height)
       console.log("Pixels => ", window.screen.pixelDepth)
    },[])
    
    return (
        <div className="paraTi__wrapper">
            {/* Slide 1 Agendar*/}
            <div className="paraTi__slide1">
                <div className="paraTi__slide1__textleft">
                    <div className="paraTi__slide1__textleft-up lexend lexend__bold">
                        <span>Una asesoría humana y confiable para mejorar tu salud</span>
                    </div>
                    <div className="paraTi__slide1__textleft-mid poppins poppins__medium">
                        <span>Alimentación, Ejercicio y Hábitos en un sólo lugar.</span>
                        <span>Una experiencia única te ayuda a visibilizar y mejorar tu día a día.</span>
                    </div>
                    <div className="paraTi__slide1__textleft-bot poppins poppins__semibold">
                        <span>Agenda tu asesoría</span>
                    </div>
                </div>
                <figure className="paraTi__slide1__img">
                    <img src={slide1_img} alt="Branding folleto" />
                </figure>
            </div>
            
            {/* Slide 2 Julian Photo*/}
            <div className="paraTi__slide2">
                <div className="paraTi__slide2__textleft">
                    <div className="paraTi__slide2__textleft-up lexend lexend__bold">
                        <span>Tu salud. </span>
                        <span>En las mejores manos.</span>
                    </div>
                    <div className="paraTi__slide2__textleft-bot poppins poppins__medium">
                        <span>Un solo profesional de la salud para asesorarte en todo aspecto.</span>
                        <span>Calidez, conocimiento y experiencia a tu servicio.</span>
                    </div>
                </div>
                <figure className="paraTi__slide2__rightCard">
                    <div className="paraTi__slide2__rightCard-img">
                        <img src={julian} alt="Julian Uriarte" />
                    </div>
                    <div className="paraTi__slide2__rightCard-cardBody">
                        <div className="paraTi__slide2__rightCard-cardBody-text">
                            <span className="paraTi__slide2__rightCard-cardBody-text-main poppins poppins__light"> 
                                Durante años, he aprendido sobre salud con los mejores expertos. Es mi compromiso ahora
                                compartir ese conocimiento contigo y ayudar a mejorar tu vida.
                            </span>
                            <span className="paraTi__slide2__rightCard-cardBody-text-author lexend lexend__semibold"> 
                                Julián Bryce Uriarte Ortiz
                            </span>
                            <span className="paraTi__slide2__rightCard-cardBody-text-info lexend lexend__light"> 
                                Investigador Biomédico, Entrenador, Divulgador y próximo Maestro en Ciencias de la Salud
                            </span>
                        </div>
                        <div className="paraTi__slide2__rightCard-cardBody-quote"></div>
                    </div>
                </figure>
            </div>
            
            {/* Slide 3 Pendiente*/}
            <div className="paraTi__slide3"></div>
            
            {/* Slide 4 FAQ*/}
            <div className="paraTi__slide4">
                <div className="paraTi__slide4-title lexend lexend__bold">
                    Preguntas Frecuentes
                </div>
                <div className="paraTi__slide4__cards">
                    <div className="paraTi__slide4__cards-up">
                        <div className="paraTi__slide4__cards-itemboxBlack itembox">
                            <span className="paraTi__slide4__cards-front lexend lexend__semibold">
                                ¿Para quién es la asesoría?
                            </span>
                            <div className="paraTi__slide4__cards-back poppins poppins__regular">
                                <span>Si la salud es para todos, ¡esta asesoría también!</span>
                                <span>¡Niños, adolescentes y adultos podrán recibir la mejor asesoría y así
                                cuidar y mejorar su salud!</span>
                            </div>
                        </div>
                        <div className="paraTi__slide4__cards-itemboxGreen itembox">
                            <span className="paraTi__slide4__cards-front lexend lexend__semibold">
                                ¿Cómo funcionan las 2 sesiones?
                            </span>
                            <div className="paraTi__slide4__cards-back poppins poppins__regular">
                                <span>La primera sesión es diagnóstica. Aquí nos damos una idea de los hábitos diarios.</span>
                                <span>La segunda sesión, unos días después de la primera, sirve para despejar dudas si las hubiera.</span>
                            </div>
                        </div>
                        <div className="paraTi__slide4__cards-itemboxBlack itembox">
                            <span className="paraTi__slide4__cards-front lexend lexend__semibold">
                                ¿Y si necesito seguimiento?
                            </span>
                            <div className="paraTi__slide4__cards-back poppins poppins__regular">
                                <span>¡Tambien te la podemos dar!</span>
                                <span>Evolucionamos, ajustamos y diversificamos con base en la asesoría anterior 
                                    para que sigas acercándote a tus objetivos.
                                </span>
                            </div>
                        </div>
                        <div className="paraTi__slide4__cards-itemboxGreen itembox">
                            <span className="paraTi__slide4__cards-front lexend lexend__semibold">
                                ¿Y si solo quiero asesoría en un solo rubro?
                            </span>
                            <div className="paraTi__slide4__cards-back poppins poppins__regular">
                                <span>¡Es posible! Podemos enfocar la asesoría en el aspecto deseado, con el ajuste de precio respectivo.</span>
                                <span>Esto es particularmente útil en el seguimiento pues mejorarás lo que realmente necesitas.</span>
                            </div>
                        </div>    
                    </div>
                    <div className="paraTi__slide4__cards-down">
                        <div className="paraTi__slide4__cards-itemboxGray itembox">
                            <span className="paraTi__slide4__cards-front lexend lexend__semibold">
                                ¿Hay una sesión donde se expliquen los ejercicios?
                            </span>
                            <div className="paraTi__slide4__cards-back poppins poppins__regular">
                                <span>Las rutinas de entrenamiento cuentan con una guía visual, sin embargo, si fuera necesario detallarlo más,
                                    se pueden repasar los movimientos en la sesión de dudas.
                                </span>
                            </div>
                        </div>
                        <div className="paraTi__slide4__cards-itemboxBlue itembox">
                            <span className="paraTi__slide4__cards-front lexend lexend__semibold">
                                ¿A qué te refieres con asesoría en hábitos?
                            </span>
                            <div className="paraTi__slide4__cards-back poppins poppins__regular">
                                <span>La salud no solo es comer y ejercitarse.</span>
                                <span>¡La asesoría en hábitos se enfoca en tu hidratación, hora de comida, sueño, ritmos biológicos,
                                    sedentarismo y más!
                                </span>
                            </div>
                        </div>
                        <div className="paraTi__slide4__cards-itemboxGray itembox">
                            <span className="paraTi__slide4__cards-front lexend lexend__semibold">
                                ¿Cuánto tiempo me sirve una asesoría?
                            </span>
                            <div className="paraTi__slide4__cards-back poppins poppins__regular">
                                <span>¡Todo lo que quieras!</span>
                                <span>Esta asesoría pretende ser la base de una vida saludable, asi que dura un largo tiempo.
                                    En todo caso, podemos darle variedad con una asesoría a las 6-8 semanas.
                                </span>
                            </div>
                        </div>
                        <div className="paraTi__slide4__cards-itemboxBlue itembox">
                            <span className="paraTi__slide4__cards-front lexend lexend__semibold">
                                ¿La asesoría es restrictiva o cambia mucho mi día a día?
                            </span>
                            <div className="paraTi__slide4__cards-back poppins poppins__regular">
                                <span>No en realidad. Esta consulta la basamos en tu día a día, para que las mejoras sean fáciles de asimilar.</span>
                                <span>Si hay algunas cosas urgentes que cambiar, ahí si modificamos más a fondo.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slide 5 Opiniones*/}
            <div className="paraTi__slide5"></div>

        </div>
    )
}

export default withRouter(ParaTi)
