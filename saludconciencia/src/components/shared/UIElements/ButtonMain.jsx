import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {FiSave, FiUpload} from 'react-icons/fi';
import { guardarNuevoBlogAccion,
    updateFechaAccion,
    publicarNuevoBlogAccion,
    eliminarBlogGuardadoAlPublicarAccion,
    crearReferenciasBlogPublicadoAccion,
    crearTagsReferenciasAccion} from '../../../redux/blogsDucks';
import moment from 'moment';

const ButtonMain = (props) => {

    const dispatch = useDispatch();
    const blogAValidar = useSelector(store => store.blogs.blog)
    const errorAlPublicar = useSelector(store => store.blogs.errorPublicar)
    const errorAlGuardar = useSelector(store => store.blogs.errorGuardar)
    const [alertMsgBody, setAlertMsgBody] = useState("")
    const [alertMsgTitle, setAlertMsgTitle] = useState("")
    const [showModal, setShowModal] = useState(false)
    const [alertModal, setAlertModal] = useState(false)

    useEffect(()=>{
        if(alertModal === true) {
            if(errorAlGuardar === false || errorAlPublicar === false)
                setShowModal(true)
            else
                setShowModal(false)
        } else {
            setShowModal(false)
        }
    },[errorAlPublicar])

    const saveHandler = () => {

        //blogAValidar deberia tener o un blog default o uno ya cargado.
        if(!blogAValidar.titulo.trim()){
            console.log("Titulo vacio")
            //Titulo vacio
        } else {
            if(!blogAValidar.imgPortada.trim()){
                console.log("Imagen Vacia")
            }else{
                if(blogAValidar.tipo === "nuevo"){
                    dispatch(updateFechaAccion(Date.now()))
                    dispatch(guardarNuevoBlogAccion(blogAValidar.uid))
                    //props.onEnviar(true)
                } else {
                    //Ya existe un id
                    dispatch(updateFechaAccion(Date.now()))
                    dispatch(guardarNuevoBlogAccion(blogAValidar.uid))
                }
                setAlertMsgBody("Blog guardado con exito! Publicalo cuando tengas tiempo :D")
                setAlertMsgTitle("¡¡¡BLOG GUARDADO!!!")
                setAlertModal(true) //Bandera de que ya se guardo algo, para mostrar el modal
                props.onEnviar(true)
            }
        }
    }

    const publishHandler = () => {
        if(!blogAValidar.titulo.trim()){
            console.log("Titulo vacio")
            //Titulo vacio
        } else {
            if(!blogAValidar.imgPortada.trim()){
                console.log("Imagen Vacia")
            }else{
                if(blogAValidar.tipo === 'nuevo'){
                    console.log("Ready to go!")
                    dispatch(updateFechaAccion(Date.now()))
                    dispatch(crearReferenciasBlogPublicadoAccion(blogAValidar.uid, moment(Date.now()).format("YYYY[-]MM[-]DD"), Date.now(), blogAValidar.titulo))
                    dispatch(crearTagsReferenciasAccion(blogAValidar.uid))
                    dispatch(publicarNuevoBlogAccion(blogAValidar.uid, moment(Date.now()).format("YYYY[/]MM[/]DD")))
                    props.onEnviar(true)
                } else {    //Tipo guardado o publicado
                    if(blogAValidar.tipo === 'guardado')
                        dispatch(eliminarBlogGuardadoAlPublicarAccion(blogAValidar.uid))
                    dispatch(crearReferenciasBlogPublicadoAccion(blogAValidar.id, moment(Date.now()).format("YYYY[-]MM[-]DD"), Date.now(), blogAValidar.titulo))
                    dispatch(crearTagsReferenciasAccion(blogAValidar.uid))
                    dispatch(publicarNuevoBlogAccion(blogAValidar.uid, moment(Date.now()).format("YYYY[/]MM[/]DD")))
                    props.onEnviar(true)
                }
                setAlertMsgTitle("¡¡¡BLOG PUBLICADO!!!")
                setAlertMsgBody("Blog publicado con exito! Puedes verlo en la seccion blogs :D")
                setAlertModal(true) //Bandera de que ya se guardo algo, para mostrar el modal
            }
        }
    }



    return (
        <div className="footerButtons">
            {
                props.tipo === "guardado" || props.tipo === "nuevo" ? (
                    <div className="footerButtons__save" onClick={saveHandler}>
                        <button className="footerButtons__btn footerButtons__btn-save" type="button">
                            <FiSave className="footerButtons__save-icon" />
                            Guardar
                        </button>
                    </div>
                ) : null
            }
            {
                props.tipo === "guardado" || props.tipo === "nuevo" ? (
                    <div className="footerButtons__publish" onClick={publishHandler}>
                        <button className="footerButtons__btn footerButtons__btn-publish" type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <FiUpload className="footerButtons__publish-icon" />
                            Publicar
                        </button>
                    </div>
                ) : (
                    <div className="footerButtons__publish" onClick={()=>{}}>
                        <button className="footerButtons__btn footerButtons__btn-publish" type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <FiUpload className="footerButtons__publish-icon" />
                            Terminar Edicion
                        </button>
                    </div>
                )
            }
            {/* <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{alertMsgTitle}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {alertMsgBody}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default ButtonMain
