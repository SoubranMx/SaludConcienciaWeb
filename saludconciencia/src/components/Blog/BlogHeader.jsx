import React, {useState,useEffect} from 'react'
import { db } from '../../firebase'
import moment from 'moment'
import '../../sass/_blogHeader.scss'

const BlogHeader = (props) => {
    const [displayName, setDisplayName] = useState("Julián Uriarte")
    const [urlAutorImg, setUrlAutorImg] = useState("")
    const [autor, setAutor] = useState("")
    useEffect(() => {
        const cargaInicial = async() => {
            setAutor(await db.collection('admin').doc(props.autor).get())
        }
        cargaInicial()
    },[props.autor])
    useEffect(()=>{
        const cargarDatosAutor = () => {
            setDisplayName(autor.data().displayName)
            setUrlAutorImg(autor.data().photoUrl)
        }
        if(autor !== "")
            cargarDatosAutor()
    },[autor])

    return (
        <header className="showBlog__header content-width">
            <div className="showBlog__header__tags">
                {
                    props.tags.map((tag, index) => (
                        <div className="showBlog__header__tags-item" key={index}>{tag}</div>
                    ))
                }
            </div>
            <h1 className="showBlog__header__title">{props.titulo}</h1>
            <div className="showBlog__header__autor">
                <img src={urlAutorImg} alt="Foto del autor" className="showBlog__header__autor-img"/>
                <div className="showBlog__header__autor__info">
                    <div className="showBlog__header__autor__info-name">Por: <span>{displayName}</span></div>
                    <div className="showBlog__header__autor__info-fecha">{moment(props.fecha).format("LL")}</div>
                </div>
            </div>
        </header>
    )
}

export default BlogHeader
