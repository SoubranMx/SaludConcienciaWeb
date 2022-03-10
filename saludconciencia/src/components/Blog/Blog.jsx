import React, { useState, useEffect, useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import RecentBlogs from './RecentBlogs'
import LatestBlogs from './LatestBlogs'
import { clearAllAccion, cargarMasBlogsAccion, leerBlogsPublicarAccion } from '../../redux/blogsDucks'
import {db} from '../../firebase'
import { clearAutoresBlogAccion } from '../../redux/autoresDucks'

const Blog = () => {
    const refToTop = useRef(null)
    const dispatch = useDispatch()
    const blogsFirebase = useSelector(store => store.blogs.blogsPublished)   //Regresa un array
    
    //Empiezan en false para mostrar spinner de carga.
    const [blogsRecent, setBlogsRecent] = useState(false)
    const [blogsLatest, setBlogsLatest] = useState(false)    

    //Carga inicial de los blogs
    useEffect(()=>{
        const cargaInicial = () => {
            console.log("Carga Inicial")
            dispatch(clearAllAccion())
            dispatch(leerBlogsPublicarAccion())
            dispatch(clearAutoresBlogAccion())
        }
        cargaInicial()
    },[dispatch])

    //Actualizacion, maybe?
    useEffect(()=>{
        const actualizarBlogs = () => {
            setBlogsRecent(true)
            setBlogsLatest(true)
        }
        const actualizarBlogsRecientesOnly = () => {
            setBlogsLatest(false)
            setBlogsRecent(true)
        }

        if(blogsFirebase !== undefined && blogsFirebase !== null){  //Asegura que se han cargado ya
            if(blogsFirebase.length <= 2){
                //console.log("Hay menos o igual a 2 blogs => ", blogsFirebase)
                actualizarBlogsRecientesOnly()  //Solo activa blogs Recientes
            } else {    //Hay por lo menos 3 blogs en redux
                //console.log("Hay por lo menos 3 blogs")
                actualizarBlogs()   //Activa tanto blogs recientes como latest
            }
            refToTop.current.scrollIntoView({behavior: 'smooth', block: 'end'})
        }
    },[blogsFirebase])

    // useEffect(()=>{
    //     if(blogsRecent === false && blogsLatest === false){
    //         //console.log("Carga Inicial en los estados")
    //     } else {
    //         //console.log("BlogsRecent => ", blogsRecent)
    //         //console.log("BlogsLatest => ", blogsLatest)
    //     }
    // },[blogsRecent, blogsLatest])

    const cargarMasBlogsHandler = () => {
        dispatch(cargarMasBlogsAccion())
    }

    //blogsFirebase !== undefined => aun no se carga nada, se supone que useSelector siempre regresa algo despues de un dispatch?
    // si es undefined, muestra spinner.
    return blogsFirebase !== undefined ? (
        <div className="container-md container-sm-fluid mt-3 mb-5" data-bs-spy="scroll" data-bs-target="#navbar-spy">
            <div className="d-flex flex-column blogBoxShadow" ref={refToTop}>
                {
                    blogsRecent !== false && (
                        <RecentBlogs />
                    )
                }
                {
                    blogsLatest !== false ? (
                        // <LatestBlogs items={blogsLatest} />
                        <LatestBlogs />
                    ) : (
                        <div className="mt-3 text-center"><b>No hay más blogs a mostrar</b></div>
                    )
                }
                
                <button className="masBlogs mt-3" onClick={cargarMasBlogsHandler}>Cargar más</button>
            </div>
        </div>
    ) : (
        <div className="container d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
            <div className="spinner-border" role="status" style={{width: "3rem", height: "3rem"}}>
                <span className="visually-hidden">Cargando...</span>
            </div>
        </div>
    )
}

export default Blog
