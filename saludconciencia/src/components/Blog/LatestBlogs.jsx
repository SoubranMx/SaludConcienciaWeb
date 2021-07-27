import React from 'react'
import PlaceBlog from './PlaceBlog'

const LatestBlogs = (props) => {
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
