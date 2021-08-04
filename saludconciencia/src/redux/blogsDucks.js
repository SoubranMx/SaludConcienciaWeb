import { db, storage, auth } from "../firebase";

let emailDB = "";
auth.onAuthStateChanged( user => {
    if(user){
        emailDB = auth.currentUser.email
    }
})


//Constantes

const dataInicial = {
    blog: {
        tipo: "nuevo",
        uid: "",
        autor: emailDB,
        titulo: "",
        descripcion: "",
        tags: [],
        imgPortada: "",
        fecha: 0,
        editor: {}
    }
}

    //types
    const LEER_BLOGS_EXITO = "LEER_BLOGS_EXITO";                            // Para mostrar blogs en /blogs o admin/blogs
    const LEER_BLOGS_PUBLICADOS_EXITO = "LEER_BLOGS_PUBLICAR_EXITO";        // Para mostrar blogs en /blogs o admin/blogs
    const GUARDAR_BLOGS_EXITO = "GUARDAR_BLOGS_EXITO";                      // Para guardar blogs en firebase cuando se selecciona guardar
    const UPDATE_TO_SAVE_EXITO = "UPDATE_TO_SAVE_EXITO";                    // Para updatear blogs en firebase cuando se selecciono un blog guardado
    const UPDATE_TO_POSTED_EXITO = "UPDATE_TO_POSTED_EXITO";                // Para updatear blogs en firebase cuando se selecciono un blog posteado
    const PUBLICAR_BLOG_EXITO = "PUBLICAR_BLOG_EXITO";                      // Para subir un blog en firebase cuando se selecciona publicar
    const CARGAR_MAS_BLOGS = "CARGAR_MAS_BLOGS";                            // Para cargar mas blogs cuando se presiona el boton "cargar mas" en /blogs o /admin/blogs
    const CARGAR_BLOG_INFO_UPDATE_SAVED = "CARGAR_BLOG_INFO_UPDATE_SAVED";  // Para cuando se manda a llamar Editar en guardados
    const CLEAR_DATA = "CLEAR_DATA";
    const BORRAR_BLOG_GUARDADO_EXITO = "BORRAR_BLOG_GUARDADO_EXITO"
    const BORRAR_BLOG_GUARDADO_AL_PUBLICAR_EXITO = "BORRAR_BLOG_GUARDADO_AL_PUBLICAR_EXITO"

    const UPDATE_TITULO_EXITO = "UPDATE_TITULO_EXITO";
    //const UPDATE_AUTOR_EXITO = "UPDATE_AUTOR_EXITO";
    const UPDATE_DESCRIPCION_EXITO = "UPDATE_DESCRIPCION_EXITO";
    const UPDATE_TAGS_EXITO = "UPDATE_TAGS_EXITO";
    const UPDATE_IMAGEN_EXITO = "UPDATE_IMAGEN_EXITO";
    const UPLOAD_IMGPORTADA_EXITO = "UPLOAD_IMGPORTADA_EXITO";
    const UPDATE_FECHA_EXITO = "UPDATE_FECHA_EXITO";
    const UPDATE_EDITOR_EXITO = "UPDATE_EDITOR_EXITO";
    const UPDATE_UID_EXITO = "UPDATE_UID_EXITO";
    const LOADING = "LOADING"
