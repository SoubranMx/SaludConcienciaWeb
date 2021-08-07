import React from 'react'
import BlogHeader from './BlogHeader'

const ShowBlog = (props) => {
    return (
        <div className="showBlog__contenido">
            <figure className="showBlog__contenido__portada">
                <img src={props.blog.imgPortada} alt="imagen portada" className="showBlog__contenido__portada-img"/>
            </figure>
            {/* <div className="showBlog__contenido__info"> */}
            <main className="showBlog__main">
                <article className="showBlog__article">
                    <BlogHeader 
                        tags={props.blog.tags} 
                        titulo={props.blog.titulo} 
                        autor={props.blog.autor}
                        fecha={props.blog.fecha}
                    />
                    <div className="showBlog__article__post content-width">
                        <div className="showBlog__article__post-item ">
                            Contenido del editor
                        </div>
                    </div>
                </article>
            </main>
            {/* </div> */}
        </div>
    )
}

export default ShowBlog
