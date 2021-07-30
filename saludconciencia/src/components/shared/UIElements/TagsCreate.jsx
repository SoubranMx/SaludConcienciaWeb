import React, { useEffect, useState } from 'react'

import {IoAddCircle, IoCloseSharp} from 'react-icons/io5';

const TagsCreate = (props) => {
    const [cantidadTags,setCantidadTags] = useState([]);
    const [valorTag, setValorTag] = useState("");
    const [estilosFix,setEstilosFix] = useState("")

    // useEffect(()=>{
    //     if(cantidadTags.length > 5) {
    //         //setEstilosFix("tags__show__carrousel__item-overflow")
    //     } else {
    //         setEstilosFix("")
    //     }
    // },[cantidadTags])

    useEffect(()=>{
        props.onAddTags(cantidadTags)
    },[cantidadTags])

    useEffect(()=>{if(props.clean){cleanTagsHandler()}},[props.clean])

    const addTargetHandler = () => {
        if(valorTag !== ""){
            if(cantidadTags.length === 0) {
                setCantidadTags([...cantidadTags, valorTag])
            } else {
                if(cantidadTags.filter(tagABuscar => tagABuscar === valorTag).length !== 0){ // Encontro tag?
                    return;
                } else {    //No encontro el tag, continua
                    setCantidadTags([...cantidadTags, valorTag]);
                }
            }
        }
        setValorTag("")
    }

    const tagValueHandler = (e) => {
        e.preventDefault()
        if(e.target.value) {
            setValorTag(e.target.value);
        } else {
            setValorTag("");
        }
    }

    const deleteTagHandler = (index) => {
        let tags = [...cantidadTags];
        let tagEliminado = tags.splice(index,1);
        setCantidadTags(tags);
    }

    const cleanTagsHandler = () => {
        setCantidadTags([])
        setValorTag("")
    }

    return (
        <div className="headerTitle__tags">
            <div className="tags__show">
                <span className="tags__show__title">Tags:</span>
                <div className="tags__show__carrousel">
                    {
                        cantidadTags.length !== 0 ? (
                            cantidadTags.map((tag, index)=>(
                                <div className={`tags__show__carrousel__item ${estilosFix}`} key={index}>
                                    {tag}
                                    <div className="tags__show__carrousel__item-delete" onClick={()=>{deleteTagHandler(index)}}>
                                        <IoCloseSharp className="tags__show__carrousel__item-icon" />
                                    </div>
                                </div>
                            ))
                        ) : null
                    }
                </div>
            </div>
            <div className="tags__add">
                <span className="tags__add__title">Tag: </span>
                <input 
                    type="text"
                    className="tags__add__input"
                    value={valorTag}
                    onChange={tagValueHandler}
                />
                <div className="tags__add__btn" onClick={addTargetHandler}>
                    <IoAddCircle className="tags__add__icon" />
                </div>
            </div>
        </div>
    )
}

export default TagsCreate
