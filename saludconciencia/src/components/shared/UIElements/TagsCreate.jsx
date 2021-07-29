import React, { useState } from 'react'

const TagsCreate = (props) => {
    const [cantidadTags,setCantidadTags] = useState(null);

    return (
        <div className="headerTitle__tags">
            <div className="tags__show">
                <span className="tags_show__title">Tags:</span>
                <div className="tags__show__carrousel">
                    {}
                </div>
            </div>
            <div className="tags__add">
                <span className="tags__add__title">Tag: </span>
                <input type="text" className="tags__add__input" />
            </div>
        </div>
    )
}

export default TagsCreate
