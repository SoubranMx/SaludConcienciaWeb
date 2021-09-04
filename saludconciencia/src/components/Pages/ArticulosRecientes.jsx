import React, {useRef, useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { leerBlogsParaInicioAccion } from '../../redux/blogsDucks';


import '../../sass/_articulosRecientes.scss';
import articleBg from './img/article_background.png'

const ArticulosRecientes = () => {
    const slide8 = useRef(null);
    const [showBlogs, setShowBlogs] = useState(false);
    const blogsInicio = useSelector(store => store.blogs.blogsInicio);
    const dispatch = useDispatch();

    useEffect(()=>{
        const cargarBlogs = () => {
            dispatch(leerBlogsParaInicioAccion())
        }
        if(blogsInicio === undefined){
            console.log("1a y unica")
            setShowBlogs(false);
            cargarBlogs();
        }else {
            console.log("Aca no debe cargar mas db")
            setShowBlogs(true);
        }
        //slide8 !== null && cargarBlogs();
        //blogsInicio !== undefined && setShowBlogs(true);
    },[blogsInicio])

    return (
        <div 
            className="index__slide__8"
            style={{
                backgroundImage: `url(${articleBg})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}
            ref={slide8}
        >
            <div className="index__slide__8__titulo lexend lexend__light">
                <div className="index__slide__8__titulo-text">
                    Artículos para ti
                </div>
            </div>
            <div className="index__slide__8__cards">
                {
                    showBlogs === true ? (
                        <div className="index__slide__8__cards-card1">
                            <div className="card h-100">
                                <Link to={`blog/${blogsInicio[0].data.link}`}>
                                    <img src={blogsInicio[0].data.imgPortada} className="card-img-top card__image" alt="Blog"/>
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">{blogsInicio[0].data.titulo}</h5>
                                    {/* <p className="card-text">{blogsInicio[0].data.descripcion}</p> */}
                                    {/* <Link to={`blog/${blogsInicio[0].data.link}`} className="btn btn-primary">Leer</Link> */}
                                </div>
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
                {
                    showBlogs === true ? (
                        <div className="index__slide__8__cards-card2">
                            <div className="card h-100">
                                <Link to={`blog/${blogsInicio[1].data.link}`}>
                                    <img src={blogsInicio[1].data.imgPortada} className="card-img-top card__image" alt="Blog"/>
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">{blogsInicio[1].data.titulo}</h5>
                                    {/* <p className="card-text">{blogsInicio[1].data.descripcion}</p> */}
                                    {/* <Link to={`blog/${blogsInicio[1].data.link}`} className="btn btn-primary">Leer</Link> */}
                                </div>
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
                {
                    showBlogs === true ? (
                        <div className="index__slide__8__cards-card3">
                            <div className="card h-100">
                                <Link to={`blog/${blogsInicio[2].data.link}`}>
                                    <img src={blogsInicio[2].data.imgPortada} className="card-img-top card__image" alt="Blog"/>
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">{blogsInicio[2].data.titulo}</h5>
                                    {/* <p className="card-text">{blogsInicio[2].data.descripcion}</p> */}
                                    {/* <Link to={`blog/${blogsInicio[2].data.link}`} className="btn btn-primary">Leer</Link> */}
                                </div>
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
            </div>
        </div>
    )
}

export default ArticulosRecientes
