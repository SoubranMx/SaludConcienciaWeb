import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {FiSave, FiUpload} from 'react-icons/fi';
import { guardarNuevoBlogAccion, updateFechaAccion, updateUidAccion, publicarNuevoBlogAccion} from '../../../redux/blogsDucks';
import { nanoid } from 'nanoid';

const ButtonMain = (props) => {

    const dispatch = useDispatch();
    const blogAValidar = useSelector(store => store.blogs.blog)
    let uidNano;

    const saveHandler = () => {
        //props.onSave(0)
        if(!blogAValidar.titulo.trim()){
            console.log("Titulo vacio")
            //Titulo vacio
        } else {
            if(!blogAValidar.imgPortada.trim()){
                console.log("Imagen Vacia")
            }else{
                console.log("Ready to go!")
                dispatch(updateFechaAccion(Date.now()))
                uidNano = nanoid();
                dispatch(updateUidAccion(uidNano))
                dispatch(guardarNuevoBlogAccion(uidNano))
                props.onEnviar(true)
            }
        }
    }

    const publishHandler = () => {
        //props.onPublish(1)
        if(!blogAValidar.titulo.trim()){
            console.log("Titulo vacio")
            //Titulo vacio
        } else {
            if(!blogAValidar.imgPortada.trim()){
                console.log("Imagen Vacia")
            }else{
                console.log("Ready to go!")
                dispatch(updateFechaAccion(Date.now()))
                uidNano = nanoid();
                dispatch(updateUidAccion(uidNano))
                dispatch(publicarNuevoBlogAccion(uidNano))
                props.onEnviar(true)
            }
        }
    }



    return (
        <div className="footerButtons">
            {
                props.tipo === "guardado" || props.tipo === undefined ? (
                    <div className="footerButtons__save" onClick={saveHandler}>
                        <button className="footerButtons__btn footerButtons__btn-save" type="button">
                            <FiSave className="footerButtons__save-icon" />
                            Guardar
                        </button>
                    </div>
                ) : (
                    <div className="footerButtons__save" onClick={()=>{}}>
                        <button className="footerButtons__btn footerButtons__btn-save" type="button">
                            <FiSave className="footerButtons__save-icon" />
                            Eliminar
                        </button>
                    </div>
                )
            }
            {
                props.tipo === "guardado" || props.tipo === undefined ? (
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
