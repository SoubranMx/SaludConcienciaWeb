import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {FiSave, FiUpload} from 'react-icons/fi';
import { guardarNuevoBlogAccion,
    updateFechaAccion,
    publicarNuevoBlogAccion,
    eliminarBlogGuardadoAlPublicarAccion} from '../../../redux/blogsDucks';

const ButtonMain = (props) => {

    const dispatch = useDispatch();
    const blogAValidar = useSelector(store => store.blogs.blog)

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
                    props.onEnviar(true)
                } else {
                    //Ya existe un id
                    dispatch(updateFechaAccion(Date.now()))
                    dispatch(guardarNuevoBlogAccion(blogAValidar.uid))
                    props.onEnviar(true)
                }
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
                    dispatch(publicarNuevoBlogAccion(blogAValidar.uid))
                    props.onEnviar(true)
                } else {
                    dispatch(eliminarBlogGuardadoAlPublicarAccion(blogAValidar.uid))
                    dispatch(publicarNuevoBlogAccion(blogAValidar.uid))
                    props.onEnviar(true)
                }
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
                        <button className="footerButtons__btn footerButtons__btn-publish" type="submit">
                            <FiUpload className="footerButtons__publish-icon" />
                            Publicar
                        </button>
                    </div>
                ) : (
                    <div className="footerButtons__publish" onClick={()=>{}}>
                        <button className="footerButtons__btn footerButtons__btn-publish" type="submit">
                            <FiUpload className="footerButtons__publish-icon" />
                            Terminar Edicion
                        </button>
                    </div>
                )
            }
        </div>
    )
}

export default ButtonMain
