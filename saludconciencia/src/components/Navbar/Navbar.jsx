import React from 'react'
import { NavLink, withRouter } from 'react-router-dom';

import {FaInstagram,FaFacebook,FaYoutube,FaTwitter} from 'react-icons/fa';
import {IoLogoTiktok} from 'react-icons/io5';
import {BiSearch} from 'react-icons/bi';
import {FiMenu} from 'react-icons/fi';


import nav_logo from '../../resources/nav-logo.png';
//import '../../css/style.css'
import '../../sass/_navbar.scss'

const Navbar = () => {
    const linksRS = {
        twitter: "https://twitter.com/EjercicioCien",
        facebook: "https://www.facebook.com/1saludconciencia",
        instagram: "https://www.instagram.com/saludcon.ciencia/",
        youtube: "https://www.youtube.com/channel/UCMU7Cs7WktzjDg5rOZdshDw",
        tiktok: "https://www.tiktok.com/@salud_conciencia?lang=es"
    }
    return (
        <nav className="header sticky-top navbar navbar-expand-md">
            <div className="container-fluid header__content">
                <NavLink className="navbar-brand" to="/">
                    <img src={nav_logo} alt="Salud Conciencia logo" className="logo" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"><FiMenu/></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <nav className="user-nav">
                        <NavLink className="user-nav__link" to="/" >Inicio</NavLink>
                        <NavLink className="user-nav__link" to="/blog" >Blog</NavLink>
                        <NavLink className="user-nav__link" to="/para-ti" >Para ti</NavLink>
                        <NavLink className="user-nav__link" to="/contacto" >Contacto</NavLink>
                    </nav>
                    <div className="user__icons">
                        <div className="user__icons-item"><a href={linksRS.twitter} target="_blank" rel="noreferrer noopener"><FaTwitter className="user__icons-item-icon user__icons-item-icon-twitter"/></a></div>
                        <div className="user__icons-item"><a href={linksRS.tiktok} target="_blank" rel="noreferrer noopener"><IoLogoTiktok className="user__icons-item-icon user__icons-item-icon-tiktok"/></a></div>
                        <div className="user__icons-item">
                            <a href={linksRS.instagram} target="_blank" rel="noreferrer noopener">
                                <svg width="0" height="0">
                                    <radialGradient id="rg" r="150%" cx="30%" cy="107%">
                                        <stop stopColor="#fdf497" offset="0" />
                                        <stop stopColor="#fdf497" offset="0.05" />
                                        <stop stopColor="#fd5949" offset="0.45" />
                                        <stop stopColor="#d6249f" offset="0.6" />
                                        <stop stopColor="#285AEB" offset="0.9" />
                                    </radialGradient>
                                </svg>
                                <FaInstagram className="user__icons-item-icon user__icons-item-icon-instagram"/>
                            </a>
                        </div>
                        <div className="user__icons-item"><a href={linksRS.youtube} target="_blank" rel="noreferrer noopener"><FaYoutube className="user__icons-item-icon user__icons-item-icon-youtube"/></a></div>
                        <div className="user__icons-item"><a href={linksRS.facebook} target="_blank" rel="noreferrer noopener"><FaFacebook className="user__icons-item-icon user__icons-item-icon-facebook"/></a></div>
                    </div>
                    
                    {/* Falta hacer las busquedas */}
                    {/* <form action="#" className="search search__form">
                        <input type="text" className="search__input" placeholder="Buscar"/>
                        <button className="search__button">
                            <BiSearch className="user__icons-item-icon"/>
                        </button>
                    </form> */}
                </div>                
            </div>
        </nav>
    )
}

export default withRouter(Navbar)
