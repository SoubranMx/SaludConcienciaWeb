import React, { useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import {
    FaYoutube,
} from 'react-icons/fa';

import {FiSettings, FiSave} from 'react-icons/fi';
import {IoPower} from 'react-icons/io5';
import {MdCreate} from 'react-icons/md';
import {RiArticleLine} from 'react-icons/ri';


import logo from '../../resources/nav-logo.png';
import logo_sm from '../../resources/nav-logo-sm.png';

const Sidebar_Admin = () => {
    const [linkActivo1, setLinkActivo1] = useState("");
    const [linkActivo2, setLinkActivo2] = useState("");
    const [linkActivo3, setLinkActivo3] = useState("");
    const [linkActivo4, setLinkActivo4] = useState("");
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
                    <li className={`side-nav__item ${linkActivo1}`}>
                        <NavLink 
                            isActive={(match,location)=>{
                                if(!match){
                                    return false;
                                }
                                setLinkActivo1("side-nav__item--active");
                                setLinkActivo2("");
                                setLinkActivo3("");
                                setLinkActivo4("");
                            }} 
                            to="/admin/crearBlog" 
                            className="side-nav__link">
                            <MdCreate className="side-nav__icon"/>
                            <span>Crear Blog</span>
                        </NavLink>
                    </li>
                    <li className={`side-nav__item ${linkActivo2}`}>
                        <NavLink 
                            isActive={(match,location)=>{
                                if(!match){
                                    return false;
                                }
                                setLinkActivo2("side-nav__item--active");
                                setLinkActivo1("");
                                setLinkActivo3("");
                                setLinkActivo4("");
                            }} 
                            to="/admin/guardados" 
                            className="side-nav__link"
                        >
                            <FiSave className="side-nav__icon"/>
                            <span>Guardados</span>
                        </NavLink>
                    </li>
                    <li className={`side-nav__item ${linkActivo3}`}>
                        <NavLink 
                            isActive={(match,location)=>{
                                if(!match){
                                    return false;
                                }
                                setLinkActivo3("side-nav__item--active");
                                setLinkActivo1("");
                                setLinkActivo2("");
                                setLinkActivo4("");
                            }} 
                            to="/admin/crearPodcast"
                            className="side-nav__link"
                        >
                            <FaYoutube className="side-nav__icon"/>
                            <span>Crear Podcast</span>
                        </NavLink>
                    </li>
                    <li className={`side-nav__item ${linkActivo4}`}>
                        <NavLink 
                            isActive={(match,location)=>{
                                if(!match){
                                    return false;
                                }
                                setLinkActivo4("side-nav__item--active");
                                setLinkActivo2("");
                                setLinkActivo3("");
                                setLinkActivo1("");
                            }} 
                            to="/admin/blogs"
                            className="side-nav__link"
                        >
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

export default withRouter(Sidebar_Admin);
