/**
 * Admin Component
 * @module AdminComponent
 */
import React, {useState, useEffect} from 'react';
import { withRouter, useParams } from 'react-router-dom';

import CreateBlog from '../Blog/CreateBlog';
import CrearPodcast from '../Podcast/CrearPodcast';
import Guardados from './Guardados';
import SidebarAdmin from './Sidebar_Admin';
import Blog from '../Blog/Blog';
import AdminIndex from './AdminIndex';
import { auth } from '../../firebase';
import Perfil from './Perfil';
import BuscarBlog from '../Blog/BuscarBlog';



/**
 * Componente
 * @param {*} props 
 * @returns (
 * <SidebarAdmin />
 * )
 */
const Admin = (props) => {

    /**
     * @typedef {<Blog />, <CreateBlog />, <CrearPodcast />, <Guardados />, <Perfil />, <AdminIndex />} Contenido
     */
    const [contenido,setContenido] = useState(null);
    /**
     * Parámetros pasados desde URL
     * @type {{anio: string, ruta: string}}
     */
    let rutas = useParams();
    const [showAdmin, setShowAdmin] = useState(false);
    
    useEffect(()=>{
        if(!auth.currentUser){
            props.history.push('/')
        }else{
            setShowAdmin(true)
        }
    },[props.history])

    

    React.useEffect( () => {
        //console.log("ruta Admin => ",rutas)
        if (rutas !== null){
            if (rutas.anio !== undefined) {
                //setContenido => showblog component
                <BuscarBlog />
            } else {
                // No se accedio a un blog especifico
                switch (rutas.ruta) {
                    case 'blog':
                        setContenido((<Blog />))
                        break;
        
                    case 'crearBlog':
                        setContenido((<CreateBlog />))
                        break;
        
                    case 'crearPodcast':
                        setContenido((<CrearPodcast />))
                        break;
        
                    case 'guardados':
                        setContenido((<Guardados />))
                        break;

                    case 'perfil':
                        setContenido((<Perfil />))
                        break;
                    
                    default:
                        setContenido((<AdminIndex />))
                        break;
                }
            }
        } else {
            setContenido((<AdminIndex />))
        }
    },[rutas])

    return showAdmin && (
        <div className="content">
            <SidebarAdmin />
            <div id="navbar-spy" className="overflow-scroll content__main">
            {
                contenido ? contenido : null
            }
            </div>
        </div>
    )
}

export default withRouter(Admin)
