import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { leerAutoresAccion } from '../../redux/autoresDucks'
import { updateAutorAccion } from '../../redux/blogsDucks'
import "../../sass/_seleccionarAutores.scss"

const SeleccionarAutores = (props) => {
    // const autores = {
    //     email: "",
    //     touched: false
    // }
    const dispatch = useDispatch()
    const autoresAMostrar = useSelector(store => store.autores.autoresExistentes)
    const autoresSeleccionados = useSelector(store => store.blogs.blog.autor)

    const [loadingPush, setLoadingPush] = useState(false)
    
    useEffect(()=>{
        const cargaAutores = () => {
            setLoadingPush(true)
            dispatch(leerAutoresAccion())
        }
        if(autoresAMostrar.length === 0){
            cargaAutores()
        }else{
            setLoadingPush(false)
        }
    },[autoresAMostrar])

    const selectAuthorHandler = (email) => {
        dispatch(updateAutorAccion(email))
    }

    return loadingPush === true ? (<div>Cargando...</div>):(
        <div className='headerTitle__authors'>
            <h2>Autores</h2>
            <div className="autor__main text-center mt-5">
            {
                autoresAMostrar.length === 0 ? (
                <h2>No hay autores en el catálogo</h2>
                ) : (
                    autoresAMostrar.map((autor, index) => {
                        if(autoresSeleccionados.find(item=>item===autor.email) !== undefined){
                            return(
                                <div
                                className="card selectedAuthor"
                                key={index}
                                style={{width: "18rem"}}
                                onClick={()=>selectAuthorHandler(autor.email)}
                                >
                                    <div className="card-body">
                                        <img src={autor.photoURL} alt="" width="100px" height="100px" className="mb-3 rounded-circle"/>
                                        <h5 className="card-title">{autor.name}</h5>
                                        <p className="card-title">{autor.email}</p>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div
                                className="card"
                                key={index}
                                style={{width: "18rem"}}
                                onClick={()=>selectAuthorHandler(autor.email)}
                                >
                                    <div className="card-body">
                                        <img src={autor.photoURL} alt="" width="100px" height="100px" className="mb-3 rounded-circle"/>
                                        <h5 className="card-title">{autor.name}</h5>
                                        <p className="card-title">{autor.email}</p>
                                    </div>
                                </div>
                            )
                        }
                        
                    })
                )
            }
            </div>
        </div>
    )
}

export default SeleccionarAutores