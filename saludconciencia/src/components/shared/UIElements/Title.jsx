import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateDescripcionAccion, updateImagenAccion, updateTituloAccion } from '../../../redux/blogsDucks';

const Title = (props) => {
    const [showPreview, setShowPreview] = useState("preview-off");
    const [urlImagen, setUrlImagen] = useState("")

    const dispatch = useDispatch()

    useEffect(()=>{
        const mostrarImagenAlCargarBlog = () => {
            setUrlImagen(props.imagenInput)
            !props.imagenInput.trim() ? setShowPreview('preview-off') : setShowPreview('preview-on')
        }
        mostrarImagenAlCargarBlog()
    },[props.imagenInput])

    const addTitleBlur = (e) => {
        console.log(e.target.value)
        dispatch(updateTituloAccion(e.target.value))
    }

    const addImgBlur = (e) => {
        console.log(e.target.value)
        dispatch(updateImagenAccion(e.target.value))
        setUrlImagen(e.target.value)
        if(!e.target.value.trim()){
            setShowPreview("preview-off")
        } else {
            setShowPreview("preview-on")
        }
    }

    const showImage = (e) => {
        setUrlImagen(e.target.value)
        !e.target.value.trim() ? setShowPreview("preview-off") : setShowPreview("preview-on")
    }

    const addDescripcionBlur = (e) => {
        console.log(e.target.value)
        dispatch(updateDescripcionAccion(e.target.value))
    }

    return (
        <div>
            <div className="headerTitle__title">
                <span className="headerTitle__title-title">Título</span>
                <input 
                    type="text"
                    className="headerTitle__title-input"
                    onBlur={addTitleBlur}
                    defaultValue={props.tituloInput}
                />
            </div>
            <div className="headerTitle__imgPortada">
                <div className="headerTitle__imgPortada-top">
                    <span className="headerTitle__imgPortada-title">Portada</span>
                    <input 
                        type="text"
                        className="headerTitle__imgPortada-input"
                        onBlur={addImgBlur}
                        onChange={showImage}
                        defaultValue={props.imagenInput}
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
                    onBlur={addDescripcionBlur}
                    defaultValue={props.descripcionInput}
                />
            </div>
            
        </div>
    )
}

export default Title
