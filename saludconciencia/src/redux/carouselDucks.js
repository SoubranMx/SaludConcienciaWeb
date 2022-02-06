import { db, storage, auth } from "../firebase";
//Constantes
const dataInicial = {
    uploading: false,
    uploaded: false,
    loading: false,
    carousel: [{}]
}
    //types
    const CARGANDO_IMAGENES = "CARGANDO_IMAGENES";
    const SUBIENDO_IMAGEN = "SUBIENDO_IMAGEN";
    const UPLOAD_IMGCAROUSEL_EXITO = "UPLOAD_IMGCAROUSEL_EXITO";
    const ERROR_SUBIENDO_IMAGEN = "ERROR_SUBIENDO_IMAGEN";
//Reducer
export default function carouselReducer(state = dataInicial, action) {
    switch(action.type){
        case CARGANDO_IMAGENES:
            return {...state, loading: true}
        
        case UPLOAD_IMGCAROUSEL_EXITO:
            return {...state, loading: false}
        
        case ERROR_SUBIENDO_IMAGEN:
            return {...state, loading: false}
        default:
            return {...state}
    }
}
//Acciones
export const uploadImgCarouselAccion = (imagen) => async(dispatch, getState) => {
    dispatch({
        type: CARGANDO_IMAGENES
    })

    const carouselActual = getState().carousel.carousel;
    let carouselLength = carouselActual.length;
    carouselLength++;

    try {
        const imagenRef = await storage.ref().child("carousel").child(imagen.name)
        await imagenRef.put(imagen)
        const imagenURL = await imagenRef.getDownloadURL()

        dispatch({
            type: UPLOAD_IMGCAROUSEL_EXITO
        })
    } catch (error) {
        dispatch({
            type: ERROR_SUBIENDO_IMAGEN
        })
        console.log(error)
    }
}

