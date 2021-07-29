import React from 'react'

import {FiSave, FiUpload} from 'react-icons/fi';

const ButtonMain = (props) => {
    return (
        <div className="footerButtons">
            <div className="footerButtons__save" onClick={props.onSave}>
                <button className="footerButtons__btn footerButtons__btn-save">
                    <FiSave className="footerButtons__save-icon" />
                    Guardar
                </button>
            </div>
            <div className="footerButtons__publish" onClick={props.onPublish}>
                <button className="footerButtons__btn footerButtons__btn-publish">
                    <FiUpload className="footerButtons__publish-icon" />
                    Publicar
                </button>
            </div>
        </div>
    )
}

export default ButtonMain
