import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'

import {FaTwitter, FaYoutube, FaInstagram} from 'react-icons/fa'
import {IoLogoTiktok} from 'react-icons/io5'
import {ReactComponent as Gato} from './gato.svg'

import '../../sass/_footer.scss'

const Footer = () => {
    const param = useLocation();
    const [footerMandatory, setFooterMandatory] = useState(`footer`)
    useEffect(()=>{
        if(param.pathname === "/")
            setFooterMandatory('footer-index')
        else
            setFooterMandatory('footer')
    },[param])

    return (
        <div className={`${footerMandatory}`}>
            <div className="footer-up">
                <div className="lexend lexend__bold lexend__bold-30">
                    Tu curiosidad te trajo hasta aquí.
                </div>
                <div className="poppins poppins__regular poppins__regular-30">
                    Gato aprueba
                </div>
            </div>
            <div className="footer-down text-green">
                <div className="footer__menu__left">
                    <div className="footer__menu__left-1">
                        <div className="footer__menu__left-1-title lexend lexend__semibold lexend__semibold-15">Descubre</div>
                        <div className="footer__menu__left-1-list poppins poppins__regular poppins__regular-12">
                            <span>Podcast</span>
                            <span>Artículos</span>
                            <span>Entrenamientos</span>
                            <span>Eventos</span>
                            <span>Nuestra Historia</span>
                        </div>
                    </div>
                    <div className="footer__menu__left-2">
                        <div className="footer__menu__left-2-title lexend lexend__semibold lexend__semibold-15">Servicios</div>
                        <div className="footer__menu__left-2-list poppins poppins__regular poppins__regular-12">
                            <span>Asesorías de salud</span>
                            <span>Conferencias</span>
                            <span>Para Escuelas</span>
                            <span>Para Empresas</span>
                            <span>Colaboraciones</span>
                        </div>
                    </div>
                </div>
                <div className="footer__menu__right">
                    <div className="footer__menu__right-1 lexend lexend__semibold lexend__semibold-20">
                        <span>Síguenos en</span><span>redes sociales</span>
                    </div>
                    <div className="footer__menu__icons">
                        <div className="footer__menu__icons-item"><Link to="/"><FaTwitter className="footer__menu__icons-item-icon footer__menu__icons-item-icon-twitter"/></Link></div>
                        <div className="footer__menu__icons-item"><Link to="/"><IoLogoTiktok className="footer__menu__icons-item-icon footer__menu__icons-item-icon-tiktok"/></Link></div>
                        <div className="footer__menu__icons-item">
                            <Link to="/">
                                <svg width="0" height="0">
                                    <radialGradient id="rg-footer" r="150%" cx="30%" cy="107%">
                                        <stop stopColor="#fdf497" offset="0" />
                                        <stop stopColor="#fdf497" offset="0.05" />
                                        <stop stopColor="#fd5949" offset="0.45" />
                                        <stop stopColor="#d6249f" offset="0.6" />
                                        <stop stopColor="#285AEB" offset="0.9" />
                                    </radialGradient>
                                </svg>
                                <FaInstagram className="footer__menu__icons-item-icon footer__menu__icons-item-icon-instagram" />
                            </Link>
                        </div>
                        <div className="footer__menu__icons-item"><Link to="/"><FaYoutube className="footer__menu__icons-item-icon footer__menu__icons-item-icon-youtube"/></Link></div>
                    </div>
                    <div className="footer__menu__right-3 lexend lexend__semibold lexend__semibold-20">
                        <span>¿Quieres decirnos</span><span>algo?</span>
                    </div>
                    <div className="footer__menu__right-4 poppins poppins__regular poppins__regular-20">
                        saludconciencia@outlook.es
                    </div>
                </div>
            </div>
            {/* Gato png */}
            <Gato className="gato-logo"/>
        </div>
    )
}

export default Footer
