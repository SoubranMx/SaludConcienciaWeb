import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import 'moment/locale/es-mx';
import {BsTrash} from 'react-icons/bs';

import '../../sass/_mensajes.scss';
import { leerMensajeAccion } from '../../redux/contactoDucks';

const Mensajes = () => {
    const mensajesDB = useSelector(store => store.contacto.mensajes)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(leerMensajeAccion())
    },[])

    const borrarMensaje = (id) => {

    }

    return (
        <div className="mensajeWrapper">
            <h1 className="mensajesTitle poppins poppins__semibold">Mensajes</h1>
            <div className="mensajesCards">
                {console.log("mensajesDB => ", mensajesDB)}
                 {
                     mensajesDB !== undefined ? (
                         mensajesDB.length > 0 ? (
                            <>
                                {
                                    mensajesDB.map(loadedMsg => (
                                        <>
                                            <div className="mensajeCard" id={loadedMsg.id}>
                                                <div className="mensajeCardTitle">
                                                    <div className="mensajeCardTitle__name">{loadedMsg.data.nombre}</div>
                                                    <div className="mensajeCardTitle__date">{moment(loadedMsg.data.fecha).format("dddd, DD[/]MM[/]YY")}</div>
                                                    <button 
                                                        className="btn btn-danger"
                                                        onClick={()=>{borrarMensaje(loadedMsg.id)}}
                                                    >
                                                        <BsTrash />
                                                    </button>
                                                </div>
                                                <div className="mensajeCardInfo">
                                                    <p className="mensajeCardInfo-email">
                                                        <span>Email:</span>
                                                        <span>{loadedMsg.data.email}</span>
                                                    </p>
                                                    <p className="mensajeCardInfo-tel">
                                                        <span>Teléfono:</span>
                                                        <span>{loadedMsg.data.tel}</span>
                                                    </p>
                                                    <p className="mensajeCardInfo-mensaje">
                                                        <span>Mensaje:</span>
                                                        <span>{loadedMsg.data.mensaje}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </>
                                    ))
                                }
                            </>
                         ) : (
                            <>
                                <h2>No hay mensajes a mostrar hoy.</h2>
                                <h2>¡Vuelve en un rato!</h2>
                            </>
                         )
                     ) : (
                        <div className="container d-flex justify-content-center align-items-center" style={{height: "100%"}}>
                            <div className="spinner-border" role="status" style={{width: "3rem", height: "3rem"}}>
                                <span className="visually-hidden">Cargando...</span>
                            </div>
                        </div>
                     )
                 }
            </div>
        </div>
    )
}

export default Mensajes
