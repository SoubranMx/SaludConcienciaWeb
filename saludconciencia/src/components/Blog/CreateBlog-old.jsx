import React, { useState, useRef, useEffect } from 'react';
import EditorJS from '@editorjs/editorjs';
import {db} from '../../firebase'
import { useDispatch, useSelector } from 'react-redux';

import { EDITOR_JS_TOOLS } from './tools';
import ButtonMain from '../shared/UIElements/ButtonMain';
import TagsCreate from '../shared/UIElements/TagsCreate';
import Title from '../shared/UIElements/Title';




const CreateBlog = () => {
    const EDITOR_HOLDER_ID = 'editorjs';
    const DEFAULT_INITIAL_DATA = () => {
        return {
            "time": new Date().getTime(),
            "blocks": [
                {
                    "type": "header",
                    "data": {
                        "text": "Inicializacion!",
                        "level": 1
                    }
                },
                {
                    type: "paragraph",
                    data: {
                        text: "Parrafo",
                    }
                }
            ]
        }
    }
    
    const dispatch = useDispatch();
    //Carga inicial de blog. Si hay algo cargado, deberia mostrarlo.
    const blogCargado = useSelector(store => store.blogs)
    /* con redux, estos estados son obsoletos */

    //hooks
    const [dataEditorJS, setDataEditorJS] = useState({})
    //Titulo
    const [title, setTitle] = useState("")
    //Imagen
    const [imgPortada, setImgPortada] = useState("")
    const [showImage, setShowImage] = useState(false)
    //Descripcion
    const [descripcion, setDescripcion] = useState("")
    //Tags
    const [tags, setTags] = useState([])
    //Otros
    const [cleanAll, setCleanAll] = useState(false)
    const [dataFinal, setDataFinal] = useState({})
    const [buttonSubmitType, setButtonSubmitType] = useState(null)
    const [editorData, setEditorData] = useState(DEFAULT_INITIAL_DATA);

    const ejInstance = useRef();

    useEffect(() => {
        if (!ejInstance.current) {
            initEditor();
        }
    }, [ejInstance]);

    useEffect(()=>{
        const salvar = async(coleccion) => {
            try {
                // si se guarda en una variable, esa variable tiene el id que firebase le pone
                await db.collection(coleccion).add({...dataFinal})
            } catch (error) {
                console.log("Error Firebase: ",error)
            }
        }
        if(buttonSubmitType === 0){ //Guardar
            salvar('guardados')
        } else if (buttonSubmitType === 1) { //Publicar
            salvar('blogs')
        }

        
    },[dataFinal, buttonSubmitType])

   
    const initEditor = () => {
        const editor = new EditorJS({
            holder: 'editorjs',
            placeholder: "Escribe algo!",
    
            onReady: () => {
                ejInstance.current = editor;
                new EDITOR_JS_TOOLS.dragDrop(editor);
            },
            tools: {
                header: {
                    class: EDITOR_JS_TOOLS.header,
                    inlineToolbar: true
                },
                paragraph: {
                    class: EDITOR_JS_TOOLS.paragraph,
                    inlineToolbar: true
                },
                list: {
                    class: EDITOR_JS_TOOLS.nestedList,
                    inlineToolbar: true
                },
                embed: {
                    class: EDITOR_JS_TOOLS.embed,
                    inlineToolbar: true,
                    config: {
                        services: {
                            youtube: true,
                            coub: true
                        }
                    },
                },
                image: EDITOR_JS_TOOLS.simpleImage,
                quote: {
                    class: EDITOR_JS_TOOLS.quote,
                    inlineToolbar: true,
                    config: {
                        quotePlaceholder: 'Enter a quote',
                        captionPlaceholder: 'Quote\'s author',
                    }
                },
                table: {
                    class: EDITOR_JS_TOOLS.table,
                    inlineToolbar: true
                },
                marker: {
                    class: EDITOR_JS_TOOLS.marker,
                    inlineToolbar: true,
                    shortcut: 'CMD+SHIFT+M',
                },
                delimiter: {
                    class: EDITOR_JS_TOOLS.delimiter,
                },
            }
        });
    }

    const createDataToFirebase = async() => {
        let contenidoEditor;
        try {
            contenidoEditor = await ejInstance.current.saver.save();
            if(!title.trim()){
                console.log("Titulo vacio")
                //Estilos para input vacio
            } else if (!imgPortada.trim()){
                console.log("Imagen Vacia")
                //Estilos para input vacio
            } else {
                console.log("Ready to go!")
                setDataFinal({
                    titulo: title,
                    imgPortada: imgPortada,
                    descripcion: descripcion,
                    tags: tags,
                    fecha: Date.now(),
                    editor: contenidoEditor
                })
            }
        } catch (error) {
            console.log("Error de guardado en EditorJs",error)
        }
    }
    
    const saveBlogHandler = async(tipo) => {
        try {
            await createDataToFirebase();
            setButtonSubmitType(tipo);
            setButtonSubmitType(null)
            
            //Borramos todos los campos excepto Editor, pues la instancia no encuentra el metodo clean.
            cleanMethod()
        } catch (error) {
            console.log("Error saveBlogHandler: ",error)
        }
    }

    const publishBlogHandler = (tipo) => {
        createDataToFirebase();
        setButtonSubmitType(tipo);
    }

    const addTagsHandler = (tagsProp) => {
        setTags([...tagsProp])
    }

    const deleteTagsHandler = (tagsProp) => {
        setTags([...tagsProp])
    }

    const addTitleHandler = (title) => {
        setTitle(title)
    }

    const addImgUrlHandler = (img) => {
        setImgPortada(img)
        if(!img.trim()){    //Campo imagen esta vacio?
            setShowImage(false)
        } else {
            setShowImage(true)
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
    }

    const addDescricpionHandler = (descripcion) => {
        setDescripcion(descripcion)
    }

    const cleanMethod = () => {
        setCleanAll(true)

        /* 
            Por su naturaleza, estos tengo que eliminarlos manualmente
            debido a que se estan pasando como valores default de los input
            en <Title/> con los props:
            tituloInput={title}
            imagenInput={imgPortada}
            descripcionInput={descripcion}

            Ademas, mando otro prop para que el preview de la Imagen se esconda:
            showImg={showImage}

            tags se eliminan debido al estado cleanAll, pues se manda como prop:
            clean={cleanAll}

            Dentro de <tags/> esta un useEffect que esta observando el valor del prop
            clean, y cuando este es true, manda a llamar otra funcion para pasar sus estados
            <tags/>.setCantidadTags([]) y <tags/>.setValorTag(""), los cuales luego se cachan
            en <CreateBlog/> debido al binding que tienen.
            Por ello, setTags no esta siendo modificado aqui.

            Faltaria hacer clean al editor, pero por alguna razon la instancia no tiene acceso al
            metodo clean.

            Esto probablemente esta evitando que se logre subir a firebase debido a que tanto 
            titulo como imagen estan en este punto vacios.
        */
        setDescripcion("")
        setTitle("")
        setImgPortada("")
        setShowImage(false)

        ejInstance.current.blocks.clear()
        //Finalmente, hacemos clenaAll false
        setCleanAll(false)
    }
    //variables
    return blogCargado !== undefined ? (
        <div className="blogContainer">
            <div className="contenedorPrincipal">
                <form className="blogForm" onSubmit={submitHandler}>
                    <div className="headerTitle">
                        <Title
                            // //Titulo
                            // onAddTitle={addTitleHandler}
                            // tituloInput={title}
                            // //Imagen
                            // onAddImgPortada={addImgUrlHandler}
                            // imagenInput={imgPortada}
                            // showImg={showImage}
                            // //Descripcion
                            // onAddDescripcion={addDescricpionHandler}
                            // descripcionInput={descripcion}
                            //Titulo
                            onAddTitle={addTitleHandler}
                            tituloInput={blogCargado.titulo}
                            //Imagen
                            onAddImgPortada={addImgUrlHandler}
                            imagenInput={blogCargado.imgPortada}
                            showImg={showImage}
                            //Descripcion
                            onAddDescripcion={addDescricpionHandler}
                            descripcionInput={blogCargado.descripcion}
                        />
                        <TagsCreate 
                            onAddTags={addTagsHandler}
                            onDeleteTags={deleteTagsHandler}

                            clean={cleanAll}
                        />
                    </div>
                    <div className="editorJS__container">
                        <div className="editorJS" id={EDITOR_HOLDER_ID}></div>
                    </div>
                    <button onClick={cleanMethod}>Clean</button>
                    <ButtonMain onSave={saveBlogHandler} onPublish={publishBlogHandler}/>
                </form>
            </div>
        </div>
    ) : (
        <div className="container d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
            <div className="spinner-border" role="status" style={{width: "3rem", height: "3rem"}}>
                <span className="visually-hidden">Cargando...</span>
            </div>
        </div>
    )
}

export default CreateBlog
