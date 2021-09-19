import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'

import {FaTwitter, FaYoutube, FaInstagram, FaFacebook} from 'react-icons/fa'
import {IoLogoTiktok} from 'react-icons/io5'
import {ReactComponent as Gato} from './gato.svg'

import '../../sass/_footer.scss'

const Footer = () => {
    const param = useLocation();
    const [footerMandatory, setFooterMandatory] = useState(`footer`)
    const [footerGato, setFooterGato] = useState('gato-logo')
    useEffect(()=>{
        if(param.pathname === "/"){
            setFooterMandatory('footer-index')
            setFooterGato('gato-logo-index')
        }
        else{
            setFooterMandatory('footer')
            setFooterGato('gato-logo')
        }
    },[param])

    const linksRS = {
        twitter: "https://twitter.com/EjercicioCien",
        facebook: "https://www.facebook.com/1saludconciencia",
        instagram: "https://www.instagram.com/saludcon.ciencia/",
        youtube: "https://www.youtube.com/channel/UCMU7Cs7WktzjDg5rOZdshDw",
        tiktok: "https://www.tiktok.com/@salud_conciencia?lang=es"
    }

    return (
        <div className={`${footerMandatory}`}>
            <div className={`${footerMandatory}-up`}>
                <div className="lexend lexend__bold lexend__bold-30">
                    Tu curiosidad te trajo hasta aquí.
                </div>
                <div className="poppins poppins__regular poppins__regular-30">
                    Gato aprueba
                </div>
            </div>
            <div className={`${footerMandatory}-down text-green`}>
                <div className={`${footerMandatory}__menu__left`}>
                    <div className={`${footerMandatory}__menu__left-1`}>
                        <div className={`${footerMandatory}__menu__left-1-title lexend lexend__semibold lexend__semibold-15`}>Descubre</div>
                        <div className={`${footerMandatory}__menu__left-1-list poppins poppins__regular poppins__regular-12`}>
                            <span>Podcast</span>
                            <span>Artículos</span>
                            <span>Entrenamientos</span>
                            <span>Eventos</span>
                            <span>Nuestra Historia</span>
                        </div>
                    </div>
                    <div className={`${footerMandatory}__menu__left-2`}>
                        <div className={`${footerMandatory}__menu__left-2-title lexend lexend__semibold lexend__semibold-15`}>Servicios</div>
                        <div className={`${footerMandatory}__menu__left-2-list poppins poppins__regular poppins__regular-12`}>
                            <span>Asesorías de salud</span>
                            <span>Conferencias</span>
                            <span>Para Escuelas</span>
                            <span>Para Empresas</span>
                            <span>Colaboraciones</span>

                        </div>
                    </div>
                </div>
                <div className={`${footerMandatory}__menu__right`}>
                    <div className={`${footerMandatory}__menu__right-1 lexend lexend__semibold lexend__semibold-20`}>
                        <span>Síguenos en&nbsp;</span><span>redes sociales</span>
                    </div>
                    <div className={`${footerMandatory}__menu__icons`}>
                        <div className={`${footerMandatory}__menu__icons-item`}><a href={linksRS.twitter} target="_blank" rel="noreferrer noopener"><FaTwitter className={`${footerMandatory}__menu__icons-item-icon ${footerMandatory}__menu__icons-item-icon-twitter`}/></a></div>
                        <div className={`${footerMandatory}__menu__icons-item`}><a href={linksRS.tiktok} target="_blank" rel="noreferrer noopener"><IoLogoTiktok className={`${footerMandatory}__menu__icons-item-icon ${footerMandatory}__menu__icons-item-icon-tiktok`}/></a></div>
                        <div className={`${footerMandatory}__menu__icons-item`}>
                            <a href={linksRS.instagram} target="_blank" rel="noreferrer noopener">
                                <svg width="0" height="0">
                                    <radialGradient id="rg-footer" r="150%" cx="30%" cy="107%">
                                        <stop stopColor="#fdf497" offset="0" />
                                        <stop stopColor="#fdf497" offset="0.05" />
                                        <stop stopColor="#fd5949" offset="0.45" />
                                        <stop stopColor="#d6249f" offset="0.6" />
                                        <stop stopColor="#285AEB" offset="0.9" />
                                    </radialGradient>
                                </svg>
                                <FaInstagram className={`${footerMandatory}__menu__icons-item-icon ${footerMandatory}__menu__icons-item-icon-instagram`} />
                            </a>
                        </div>
                        <div className={`${footerMandatory}__menu__icons-item`}><a href={linksRS.youtube} target="_blank" rel="noreferrer noopener"><FaYoutube className={`${footerMandatory}__menu__icons-item-icon ${footerMandatory}__menu__icons-item-icon-youtube`}/></a></div>
                        <div className={`${footerMandatory}__menu__icons-item`}><a href={linksRS.facebook} target="_blank" rel="noreferrer noopener"><FaFacebook className={`${footerMandatory}__menu__icons-item-icon ${footerMandatory}__menu__icons-item-icon-facebook`}/></a></div>
                    </div>
                    <div className={`${footerMandatory}__menu__right-3 lexend lexend__semibold lexend__semibold-20`}>
                        <span>¿Quieres decirnos&nbsp;</span><span>algo?</span>
                    </div>
                    <div className={`${footerMandatory}__menu__right-4 poppins poppins__regular poppins__regular-20`}>
                        saludconciencia@outlook.es
                    </div>
                </div>
            </div>
            <div className="footer__legal">
                <div className="footer__legal__name">
                    &copy; 2021 por Uriel Soubran. Derechos reservados.
                </div>
                <div className="footer__legal__contact">
                    Contacto: uriel.soubran@gmail.com
                </div>
            </div>
            {/* Gato png */}
            <Gato className={`${footerGato}`}/>
        </div>
    )
}

export default Footer
