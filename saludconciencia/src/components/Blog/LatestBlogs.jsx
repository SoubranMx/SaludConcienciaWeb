import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PlaceBlog from './PlaceBlog'
import blogsReducer, { leerBlogsAccion } from '../../redux/blogsDucks'
import { useEffect } from 'react'
import { useState } from 'react'

const LatestBlogs = (props) => {

    const dispatch = useDispatch()
    const blogs = useSelector(store=>store.blogs.blogsPublished)
    const [blogsLatest, setBlogsLatest] = useState(null)
    let aux;
    let aux2;
    let array = ['1', '2']
    useEffect(()=>{
        const copyArray = () => {
            aux = JSON.parse(JSON.stringify(blogs))
        }
        copyArray()
    },[blogs])

    useEffect(()=>{
        const splitArray = () => {
            setBlogsLatest(aux.splice(2))
        }
        console.log("Aux Type => ", typeof aux)
        console.log("Aux => ", aux)
        splitArray()
    },[aux])

    useEffect(()=>{
        if(blogsLatest !== null)
            console.log("blogsLatest => ",blogsLatest)
    },[blogsLatest])

    return (
        <div className="row mt-3">
            <div className="card-group">
                {
                    blogsLatest !== null &&
                    blogsLatest.map(blog => (
                        <PlaceBlog
                            key={blog.data.uid}
                            id={blog.data.uid}
                            imgPortada={blog.data.imgPortada}
                            titulo={blog.data.titulo}
                            autor={blog.data.autor}
                            fecha={blog.data.fecha}
                            tags={blog.data.tags}
                            descripcion={blog.data.descripcion}
                        />
                    ))
                }
            </div>
        </div>
        
    )
}

export default LatestBlogs
