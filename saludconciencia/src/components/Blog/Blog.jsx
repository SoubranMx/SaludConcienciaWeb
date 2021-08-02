import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import RecentBlogs from './RecentBlogs'
import LatestBlogs from './LatestBlogs'
import { cargarMasBlogsAccion, leerBlogsAccion, leerBlogsPublicarAccion } from '../../redux/blogsDucks'

const DUMMY_BLOGS = [
    {
        id: 1,
        title: "Titulo perronsisimo bien vergas super ultra largo como no hijo de su pinche madre ",
        author: "Julian Uriarte",
        url: "https://i0.wp.com/mynintendonews.com/wp-content/uploads/2021/07/pokemon_go_eevee.jpg?resize=980%2C460&ssl=1",
        date: 525252,
        tags: [
            {id: "t1", name:"Comida"},
            {id: "t2", name:"Ejercicio"},
            {id: "t3", name:"Bienestar"}
        ]
    },
    {
        id: 2,
        title: "Titulo perronsisimo bien vergas apoco no carnal",
        author: "Julian Uriarte",
        url: "https://i1.wp.com/mynintendonews.com/wp-content/uploads/2019/08/3ds_family.jpg?resize=920%2C460&ssl=1",
        date: 525252,
        tags: [
            {id: "t1", name:"Ejercicio"},
            {id: "t2", name:"Bienestar"},
            {id: "t2", name:"Bienestar"},
        ]
    },
    {
        id: 3,
        title: "Titulo perronsisimo bien vergas apoco no carnal",
        author: "Julian Uriarte",
        url: "https://i0.wp.com/mynintendonews.com/wp-content/uploads/2021/07/animal_crossing_new_horizons_fireworks.jpeg?resize=980%2C460&ssl=1",
        date: 525252,
        tags: [
            {id: "t1", name:"Comida"},
            {id: "t2", name:"Diversión"},
            {id: "t3", name:"Bienestar"},
            {id: "t4", name:"Salud"},
        ]
    },
    {
        id: 4,
        title: "Titulo perronsisimo bien vergas apoco no carnal",
        author: "Julian Uriarte",
        url: "https://i0.wp.com/mynintendonews.com/wp-content/uploads/2021/07/monster_hunter_rise_okami.jpeg?resize=980%2C460&ssl=1",
        date: 525252,
        tags: [
            {id: "t1", name:"Salud Mental"},
            {id: "t2", name:"Diversión"},
            {id: "t3", name:"Rutinas"}
        ]
    },
    {
        id: 5,
        title: "Titulo perronsisimo bien vergas apoco no carnal",
        author: "Julian Uriarte",
        url: "https://i0.wp.com/mynintendonews.com/wp-content/uploads/2017/10/reggie_techcrunch.png?resize=980%2C460&ssl=1",
        date: 525252,
        tags: [
            {id: "t1", name:"Salud"},
            {id: "t2", name:"Bienestar"},
        ]
    },
    {
        id: 6,
        title: "Titulo perronsisimo bien vergas apoco no carnal",
        author: "Julian Uriarte",
        url: "https://i2.wp.com/mynintendonews.com/wp-content/uploads/2021/06/pokemon_unite-2.png?resize=980%2C460&ssl=1",
        date: 525252,
        tags: [
            {id: "t1", name:"Bienestar"},
            {id: "t2", name:"Comida"},
            {id: "t3", name:"Rutinas"},
            {id: "t4", name:"Ejercicio"},
        ]
    },
    {
        id: 7,
        title: "Titulo perronsisimo bien vergas apoco no carnal",
        author: "Julian Uriarte",
        url: "https://i0.wp.com/mynintendonews.com/wp-content/uploads/2021/04/Streets_of_Rage_4_Mr_X_Nightmare.jpg?resize=980%2C460&ssl=1",
        date: 525252,
        tags: [
            {id: "t1", name:"Psicología"},
            {id: "t2", name:"Depresión"},
            {id: "t3", name:"Rutinas"}
        ]
    },
    {
        id: 8,
        title: "Titulo perronsisimo bien vergas apoco no carnal",
        author: "Julian Uriarte",
        url: "https://i0.wp.com/mynintendonews.com/wp-content/uploads/2021/02/zelda_skyward_sword_hd-1.jpg?resize=2000%2C1000&ssl=1",
        date: 525252,
        tags: [
            {id: "t1", name:"Ejercicio"},
            {id: "t2", name:"Comida"},
            {id: "t3", name:"Rutinas"}
        ]
    },
    {
        id: 9,
        title: "Titulo perronsisimo bien vergas apoco no carnal",
        author: "Julian Uriarte",
        url: "https://i2.wp.com/mynintendonews.com/wp-content/uploads/2021/07/baldo_the_guardian_owls.jpg?resize=980%2C460&ssl=1",
        date: 525252,
        tags: [
            {id: "t1", name:"Planeación"},
            {id: "t2", name:"Futuro"},
            {id: "t3", name:"Rutinas"}
        ]
    },
    {
        id: 10,
        title: "Titulo perronsisimo bien vergas apoco no carnal",
        author: "Julian Uriarte",
        url: "https://i0.wp.com/mynintendonews.com/wp-content/uploads/2021/07/bulbasaur.jpg?resize=980%2C460&ssl=1",
        date: 525252,
        tags: [
            {id: "t1", name:"Ejercicio"},
            {id: "t2", name:"Rutinas"},
            {id: "t3", name:"Rutinas"}
        ]
    },
]


