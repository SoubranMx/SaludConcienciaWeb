import React, { useEffect, useRef, useState } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { auth } from '../../firebase'

import slide1_img from './img/paraTi_portada.jpg';
import julian from './img/paraTi_Julian.jpg';
import '../../sass/_paraTi.scss';
//Imagenes Reviews
import anayansiPhoto from './img/Anayansy-01x500.jpg'
import danielaPhoto from './img/Daniela-01x500.jpg'
import eduardoPhoto from './img/Eduardo-01x500.jpg'
import mariaJosePhoto from './img/MariaJose-01x500.jpg'
import soledadPhoto from './img/Soledad-01x500.jpg'

//slide3
import slide3_1 from './img/diap3_1.jpg'
import slide3_2 from './img/diap3_2.jpg'
import slide3_3 from './img/diap3_3.jpg'

const ParaTi = (props) => {
    const paraTiTop = useRef(null);
    const [cargado, setCargado] = useState(false)

    useEffect(()=>{
        if(auth.currentUser){
            props.history.push('/admin')
        }
    },[props.history])

    useEffect(()=>{
        setCargado(true)
    },[])
    
    useEffect(()=>{
        const scrollArriba = () => {
            console.log("why not work => ", paraTiTop)
            paraTiTop.current.scrollIntoView({behavior: 'smooth', block: 'start'})
            //window.scrollTo(0,0)
        }
        cargado === true && scrollArriba()
        
    },[cargado])

    return cargado === true ? (
        <div className="paraTi__wrapper">
            {/* Slide 1 Agendar*/}
            <div className="paraTi__slide1" ref={paraTiTop}>
                <div className="paraTi__slide1__textleft">
                    <div className="paraTi__slide1__textleft-up lexend lexend__bold">
                        <span>Una asesoría humana y confiable para mejorar tu salud</span>
                    </div>
                    <div className="paraTi__slide1__textleft-mid poppins poppins__medium">
                        <span>Alimentación, Ejercicio y Hábitos en un sólo lugar.</span>
                        <span>Una experiencia única te ayuda a visibilizar y mejorar tu día a día.</span>
                    </div>
                    <Link to="/contacto">
                        <button className="paraTi__slide1__textleft-bot poppins poppins__semibold">
                            <span>Agenda tu asesoría</span>
                        </button>
                    </Link>
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
            
            {/* Slide 3 Cards Presentacion*/}
            <div className="paraTi__slide3">
                <div className="paraTi__slide3__card">
                    <figure className="paraTi__slide3__card-fig">
                        <img className="paraTi__slide3__card-img" src={slide3_1} alt="Chica revisando laptop" />
                    </figure>
                    <p className="paraTi__slide3__card-titleGreen lexend lexend__bold">100% Online</p>
                    <p className="paraTi__slide3__card-info poppins poppins__medium">
                        Obtén tu asesoría desde casa, oficina o cualquier otro lugar con los horarios más accesibles.
                    </p>
                </div>
                <div className="paraTi__slide3__card">
                    <figure className="paraTi__slide3__card-fig">
                        <img className="paraTi__slide3__card-img" src={slide3_2} alt="Observando plotters" />
                    </figure>
                    <p className="paraTi__slide3__card-titleBlack lexend lexend__bold">100% Integral</p>
                    <p className="paraTi__slide3__card-info poppins poppins__medium">
                        Rutina de ejercicio, dieta con conteo calórico y resumen de hábitos de salud completamente personalizadas.
                    </p>
                </div>
                <div className="paraTi__slide3__card">
                    <figure className="paraTi__slide3__card-fig">
                        <img className="paraTi__slide3__card-img" src={slide3_3} alt="Chica con una idea" />
                    </figure>
                    <p className="paraTi__slide3__card-titleBlue lexend lexend__bold">100% Para Ti</p>
                    <p className="paraTi__slide3__card-info poppins poppins__medium">
                        Solucionaremos todas tus dudas e inquietudes gracias a nuestra estructura única de asesoría, dada en 2 sesiones.
                    </p>
                </div>
            </div>
            
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
            <div className="paraTi__slide5">
                <div className="paraTi__slide5__title lexend lexend__bold">¿Qué opinan de la Asesoría Integral en Salud?</div>
                <div className="paraTi__slide5-cards">
                    <div className="paraTi__slide5-cards-top">
                        <div className="reviewCard">
                            <div className="reviewCard__top">
                                <img src={anayansiPhoto} alt="Cliente" className="reviewCard__top-img"/>
                                <span className="reviewCard__top-name poppins poppins__semibold">Anayansi, 35</span>
                                <span className="reviewCard__top-occupation poppins poppins__regular">Ejecutiva</span>
                                <div className="reviewCard__top-separator"></div>
                            </div>
                            <span className="reviewCard-review lexend lexend__semibold">
                                "Nadie nunca me había dicho de la importancia de los horarios.
                                Nadie me había explicado el estrés al que someto mi cuerpo [...] y porque a 
                                pesar de yo creer que cuidaba mi alimentación estaba teniendo resultados contraproducentes."
                            </span>
                        </div>
                        <div className="reviewCard">
                            <div className="reviewCard__top">
                                <img src={soledadPhoto} alt="Cliente" className="reviewCard__top-img"/>
                                <span className="reviewCard__top-name poppins poppins__semibold">Soledad, 50</span>
                                <span className="reviewCard__top-occupation poppins poppins__regular">Agente de Seguros</span>
                                <div className="reviewCard__top-separator"></div>
                            </div>
                            <span className="reviewCard-review lexend lexend__semibold">
                                "La asesoría es muy buena. Es sumamente sencilla y práctica con resultados prácticamente 
                                desde un inicio ya que concientiza el cambio de hábitos de forma gradual y saludable, haciendo de esto 
                                un cambio total de vida."
                            </span>
                        </div>
                        <div className="reviewCard">
                            <div className="reviewCard__top">
                                <img src={mariaJosePhoto} alt="Cliente" className="reviewCard__top-img"/>
                                <span className="reviewCard__top-name poppins poppins__semibold">María José, 25</span>
                                <span className="reviewCard__top-occupation poppins poppins__regular">Doctora en Neurobiología</span>
                                <div className="reviewCard__top-separator"></div>
                            </div>
                            <span className="reviewCard-review lexend lexend__semibold">
                                "Me gustó entender cómo funciona mi cuerpo y con base en eso comprender cómo las rutinas 
                                de ejercicio, la dieta y los hábitos de sueño me ayudan a llegar a mis objetivos."
                            </span>
                        </div>
                    </div>
                    <div className="paraTi__slide5-cards-bot">
                        <div className="reviewCard">
                            <div className="reviewCard__top">
                                <img src={danielaPhoto} alt="Cliente" className="reviewCard__top-img"/>
                                <span className="reviewCard__top-name poppins poppins__semibold">Daniela, 24</span>
                                <span className="reviewCard__top-occupation poppins poppins__regular">Médico Cirujano</span>
                                <div className="reviewCard__top-separator"></div>
                            </div>
                            <span className="reviewCard-review lexend lexend__semibold">
                                "Es personalizada. No se siente como un plan genérico, realmente se nota la individualización. 
                                Aparte siempre está pendiente de las dudas."
                            </span>
                        </div>
                        <div className="reviewCard">
                            <div className="reviewCard__top">
                                <img src={eduardoPhoto} alt="Cliente" className="reviewCard__top-img"/>
                                <span className="reviewCard__top-name poppins poppins__semibold">Eduardo, 25</span>
                                <span className="reviewCard__top-occupation poppins poppins__regular">Arquitecto</span>
                                <div className="reviewCard__top-separator"></div>
                            </div>
                            <span className="reviewCard-review lexend lexend__semibold">
                                "Me gusta mucho la flexibilidad en cuanto a las rutinas de ejercicio y que éstas dependen 
                                de dónde podemos hacer ejercicio y con qué."
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className="container d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
            <div className="spinner-border" role="status" style={{width: "3rem", height: "3rem"}}>
                <span className="visually-hidden">Cargando...</span>
            </div>
        </div>
    )
}

export default withRouter(ParaTi)
