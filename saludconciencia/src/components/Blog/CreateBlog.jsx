import React from 'react';
import ButtonMain from '../shared/UIElements/ButtonMain';
import TagsCreate from '../shared/UIElements/TagsCreate';
import Title from '../shared/UIElements/Title';

import { EDITOR_JS_TOOLS } from './tools';

const CreateBlog = () => {
    //hooks
    //funciones

    const saveBlogHandler = (event) => {
        event.preventDefault();
    }

    const publishBlogHandler = () => {

    }
    
    //variables
    return (
        <div className="blogContainer">
            <div className="contenedorPrincipal">
                <form action="#" class="blogForm" onSubmit={saveBlogHandler}>
                    <div className="headerTitle">
                        <Title />
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
