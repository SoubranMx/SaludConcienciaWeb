import { db } from "../firebase";

//Constantes

const dataInicial = {
    titulo: "",
    imgPortada: "",
    descripcion: "",
    tags: [],
    fecha: 0,
    editor: {}
}

    //types
    const LEER_BLOGS_EXITO = "LEER_BLOGS_EXITO";                // Para mostrar blogs en /blogs o admin/blogs
    const CARGAR_BLOGS_EXITO = "CARGAR_BLOGS_EXITO";            // Para cuando se carga un blog para edicion o creacion
    const GUARDAR_BLOGS_EXITO = "GUARDAR_BLOGS_EXITO";          // Para guardar blogs en firebase cuando se selecciona guardar
    const UPDATE_TO_SAVE_EXITO = "UPDATE_TO_SAVE_EXITO";        // Para updatear blogs en firebase cuando se selecciono un blog guardado
    const UPDATE_TO_POSTED_EXITO = "UPDATE_TO_POSTED_EXITO";    // Para updatear blogs en firebase cuando se selecciono un blog posteado
    const PUBLICAR_BLOG_EXITO = "PUBLICAR_BLOG_EXITO";          // Para subir un blog en firebase cuando se selecciona publicar
    const CARGAR_MAS_BLOGS = "CARGAR_MAS_BLOGS";                // Para cargar mas blogs cuando se presiona el boton "cargar mas" en /blogs o /admin/blogs
//Reducer

export default function blogsReducer (state = dataInicial, action){
    switch (action.type){
        case GUARDAR_BLOGS_EXITO:
            return {...state, }
        case LEER_BLOGS_EXITO:
            return {...state, blogs: action.payload}
        default:
            return state;
    }
}
//Acciones

export const guardarNuevoBlogAccion = () => async(dispatch, getState) => {
    try {
        dispatch({
            type: GUARDAR_BLOGS_EXITO,
        })
    } catch (error) {
        console.log(error)
    }
}

export const leerBlogsAccion = (coleccion) => async(dispatch) => {
    try {
        const res = await db.collection(coleccion).get();
        let blogs = []
        res.forEach((doc)=>{
            blogs.push({docId: doc.id, data: doc.data()})
        })
        console.log("blogs => ", blogs)
        dispatch({
            type: LEER_BLOGS_EXITO,
            payload: blogs
        })
    } catch (error) {
        console.log(error)
    }
}