import React, { useState } from 'react'

const Title = (props) => {
    const [showPreview, setShowPreview] = useState("preview-off");
    const [urlImagen, setUrlImagen] = useState("")
    //const [tituloState, setTituloState] = useState("")

    const showPreviewHandler = (e) => {
        if(e.target.value) {
            setShowPreview("preview-on")
            setUrlImagen(e.target.value)
            props.onAddImgPortada(e.target.value)
        } else {
            setShowPreview('preview-off');
            setUrlImagen("")
            props.onAddImgPortada(e.target.value)
        }
    }

    const addTitle = (titulo) => {
        props.onAddTitle(titulo.target.value)
    }

    const addDescripcionHandler = (descripcion) => {
        props.onAddDescripcion(descripcion.target.value)
    }

    return (
        <div>
            <div className="headerTitle__title">
                <span className="headerTitle__title-title">Título</span>
                <input 
                    type="text"
                    className="headerTitle__title-input"
                    onChange={item=>addTitle(item)}
                />
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
                    <img src={urlImagen} alt="Img Preview" className="imgPreview"/>
                </div>
            </div>
            <div className="headerTitle__descripcion">
                <span className="headerTitle__descripcion-title">
                    <span>Descripción</span> 
                    <span className="headerTitle__descripcion-title-op">Opcional</span>
                </span>
                <textarea 
                    type="text"
                    className="headerTitle__title-input"
                    onChange={item=>addDescripcionHandler(item)}
                />
            </div>
            
        </div>
    )
}

export default Title
