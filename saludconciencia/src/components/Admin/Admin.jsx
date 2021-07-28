import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';

import CreateBlog from '../Blog/CreateBlog';
import CrearPodcast from '../Podcast/CrearPodcast';
import Guardados from '../Utilities/Guardados';
import Sidebar_Admin from './Sidebar_Admin';
import Blog from '../Blog/Blog';



const Admin = (props) => {
    
    const [contenido,setContenido] = useState(null);

    React.useEffect( () => {
        switch (props.item) {
            case 'blog':
                setContenido((<Blog />))
                break;

            case 'crear-blog':
                setContenido((<CreateBlog />))
                break;

            case 'crear-podcast':
                setContenido((<CrearPodcast />))
                break;

            case 'guardados':
                setContenido((<Guardados />))
                break;
        
            default:
                setContenido(null)
                break;
        }
    },[props.item])

    return (
        <div className="content">
            <Sidebar_Admin />
            <nav id="navbar-spy" className="overflow-scroll content__main">
            {
                contenido ? contenido : null
            }
            </nav>
        </div>
    )
}

export default withRouter(Admin)
