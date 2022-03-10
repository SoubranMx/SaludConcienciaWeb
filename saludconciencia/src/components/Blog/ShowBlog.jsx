import React, {useEffect, useRef} from 'react'
import {
    EmailShareButton,
    FacebookShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton
} from "react-share";
import {
    EmailIcon,
    FacebookIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsappIcon,
} from "react-share";
import { Helmet } from 'react-helmet';
import moment from 'moment';

import BlogHeader from './BlogHeader'
import '../../sass/_showBlog.scss'

/**
 * 
 * props => contiene el blog completo, blogShow => {uid, titulo, tipo, imgPortada, editor, link, descripcion, autor, tags, fecha}
 */
const ShowBlog = (props) => {
    //Para los botones de social media
    const socialIconSize = `4.0rem`;
    const url = `https://saludconciencia.com.mx/blog/${props.blog.link}`;

    const articulo = useRef(null)




    useEffect(()=>{
        articulo !== null && articulo.current.scrollIntoView({behavior: 'smooth'})
    },[articulo])

    const getSubListUnordered = (items) => {
        let jsx;
        items.map(item => {
            jsx += <li className="article__unorderedList-subitem-item">
                {item.content}
                {item.items !== [] && <ul className="article__unorderedList-subitem">{getSubListUnordered(item.items)}</ul>}
            </li>
        })
        return jsx;
    }
    
    const getListsUnordered = (items) => {
        /**
         * items => { content: algo, items: [] | [{items}]}
         */
        let jsx;
        items.map(item => {
            jsx += <li className="article__unorderedList-item">
                {item.content}
                {item.items !== [] && <ul className="article__unorderedList-subitem"> {getSubListUnordered(item.items)} </ul>}
            </li>
        })
        
    }

    return (
        <div className="showBlog__contenido" ref={articulo}>
            <figure className="showBlog__contenido__portada">
                <img src={props.blog.imgPortada} alt="imagen portada" className="showBlog__contenido__portada-img"/>
            </figure>
            <main className="showBlog__main">
                <article className="showBlog__article">
                    <BlogHeader 
                        tags={props.blog.tags} 
                        titulo={props.blog.titulo} 
                        autor={props.blog.autor}
                        fecha={props.blog.fecha}
                    />
                    <div className="showBlog__article__post content-width">
                        {
                            props.blog.editor.blocks.map(block => {
                                switch(block.type){
                                    case "paragraph":
                                        return (
                                            <div 
                                                className="showBlog__article__post-item article__paragraph"
                                                key={block.id}
                                                dangerouslySetInnerHTML={{__html: block.data.text}}
                                                style={{textAlign: block.data.alignment}}
                                            >
                                            </div>
                                        )

                                    case "image":
                                        let showImageCaption = false;
                                        if(block.caption !== "")
                                            showImageCaption = true;
                                        
                                        if(showImageCaption){
                                            return (
                                                <figure className="showBlog__article__post-item article__img" key={block.id}>
                                                    <img src={block.data.url} style={{maxWidth: "100%", maxHeight: "auto"}}/>
                                                    <span
                                                        dangerouslySetInnerHTML={{__html: block.data.caption}}
                                                    ></span>
                                                </figure>

                                            )
                                        } else {
                                            return (
                                                <figure className="showBlog__article__post-item article__img" key={block.id}>
                                                    <img src={block.data.url} style={{maxWidth: "100%", maxHeight: "auto"}}/>
                                                </figure>
                                            )
                                        }

                                    case "header":
                                        switch(block.data.level){
                                            case 1:
                                                return (<h1 className="showBlog__article__post-item article__header" key={block.id}>{block.data.text}</h1>)
                                            case 2:
                                                return (<h2 className="showBlog__article__post-item article__header" key={block.id}>{block.data.text}</h2>)
                                            case 3:
                                                return (<h3 className="showBlog__article__post-item article__header" key={block.id}>{block.data.text}</h3>)
                                            case 4:
                                                return (<h4 className="showBlog__article__post-item article__header" key={block.id}>{block.data.text}</h4>)
                                            case 5:
                                                return (<h5 className="showBlog__article__post-item article__header" key={block.id}>{block.data.text}</h5>)
                                            case 6:
                                                return (<h6 className="showBlog__article__post-item article__header" key={block.id}>{block.data.text}</h6>)
                                            default:
                                                break;
                                        }
                                        break;

                                    case "list":
                                        // block.data.map(item => {
                                        //     if(item.style === "unordered"){
                                        //         return(
                                        //             <ul className="showBlog__article__post-item article__unorderedList">
                                        //                 {
                                        //                     getListsUnordered(item.items)
                                        //                 }
                                        //             </ul>
                                        //         )
                                        //     }else{

                                        //     }
                                        // })
                                        return "List"

                                    case "quote":
                                        return "quote"

                                    case "table":
                                        return "table"

                                    case "embed":
                                        return "embed"
                                        
                                    default:
                                        break;
                                }
                            })
                        }
                    
                    {/* Social Share */}
                    <article className="showBlog__share">
                        <div className="showBlog__share-title">¡Comparte el blog!</div>
                        <div className="showBlog__share__items">
                            <FacebookShareButton
                                url={url}
                                quote={`¡Mira el blog de Salud Conciencia! | ${props.blog.titulo}`}
                                hashtag={`${props.blog.tags.forEach((tag)=>{console.log(tag); return tag;})}`}
                            >
                                <FacebookIcon round={true} size={socialIconSize}/>
                            </FacebookShareButton>

                            <TwitterShareButton
                                url={url}
                                title={props.blog.titulo}
                                via={`EjercicioCien`}
                                // hashtags={props.blog.tags}
                                //related={array de cuentas?}
                                
                            >
                                <TwitterIcon round={true} size={socialIconSize}/>
                            </TwitterShareButton>

                            <WhatsappShareButton
                                url={url}
                                title={props.blog.titulo}
                                separator={" "}
                            >
                                <WhatsappIcon round={true} size={socialIconSize}/>
                            </WhatsappShareButton>

                            <TelegramShareButton
                                url={url}
                                title={props.blog.titulo}
                            >
                                <TelegramIcon round={true} size={socialIconSize}/>
                            </TelegramShareButton>

                            <EmailShareButton
                                url={url}
                                subject={`Salud Conciencia | ${props.blog.titulo}`}
                                body={`Te comparto este articulo de Salud Conciencia`}
                                separator={" "}
                            >
                                <EmailIcon round={true} size={socialIconSize}/>
                            </EmailShareButton>
                        </div>
                    </article>
                    </div>
                </article>
            </main>
            <Helmet>
                <title>Salud Conciencia - {props.blog.titulo}</title>
                <meta name="description" content={props.blog.descripcion} />
                <meta property="og:locale" content="es_LA" />
                <meta property="og:url" content={url} />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={`${props.blog.titulo} | Salud Conciencia`} />
                <meta property="og:description" content={`${props.blog.descripcion} | Salud Conciencia`} />
                <meta property="og:image" content={props.blog.imgPortada} />
                <meta property="og:site_name" content="Salud Conciencia" />
                <meta property="og:image:width" content="640" />
                <meta property="og:image:height" content="480" />
                <meta property="og:article:published_time" content={moment(props.blog.fecha).format()} />
            </Helmet>
        </div>
    )
}

export default ShowBlog
