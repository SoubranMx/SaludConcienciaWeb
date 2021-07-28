import React from 'react'

import Tags from '../Tags/Tags'

const PlaceBlog = (props) => {
    return (
        <div className="col-12 col-md-6 col-lg-4 mb-2">
            <div className="card h-100">
                <div className="card-image">
                    <img src={props.imgUrl} alt="" className="card-img-top card-image__img"/>
                    <div className="card-img-overlay h-100 card-image__tags">
                        {
                            props.tags.map(tag=>(
                                <Tags
                                    key={tag.id}
                                    tag={tag.name}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h6 className="card-subtitle text-muted mb-2">{props.autor}</h6>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus magnam quia nesciunt, odit obcaecati dicta molestiae ullam, quam omnis saepe illo veniam placeat ipsum vel iste quas voluptatum.</p>
                    <a href="#" className="btn btn-outline-primary">Leer</a>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>
        </div>
    )
}

export default PlaceBlog
