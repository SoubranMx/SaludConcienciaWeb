import { db } from "../firebase"

const dataInicial = {
    loading: false,
    enviado: false
}
    //types
    const ENVIANDO_MENSAJE = "ENVIANDO_MENSAJE"
    const NOMBRE_ERROR = "NOMBRE_ERROR"
    const EMAIL_ERROR = "EMAIL_ERROR"
    const MENSAJE_ERROR = "MENSAJE_ERROR"
    const ENVIAR_MENSAJE_EXITO = "ENVIAR_MENSAJE_EXITO"
    const LEER_MENSAJES_EXITO = "LEER_MENSAJES_EXITO"
    const LEER_MENSAJES_ERROR = "LEER_MENSAJES_ERROR"
    const RESET_MENSAJE_EXITO = "RESET_MENSAJE"
    const ELIMINAR_MENSAJE_EXITO = "ELIMINAR_MENSAJE_EXITO"
    
//reducer
export default function contactoReducer(state = dataInicial, action) {
    switch(action.type){
        case ENVIANDO_MENSAJE:
            return {...state, loading: true}
        case ENVIAR_MENSAJE_EXITO:
            return {...state, enviado: true, loading: false}
        case NOMBRE_ERROR:
        case EMAIL_ERROR:
        case MENSAJE_ERROR:
            return {...state, error: {}}
        case RESET_MENSAJE_EXITO:
            return {...state, loading: false, enviado: false};
        case LEER_MENSAJES_EXITO:
            return {...state, mensajes: action.payload}
        case LEER_MENSAJES_ERROR:
            return {...state, error: action.payload}
        case ELIMINAR_MENSAJE_EXITO:
            return {...state}
        default:
            return {...state}
    }
}
//acciones
 
export const enviarMensajeAccion = (nombre, email, telefono, msg, fecha) => async (dispatch) => {
    dispatch({
        type: ENVIANDO_MENSAJE
    })

    const mensajeObj = {
        nombre: nombre,
        email: email,
        tel: telefono,
        mensaje: msg,
        fecha: fecha
    }

    try {
        await db.collection('mensajes').doc().set(mensajeObj)
        setTimeout(()=>{
            dispatch({
                type: ENVIAR_MENSAJE_EXITO
            })
        }, 2000)
    } catch (error) {
        console.log("Error al enviar => ", error)
        dispatch({
            type: NOMBRE_ERROR
        })
    }
}

export const leerMensajeAccion = () => async (dispatch) => {
    try {
        let mensajesCargados = [];
        const res = await db.collection('mensajes').orderBy('fecha','desc').get();
        res.forEach((doc)=>{
            mensajesCargados.push({id: doc.id, data: doc.data()})
        })

        dispatch({
            type: LEER_MENSAJES_EXITO,
            payload: mensajesCargados
        })
    } catch (error) {
        console.log("Error al leer mensajes => ", error)
        dispatch({
            type: LEER_MENSAJES_ERROR
        })
    }
}

export const eliminarMensajeAccion = (id) => async (dispatch) => {
    try {
        await db.collection('mensajes').doc(id).delete()
        dispatch({
            type: ELIMINAR_MENSAJE_EXITO
        })
    } catch (error) {
        console.log("Eliminar mensaje error => ", error)
    }
}

export const resetMensajeAccion = () => dispatch => {
    dispatch({
        type: RESET_MENSAJE_EXITO
    })
}