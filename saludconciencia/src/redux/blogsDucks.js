import { db, storage, auth } from "../firebase";

// let emailDB = "";
// auth.onAuthStateChanged( user => {
//     if(user){
//         emailDB = auth.currentUser.email
//     }
// })


//Constantes

const dataInicial = {
    blog: {
        tipo: "nuevo",
        uid: "",
        autor: "",
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
    // const UPDATE_TO_SAVE_EXITO = "UPDATE_TO_SAVE_EXITO";                    // Para updatear blogs en firebase cuando se selecciono un blog guardado
    // const UPDATE_TO_POSTED_EXITO = "UPDATE_TO_POSTED_EXITO";                // Para updatear blogs en firebase cuando se selecciono un blog posteado
    const PUBLICAR_BLOG_EXITO = "PUBLICAR_BLOG_EXITO";                      // Para subir un blog en firebase cuando se selecciona publicar
    const PUBLICAR_BLOG_ERROR = "PUBLICAR_BLOG_ERROR";
    const CARGAR_MAS_BLOGS = "CARGAR_MAS_BLOGS";                            // Para cargar mas blogs cuando se presiona el boton "cargar mas" en /blogs o /admin/blogs
    const CARGAR_BLOG_INFO_UPDATE_SAVED = "CARGAR_BLOG_INFO_UPDATE_SAVED";  // Para cuando se manda a llamar Editar en guardados
    const CLEAR_DATA = "CLEAR_DATA";
    const BORRAR_BLOG_GUARDADO_EXITO = "BORRAR_BLOG_GUARDADO_EXITO";
    const BORRAR_BLOG_GUARDADO_AL_PUBLICAR_EXITO = "BORRAR_BLOG_GUARDADO_AL_PUBLICAR_EXITO";
    const CREAR_REFERENCIA_BLOG_PUBLICADO_EXITO = "CREAR_REFERENCIA_BLOG_PUBLICADO_EXITO";
    const CREAR_REFERENCIA_BLOG_PUBLICADO_ERROR = "CREAR_REFERENCIA_BLOG_PUBLICADO_ERROR";
    const CREAR_TAG_REFERENCIA_EXITO = "CREAR_TAG_REFERENCIA_EXITO";
    const CREAR_TAG_REFERENCIA_ERROR = "CREAR_TAG_REFERENCIA_EXITO";

    const UPDATE_TITULO_EXITO = "UPDATE_TITULO_EXITO";
    const UPDATE_AUTOR_EXITO = "UPDATE_AUTOR_EXITO";
    const UPDATE_DESCRIPCION_EXITO = "UPDATE_DESCRIPCION_EXITO";
    const UPDATE_TAGS_EXITO = "UPDATE_TAGS_EXITO";
    const UPDATE_IMAGEN_EXITO = "UPDATE_IMAGEN_EXITO";
    const UPLOAD_IMGPORTADA_EXITO = "UPLOAD_IMGPORTADA_EXITO";
    const UPDATE_FECHA_EXITO = "UPDATE_FECHA_EXITO";
    const UPDATE_EDITOR_EXITO = "UPDATE_EDITOR_EXITO";
    const UPDATE_UID_EXITO = "UPDATE_UID_EXITO";
    const LOADING = "LOADING";
    const ERROR_AUTOR = "ERROR_AUTOR";
    //Show blog
    const BLOG_ENCONTRADO_SHOW = "BLOG_ENCONTRADO_SHOW";
    const BLOG_ENCONTRADO_ERROR = "BLOG_ENCONTRADO_ERROR";
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
        case CREAR_REFERENCIA_BLOG_PUBLICADO_ERROR:
            return {...state, blog: {...state.blog}}
        case CREAR_REFERENCIA_BLOG_PUBLICADO_EXITO:
            return {...state}
        case CREAR_TAG_REFERENCIA_ERROR:
            return {...state, blog: {...state.blog, error: true}}
        case CREAR_TAG_REFERENCIA_EXITO:
            return {...state, blog: {...state.blog, error: false}}
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
            return {...dataInicial, errorPublish: false}
        case PUBLICAR_BLOG_ERROR:
            return {...state, errorPublish: true}
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
        case UPDATE_AUTOR_EXITO:
            return {...state, blog: {...state.blog, autor: action.payload}}
        case ERROR_AUTOR:
            return { ...state }
        case BLOG_ENCONTRADO_SHOW:
            return {...state, blogShow: {...action.payload}}
        case BLOG_ENCONTRADO_ERROR:
            return {...state, blogShow: false}
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

/**
 * Publica un blog a firebase, ya venga de guardados o sea nuevo.
 * @param {String} id id proveniente de nanoid que se guardara en el state
 * 
 */
export const publicarNuevoBlogAccion = (id) => async(dispatch, getState) => {
    /**
     * Referencia al estado para ser seteado en firebase. Se cambia su tipo por 'publicado', ya venga de 'guardado' o 'nuevo'
     * @type {{tipo: String, uid: String, tags: Array<String>, editor: Object, fecha: number, descripcion: String, auotr: String, titulo: String, imgPortada: String}} blogAPublicar
     */
    const blogAPublicar = getState().blogs.blog
    blogAPublicar.tipo = 'publicado'
    try {
        await db.collection('blogs').doc(id).set(blogAPublicar)
        dispatch({
            type: PUBLICAR_BLOG_EXITO
        })
    } catch (error) {
        console.log("Error al publicar >:c ", error)
        dispatch({
            type: PUBLICAR_BLOG_ERROR
        })
    }
}

export const crearReferenciasBlogPublicadoAccion = (id,fechaFormateada, fechaNumber,titulo) => async(dispatch, getState) => {
    /**
     * Basicamente, crea la estructura collection = "referenciasBlog"
     * Cada documento tiene la fecha del dia en que se publicó, pues sera usada esta parte para 
     * mostrar un blog al acceder a /blog/anio/mes/dia/titulo.
     * Ejemplo, ya estando en referenciasBlog: '2021/09/20', '2021/09/23', ...
     * 
     * Cada documento constará de tres campos: blogs, palabrasClave y fecha
     * blogs: [{uid:titulo},{uid:titulo},...] asi hasta la cantidad de blogs publicados ese día. En general, no creo que se publiquen más de 2 al dia por persona*
     * palabrasClave: ["cada","palabra","clave","que","se","obtenga","de","cada","blog","publicado"]
     * fecha: el numero obtenido con Date.now() que servirá para ordenar la consulta por fecha.
     * 
     * De esta manera, se podra hacer una busqueda simplona mediante palabras clave, querys y limits. Es lo que hay.
     * 
     * Args: 
     * id (string)      => uid del blog publicado, necesario dentro del campo blogs: [{uid:}]
     * titulo (string)  => titulo del blog publicado, en lowercase, necesario en el campo blogs: [{uid: id, titulo:titulo}]
     * fecha (number)   => fecha a formatear con momentjs, de forma YYYY-MM-DD en un string. 
     *                     Necesaria para agregar cada documento a la coleccion y para el campo fecha
     * 
     */
    const arrayRemove = (arr, value) => { 
        return arr.filter(ele => {
            return ele != value; 
        });
    }
    let regex1 = /\s+/gi;   //Quita espacios en blanco
    let regex2 = /[.:;,/+:;,?¿!¡]/gi;   //Quita signos de puntuacion y otros
    let tituloLowerCaseSinEspacios = titulo.replace(regex2, '');
    tituloLowerCaseSinEspacios = tituloLowerCaseSinEspacios.toLowerCase()//Deberia tener solo espacios y lowercase
    /**
     * Array de strings que contiene las palabras a guardar
     * @type {Array<String>} palabras
     */
    let palabras = []
    let palabrasAux = []
    palabrasAux = tituloLowerCaseSinEspacios.split(regex1)  //palabrasAux deberia tener el titulo separado por espacios, como ["la",'verdadera','razón' ...]
    palabrasAux.forEach( palabra => {
        if(!palabras.includes(palabra))
            palabras.push(palabra)
    });
    let referenciaAGuardar = {
        blogs: [{uid: id, titulo: tituloLowerCaseSinEspacios}],
        fecha: fechaNumber,
        palabrasClave: palabras
    }
    let referenciaGuardada = []
    //Para este punto, palabras tiene todo el titulo dividido en palabras unicas
    
    //let existeFecha = false;
    try {
        const existeFecha = await db.collection('referenciasBlog').doc(fechaFormateada).get()
        if(existeFecha.exists){ //Ya se publico un blog con la misma fecha => update
            existeFecha.data().palabrasClave.forEach(palabra => {
                if(palabras.includes(palabra)){
                    palabras = arrayRemove(palabras, palabra)
                }
            })
            //palabras ahora deberia tener un listado de palabras unicas, teniendo en cuenta las que ya estaban guardadas
            palabras = [...palabras, ...existeFecha.data().palabrasClave]
            //Ahora palabras debe tener tanto las palabras guardadas, como las nuevas

            referenciaGuardada = existeFecha.data().blogs
            referenciaAGuardar.blogs = [...referenciaAGuardar.blogs, ...referenciaGuardada]
            referenciaAGuardar.palabrasClave = palabras
            await db.collection('referenciasBlog').doc(fechaFormateada).set(referenciaAGuardar)
            dispatch({
                type: CREAR_REFERENCIA_BLOG_PUBLICADO_EXITO
            })
        } else {    //Aun no se ha publicado nada en este dia => set
            await db.collection('referenciasBlog').doc(fechaFormateada).set(JSON.parse(JSON.stringify(referenciaAGuardar)))
            dispatch({
                type: CREAR_REFERENCIA_BLOG_PUBLICADO_EXITO
            })
        }
        
    } catch (error) {
        console.log("Error en crear referencia Blog => ",error)
        console.log("uid => ", id, "fechaFormat => ", fechaFormateada, "fechaNumber => ", fechaNumber, "titulo => ", titulo)
        console.log("tags => ", getState().blogs.blog.tag)
        dispatch({
            type: CREAR_REFERENCIA_BLOG_PUBLICADO_ERROR
        })
    }


}

export const crearTagsReferenciasAccion = (id) => async(dispatch, getState) => {
    const ref = db.collection('referenciasTag');
    let res;
    console.log("id enviado => ", id)
    try {
        getState().blogs.blog.tags.forEach(async tag => {
            res = await ref.doc(tag).get()
            if(res.exists){
                ref.doc(tag).update({
                    blogs: [...res.data().blogs, {uid: id}]
                })
            } else {
                ref.doc(tag).set({blogs: [{uid: id}]})
            }
            dispatch({
                type: CREAR_TAG_REFERENCIA_EXITO
            })
        })
    } catch (error) {
        console.log(error)
        console.log("tags => ", getState().blogs.blog.tags)
        dispatch({
            type: CREAR_TAG_REFERENCIA_ERROR
        })
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

export const obtenerBlogPublicadoShowAccion = (fechaFormateada, tituloParams) => async(dispatch) => {
    /**
     * Se encarga de buscar un blog publicado para mostrarlo en la pagina.
     * Args:
     * fechaFormateada => se usa para buscar en referenciasBlog por documento
     * tituloParams => se usa para obtener dentro del documento(fecha) el campo blogs
     *                  y de ahi matchear que cada uno de los items dentro de blogs,
     *                  su campo titulo sea igual a este tituloParams. Ambos, en lower case
     * 
     * Si el titulo se encuentra, se regresa el uid, con ese uid, se busca en la coleccion blogs con ese uid
     * Si no lo encuentra, regresa un error para mostrar en pantalla. Si lo encuentra, hace un dispatch de ese
     * documento encontrado.
     * 
     * Dispatchs:
     *  exito => type: BLOG_ENCONTRADO_SHOW, payload: blogAMostrar.data() => return {...state, blogSow = action.payload }
     *  error => type: BLOG_ENCONTRADO_ERROR, => return {...state, blogShow = false }
     */
    try {
        const busquedaBlog = await db.collection('referenciasBlog').doc(fechaFormateada).get()
        let ref = db.collection('blogs')
        let buscarBlogDB
        let uidRef = null
        if (busquedaBlog.exists){ //Si existe el doc en referenciasBlog con la fecha formateada
            busquedaBlog.data().blogs.forEach(item => {
                //recorre el campo blogs: {uid: uid, titulo: titulo} y le asigna a uidRef el uid si lo encontrase
                if(item.titulo === tituloParams)
                    uidRef = item.uid
            })
            if(uidRef !== null && uidRef !== undefined){    //Se encontro el titulo en referenciasBlog
                buscarBlogDB = await ref.doc(uidRef).get()
                if(buscarBlogDB.exists){ //Existe tambien en blogs publicados
                    dispatch({
                        type: BLOG_ENCONTRADO_SHOW,
                        payload: buscarBlogDB.data()
                    })
                } else {    //No existe en blogs publicados, pero si en referenciasBlog
                    dispatch({
                        type: BLOG_ENCONTRADO_ERROR
                    })
                }
            } else { //No encontro el titulo en referenciasBlog
                dispatch({
                    type: BLOG_ENCONTRADO_ERROR
                })
            }
        } else {
            //No existe el doc en referenciasBlog con la fecha formateada
            dispatch({
                type: BLOG_ENCONTRADO_ERROR
            })
        }
    } catch (error) {
        console.log("catch error => ",error)
        dispatch({
            type: BLOG_ENCONTRADO_ERROR
        })
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

export const updateAutorAccion = () => async(dispatch) => {
    let emailDB = "";
    if(localStorage.getItem('admin')){
        emailDB = JSON.parse(localStorage.getItem('admin'))
        emailDB = emailDB.email
    }

    if(emailDB !== "") {
        dispatch({
            type: UPDATE_AUTOR_EXITO,
            payload: emailDB
        })
    } else {
        dispatch({
            type: ERROR_AUTOR
        })
    }
}