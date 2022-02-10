import { db, storage, auth } from "../firebase";
//Constantes
const dataInicial = {
    uploading: false,
    uploaded: false,
    loading: undefined,
    carousel: undefined
}
    //types
    const CARGANDO_IMAGENES = "CARGANDO_IMAGENES";
    const CARGA_IMAGENES_EXITO = "CARGA_IMAGENES_EXITO";
    const SUBIENDO_IMAGEN = "SUBIENDO_IMAGEN";
    const UPLOAD_IMGCAROUSEL_EXITO = "UPLOAD_IMGCAROUSEL_EXITO";
    const ELIMINAR_IMGCAROUSEL_EXITO = "ELIMINAR_IMGCAROUSEL_EXITO";
    const ELIMINANDO_IMAGENES = "ELIMINANDO_IMAGENES";
    const ERROR_ELIMINAR_IMGCAROUSEL = "ERROR_ELIMINAR_IMGCAROSEL";
    const ERROR_SUBIENDO_IMAGEN = "ERROR_SUBIENDO_IMAGEN";
//Reducer
export default function carouselReducer(state = dataInicial, action) {
    switch(action.type){
        case CARGA_IMAGENES_EXITO:
            return {...state, loading: false, carousel: [...action.payload]}
        case CARGANDO_IMAGENES:
        case ELIMINANDO_IMAGENES:
            return {...state, loading: true}
        case SUBIENDO_IMAGEN:
            return {...state, loading: true, uploading: true}
        
        case UPLOAD_IMGCAROUSEL_EXITO:
            return {...state, loading: false, uploading: false, carousel: [...state.carousel, action.payload]}
        
        case ELIMINAR_IMGCAROUSEL_EXITO:
            return {...state, carousel: [...action.payload], loading: false}
        
        case ERROR_SUBIENDO_IMAGEN:
            return {...state, loading: false}
        default:
            return {...state}
    }
}
//Acciones
//ELIMINAR
export const eliminarImgCarouselAccion = (ordenImg) => async(dispatch, getState) =>{
    dispatch({
        type: ELIMINANDO_IMAGENES
    })
    try {
        let carouselActual = getState().carousel.carousel;
       

        //Elimindo de firestore
        /*
            const carousel = [
                {orden: 1, imgURL: "someurl1.com", name: "someName1"},
                {orden: 2, imgURL: "someurl2.com", name: "someName2"},
                {orden: 3, imgURL: "someurl3.com", name: "someName3"}
            ];

            const carouselNuevo = carousel.filter(ordered => ordered.orden !== 2)
            console.log("Carousel Nuevo => ", carouselNuevo)
        */
        //filtramos el item borrado mediante el numero ordenImg
        let carouselNuevo = carouselActual.filter(ordered => ordered.orden !== ordenImg)
        //Actualización de orden de imagenes en array redux y firestore por id
        carouselNuevo.forEach((item)=>{
            if(item.orden > ordenImg){
                item.orden = item.orden - 1;
                db.collection('carousel').doc(item.id).update({
                    orden: item.orden
                })
                // db.collection('carousel').doc(carouselActual[ordenImg].id).update({
                //     orden: item.orden
                // })
            }
        })

        //Eliminación en firestore
        //carousel del redux => Array[{imgURL: string, name: string, orden: number, id: string}]
        await db.collection('carousel').doc(carouselActual[ordenImg].id).delete();

        //referencia al archivo mediante el nombre en carousel/nombre.ext
        //console.log(carouselActual[ordenImg].name)
        const imagenRef = storage.ref().child("carousel").child(carouselActual[ordenImg].name)
        //console.log(carouselActual[ordenImg].name)
        //Eliminamos de storage
        await imagenRef.delete()
        dispatch({
            type: ELIMINAR_IMGCAROUSEL_EXITO,
            payload: carouselNuevo
        })

    } catch (error) {
        console.log("Error al eliminar imagen => ",ordenImg, error);
    }
}
//AGREGAR
export const uploadImgCarouselAccion = (imagen, uid) => async(dispatch, getState) => {
    dispatch({
        type: SUBIENDO_IMAGEN
    })

    const carouselActual = getState().carousel.carousel;
    let carouselLength = carouselActual.length;

    try {
        const imagenRef = storage.ref().child("carousel").child(imagen.name)
        await imagenRef.put(imagen)
        const imagenURL = await imagenRef.getDownloadURL()

        // dispatch({
        //     type: UPLOAD_IMGCAROUSEL_EXITO
        // })

        const imgData = {
            imgURL: imagenURL,
            orden: carouselLength,
            name: imagen.name,
            id: uid
        }

        await db.collection('carousel').doc(uid).set(imgData)

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

        res.forEach((doc) => {
            //console.log(doc);
            imagenesCargadas.push({imgURL: doc.data().imgURL, orden: doc.data().orden, name: doc.data().name, id: doc.id})
        })

        //console.log(imagenesCargadas);
        dispatch({
            type: CARGA_IMAGENES_EXITO,
            payload: imagenesCargadas
        })
    } catch (error) {
        console.log(error);
    }
}