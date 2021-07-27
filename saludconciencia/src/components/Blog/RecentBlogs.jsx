import React, { useState, useEffect } from 'react'




const RecentBlogs = (props) => {

    return (
        <div className="image-container">
            <div className="image-container-first">
                <img className="imageCard" src={props.urlUno} alt="" />
                <div className="image-container__info">
                    <div className="image-container__info-tags">
                        <div className="image-container__info-tags-item">{props.tagsUno[0].name}</div>
                        <div className="image-container__info-tags-item">{props.tagsUno[1].name}</div>
                        <div className="image-container__info-tags-item">{props.tagsUno[2].name}</div>
                    </div>
                    <h3 className="image-container__info-title">{props.titleUno}</h3>
                    <div className="image-container__info__details">
                        <h3 className="image-container__info-author">Por: {props.authorUno}</h3>
                    </div>
                </div>
            </div>
            <div className="image-container-second">
                <img className="imageCard" src={props.urlDos} alt="" />
                <div className="image-container__info">
                    <div className="image-container__info-tags">
                        <div className="image-container__info-tags-item">{props.tagsDos[0].name}</div>
                        <div className="image-container__info-tags-item">{props.tagsDos[1].name}</div>
                        <div className="image-container__info-tags-item">{props.tagsDos[2].name}</div>
                    </div>
                    <h3 className="image-container__info-title">{props.titleDos}</h3>
                    <div className="image-container__info__details">
                        <h3 className="image-container__info-author">Por: {props.authorDos}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentBlogs
