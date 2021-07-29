import React, {useState} from 'react';
import { withRouter, useParams } from 'react-router-dom';

import CreateBlog from '../Blog/CreateBlog';
import CrearPodcast from '../Podcast/CrearPodcast';
import Guardados from '../Utilities/Guardados';
import SidebarAdmin from './Sidebar_Admin';
import Blog from '../Blog/Blog';



const Admin = (props) => {
    
    const [contenido,setContenido] = useState(null);
    
    let rutas = useParams();

    React.useEffect( () => {
        if (rutas !== null){
            if (rutas.anio !== undefined) {
                //setContenido => showblog component
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
                    
                    default:
                        setContenido(null)
                        break;
                }
            }
        }
    },[rutas])

    return (
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