//Reducer
export default function blogsReducer (state = dataInicial, action){
    switch (action.type){
        case LOADING:
            return {...state, loading: true}
        //PUBLIC
        case LEER_BLOGS_PUBLICADOS_EXITO:
            return {...state, blogsPublished: action.payload.blogs, lastVisible: action.payload.lastVisible}
        case CARGAR_MAS_BLOGS:
            return {...state, blogsPublished: [...state.blogsPublished, ...action.payload.blogs], lastVisible: action.payload.lastVisible}
        
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
                blog: {
                    ...state.blog,
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
        case BORRAR_BLOG_GUARDADO_EXITO:
            return {...state, blogs: action.payload}
        case BORRAR_BLOG_GUARDADO_AL_PUBLICAR_EXITO:
            return {...dataInicial}
        case PUBLICAR_BLOG_EXITO:
            return {...dataInicial}
        case UPDATE_TITULO_EXITO:
            return {...state, blog: {...state.blog, titulo: action.payload}}
        case UPDATE_DESCRIPCION_EXITO:
            return {...state, blog: {...state.blog, descripcion: action.payload}}
        case UPDATE_IMAGEN_EXITO:
            return {...state, blog: {...state.blog, imgPortada: action.payload}}
        case UPLOAD_IMGPORTADA_EXITO:
            return {...state, loading: false, blog: {...state.blog, imgPortada: action.payload}}
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
const deleteFile = (pathToFile, fileName) => {
    const ref = storage.ref(pathToFile);
    console.log("pathToFile => ", ref)
    const childRef = ref.child(fileName);
    childRef.delete()
}

const deleteFolderContents = (path,id) => {
    console.log("pathToFolder 1 => ", path)
    const ref = storage.ref(path);
    console.log("pathToFolder 2 => ", ref)
    ref.listAll()
        .then(dir => {
            dir.items.forEach(fileRef => {
                console.log("ref => ", ref.fullPath, "fileRefName => ", fileRef.name)
                deleteFile(ref.fullPath, fileRef.name);
            });
            dir.prefixes.forEach(folderRef => {
                deleteFolderContents(folderRef.fullPath);
            })
        })
        .catch(error => {
            console.log(error);
        });
}

export const eliminarBlogGuardadoAccion = (id) => async(dispatch) => {
    
    try {
        
        //eliminar tambien las imagenes de ese blog
        const folderPath = storage.ref().child('blogs').child(id).fullPath
        deleteFolderContents(folderPath,id)

        await db.collection('guardados').doc(id).delete()
        const res = await db.collection('guardados').orderBy('fecha','desc').get();
        let blogs = []
        res.forEach((doc)=>{
            blogs.push({docId: doc.id, data: doc.data()})
        })
        dispatch({
            type: BORRAR_BLOG_GUARDADO_EXITO,
            payload: blogs
        })
    } catch (error) {
        console.log("Error al eliminar guardado. => ", error)
    }
}

export const eliminarBlogGuardadoAlPublicarAccion = (id) => async(dispatch) => {
    try {
        await db.collection('guardados').doc(id).delete()
        dispatch({
            type: BORRAR_BLOG_GUARDADO_EXITO
        })
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
        const res = await db.collection(coleccion).orderBy('fecha','desc').get();
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

export const leerBlogsPublicarAccion = (limite=10) => async(dispatch) => {
    try {
        let first = db.collection('blogs')
            .orderBy('fecha','desc')
            .limit(limite)
        let documentSnapshots = await first.get()
        let lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1]
        let blogs = []
        documentSnapshots.forEach((doc)=>{
            blogs.push({docId: doc.id, data: doc.data()})
        })
        dispatch({
            type: LEER_BLOGS_PUBLICADOS_EXITO,
            payload: {
                blogs,
                lastVisible
            }
        })
    } catch (error) {
        console.log("Error al leer blogs => ",error)
    }
}

export const cargarMasBlogsAccion = (limite=10) => async(dispatch, getState) => {
    try {
        let next = db.collection('blogs')
                .orderBy('fecha','desc')
                .startAfter(getState().blogs.lastVisible)
                .limit(limite)
        let documentSnapshots = await next.get()
        let lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1]
        let blogs = []
        documentSnapshots.forEach((doc)=>{
            blogs.push({docId: doc.id, data: doc.data()})
        })
        dispatch({
            type: CARGAR_MAS_BLOGS,
            payload: {blogs, lastVisible}
        })
    } catch (error) {
        console.log("Error al cargar mas blogs => ", error)
    }
}

//////////////////////////////////////////////////////////////////
////    EDICION GUARDADO O PUBLICADO
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

export const uploadImgPortadaAccion = (imagen) => async(dispatch, getState) => {
    dispatch({
        type: LOADING
    })

    const {uid} = getState().blogs.blog;

    try {
        const imagenRef = await storage.ref().child("blogs").child(uid).child("img_portada")
        await imagenRef.put(imagen)
        const imagenURL = await imagenRef.getDownloadURL()

        dispatch({
            type: UPLOAD_IMGPORTADA_EXITO,
            payload: imagenURL
        })
    } catch (error) {
        console.log(error)
    }
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