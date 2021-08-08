import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

import Tags from '../Tags/Tags'

const PlaceBlog = (props) => {
    return (
        <div className="col-12 col-md-6 col-lg-4 mb-2">
            <div className="card h-100">
                <div className="card-image">
                <Link to={`/blog/${props.link}`} className="card-link"><img src={props.imgPortada} alt="" className="card-img-top card-image__img"/></Link>
                    <div className="card-img-overlay card-image__tags">
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
                    <Link to={`/blog/${props.link}`} className="card-link">
                        <h5 className="card-title">{props.titulo}</h5>
                    </Link>
                    {/* <h6 className="card-subtitle text-muted mb-2">{props.autor}</h6> */}
                    <p className="card-text">{props.descripcion}</p>
                    <Link to={`/blog/${props.link}`} className="btn btn-outline-primary">Leer</Link>
                </div>
                <div className="card-footer">
                    <small className="text-muted">{moment(props.fecha).format("dddd, DD[/]MM[/]YY")}</small>
                </div>
            </div>
        </div>
    )
}

export default PlaceBlog
