import React, {useEffect, useRef, useState} from 'react'
import { withRouter } from 'react-router-dom'

import { auth } from '../../firebase'
import '../../sass/_inicio.scss'

const Inicio = (props) => {
    const refCont1 = useRef(null)
    const refCont2 = useRef(null)
    const refCont3 = useRef(null)
    const refCont4 = useRef(null)
    const refCont5 = useRef(null)

    //const wheel = useMouseWheel()

    useEffect(()=>{
        if(auth.currentUser){
            props.history.push('/admin')
        }
    },[props.history])

    
    return (
        <div className="index__container">
            <div className="index__slide" ref={refCont1} style={{backgroundColor: 'aquamarine'}}>
                <h1>Salud en un solo lugar</h1>
            </div>
            <div className="index__slide" ref={refCont2} style={{backgroundColor: 'bisque'}}>
                <h1>Ciencia para tus oidos</h1>
            </div>
            <div className="index__slide" ref={refCont3} style={{backgroundColor: 'cadetblue'}}>
                <h1>Entrenamiento</h1>
            </div>
            <div className="index__slide" ref={refCont4} style={{backgroundColor: 'salmon'}}>
                <h1>Cuidarte</h1>
            </div>
            <div className="index__slide" ref={refCont5} style={{backgroundColor: 'yellowgreen'}}>
                <h1>Cards ayuda</h1>
            </div>
            <div className="index__slide" ref={refCont5} style={{backgroundColor: 'tomato'}}>
                <h1>Asesoria integral</h1>
            </div>
            <div className="index__slide" ref={refCont5} style={{backgroundColor: 'violet'}}>
                <h1>Whatsapp</h1>
            </div>
            <div className="index__slide" ref={refCont5} style={{backgroundColor: 'azure'}}>
                <h1>Articulos</h1>
            </div>
            <div className="index__slide" ref={refCont5} style={{backgroundColor: 'chocolate'}}>
                <h1>Contactanos</h1>
            </div>
            <div className="index__slide" ref={refCont5} style={{backgroundColor: 'darksalmon'}}>
                <h1>Gato</h1>
            </div>
        </div>
    )
}

export default withRouter(Inicio)
