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
    const [autoresAMostrarState, setAutoresAMostrarState] = useState([])
    
    useEffect(()=>{
        const cargaAutores = () => {
            dispatch(leerAutoresAccion())
        }

        //Por alguna razon, autoresExistentes se muere al seleccionar otros autores, por lo que hago
        //una copia de autoresExistentes en un estado y uso este estado en su lugar.
        //Si autoresAMostrar.length = 0, quiere decir que no se ha leido aun autoresExistentes, por tanto se cargan
        //Si autoresAmostrar.length != 0 y > autoresAMostrarState.length, esto implica que autoesAmostrar cambió en algun punto
        //Por ejemplo: Cuando fue cargado auotresExistentes, en este caso el length será mayor y se hará la condición
        //Dando al estado una copia plana de autoresExistentes cargados.
        //Si autoresAMostrar cambia otra vez, como cuando por alguna razón se sobreescribe el selector, ya no será
        //su length mayor que la copia, por tanto, no pasa nada. Se usa la copia, en vez del selector.
        if(autoresAMostrar.length === 0){
            cargaAutores()
        } else if (autoresAMostrar.length > autoresAMostrarState.length){    
            setAutoresAMostrarState([...autoresAMostrar])
        }
    },[autoresAMostrar])


    const selectAuthorHandler = (email) => {
        console.log("Seleccionaste => ", email)
        dispatch(updateAutorAccion(email))
    }

    return loadingPush === true 
        ? (<div>Cargando...</div>)
        :(
            <div className='headerTitle__authors'>
                <h2>Autores</h2>
                <div className="autor__main text-center mt-5">
                {
                    autoresAMostrarState.length === 0 
                    ? (<h2>No hay autores en el catálogo</h2>) 
                    : (
                        autoresAMostrarState.map((autor, index) => {
                            if(autoresSeleccionados.find(item => item === autor.email)){
                                return(
                                    <div
                                    className="card selectedAuthor"
                                    key={index}
                                    style={{width: "18rem"}}
                                    onClick={()=>selectAuthorHandler(autor.email)}
                                    >
                                        <div className="card-body">
                                            <img src={autor.photoUrl} alt="" width="100px" height="100px" className="mb-3 rounded-circle"/>
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
                                            <img src={autor.photoUrl} alt="" width="100px" height="100px" className="mb-3 rounded-circle"/>
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