const Blog = () => {
    let clipBlogs;
    
    const dispatch = useDispatch()
    const blogsFirebase = useSelector(store => store.blogs.blogsPublished)   //Regresa un array
    const [blogsHelper, setBlogsHelper] = useState(null)
    const [blogsRecent, setBlogsRecent] = useState(null)
    const [blogsLatest, setBlogsLatest] = useState(null)
    let blogsLet = null;
    let blogsLetAux = null;
    


    useEffect(()=>{
        const cargarBlogs = () => {
            dispatch(leerBlogsPublicarAccion())
        }

        const stringifyFirebase = () => {
            setBlogsHelper(JSON.parse(JSON.stringify(blogsFirebase)))
        }
        
        const splitArrays = () => {
            if(blogsHelper.length <= 2 && blogsRecent === null){
                setBlogsRecent([...blogsHelper])
            } else if (blogsHelper.length > 2 && blogsRecent === null && blogsLatest === null){
                blogsLet = [...blogsHelper]         
                blogsLetAux = blogsLet.splice(2)    //Deberia tener los 2 primeros y blogsLet quedarse con los demas
                setBlogsRecent([...blogsLetAux])
                setBlogsLatest([...blogsLet])
            }
        }
        
        if(blogsFirebase === undefined){
            cargarBlogs()
        } else if(blogsHelper === null){
            stringifyFirebase()
        } else if(blogsHelper !== null){
            //Ya cambio
            console.log("blogsHelper => ", blogsHelper)
            splitArrays()
        }
    },[blogsFirebase, blogsHelper, blogsLet, blogsRecent, blogsLetAux])

    useEffect(()=>{
        console.log("blogsHelper useEffect => ", blogsLet)
    },[blogsLet])


    const cargarMasBlogsHandler = () => {
        dispatch(cargarMasBlogsAccion())
    }

    return blogsFirebase !== undefined ? (
        <div className="container-md container-sm-fluid mt-3" data-bs-spy="scroll" data-bs-target="#navbar-spy">
            <div className="d-flex flex-column blogBoxShadow">
                {
                    blogsRecent !== null && (
                        <RecentBlogs 
                            //key={blogsRecent[0].id}
                            //blogs = {blogsRecent}
                        />
                    )
                }
                {
                    blogsLatest !== null ? (
                        <LatestBlogs items={blogsLatest} />
                    ) : (
                        "Cargando..."
                    )
                }
                

                <button className="masBlogs mt-3" onClick={cargarMasBlogsHandler}>Cargar más</button>
            </div>
        </div>
    ) : (
        <div className="container d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
            <div className="spinner-border" role="status" style={{width: "3rem", height: "3rem"}}>
                <span className="visually-hidden">Cargando...</span>
            </div>
        </div>
    )
}

export default Blog
