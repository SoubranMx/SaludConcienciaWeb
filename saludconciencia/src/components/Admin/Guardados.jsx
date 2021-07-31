import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { leerBlogsAccion } from '../../redux/blogsDucks'
import PlaceGuardados from './PlaceGuardados'

const Guardados = () => {

    const dispatch = useDispatch()
    const blogs = useSelector(store => store.blogs.blogs)

    useEffect(()=>{
        console.log("Loop on Guardados?")
        const mostrarGuardados = () => {
            dispatch(leerBlogsAccion("guardados"))
        }
        mostrarGuardados()
    },[])

    return (
        <div className="container">
            <div className="row mt-3">
                <span className="align-middle justify-content-center">GUARDADOS</span>
            </div>
            <div className="row mt-3">
                {/* <button 
                    className="btn btn-dark"
                    onClick={()=>dispatch(leerBlogsAccion('guardados'))}
                >
                    Get
                </button> */}
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Blogs Guardados
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className="card-group">
                                <div className="row">
                                    {
                                        blogs !== undefined ?
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
                                        : null
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
