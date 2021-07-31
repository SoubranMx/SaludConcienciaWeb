import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PlaceBlog from './PlaceBlog'
import { leerBlogsAccion } from '../../redux/blogsDucks'

const LatestBlogs = (props) => {

    const dispatch = useDispatch()

    return (
        <div className="row mt-3">
            <div className="card-group">
                {
                    props.items.map(blog => (
                        <PlaceBlog
                            key={blog.id}
                            id={blog.id}
                            imgUrl={blog.url}
                            title={blog.title}
                            autor={blog.author}
                            fecha={blog.date}
                            tags={blog.tags}
                        />
                    ))
                }
            </div>
        </div>
        
    )
}

export default LatestBlogs
