import { auth, firebase } from "../firebase"
//data inicial
//esta data inicial no cambia, lo que cambia es el state
const dataInicial = {
    loading: false,
    activo: false
}
    //types
    const LOADING_LOGIN = "LOADING_LOGIN"
    const LOGIN_ERROR = "LOGIN_ERROR"
    const LOGIN_EXITO = "LOGIN_EXITO"
    const LOGOUT_EXITO = "LOGOUT_EXITO"
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
        dispatch({
            type: LOGIN_EXITO,
            payload: {
                uid: login.user.uid,
                email: login.user.email
            }
        })
        localStorage.setItem('admin',JSON.stringify({
            uid: login.user.uid,
            email: login.user.email
        }))
        
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