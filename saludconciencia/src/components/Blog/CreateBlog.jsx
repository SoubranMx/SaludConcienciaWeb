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
    const dispatch = useDispatch();
    //Carga inicial de blog. Si hay algo cargado, deberia mostrarlo.
    const blogCargado = useSelector(store => store.blogs)
    /* con redux, estos estados son obsoletos */
    const editorInstance = useRef();
    //let blogUsable = undefined;
    const [blogUsable, setBlogUsable] = useState(null)

    //Cargar blog => default o cargado
    useEffect(()=>{
        const cargarBlog = () => {
            if(blogCargado.blogUpdate === undefined){       //No hay blog cargado?
                setBlogUsable({...blogCargado.blog})          //usar blog default
            } else {
                setBlogUsable({...blogCargado.blogUpdate})    //usar blog cargado
            }
        }
        blogUsable === null && cargarBlog()    //Solo si blogUsable es undefined, su valor inicial
    },[blogCargado, blogUsable])

    useEffect(() => {
        if (!editorInstance.current) {
            initEditor();
        }
    }, [editorInstance]);
 
    const initEditor = () => {
        const editor = new EditorJS({
            holder: 'editorjs',
            placeholder: "Escribe algo!",
    
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

    const onAddTitle = (tituloDevuelto) => {

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
                        {/* <TagsCreate /> */}
                    </div>
                    <div className="editorJS__container">
                        <div className="editorJS" id={EDITOR_HOLDER_ID}></div>
                    </div>
                    <button>Clean</button>
                    {/* <ButtonMain tipo={blogUsable.tipo}/>*/}
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