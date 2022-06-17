import { db, storage } from "../firebase"

const dataInicial = {
    loading: false,
    uploading: false,
    reload: false,
    autoresExistentes: [],
    autoresDeBlog: []
}
    //types
    const AGREGAR_AUTOR_EXITO = "AGREGAR_AUTOR_EXITO"
    const LEER_AUTORES_EXISTENTES_EXITO = "LEER_AUTORES_EXISTENTES_EXITO"
    const LEER_AUTORES_BLOG_EXITO = "LEER_AUTORES_BLOG_EXITO"
    const LOADING_AUTORES = "LOADING_AUTORES"
    const UPLOAD_IMG_AUTOR_EXITO = "UPLOAD_IMG_AUTOR_EXITO"
    const SUBIENDO_IMAGEN = "SUBIENDO_IMAGEN"
    const ERROR_SUBIENDO_IMAGEN = "ERROR_SUBIENDO_IMAGEN"
    const RELOAD_AUTORES = "RELOAD_AUTORES"
    const RELOAD_AUTORES_FIN = "RELOAD_AUTORES_FIN"
    const ELIMINANDO_AUTOR = "ELIMINANDO_AUTOR"
    const ELIMINANDO_AUTOR_EXITO = "ELIMINANDO_AUTOR_EXITO"
    const UPDATING_AUTOR = "UPDATING_AUTOR"
    const UPDATE_AUTOR_EXITO = "UPDATE_AUTOR_EXITO"
    const RELOAD_PAGE = "RELOAD_PAGE"
    const RELOAD_PAGE_FIN = "RELOAD_PAGE_FIN"
    
//reducer
export default function autoresReducer(state = dataInicial, action) {
    switch(action.type){
        case AGREGAR_AUTOR_EXITO:
            return {...state, autoresExistentes: [...state.autoresExistentes, action.payload]}
        case LEER_AUTORES_BLOG_EXITO:
            return {...state, autoresDeBlog: [...action.payload]}
        case LEER_AUTORES_EXISTENTES_EXITO:
            return {...state, autoresExistentes: [...action.payload], loading: false}
        case SUBIENDO_IMAGEN:
            return {...state, uploading: true}
        case UPLOAD_IMG_AUTOR_EXITO:
            return {...state, uploading: false}
        case RELOAD_AUTORES:
            return {...state, reload: true, autoresDeBlog: []}
        case RELOAD_AUTORES_FIN:
            return {...state, reload: false}
        case ELIMINANDO_AUTOR_EXITO:
            return {...state, loading: false, autoresExistentes: [...action.payload]}

        case UPDATE_AUTOR_EXITO:
            return {...state, loading: false, autoresExistentes: [...action.payload]}
        case RELOAD_PAGE:
            return {...state, reload: true}
        case RELOAD_PAGE_FIN:
            return{...state, reload: false}
        //Estado de carga o load
        case UPDATING_AUTOR:
        case LOADING_AUTORES:
        case ELIMINANDO_AUTOR:
            return {...state, loading: true}
        default:
            return {...state}
    }
}
//acciones

export const agregarAutoresAccion = (email, displayName, imagen) => async (dispatch, getState) => {
    dispatch({
        type: SUBIENDO_IMAGEN
    })
    let imgName, imgType, imagenURL;
    try {
        if(imagen.type === "image/png")
            imgType = '.png'
        if(imagen.type === "image/jpg" || imagen.type === "image/jpeg")
            imgType = '.jpg'
        
        imgName = 'foto_perfil' + imgType
        const imagenRef = storage.ref().child("profile_images").child(email).child(imgName)
        await imagenRef.put(imagen)
        imagenURL = await imagenRef.getDownloadURL()

        dispatch({
            type: UPLOAD_IMG_AUTOR_EXITO,
            payload: imagenURL
        })
    } catch (error) {
        dispatch({
            type: ERROR_SUBIENDO_IMAGEN
        })
        console.log(error)
    }

    const autorOBJ = {
        name: displayName,
        email: email,
        photoUrl: imagenURL
    }
    try {
        await db.collection('autores').doc(email).set(autorOBJ)
        dispatch({
            type: AGREGAR_AUTOR_EXITO,
            payload: autorOBJ
        })
        //deberia tener los autores anteriores y el nuevo
        const autoresNuevo = getState().autores.autoresExistentes
        
        localStorage.setItem('autores', JSON.stringify(autoresNuevo))
        // dispatch({
        //     type: RELOAD_AUTORES
        // })
    } catch (error) {
        console.log("agregarAutores errormsg => ", error)
    }
}

