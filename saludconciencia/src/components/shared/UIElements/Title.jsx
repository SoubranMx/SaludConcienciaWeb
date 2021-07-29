import React, { useState } from 'react'

const Title = (props) => {
    const [showPreview, setShowPreview] = useState("preview-off");
    const [urlImagen, setUrlImagen] = useState("")

    const showPreviewHandler = (e) => {
        if(e.target.value) {
            setShowPreview("preview-on")
            setUrlImagen(e.target.value)
        } else {
            setShowPreview('preview-off');
            setUrlImagen("")
        }
    }

    return (
        <div>
            <div className="headerTitle__title">
                <span className="headerTitle__title-title">Título</span>
                <input type="text" className="headerTitle__title-input" />
            </div>
            <div className="headerTitle__imgPortada">
                <div className="headerTitle__imgPortada-top">
                    <span className="headerTitle__imgPortada-title">Portada</span>
                    <input 
                        type="text"
                        className="headerTitle__imgPortada-input"
                        onChange={showPreviewHandler}
                    />
                </div>
                <div className={`headerTitle__imgPortada-down ${showPreview}`}>
                    <img src={urlImagen} alt="Img Preview" class="imgPreview"/>
                </div>
            </div>
        </div>
    )
}

export default Title
