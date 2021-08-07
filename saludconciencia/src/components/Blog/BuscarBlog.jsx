import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { obtenerBlogPublicadoShowAccion } from '../../redux/blogsDucks'
import ShowBlog from './ShowBlog'

const BuscarBlog = (props) => {
    const blogAMostrar = useSelector(store => store.blogs.blogShow)
    const dispatch = useDispatch()

    const [blogExists, setBlogExists] = useState(false) //parte en falso
    const [blog, setBlog] = useState(null)

    let rutas = useParams();
    let tituloSinGuiones;
    let fechaFormat;

    //Carga inicial del blog a buscar con los parametros anio, mes, dia y titulo
    useEffect(()=>{
        const buscarBlogInit = () => {
            //Reemplaza todos los guiones bajos por un espacio
            //Debe estar en lowercase. la_verdadera_... => la verdadera razón ...
            //Necesita ser exactamente igual al titulo puesto por el autor.
            tituloSinGuiones = rutas.titulo.replace(/_/gi,' ')
            //Formatea la fecha al estilo => '2021-08-04'
            fechaFormat = `${rutas.anio}-${rutas.mes}-${rutas.dia}`
            dispatch(obtenerBlogPublicadoShowAccion(fechaFormat, tituloSinGuiones))
        }
        //Aun no se buscó un blog
        if(blogAMostrar === undefined)
            buscarBlogInit()
    },[tituloSinGuiones, fechaFormat, dispatch, blogAMostrar])

    //Una vez que se cargó el blogAMostrar. En el dispatch se especifica que es false si no encuentra un blog
    //En caso que si lo encuentre, este contiene todos los datos del blog.
    useEffect(()=>{
        //Asegura que se cargó algo, y que no sea falso
        if(blogAMostrar !== undefined && blogAMostrar !== false){
            setBlogExists(true)
            setBlog(blogAMostrar)
        } else if (blogAMostrar === false){    //Se cargó algo, pero no encontró el blog => false
            setBlogExists(false)
            setBlog(null)
        }
    },[blogAMostrar])
    
    return blogExists === true ? (
        <div className="showBlog__container">
            {/* SIEMPRE deberia poder mostrar un blog si este existe */}
            <ShowBlog blog={blog} />
        </div>
    ) : (
        <div className="showBlog__error">
            <h2>No se encontró el blog :c</h2>
        </div>
    )
}

export default BuscarBlog
