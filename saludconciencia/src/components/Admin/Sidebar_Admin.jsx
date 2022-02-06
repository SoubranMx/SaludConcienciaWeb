import React, { useEffect, useState } from 'react';
import { NavLink, withRouter, useParams} from 'react-router-dom';

import {
    FaYoutube,
} from 'react-icons/fa';

import {FiSettings, FiSave, FiMessageSquare} from 'react-icons/fi';
import {IoPower} from 'react-icons/io5';
import {MdCreate} from 'react-icons/md';
import {RiArticleLine} from 'react-icons/ri';
import { BiCarousel } from "react-icons/bi";


import logo from '../../resources/nav-logo.png';
import logo_sm from '../../resources/nav-logo-sm.png';
import { BiLogOut } from 'react-icons/bi';
import '../../sass/_sidebar.scss';

const SidebarAdmin = () => {
    const [linkActivo, setLinkActivo] = useState(["","","",""]);
    let rutas = useParams();

    const itemActivo = {
        crearBlog: "crearBlog",
        guardado: "guardados",
        mensaje: "mensajes",
        blog: "blog",
        carousel: "carousel"
    }

    useEffect(()=>{
        if(rutas !== undefined ) {
            rutas = rutas.ruta
            // Se inicia como 5 cadenas vacías, para poder mantener un active de acuerdo a donde se está actualmente.
            // Son 5 por la cantidad de itemActivo, si se añaden más, se deben cambiar manualmente ... un diseño un poco flojo, a decir verdad.
            // Hasta este comentario, solo eran 4, no consideré que se podían añadir más módulos. Podría ser un dolor de culo después.
            setLinkActivo(["","","","",""])
            rutas === itemActivo.crearBlog && setLinkActivo(["side-nav__item--active","","","",""])
            rutas === itemActivo.guardado && setLinkActivo(["","side-nav__item--active","","",""])
            rutas === itemActivo.mensaje && setLinkActivo(["","","side-nav__item--active","",""])
            rutas === itemActivo.blog && setLinkActivo(["","","","side-nav__item--active",""])
            rutas === itemActivo.carousel && setLinkActivo(["","","","","side-nav__item--active"])
        } else {
            setLinkActivo(["","","","",""]);
        }
    },[rutas])

    return (
        <>
            <nav className="sidebar">
                <div className="sidebar__header">
                    <img src={logo} alt="Logo Salud Conciencia" className="sidebar__header-logo" />
                    <img src={logo_sm} alt="Logo Salud Conciencia" className="sidebar__header-logo-sm" />
                    <div className="sidebar__header-icon icon-settings">
                        <NavLink to="/admin/perfil"><FiSettings className="sidebar__header-icon-item"/></NavLink>
                    </div>
                </div>
                <ul className="side-nav">
                    {/**CREAR BLOG, lA[0] */}
                    <li className={`side-nav__item ${linkActivo[0]}`}>
                        <NavLink to="/admin/crearBlog" className={`side-nav__link`}>
                            <MdCreate className="side-nav__icon"/>
                            <span>Crear Blog</span>
                        </NavLink>
                    </li>
                    {/**GUARDADOS lA[1] */}
                    <li className={`side-nav__item ${linkActivo[1]}`}>
                        <NavLink to="/admin/guardados" className={`side-nav__link`}>
                            <FiSave className="side-nav__icon"/>
                            <span>Guardados</span>
                        </NavLink>
                    </li>
                    {/**MENSAJES lA[2] */}
                    <li className={`side-nav__item ${linkActivo[2]}`}>
                        <NavLink to="/admin/mensajes" className={`side-nav__link`}>
                            <FiMessageSquare className="side-nav__icon"/>
                            <span>Mensajes</span>
                        </NavLink>
                    </li>
                    {/**BLOG lA[3] */}
                    <li className={`side-nav__item ${linkActivo[3]}`}>
                        <NavLink to="/admin/blog" className={`side-nav__link`}>
                            <RiArticleLine className="side-nav__icon side-nav__icon-article"/>
                            <span>Blogs</span>
                        </NavLink>
                    </li>
                    {/**CAROUSEL lA[4] */}
                    <li className={`side-nav__item ${linkActivo[4]}`}>
                        <NavLink to="/admin/carousel" className={`side-nav__link`}>
                            <BiCarousel className="side-nav__icon side-nav__icon-article"/>
                            <span>Carrusel</span>
                        </NavLink>
                    </li>
                    <li className={`side-nav__item`}>
                        <NavLink to="/admin" className={`side-nav__link`}>
                            <BiLogOut className="side-nav__icon side-nav__icon-article"/>
                            <span>Cerrar Sesión</span>
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
