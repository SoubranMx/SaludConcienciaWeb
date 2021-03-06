import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { auth, db } from '../../firebase'
import { Link } from 'react-router-dom'
import moment from 'moment'

import '../../sass/_recentBlogs.scss'


const RecentBlogs = (props) => {

    //En teoria ya deberia existir si se manda a llamar blogsRecent
    const blogs = useSelector(store=>store.blogs.blogsPublished)

    //Para mostrar botones de edicion o borrado
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const [autor1, setAutor1] = useState("")
    const [autor2, setAutor2] = useState("")

    useEffect(()=>{
        // const cargarAutorRecent = async() => {
        //     if(blogs[0] !== undefined && blogs[0] !== null){
        //         const displayName = await db.collection('admin').doc(blogs[0].data.autor).get();
        //         //console.log("displayName auth1 => ", displayName.data().displayName)
        //         setAutor1(displayName.data().displayName)
        //     }
        //     if(blogs[1] !== undefined){
        //         const displayName2 = await db.collection('admin').doc(blogs[1].data.autor).get();
        //         setAutor2(displayName2.data().displayName)
        //     }
        // }
        if(blogs !== undefined){
            //cargarAutorRecent()
        }
    },[blogs])

    return (
        <div className="image-container">
            { 
                blogs[0] !== null && blogs[0] !== undefined ? (
                    <div className="image-container-first">
                        <Link to={`/blog/${blogs[0].data.link}`} className="image-container__info-link"><img className="imageCard" src={blogs[0].data.imgPortada} alt="" /></Link>
                        <div className="image-container__info">
                            <div className="image-container__info-tags">
                                {
                                    blogs[0].data.tags.map((tag, index) => (
                                        <div className="image-container__info-tags-item" key={index}>{tag}</div>
                                    ))
                                }
                            </div>
                            <Link to={`/blog/${blogs[0].data.link}`} className="image-container__info-link">
                                <h3 className="image-container__info-title">{blogs[0].data.titulo}</h3>
                            </Link>
                        </div>
                    </div>
                ) : (null)
            }
            {
                blogs[1] !== null && blogs[1] !== undefined ? (
                    <div className="image-container-second">
                        <Link to={`/blog/${blogs[1].data.link}`} className="image-container__info-link"><img className="imageCard" src={blogs[1].data.imgPortada} alt="" /></Link>
                        <div className="image-container__info">
                            <div className="image-container__info-tags">
                                {
                                    blogs[1].data.tags.map((tag,index) => (
                                        <div className="image-container__info-tags-item" key={index}>{tag}</div>
                                    ))
                                }
                            </div>
                            <Link to={`/blog/${blogs[1].data.link}`} className="image-container__info-link">
                                <h3 className="image-container__info-title">{blogs[1].data.titulo}</h3>
                            </Link>
                        </div>
                    </div>
                ) : (null)
            }
        </div>
    )
}

export default RecentBlogs
