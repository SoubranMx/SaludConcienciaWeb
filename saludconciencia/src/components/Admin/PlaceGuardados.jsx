import React from 'react'
import Tags from '../Tags/Tags'

const PlaceGuardados = (props) => {
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
                    <h5 className="card-title">{props.title}</h5>
                    <h6 className="card-subtitle text-muted mb-2">{props.autor}</h6>
                    <p className="card-text">{props.descripcion}</p>
                    <a href="#" className="btn btn-outline-primary">Editar</a>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Fecha Guardado: {props.fecha}</small>
                </div>
            </div>
        </div>
    )
}

export default PlaceGuardados
