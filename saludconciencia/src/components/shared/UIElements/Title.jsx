import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateDescripcionAccion,
    updateTituloAccion,
    uploadImgPortadaAccion } from '../../../redux/blogsDucks';

const Title = (props) => {
    const [showPreview, setShowPreview] = useState("preview-off");  //Es una cadena porque es una className, en vez de usar true o false
    const [urlImagen, setUrlImagen] = useState("")
    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")

    const dispatch = useDispatch()
    const loading = useSelector(store => store.blogs.loading)
    const imgUrl = useSelector(store => store.blogs.blog.imgPortada)

    useEffect(()=>{
        const mostrarImagenAlCargarBlog = () => {
            setUrlImagen(props.imagenInput)
            !props.imagenInput.trim() ? setShowPreview('preview-off') : setShowPreview('preview-on')
        }
        mostrarImagenAlCargarBlog()
    },[props.imagenInput])


    useEffect(()=>{
        if(urlImagen === ""){
            setShowPreview("preview-off")
        }else{
            setShowPreview("preview-on")
        }
    },[urlImagen])

    useEffect(()=> {
        const updateImg = () => {
            setUrlImagen(imgUrl)
        }
        updateImg()
    },[imgUrl])

    const addTitleBlur = (e) => {
        console.log(e.target.value)
        dispatch(updateTituloAccion(e.target.value))
    }

    const uploadImg = async(imagen) => {
        const imagenPortada = imagen.target.files[0]
        console.log(imagenPortada)
        if(imagenPortada === undefined){
            setErrorMsg("No se seleccionÃ³ una imagen")
            setError(true)
            setUrlImagen("")
            return
        }
        if(imagenPortada.size <= 1000000){ //Menor o igual a 1MB
            if(imagenPortada.type === "image/png" || imagenPortada.type === "image/jpg" || imagenPortada.type === "image/jpeg"){
                dispatch(uploadImgPortadaAccion(imagen.target.files[0]))
                setError(false)
                //setUrlImagen(imgUrl)
            }else{
                setErrorMsg("Solo archivos .png o .jpg")
                setError(true)
                setUrlImagen("")
            }
        }else{
            setErrorMsg("Archivos menores o iguales a 1 MB.")
            setError(true)
        }
        //setUrlImagen(imgUrl)
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
                <span className="headerTitle__title-title">TÃ­tulo</span>
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
                    <div>
                        <input 
                            type="file"
                            className="form-control"
                            id="imgPortadaUpload"
                            style={{display: 'none'}}
                            onChange={e=>uploadImg(e)}
                            disabled={loading}
                        />
                        <label 
                            htmlFor="imgPortadaUpload" 
                            className={loading ? 'btn btn-dark disabled' : 'btn btn-dark'}
                        >
                            Subir imagen
                        </label>
                    </div>
                </div>
                {
                    error &&
                    <div className="alert alert-warning mt-3 text-center">
                        {errorMsg}
                    </div>
                }
                {
                    loading === true ? 
                    <div className="card-body">
                        <div className="d-flex justify-content-center my-3">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Cargando...</span>
                            </div>
                        </div>
                    </div> :
                    <div className={`headerTitle__imgPortada-down ${showPreview}`}>
                        <img src={urlImagen} alt="Img Preview" className="imgPreview"/>
                    </div>
                }
            </div>
            <div className="headerTitle__descripcion">
                <span className="headerTitle__descripcion-title">
                    <span>DescripciÃ³n</span> 
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
