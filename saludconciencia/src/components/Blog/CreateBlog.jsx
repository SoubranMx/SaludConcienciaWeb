import React, { useState, useRef, useEffect } from 'react';
import EditorJS from '@editorjs/editorjs';

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
    //hooks
    const ejInstance = useRef();
    const [editorData, setEditorData] = useState(DEFAULT_INITIAL_DATA);
    useEffect(() => {
        if (!ejInstance.current) {
            initEditor();
        }
    }, [ejInstance]);

    //funciones
    // const initEditor = () => {
    //     const editor = new EditorJS({
    //         holder: EDITOR_HOLDER_ID,
    //         logLevel: "ERROR",
    //         data: editorData,
    //         onReady: () => {
    //             ejInstance.current = editor;
    //             new EDITOR_JS_TOOLS.dragDrop(editor);
    //         },
    //         autofocus: true,
    //         tools: {
    //             header: {
    //                 class: EDITOR_JS_TOOLS.header,
    //                 inlineToolbar: true
    //             },
    //             list: {
    //                 class: EDITOR_JS_TOOLS.nestedList,
    //                 inlineToolbar: true
    //             },
    //             embed: {
    //                 class: EDITOR_JS_TOOLS.embed,
    //                 inlineToolbar: true,
    //                 config: {
    //                     services: {
    //                         youtube: true
    //                     }
    //                 },
    //             },
    //             image: EDITOR_JS_TOOLS.simpleImage,
    //             quote: {
    //                 class: EDITOR_JS_TOOLS.quote,
    //                 inlineToolbar: true,
    //                 config: {
    //                     quotePlaceholder: 'Escribe una cita',
    //                     captionPlaceholder: 'Autor de la cita',
    //                 }
    //             },
    //             table: {
    //                 class: EDITOR_JS_TOOLS.table,
    //                 inlineToolbar: true
    //             },
    //             marker: {
    //                 class: EDITOR_JS_TOOLS.marker,
    //                 inlineToolbar: true,
    //                 shortcut: 'CMD+SHIFT+M',
    //             },
    //             delimiter: {
    //                 class: EDITOR_JS_TOOLS.delimiter,
    //             },
    //             paragraph: {
    //                 class: EDITOR_JS_TOOLS.paragraph,
    //                 inlineToolbar: true,
    //             },
    //         }, 
    //     });
    // };

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

    const saveBlogHandler = (event) => {
        event.preventDefault();
    }

    const publishBlogHandler = () => {
        
    }
    
    //variables
    return (
        <div className="blogContainer">
            <div className="contenedorPrincipal">
                <form action="#" className="blogForm" onSubmit={saveBlogHandler}>
                    <div className="headerTitle">
                        <Title />
                        <TagsCreate />
                    </div>
                    <div className="editorJS__container">
                        <div className="editorJS" id={EDITOR_HOLDER_ID}></div>
                    </div>
                    <ButtonMain onSave={saveBlogHandler} onPublish={publishBlogHandler}/>
                </form>
            </div>
        </div>
    )
}

export default CreateBlog
