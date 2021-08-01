import { db, db2 } from "../firebase";

//import { collection, query, orderBy, startAfter, limit, getDocs } from "../firebase";

let first, documentSnapshots, lastVisible, next;
let limite = 10;

// Query the first page of docs
// let first = query(collection(db, "cities"), orderBy("population"), limit(25));
// let documentSnapshots = await getDocs(first);

// // Get the last visible document
// let lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
// console.log("last", lastVisible);

// // Construct a new query starting at this document,
// // get the next 25 cities.
// let next = query(collection(db, "cities"),
//     orderBy("population"),
//     startAfter(lastVisible),
//     limit(25));

//Constantes

const dataInicial = {
    blog: {
        uid: "",
        autor: "Julián Uriarte",
        titulo: "",
        descripcion: "",
        tags: [],
        imgPortada: "",
        fecha: 0,
        editor: {}
    }
}

    //types
    const LEER_BLOGS_EXITO = "LEER_BLOGS_EXITO";                // Para mostrar blogs en /blogs o admin/blogs
    const LEER_BLOGS_PUBLICAR_EXITO = "LEER_BLOGS_PUBLICAR_EXITO";                // Para mostrar blogs en /blogs o admin/blogs
    const CARGAR_BLOGS_EXITO = "CARGAR_BLOGS_EXITO";            // Para cuando se carga un blog para edicion o creacion
    const GUARDAR_BLOGS_EXITO = "GUARDAR_BLOGS_EXITO";          // Para guardar blogs en firebase cuando se selecciona guardar
    const UPDATE_TO_SAVE_EXITO = "UPDATE_TO_SAVE_EXITO";        // Para updatear blogs en firebase cuando se selecciono un blog guardado
    const UPDATE_TO_POSTED_EXITO = "UPDATE_TO_POSTED_EXITO";    // Para updatear blogs en firebase cuando se selecciono un blog posteado
    const PUBLICAR_BLOG_EXITO = "PUBLICAR_BLOG_EXITO";          // Para subir un blog en firebase cuando se selecciona publicar
    const CARGAR_MAS_BLOGS = "CARGAR_MAS_BLOGS";                // Para cargar mas blogs cuando se presiona el boton "cargar mas" en /blogs o /admin/blogs
    const CARGAR_BLOG_INFO_UPDATE_SAVED = "CARGAR_BLOG_INFO_UPDATE_SAVED";  // Para cuando se manda a llamar Editar en guardados
    const CLEAR_DATA = "CLEAR_DATA"

    const UPDATE_TITULO_EXITO = "UPDATE_TITULO_EXITO";
    //const UPDATE_AUTOR_EXITO = "UPDATE_AUTOR_EXITO";
    const UPDATE_DESCRIPCION_EXITO = "UPDATE_DESCRIPCION_EXITO";
    const UPDATE_TAGS_EXITO = "UPDATE_TAGS_EXITO";
    const UPDATE_IMAGEN_EXITO = "UPDATE_IMAGEN_EXITO";
    const UPDATE_FECHA_EXITO = "UPDATE_FECHA_EXITO";
    const UPDATE_EDITOR_EXITO = "UPDATE_EDITOR_EXITO";
    const UPDATE_UID_EXITO = "UPDATE_UID_EXITO";
    
//Reducer
export default function blogsReducer (state = dataInicial, action){
    switch (action.type){
        //PUBLIC
        case LEER_BLOGS_PUBLICAR_EXITO:
            return {...state, blogsPublished: action.payload}
        case CARGAR_MAS_BLOGS:
            return {...state, blogs: action.payload}
        
        //ADMIN
        case GUARDAR_BLOGS_EXITO:
            return {...dataInicial}
        case CLEAR_DATA:
            return {...dataInicial}
        case LEER_BLOGS_EXITO:
            return {...state, blogs: action.payload}
        case CARGAR_BLOG_INFO_UPDATE_SAVED:
            return {
                ...state,
                blogUpdate: {
                    tipo: action.payload.tipo,
                    uid: action.payload.blog.uid,
                    titulo: action.payload.blog.titulo,
                    descripcion: action.payload.blog.descripcion,
                    tags: action.payload.blog.tags,
                    imgPortada: action.payload.blog.imgPortada,
                    fecha: action.payload.blog.fecha,
                    editor: action.payload.blog.editor
                }
            }
        case PUBLICAR_BLOG_EXITO:
            return {...dataInicial}
        case UPDATE_TITULO_EXITO:
            return {...state, blog: {...state.blog, titulo: action.payload}}
        case UPDATE_DESCRIPCION_EXITO:
            return {...state, blog: {...state.blog, descripcion: action.payload}}
        case UPDATE_IMAGEN_EXITO:
            return {...state, blog: {...state.blog, imgPortada: action.payload}}
        case UPDATE_FECHA_EXITO:
            return {...state, blog: {...state.blog, fecha: action.payload}}
        case UPDATE_UID_EXITO:
            return {...state, blog: {...state.blog, uid: action.payload}}
        case UPDATE_EDITOR_EXITO:
            return {...state, blog: {...state.blog, editor: {...action.payload}}}
        case UPDATE_TAGS_EXITO:
            return {...state, blog: {...state.blog, tags: [...action.payload]}}
        default:
            return state;
    }
}
//Acciones

//////////////////////////////////////////////////////////////////
////    ELIMINAR
export const eliminarBlogGuardadoAccion = (id) => async(dispatch) => {
    try {
        await db.collection('guardados').doc(id).delete()
    } catch (error) {
        console.log("Error al eliminar guardado. => ", error)
    }
}

