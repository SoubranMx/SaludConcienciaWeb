import React from 'react';
import ButtonMain from '../shared/UIElements/ButtonMain';
import TagsCreate from '../shared/UIElements/TagsCreate';

import { EDITOR_JS_TOOLS } from './tools';

const CreateBlog = () => {
    //hooks
    //funciones

    const saveBlogHandler = (event) => {
        event.target.preventDefault();
    }

    const publishBlogHandler = () => {

    }

    //variables
    return (
        <div className="blogContainer">
            <div className="contenedorPrincipal">
                <form action="#" class="blogForm">
                    <div className="headerTitle">
                        <div className="headerTitle__title">
                            <span className="headerTitle__title-title">Título</span>
                            <input type="text" className="headerTitle__title-input" />
                        </div>
                        <div className="headerTitle__imgPortada">
                            <span className="headerTitle__imgPortada-title">Imagen Portada</span>
                            <input type="text" className="headerTitle__imgPortada-input" />
                        </div>
                        <TagsCreate />
                    </div>
                    <div className="editorJs">Editor</div>
                    <ButtonMain onSave={saveBlogHandler} onPublish={publishBlogHandler}/>
                </form>
            </div>
        </div>
    )
}

export default CreateBlog
