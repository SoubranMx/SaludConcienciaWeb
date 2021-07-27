import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom';

import {
    TiSocialFacebook,
    TiSocialTwitter,

} from 'react-icons/ti';
import {FaInstagram,FaFacebook,FaYoutube,FaTwitter} from 'react-icons/fa';
import {IoLogoTiktok} from 'react-icons/io5';
import {BiSearch} from 'react-icons/bi';

import nav_logo from './resources/nav-logo.png';
import '../../css/style.css'

const Navbar = () => {
    return (
        <header className="header">
            <img src={nav_logo} alt="Salud Conciencia logo" class="logo" />
            <nav className="user-nav">
                <div ><NavLink className="user-nav__link" to="/" >Inicio</NavLink></div>
                <div ><NavLink className="user-nav__link" to="/blog" >Blog</NavLink></div>
                <div ><NavLink className="user-nav__link" to="/podcast" >Podcast</NavLink></div>
                <div ><NavLink className="user-nav__link" to="/para-ti" >Para ti</NavLink></div>
            </nav>
            <div className="user__icons">
                <div className="user__icons-item"><NavLink to="/"><FaTwitter className="user__icons-item-icon user__icons-item-icon-twitter"/></NavLink></div>
                <div className="user__icons-item"><NavLink to="/"><IoLogoTiktok className="user__icons-item-icon user__icons-item-icon-tiktok"/></NavLink></div>
                <div className="user__icons-item"><NavLink to="/"><FaInstagram className="user__icons-item-icon user__icons-item-icon-instagram"/></NavLink></div>
                <div className="user__icons-item"><NavLink to="/"><FaYoutube className="user__icons-item-icon user__icons-item-icon-youtube"/></NavLink></div>
            </div>
            <form action="#" className="search">
                <input type="text" className="search__input" placeholder="Buscar"/>
                <button className="search__button">
                    <BiSearch className="user__icons-item-icon"/>
                </button>
            </form>
        </header>
    )
}

export default withRouter(Navbar)
