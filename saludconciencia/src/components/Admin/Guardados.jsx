import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { leerBlogsAccion } from '../../redux/blogsDucks'
import PlaceGuardados from './PlaceGuardados'

const Guardados = () => {

    const dispatch = useDispatch()
    const blogsCargados = useSelector(store => store.blogs.blogs)  //array

    const [blogs, setBlogs] = useState(null)
    let aux;

    /*
        Mecanismo de carga:
        1. Primera carga de pagina: se leen los blogs de redux
        2. Se observa el comportamiento de blogsCargados. Si es distinto de undefined,
        se cargan los blogs en setBlogs.
        Cuando se elimina algun blog, en el dispatch de borrar se actualiza el payload
        y, por tanto, se actualiza blogsCargados, volviendo a cargar en setBlogs, lo que
        re renderiza la pagina.
    */

    useEffect(()=>{
        const cargarBlogs = () => {
            setBlogs(blogsCargados)
        }
        if(blogsCargados !== undefined){
            cargarBlogs()
        }
    },[blogsCargados])

    useEffect(()=>{
        const cargaInicial = () => {
            dispatch(leerBlogsAccion('guardados'))
        }
        cargaInicial()
    },[])

    return (
        <div className="container">
            <div className="row mt-3">
                <span className="align-middle justify-content-center">GUARDADOS</span>
            </div>
            <div className="row mt-3">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Blogs Guardados
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="row">
                                <div className="card-group">
                                    {
                                        (blogs !== null && blogs !== undefined) ? 
                                            blogs.map(item => (
                                                <PlaceGuardados
                                                    key={item.docId}
                                                    uid={item.docId}
                                                    imgUrl={item.data.imgPortada}
                                                    titulo={item.data.titulo}
                                                    autor="Julian Uriarte"
                                                    fecha={item.data.fecha}
                                                    tags={item.data.tags}
                                                    descripcion={item.data.descripcion}
                                                    editor={item.data.editor}
                                                />
                                            ))
                                        : (
                                            blogs === undefined ? (
                                            <div className="container d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
                                                <div className="spinner-border" role="status" style={{width: "3rem", height: "3rem"}}>
                                                    <span className="visually-hidden">Cargando...</span>
                                                </div>
                                            </div>) : (
                                                <div>No hay blogs guardados.</div>
                                            )
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Podcast Guardados
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Guardados