//////////////////////////////////////////////////////////////////
////    AGREGAR
export const guardarNuevoBlogAccion = (id) => async(dispatch, getState) => {
    const blogAGuardar = getState().blogs.blog
    try {
        await db.collection('guardados').doc(id).set(blogAGuardar)
        dispatch({
            type: GUARDAR_BLOGS_EXITO
        })
    } catch (error) {
        console.log("Error al guardar :x ", error)
    }
}

export const publicarNuevoBlogAccion = (id) => async(dispatch, getState) => {
    const blogAPublicar = getState().blogs.blog
    try {
        await db.collection('blogs').doc(id).set(blogAPublicar)
        dispatch({
            type: PUBLICAR_BLOG_EXITO
        })
    } catch (error) {
        console.log("Error al publicar >:c ", error)
    }
}

//////////////////////////////////////////////////////////////////
////    LEER

export const leerBlogsAccion = (coleccion) => async(dispatch) => {
    try {
        const res = await db.collection(coleccion).get();
        let blogs = []
        res.forEach((doc)=>{
            blogs.push({docId: doc.id, data: doc.data()})
        })
        dispatch({
            type: LEER_BLOGS_EXITO,
            payload: blogs
        })
    } catch (error) {
        console.log("Error al leer blogs => ",error)
    }
}

export const leerBlogsPublicarAccion = () => async(dispatch) => {
    try {
        //console.log("Sin Get => ", await db.collection('blogs').orderBy('fecha').limit(cantidad) )
        //cargaInicial = db.collection('blogs').orderBy('fecha').limit(10);
        //first = query(collection(db2, "blogs"), orderBy("fecha", "desc"), limit(limite));
        first = db.collection('blogs').orderBy('fecha','asc').limit(limite);
        //documentSnapshots = await getDocs(first);
        documentSnapshots = await first.get()
        lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1]
        //const res = await db.collection('blogs').orderBy("fecha",'desc').limit(cantidad);
        let blogs = []
        // console.log("first => ", first)
        // console.log("documentSnapshots => ", documentSnapshots)
        // console.log("lastVisible => ", lastVisible)
        documentSnapshots.forEach((doc)=>{
            // console.log("Document snaptshot doc => ", doc)
            // console.log("Document snaptshot id => ", doc.id)
            // console.log("Document snaptshot data => ", doc.data())
            blogs.push({docId: doc.id, data: doc.data()})
        })
        dispatch({
            type: LEER_BLOGS_PUBLICAR_EXITO,
            payload: blogs
        })
    } catch (error) {
        console.log("Error al leer blogs => ",error)
    }
}

export const cargarMasBlogsAccion = () => async(dispatch, getState) => {
    // try {
    //     // next = query(collection(db2, "blogs"),
    //     //         orderBy("fecha"),
    //     //         startAfter(lastVisible),
    //     //         limit(limite));
    //     next = db.collection.orderBy('fecha', 'desc').startAfter(lastVisible).limit(limite)
    //     //documentSnapshots = await getDocs(next);
    //     documentSnapshots = await next.get();
    //     console.log("next => ", next)
    //     console.log("documentSnapshots => ", documentSnapshots)
    //     console.log("lastVisible => ", lastVisible)
    //     lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
    //     //const res = await db.collection('blogs').get().orderBy('fecha').limit(limite)
    //     let blogs = []
    //     documentSnapshots.forEach((doc)=>{
    //         console.log("Document snaptshot doc mas => ", doc)
    //         blogs.push({docId: doc.id, data: doc.data()})
    //     })

    //     dispatch({
    //         type: CARGAR_MAS_BLOGS,
    //         payload: blogs
    //     })
    // } catch (error) {
    //     console.log("Error al cargar mas blogs => ", error)
    // }
}

//////////////////////////////////////////////////////////////////
////    CARGAS
export const editarBlogGuardadoAccion = (blogCargado) => dispatch => {
    dispatch({
        type: CARGAR_BLOG_INFO_UPDATE_SAVED,
        payload: {
            tipo: blogCargado.tipo,
            blog: {...blogCargado.data}
        }
    })
}

//////////////////////////////////////////////////////////////////
////    UPDATES
export const updateTituloAccion = (tituloUpdate) => dispatch => {
    dispatch({
        type: UPDATE_TITULO_EXITO,
        payload: tituloUpdate
    })
}

export const updateImagenAccion = (imagenUpdate) => dispatch => {
    dispatch({
        type: UPDATE_IMAGEN_EXITO,
        payload: imagenUpdate
    })
}

export const updateDescripcionAccion = (descripcionUpdate) => dispatch => {
    dispatch({
        type: UPDATE_DESCRIPCION_EXITO,
        payload: descripcionUpdate
    })
}

export const updateFechaAccion = (fechaUpdate) => dispatch => {
    dispatch({
        type: UPDATE_FECHA_EXITO,
        payload: fechaUpdate
    })
}

export const updateUidAccion = (uidUpdate) => dispatch => {
    dispatch({
        type: UPDATE_UID_EXITO,
        payload: uidUpdate
    })
}

export const updateEditorAccion = (editorUpdate) => dispatch => {
    dispatch({
        type: UPDATE_EDITOR_EXITO,
        payload: {...editorUpdate}
    })
}

export const updateTagsAccion = (tagsUpdate) => dispatch => {
    dispatch({
        type: UPDATE_TAGS_EXITO,
        payload: [...tagsUpdate]
    })
}

export const clearAllAccion = () => dispatch => {
    dispatch({
        type: CLEAR_DATA
    })
}