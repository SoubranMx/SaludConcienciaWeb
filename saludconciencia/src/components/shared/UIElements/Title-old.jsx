import React, { useEffect, useState } from 'react'

const Title = (props) => {
    const [showPreview, setShowPreview] = useState("preview-off");
    const [urlImagen, setUrlImagen] = useState("")

    // useEffect(()=>{
    //     if(props.showImg === true) {
    //         setShowPreview("preview-on")
    //         setUrlImagen(props.imagenInput)
    //     } else {
    //         setShowPreview("preview-off")
    //         setUrlImagen("")
    //     }
    // },[props.showImg])

    useEffect(()=>{
        if(!props.imagenInput.trim()){  //vacio?
            console.log("useEffect props.imgInput vacio")
            //setShowPreview("preview-off")
        } else {
            console.log("useEffect props.imgInput no vacio")
            setUrlImagen(props.imagenInput)
            //setShowPreview("preview-on")
        }
    },[props.imagenInput])

    useEffect(()=>{
        console.log("useEffect urlImagen")
        if(!urlImagen.trim()) {
            console.log("useEffect urlImagen off")
            setShowPreview("preview-off")
        } else {
            console.log("useEffect urlImagen on")
            setShowPreview("preview-on")
        }
    },[urlImagen])

    useEffect(()=>{
        setShowPreview("preview-off")
        setUrlImagen("")
    },[props.clean])

    const addTitle = (titulo) => {
        props.onAddTitle(titulo.target.value)
    }

    const addTitleBlur = (e) => {
        props.onAddTitle(e.target.value)
    }
    
    const addImg = (img) => {
        //props.onAddImgPortada(img.target.value)
        setUrlImagen(img.target.value)
    }

    const addImgBlur = (e) => {
        props.onAddImgPortada(e.target.value)
    }
    const addDescripcionHandler = (descripcion) => {
        props.onAddDescripcion(descripcion.target.value)
    }

    const addDescripcionBlur = (e) => {
        props.onAddDescripcion(e.target.value)
    }

    return (
        <div>
            <div className="headerTitle__title">
                <span className="headerTitle__title-title">Título</span>
                <input 
                    type="text"
                    className="headerTitle__title-input"
                    //onChange={item=>addTitle(item)}
                    onChange={()=>{}}
                    onBlur={addTitleBlur}
                    value={props.tituloInput}
                />
            </div>
            <div className="headerTitle__imgPortada">
                <div className="headerTitle__imgPortada-top">
                    <span className="headerTitle__imgPortada-title">Portada</span>
                    <input 
                        type="text"
                        className="headerTitle__imgPortada-input"
                        //onChange={addImg}
                        onBlur={addImgBlur}
                        onChange={()=>{}}
                        value={props.imagenInput}
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
                    //onChange={item=>addDescripcionHandler(item)}
                    onBlur={addDescripcionBlur}
                    onChange={()=>{}}
                    value={props.descripcionInput}
                />
            </div>
            
        </div>
    )
}

export default Title
