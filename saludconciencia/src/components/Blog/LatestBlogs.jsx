import React, { useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PlaceBlog from './PlaceBlog'

const LatestBlogs = (props) => {

    //Para mandar a llamar acciones de botones de admin.
    const dispatch = useDispatch()

    //En teoria, si se llama a latest blogs ya deberia haber por lo menos 3 blogs en el redux
    //Se tendria que estar observando blogs para actualizar la cantidad de blogs a mostrar
    const blogs = useSelector(store=>store.blogs.blogsPublished)

    //Para trackear el tamaño de blogs, lo cual permite revisar si ha cambiado efectivamente blogs
    const [blogsLength, setBlogsLength] = useState(null)
    //Para saber si ya no hubo cambios en blogs, lo cual quiere decir que ya no hay mas datos a cargar y deshabilitar boton
    //Creo que esto va en blogs.
    //const [blogsLengthPrev, setBlogsLengthPrev] = useState(null)


    const [blogsLatest, setBlogsLatest] = useState(null)
    let aux;


    //Destruccion inicial del array de blogs
    useEffect(()=>{
        const destruccionInicial = () => {
            aux = JSON.parse(JSON.stringify(blogs))
            setBlogsLength(blogs.length)
            setBlogsLatest(aux.splice(2))   //Pone en blogsLatest la carga inicial
        }

        const actualizarDatos = () => {
            aux = JSON.parse(JSON.stringify(blogs))
            setBlogsLength(blogs.length)
            setBlogsLatest(aux.splice(2))   //Pone en blogsLatest la carga inicial
        }

        if(blogsLength === null){   //Checa estado inicial de blogs
            destruccionInicial()
        } else {    //Ya ha sido modificado, por lo menos 1 vez.
            //Actualizar blogs
            actualizarDatos()
        }
    },[blogs,blogsLength, aux])

    useEffect(()=>{
        console.log("BlogsLatest Inicializacion")
    },[])

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
            {
                //Spinner de carga
            }
        </div>  
    )
}

export default LatestBlogs