/**
 * leerAutoresAccion
 * Esta función lee autores existentes para mostrarse en /admin/newUsers y probablemente en el comp autores al crear Blogs.
 * 
 * Carga de localStorage el item autores, si no existe, llama a Firestore y lo carga en lsAutores
 * y se hace el dispatch con autorDB en store.autores.autoresExistentes.
 */
export const leerAutoresAccion = () => async (dispatch) => {
    try {
        //const lsAutores = localStorage.getItem('autores')
        let autorDB = []
        dispatch({
            type: LOADING_AUTORES
        })

        //console.log("leerAutores else => ")
        const res = await db.collection('autores').get();
        res.forEach((doc) => {
            autorDB.push({email: doc.id, name: doc.data().name, photoURL: doc.data().photoUrl})
        })
        //console.log("leerAutores autorDB => ", autorDB)

        //Update> nunca quitaba localStorage, so ... si habian mas autores, no se encontraban en el deploy.
        //Guardamos en LS para no tener que leer a cada rato autores de Firestore
        //localStorage.setItem('autores', JSON.stringify(autorDB))

        dispatch({
            type: LEER_AUTORES_EXISTENTES_EXITO,
            payload: autorDB
        })
    } catch (error) {
        console.log("leerAutores errormsg => ", error)
    }
}

export const leerAutoresEditablesAccion = () => async (dispatch) => {
    try {
        let autorDB = []
        dispatch({
            type: LOADING_AUTORES
        })

        const res = await db.collection('autores').get();
        res.forEach((doc) => {
            if(doc.data().name !== 'Julián Uriarte')
                autorDB.push({email: doc.id, name: doc.data().name, photoURL: doc.data().photoUrl})
        })
        
        dispatch({
            type: LEER_AUTORES_EXISTENTES_EXITO,
            payload: autorDB
        })
    } catch (error) {
        console.log("leerAutores errormsg => ", error)
    }
}


export const uploadImgAutorAccion = (email, imagen) => async(dispatch, getState) => {
    dispatch({
        type: SUBIENDO_IMAGEN
    })
    let imgName, imgType, imagenURL;
    let autoresArray = []
    let autorNuevo = []
    try {
        if(imagen.type === "image/png")
            imgType = '.png'
        if(imagen.type === "image/jpg" || imagen.type === "image/jpeg")
            imgType = '.jpg'
        
        imgName = 'foto_perfil' + imgType
        const imagenRef = storage.ref().child("profile_images").child(email).child(imgName)
        await imagenRef.put(imagen)
        imagenURL = await imagenRef.getDownloadURL()

        autoresArray = getState().autores.autoresExistentes.filter(autor => autor.email !== email)
        autorNuevo = getState().autores.autoresExistentes.filter(autor => autor.email === email)
        autoresArray.push({
            email: autorNuevo[0].email,
            name: autorNuevo[0].name,
            photoURL: imagenURL
        })

        dispatch({
            type: UPLOAD_IMG_AUTOR_EXITO,
            payload: autoresArray
        })
    } catch (error) {
        dispatch({
            type: ERROR_SUBIENDO_IMAGEN
        })
        console.log(error)
    }
}

export const reloadAutoresAccion = () => (dispatch) => {
    dispatch({
        type: RELOAD_AUTORES_FIN
    })
}

