import React from 'react'

import {FiSave, FiUpload} from 'react-icons/fi';

const ButtonMain = (props) => {
    const saveHandler = () => {
        props.onSave(0)
    }

    const publishHandler = () => {
        props.onPublish(1)
    }
    return (
        <div className="footerButtons">
            <div className="footerButtons__save" onClick={saveHandler}>
                <button className="footerButtons__btn footerButtons__btn-save" type="submit">
                    <FiSave className="footerButtons__save-icon" />
                    Guardar
                </button>
            </div>
            <div className="footerButtons__publish" onClick={publishHandler}>
                <button className="footerButtons__btn footerButtons__btn-publish" type="submit">
                    <FiUpload className="footerButtons__publish-icon" />
                    Publicar
                </button>
            </div>
        </div>
    )
}

export default ButtonMain
