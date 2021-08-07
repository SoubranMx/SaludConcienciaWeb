/**
 * Documentación para el ducks de Administración
 * @module AdminDucks 
 */
import { auth, db, storage } from "../firebase"
//data inicial
//esta data inicial no cambia, lo que cambia es el state
/**
 * @type {{loading: boolean, activo: boolean}} - State Inicial
 */
const dataInicial = {
    loading: false,
    activo: false
}
    //types
    /**
     * @type {String} loading - desactiva botones cuando se esta logeando
     */
    const LOADING_LOGIN = "LOADING_LOGIN"
    const LOGIN_ERROR = "LOGIN_ERROR"
    const LOGIN_EXITO = "LOGIN_EXITO"
    const LOGOUT_EXITO = "LOGOUT_EXITO"
    const ACTUALIZA_IMAGEN_EXITO = "ACTUALIZA_IMAGEN_EXITO"
//reducer
export default function adminReducer(state = dataInicial, action) {
    switch(action.type){
        case LOADING_LOGIN:
            return {...state, loading: true}
        case LOGIN_ERROR:
            return {...dataInicial}
        case LOGIN_EXITO:
            return {...state, loading: false, activo: true, user: action.payload}
        case LOGOUT_EXITO:
            return {...dataInicial}
        case ACTUALIZA_IMAGEN_EXITO:
            return {...state, loading: false, activo: true, user: action.payload}
        default:
            return {...state}
    }
}
//acciones

export const loginAdminAccion = (email, password) => async (dispatch, getState) => {
    
    //Para deshabilitar botones cuando se dispara la accion loginAdminAccion
    dispatch({
        type: LOADING_LOGIN
    })

    try {
        const login = await auth.signInWithEmailAndPassword(email, password)
        //login deberia regresar un catch si el usuario no existe en auth
        //por lo que, en teoria, esto de aca no tengo que configurar nada.
        console.log("login => ", login)
        const usuario = {
            uid: login.user.uid,
            email: login.user.email,
            displayName: "Julián Uriarte",
            photoUrl: ""
        }
        const usuarioDB = await db.collection('admin').doc(usuario.email).get()

        if(usuarioDB.exists){
            //Existe usuario en BD y en auth
            dispatch({
                type: LOGIN_EXITO,
                payload: usuarioDB.data()
            })
            localStorage.setItem('admin',JSON.stringify(usuarioDB.data()))
        } else {
            //No existe en BD, pero si en auth
            await db.collection('admin').doc(usuario.email).set(usuario)
            dispatch({
                type: LOGIN_EXITO,
                payload: usuario
            })
            localStorage.setItem('admin',JSON.stringify(usuario))
        }
        
    } catch (error) {
        console.log("Error al login: ", error)
        dispatch({
            type: LOGIN_ERROR
        })
    }
}

export const leerAdminActivoAccion = () => (dispatch, getState) => {
    const res = localStorage.getItem('admin')
    if(res) {
        dispatch({
            type: LOGIN_EXITO,
            payload: JSON.parse(res)
        })
    }
}

export const logoutAdminAccion = () => async (dispatch) => {
    auth.signOut(); //signOut de firebase
    localStorage.removeItem('admin')    //eliminar usuario del itemStorage para "cerrar sesion" localmente
    dispatch({
        type: LOGOUT_EXITO
    })

}

export const editarFotoPerfilAccion = (imagenEditada) => async(dispatch, getState) => {
    dispatch({
        type: LOADING_LOGIN
    })

    const {user} = getState().admin;

    try {
        const imagenRef = await storage.ref().child('profile_images').child(user.email).child('foto_perfil')
        await imagenRef.put(imagenEditada)
        const imagenURL = await imagenRef.getDownloadURL()  //Obtiene la URL donde se guardó
        await db.collection('admin').doc(user.email).update({
            photoUrl: imagenURL
        })//Actualiza la url del foto

        const usuario = {
            ...user,
            photoUrl: imagenURL
        }

        dispatch({
            type: ACTUALIZA_IMAGEN_EXITO,
            payload: usuario
        })

        localStorage.setItem('admin', JSON.stringify(usuario))

    } catch (error) {
        console.log(error)
    }

}