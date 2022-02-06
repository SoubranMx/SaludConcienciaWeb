import { db, storage, auth } from "../firebase";
//Constantes
const dataInicial = {
    uploading: false,
    uploaded: false,
    loading: false,
    carousel: []
}
    //types
    const CARGANDO_IMAGENES = "CARGANDO_IMAGENES";
    const CARGA_IMAGENES_EXITO = "CARGA_IMAGENES_EXITO";
    const SUBIENDO_IMAGEN = "SUBIENDO_IMAGEN";
    const UPLOAD_IMGCAROUSEL_EXITO = "UPLOAD_IMGCAROUSEL_EXITO";
    const ERROR_SUBIENDO_IMAGEN = "ERROR_SUBIENDO_IMAGEN";
//Reducer
export default function carouselReducer(state = dataInicial, action) {
    switch(action.type){
        case CARGA_IMAGENES_EXITO:
            return {...state, loading: false, carousel: [...action.payload]}
        case CARGANDO_IMAGENES:
            return {...state, loading: true}
        case SUBIENDO_IMAGEN:
            return {...state, loading: true, uploading: true}
        
        case UPLOAD_IMGCAROUSEL_EXITO:
            return {...state, loading: false, uploading: false, carousel: [...state.carousel, action.payload]}
        
        case ERROR_SUBIENDO_IMAGEN:
            return {...state, loading: false}
        default:
            return {...state}
    }
}
//Acciones
//ELIMINAR
//AGREGAR
export const uploadImgCarouselAccion = (imagen) => async(dispatch, getState) => {
    dispatch({
        type: SUBIENDO_IMAGEN
    })

    const carouselActual = getState().carousel.carousel;
    let carouselLength = carouselActual.length;

    try {
        const imagenRef = await storage.ref().child("carousel").child(imagen.name)
        await imagenRef.put(imagen)
        const imagenURL = await imagenRef.getDownloadURL()

        // dispatch({
        //     type: UPLOAD_IMGCAROUSEL_EXITO
        // })

        const imgData = {
            imgURL: imagenURL,
            orden: carouselLength + 1
        }

        await db.collection('carousel').doc().set(imgData)

        dispatch({
            type: UPLOAD_IMGCAROUSEL_EXITO,
            payload: imgData
        })

    } catch (error) {
        dispatch({
            type: ERROR_SUBIENDO_IMAGEN
        })
        console.log(error)
    }
}

//INIT
export const cargarImgCarouselAccion = () => async(dispatch) => {
    dispatch({
        type: CARGANDO_IMAGENES
    })
    try {
        let imagenesCargadas = []
        const res = await db.collection('carousel').orderBy('orden').get();
        
        //console.log(res);
        res.forEach((doc) => {
            imagenesCargadas.push({imgURL: doc.data().imgURL, orden: doc.data().orden})
        })

        console.log(imagenesCargadas);
        dispatch({
            type: CARGA_IMAGENES_EXITO,
            payload: imagenesCargadas
        })
    } catch (error) {
        console.log(error);
    }
}