export const leerAutoresBlogAccion = (autoresEmail) => (dispatch, getState) => {
    /**
     * autoresEmail deberia tener un array con los emails de los que fueron autores del blog
     * tipo autoresEmail = ["saludconciencia@outlook.es", "uriel_bee15@hotmail.com"] etc
     * 
     * autores debe tener un array de objetos 
     * {
     *  email: "email.com",
     *  name: "Nombre Autor",
     *  photoURL: "url.com"
     * }
     */
    let autores = getState().autores.autoresExistentes;
    let autoresHelper = {}
    let autoresDelBlog = []
    autoresEmail.forEach((emailRecibido, index) => {
        autoresHelper = autores.find(autor => autor.email === emailRecibido)
        autoresDelBlog.push(autoresHelper)
    })

    dispatch({
        type: LEER_AUTORES_BLOG_EXITO,
        payload: autoresDelBlog
    })
    
}

export const clearAutoresBlogAccion = () => (dispatch) => {
    dispatch({
        type: RELOAD_AUTORES
    })
}

export const eliminarAutorAccion = (email) => async(dispatch, getState) => {
    try {
        dispatch({
            type: ELIMINANDO_AUTOR
        })

        //Eliminar de la coleccion
        await db.collection("autores").doc(email).delete()
        //Eliminar foto
        await storage.ref().child('profile_images').child(email).child('foto_perfil.jpg').delete()

        //Eliminar de autores existentes state
        let newAutorDB = []
        newAutorDB = getState().autores.autoresExistentes.filter((e)=>{return e.email!==email})
        //console.log(newAutorDB)

        dispatch({
            type: ELIMINANDO_AUTOR_EXITO,
            payload: newAutorDB
        })

    } catch (error) {
        console.log("Error al eliminar autor => ", error)
    }
}

//UPDATES
export const updateAuthorNameAccion = (email, nombre) => async (dispatch, getState) => {
    try {
        dispatch({
            type: UPDATING_AUTOR
        })
        await db.collection('autores').doc(email).update({
            name: nombre
        })

        let autoresArray = [], autorNuevo = []
        autoresArray = getState().autores.autoresExistentes.filter(autor => autor.email !== email)
        autorNuevo = getState().autores.autoresExistentes.filter(autor => autor.email === email)
        autoresArray.push({
            email: autorNuevo[0].email,
            name: nombre,
            photoURL: autorNuevo[0].photoUrl
        })
        dispatch({
            type: UPDATE_AUTOR_EXITO,
            payload: autoresArray
        })

    } catch (error) {
        console.log(error)
    }
}


export const updateAuthorImgAccion = (email, imagenNueva) => async(dispatch, getState) => {
    
    try {
        //Eliminar foto anterior
        await storage.ref().child('profile_images').child(email).child('foto_perfil.jpg').delete()
        dispatch({
            type: UPDATING_AUTOR
        })
        //Subir nueva foto
        //uploadImgAutorAccion(email, imagenNueva)
        dispatch({
            type: SUBIENDO_IMAGEN
        })
        let imgName, imgType, imagenURL;
        let autoresArray = []
        let autorNuevo = []
        if(imagenNueva.type === "image/png")
            imgType = '.png'
        if(imagenNueva.type === "image/jpg" || imagenNueva.type === "image/jpeg")
            imgType = '.jpg'
        
        imgName = 'foto_perfil' + imgType
        const imagenRef = storage.ref().child("profile_images").child(email).child(imgName)
        await imagenRef.put(imagenNueva)
        imagenURL = await imagenRef.getDownloadURL()
        console.log(imagenURL)

        autoresArray = getState().autores.autoresExistentes.filter(autor => autor.email !== email)
        autorNuevo = getState().autores.autoresExistentes.filter(autor => autor.email === email)
        autoresArray.push({
            email: autorNuevo[0].email,
            name: autorNuevo[0].name,
            photoURL: imagenURL
        })

        dispatch({
            type: UPLOAD_IMG_AUTOR_EXITO,
            payload: autoresArray
        })

        //Actualizar Firestore
        await db.collection('autores').doc(email).update({
            photoUrl: imagenURL
        })
        //Despachar
        dispatch({
            type: UPDATE_AUTOR_EXITO
        })

    } catch(error){
        console.log(error)
    }

}

export const updateAuthorRRSS = (email, rrssNuevas) => async(dispatch) => {

}

//Reload page
export const reloadAuthorPage = () => (dispatch) => {
    dispatch({
        type: RELOAD_AUTORES
    })

    dispatch({
        type: RELOAD_AUTORES_FIN
    })
}