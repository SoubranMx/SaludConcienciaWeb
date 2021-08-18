import React from 'react'
import BlogHeader from './BlogHeader'
import '../../sass/_showBlog.scss'

const ShowBlog = (props) => {
    
    return (
        <div className="showBlog__contenido">
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
                    </div>
                </article>
            </main>
        </div>
    )
}

export default ShowBlog
