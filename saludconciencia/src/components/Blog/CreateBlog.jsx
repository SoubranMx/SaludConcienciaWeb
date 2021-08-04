import React, { useState, useRef, useEffect } from 'react';
import EditorJS from '@editorjs/editorjs';
import {db} from '../../firebase'
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import { EDITOR_JS_TOOLS } from './tools';
import ButtonMain from '../shared/UIElements/ButtonMain';
import TagsCreate from '../shared/UIElements/TagsCreate';
import Title from '../shared/UIElements/Title';
import { clearAllAccion, updateEditorAccion, updateUidAccion } from '../../redux/blogsDucks';




const CreateBlog = () => {
    const EDITOR_HOLDER_ID = 'editorjs';
    const dispatch = useDispatch();
    const blogCargado = useSelector(store => store.blogs.blog)
    const editorInstance = useRef();
    const [blogUsable, setBlogUsable] = useState(null)

    //Cargar blog => default o cargado
    useEffect(()=>{
        const cargarBlog = () => {
            setBlogUsable({...blogCargado})
        }
        blogUsable === null && cargarBlog()    //Solo si blogUsable es null, su valor inicial
    },[blogCargado, blogUsable])

    useEffect(()=>{
        const iniciarUid = () => {
            dispatch(updateUidAccion(nanoid()))
        }
        if(blogUsable !== null){
            if(blogUsable.tipo === "nuevo")
                iniciarUid()
        }
    },[blogUsable, dispatch])

    useEffect(() => {
        // if (!editorInstance.current) {
        //     if(blogCargado !== undefined){
        //         if(blogCargado.editor === {}){
        //             initEditor({});
        //         } else {
        //             initEditor(blogCargado.editor)
        //         }
        //     }
        // }
        const iniciarEditor = () => {
            if(blogUsable !== null){  //Se cargó algo de useSelector y se cargo al blogUsable
                if(blogUsable.tipo === "nuevo"){
                    initEditor({})
                } else {
                    initEditor(blogUsable.editor)
                }
            }
        }
        if(!editorInstance.current){
            //No se ha cargado el editor ya?
            iniciarEditor()
        }
    }, [editorInstance, blogUsable]);
 
    const initEditor = (editorUsable) => {
        const editor = new EditorJS({
            holder: 'editorjs',
            placeholder: "Escribe algo!",
            data: editorUsable,
            onReady: () => {
                editorInstance.current = editor;
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

    const submitHandler = (e) => {
        e.preventDefault()
    }

    const addEditorHandler = async() => {
        try {
            dispatch(updateEditorAccion(await editorInstance.current.saver.save()))
        } catch (error) {
            console.log("Error guardando editor >:c ", error)
        }
    }

    const cleanAll = () => {
        dispatch(clearAllAccion())
        setBlogUsable(null)
    }

    const enviarClean = (respuesta) => {
        respuesta && cleanAll()
    }
    //variables
    return blogUsable !== null ? (
        <div className="blogContainer">
            <div className="contenedorPrincipal">
                <form className="blogForm" onSubmit={submitHandler}>
                    <div className="headerTitle">
                        <Title
                            tituloInput={blogUsable.titulo}
                            imagenInput={blogUsable.imgPortada}
                            descripcionInput={blogUsable.descripcion}
                        />
                        <TagsCreate tags={[...blogUsable.tags]}/>
                    </div>
                    <div className="editorJS__container">
                        <div 
                            className="editorJS"
                            id={EDITOR_HOLDER_ID}
                            onBlur={addEditorHandler}
                        ></div>
                    </div>
                    <button className="btn btn-success btn-lg" onClick={cleanAll}>Limpiar todo</button>
                    <ButtonMain 
                        tipo={blogUsable.tipo}
                        onEnviar={enviarClean}
                    />
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