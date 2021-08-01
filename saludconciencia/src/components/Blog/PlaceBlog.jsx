import React from 'react'
import moment from 'moment'

import Tags from '../Tags/Tags'

const PlaceBlog = (props) => {
    return (
        <div className="col-12 col-md-6 col-lg-4 mb-2">
            <div className="card h-100">
                <div className="card-image">
                    <img src={props.imgPortada} alt="" className="card-img-top card-image__img"/>
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
                    <a href="#" className="btn btn-outline-primary">Leer</a>
                </div>
                <div className="card-footer">
                    <small className="text-muted">{moment(props.fecha).format("dddd, DD[/]MM[/]YY")}</small>
                </div>
            </div>
        </div>
    )
}

export default PlaceBlog
