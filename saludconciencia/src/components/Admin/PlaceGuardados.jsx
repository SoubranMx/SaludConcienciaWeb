import React from 'react'
import moment from 'moment'
import 'moment/locale/es-mx'
import { useDispatch } from 'react-redux'

import Tags from '../Tags/Tags'
import { editarBlogGuardadoAccion, eliminarBlogGuardadoAccion } from '../../redux/blogsDucks'
import { useHistory } from 'react-router-dom'

const PlaceGuardados = (props) => {
    let history = useHistory();
    const dispatch = useDispatch()

    const editarBlogHandler = () => {
        const blogACargar = {
            tipo: "guardado",
            data: {
                uid: props.uid,
                titulo: props.titulo,
                descripcion: props.descripcion,
                tags: [...props.tags],
                imgPortada: props.imgUrl,
                fecha: props.fecha,
                editor: props.editor
            }
        }
        dispatch(editarBlogGuardadoAccion(blogACargar))
        history.push('/admin/crearBlog')
    }

    const eliminarBlogHandler = () => {
        dispatch(eliminarBlogGuardadoAccion(props.uid))
        props.onEliminar(true)
    }

    return (
        <div className="col-12 col-md-6 col-lg-4 mb-2">
            <div className="card h-100">
                <div className="card-image">
                    <img src={props.imgUrl} alt="" className="card-img-top card-image__img"/>
                    <div className="card-img-overlay h-100 card-image__tags">
                        {
                            props.tags.map((tag,index)=>(
                                <Tags
                                    key={index}
                                    tag={tag}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.titulo}</h5>
                    <h6 className="card-subtitle text-muted mb-2">{props.autor}</h6>
                    <p className="card-text">{props.descripcion}</p>
                    <button className="btn btn-outline-primary" onClick={editarBlogHandler}>Editar</button>
                    <button className="btn btn-outline-danger" onClick={eliminarBlogHandler}>Eliminar</button>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Fecha Guardado: {moment(props.fecha).format("dddd, DD[/]MM[/]YY")}</small>
                </div>
            </div>
        </div>
    )
}

export default PlaceGuardados
