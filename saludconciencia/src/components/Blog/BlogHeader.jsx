import React, {useState,useEffect} from 'react'
import { db } from '../../firebase'
import moment from 'moment'
import '../../sass/_blogHeader.scss'
import { useDispatch, useSelector } from 'react-redux'
import { leerAutoresAccion, leerAutoresBlogAccion } from '../../redux/autoresDucks'

const BlogHeader = (props) => {

    const dispatch = useDispatch()
    const autorInfo = useSelector(store => store.autores.autoresExistentes)
    const autoresDelBlog = useSelector(store => store.autores.autoresDeBlog)


    const [displayName, setDisplayName] = useState("Julián Uriarte")
    const [urlAutorImg, setUrlAutorImg] = useState("")
    const [autorCargado, setAutorCargado] = useState(false)
    const [cargaInicialAutor, setCargaInicialAutor] = useState(false)
    
    useEffect(() => {
        const cargaInicial = () => {
            dispatch(leerAutoresAccion())
            setCargaInicialAutor(true)
        }
        if(cargaInicialAutor === false)
            cargaInicial()
    },[props.autor, cargaInicialAutor])

    useEffect(() => {
        const cargaInicial = async() => {
            //console.log("autorInfo Selector => ", autorInfo)
            dispatch(leerAutoresBlogAccion(props.autor))
        }

        if(autorInfo.length !== 0 && autoresDelBlog.length === 0 && cargaInicialAutor === true){
            cargaInicial()
        }
        // Si meto cargaInicial aqui, cuando se cambie a otro blog no se actualizan los autores, se queda con el primer visto.
        
        if(autoresDelBlog.length !== 0 && autorCargado === false && autoresDelBlog !== undefined){
            // console.log("autoresDelBlog Selector => ", autoresDelBlog)
            // console.log("autor State => ", autorCargado)
            setAutorCargado(true)
        }
        // console.log("autor State outside => ", autorCargado)
    },[autorInfo, autoresDelBlog, autorCargado, cargaInicialAutor])


    return autorCargado === true &&  (
        <header className="showBlog__header content-width">
            <div className="showBlog__header__tags">
                {
                    props.tags.map((tag, index) => (
                        <div className="showBlog__header__tags-item" key={index}>{tag}</div>
                    ))
                }
            </div>
            <h1 className="showBlog__header__title">{props.titulo}</h1>
            <span className='showBlog__header__por'>Por: </span>

            <div className={autoresDelBlog.length > 1 ? "showBlog__header__autor" : "showBlog__header__autorUnico"}>
                {
                    autorCargado === true && (
                        autoresDelBlog.map((autor, index) => {
                            //console.log("autor a mostrar => ", autor)
                            return(
                                <div className="showBlog__header__autor-item" key={index}>
                                    <img src={autor !== undefined && autor.photoURL} alt="Foto del autor" className="showBlog__header__autor-img"/>
                                    <div className="showBlog__header__autor__info-name">
                                        <span>{autor.name}</span>
                                        <span>{autor.email}</span>
                                    </div>
                                </div>
                            )
                        })
                    )
                }
            </div>

            <div className="showBlog__header__fecha">{moment(props.fecha).format("LL")}</div>
        </header>
    )
}

export default BlogHeader
