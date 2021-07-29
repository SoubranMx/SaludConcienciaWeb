import React, { useEffect, useState } from 'react';
import { NavLink, withRouter, useParams} from 'react-router-dom';

import {
    FaYoutube,
} from 'react-icons/fa';

import {FiSettings, FiSave} from 'react-icons/fi';
import {IoPower} from 'react-icons/io5';
import {MdCreate} from 'react-icons/md';
import {RiArticleLine} from 'react-icons/ri';


import logo from '../../resources/nav-logo.png';
import logo_sm from '../../resources/nav-logo-sm.png';

const SidebarAdmin = () => {
    const [linkActivo, setLinkActivo] = useState(["","","",""]);
    const [params, setParams] = useState();
    let rutas = useParams();

    const itemActivo = {
        crearBlog: "createBlog",
        guardado: "guardados",
        podcast: "crearPodcast",
        blog: "blog"
    }

    useEffect(()=>{
        if(rutas !== undefined ) {
            rutas = rutas.ruta
            setParams(rutas)
            setLinkActivo(["","","",""])
            rutas === itemActivo.crearBlog && setLinkActivo(["side-nav__item--active","","",""])
            rutas === itemActivo.guardado && setLinkActivo(["","side-nav__item--active","",""])
            rutas === itemActivo.podcast && setLinkActivo(["","","side-nav__item--active",""])
            rutas === itemActivo.blog && setLinkActivo(["","","","side-nav__item--active"])
        } else {
            setParams(null);
            setLinkActivo(["","","",""]);
        }
    },[rutas])

    return (
        <>
            <nav className="sidebar">
                <div className="sidebar__header">
                    <img src={logo} alt="Logo Salud Conciencia" className="sidebar__header-logo" />
                    <img src={logo_sm} alt="Logo Salud Conciencia" className="sidebar__header-logo-sm" />
                    <div className="sidebar__header-icon icon-settings">
                        <NavLink to="/admin"><FiSettings className="sidebar__header-icon-item"/></NavLink>
                    </div>
                </div>
                <ul className="side-nav">
                    <li className={`side-nav__item ${linkActivo[0]}`}>
                        <NavLink to="/admin/crearBlog" className={`side-nav__link`}>
                            <MdCreate className="side-nav__icon"/>
                            <span>Crear Blog</span>
                        </NavLink>
                    </li>
                    <li className={`side-nav__item ${linkActivo[1]}`}>
                    <NavLink to="/admin/guardados" className={`side-nav__link`}>
                            <FiSave className="side-nav__icon"/>
                            <span>Guardados</span>
                        </NavLink>
                    </li>
                    <li className={`side-nav__item ${linkActivo[2]}`}>
                    <NavLink to="/admin/crearPodcast" className={`side-nav__link`}>
                            <FaYoutube className="side-nav__icon"/>
                            <span>Crear Podcast</span>
                        </NavLink>
                    </li>
                    <li className={`side-nav__item ${linkActivo[3]}`}>
                    <NavLink to="/admin/blog" className={`side-nav__link`}>
                            <RiArticleLine className="side-nav__icon side-nav__icon-article"/>
                            <span>Blogs</span>
                        </NavLink>
                    </li>
                </ul>
                <div className="legal">
                    &copy; 2021 por Uriel Soubran. Derechos reservados.
                </div>
            </nav>

            <div className="settings__modal" style={{display: "none"}}>
                <div className="settings__modal-user">
                    Perfil
                </div>
                <div className="settings__modal__sidebarSetting">
                    <span className="settings__modal__sidebarSetting-text">Ocultar barra: </span>
                    <div className="settings__modal__sidebarSetting__checkbox">
                        <IoPower className="settings__modal__sidebarSetting__checkbox-icon"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(SidebarAdmin);
