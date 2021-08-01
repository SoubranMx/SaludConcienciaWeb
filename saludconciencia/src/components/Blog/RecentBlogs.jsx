import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'


const RecentBlogs = (props) => {

    const blogs = useSelector(store=>store.blogs.blogsPublished)
    useEffect(()=>{
        console.log("Blog 1 =>",blogs[0])
        console.log("Blog 2 =>",blogs[1])
    },[blogs])

    return (
        <div className="image-container">
            { 
                blogs[0] !== null ? (
                    <div className="image-container-first">
                        <img className="imageCard" src={blogs[0].data.imgPortada} alt="" />
                        <div className="image-container__info">
                            <div className="image-container__info-tags">
                                {
                                    blogs[0].data.tags.map((tag, index) => (
                                        <div className="image-container__info-tags-item" key={index}>{tag}</div>
                                    ))
                                }
                            </div>
                            <h3 className="image-container__info-title">{blogs[0].data.titulo}</h3>
                            <div className="image-container__info__details">
                                <h3 className="image-container__info-author">Por: {blogs[0].data.autor}</h3>
                            </div>
                        </div>
                    </div>
                ) : (null)
            }
            {
                blogs[1] !== null ? (
                    <div className="image-container-second">
                        <img className="imageCard" src={blogs[1].data.imgPortada} alt="" />
                        <div className="image-container__info">
                            <div className="image-container__info-tags">
                                {
                                    blogs[1].data.tags.map((tag,index) => (
                                        <div className="image-container__info-tags-item" key={index}>{tag}</div>
                                    ))
                                }
                            </div>
                            <h3 className="image-container__info-title">{blogs[1].data.titulo}</h3>
                            <div className="image-container__info__details">
                                <h3 className="image-container__info-author">Por: {blogs[1].data.autor}</h3>
                            </div>
                        </div>
                    </div>
                ) : (null)
            }
        </div>
    )
}

export default RecentBlogs
