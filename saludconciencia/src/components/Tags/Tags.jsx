import React from 'react'

const Tags = (props) => {
    return (
        <div className="card-text card-image__tags-item">
            <div className="image-container__info-tags-item">
                {props.tag}
            </div>
        </div>
    )
}

export default Tags
