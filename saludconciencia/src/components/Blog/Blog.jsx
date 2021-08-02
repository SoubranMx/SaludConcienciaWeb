import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import RecentBlogs from './RecentBlogs'
import LatestBlogs from './LatestBlogs'
import { cargarMasBlogsAccion, leerBlogsPublicarAccion } from '../../redux/blogsDucks'

// const DUMMY_BLOGS = [
//     {
//         id: 1,
//         title: "Titulo perronsisimo bien vergas super ultra largo como no hijo de su pinche madre ",
//         author: "Julian Uriarte",
//         url: "https://i0.wp.com/mynintendonews.com/wp-content/uploads/2021/07/pokemon_go_eevee.jpg?resize=980%2C460&ssl=1",
//         date: 525252,
//         tags: [
//             {id: "t1", name:"Comida"},
//             {id: "t2", name:"Ejercicio"},
//             {id: "t3", name:"Bienestar"}
//         ]
//     },
//     {
//         id: 2,
//         title: "Titulo perronsisimo bien vergas apoco no carnal",
//         author: "Julian Uriarte",
//         url: "https://i1.wp.com/mynintendonews.com/wp-content/uploads/2019/08/3ds_family.jpg?resize=920%2C460&ssl=1",
//         date: 525252,
//         tags: [
//             {id: "t1", name:"Ejercicio"},
//             {id: "t2", name:"Bienestar"},
//             {id: "t2", name:"Bienestar"},
//         ]
//     },
//     {
//         id: 3,
//         title: "Titulo perronsisimo bien vergas apoco no carnal",
//         author: "Julian Uriarte",
//         url: "https://i0.wp.com/mynintendonews.com/wp-content/uploads/2021/07/animal_crossing_new_horizons_fireworks.jpeg?resize=980%2C460&ssl=1",
//         date: 525252,
//         tags: [
//             {id: "t1", name:"Comida"},
//             {id: "t2", name:"Diversión"},
//             {id: "t3", name:"Bienestar"},
//             {id: "t4", name:"Salud"},
//         ]
//     },
//     {
//         id: 4,
//         title: "Titulo perronsisimo bien vergas apoco no carnal",
//         author: "Julian Uriarte",
//         url: "https://i0.wp.com/mynintendonews.com/wp-content/uploads/2021/07/monster_hunter_rise_okami.jpeg?resize=980%2C460&ssl=1",
//         date: 525252,
//         tags: [
//             {id: "t1", name:"Salud Mental"},
//             {id: "t2", name:"Diversión"},
//             {id: "t3", name:"Rutinas"}
//         ]
//     },
//     {
//         id: 5,
//         title: "Titulo perronsisimo bien vergas apoco no carnal",
//         author: "Julian Uriarte",
//         url: "https://i0.wp.com/mynintendonews.com/wp-content/uploads/2017/10/reggie_techcrunch.png?resize=980%2C460&ssl=1",
//         date: 525252,
//         tags: [
//             {id: "t1", name:"Salud"},
//             {id: "t2", name:"Bienestar"},
//         ]
//     },
//     {
//         id: 6,
//         title: "Titulo perronsisimo bien vergas apoco no carnal",
//         author: "Julian Uriarte",
//         url: "https://i2.wp.com/mynintendonews.com/wp-content/uploads/2021/06/pokemon_unite-2.png?resize=980%2C460&ssl=1",
//         date: 525252,
//         tags: [
//             {id: "t1", name:"Bienestar"},
//             {id: "t2", name:"Comida"},
//             {id: "t3", name:"Rutinas"},
//             {id: "t4", name:"Ejercicio"},
//         ]
//     },
//     {
//         id: 7,
//         title: "Titulo perronsisimo bien vergas apoco no carnal",
//         author: "Julian Uriarte",
//         url: "https://i0.wp.com/mynintendonews.com/wp-content/uploads/2021/04/Streets_of_Rage_4_Mr_X_Nightmare.jpg?resize=980%2C460&ssl=1",
//         date: 525252,
//         tags: [
//             {id: "t1", name:"Psicología"},
//             {id: "t2", name:"Depresión"},
//             {id: "t3", name:"Rutinas"}
//         ]
//     },
//     {
//         id: 8,
//         title: "Titulo perronsisimo bien vergas apoco no carnal",
//         author: "Julian Uriarte",
//         url: "https://i0.wp.com/mynintendonews.com/wp-content/uploads/2021/02/zelda_skyward_sword_hd-1.jpg?resize=2000%2C1000&ssl=1",
//         date: 525252,
//         tags: [
//             {id: "t1", name:"Ejercicio"},
//             {id: "t2", name:"Comida"},
//             {id: "t3", name:"Rutinas"}
//         ]
//     },
//     {
//         id: 9,
//         title: "Titulo perronsisimo bien vergas apoco no carnal",
//         author: "Julian Uriarte",
//         url: "https://i2.wp.com/mynintendonews.com/wp-content/uploads/2021/07/baldo_the_guardian_owls.jpg?resize=980%2C460&ssl=1",
//         date: 525252,
//         tags: [
//             {id: "t1", name:"Planeación"},
//             {id: "t2", name:"Futuro"},
//             {id: "t3", name:"Rutinas"}
//         ]
//     },
//     {
//         id: 10,
//         title: "Titulo perronsisimo bien vergas apoco no carnal",
//         author: "Julian Uriarte",
//         url: "https://i0.wp.com/mynintendonews.com/wp-content/uploads/2021/07/bulbasaur.jpg?resize=980%2C460&ssl=1",
//         date: 525252,
//         tags: [
//             {id: "t1", name:"Ejercicio"},
//             {id: "t2", name:"Rutinas"},
//             {id: "t3", name:"Rutinas"}
//         ]
//     },
// ]


const Blog = () => {
    const dispatch = useDispatch()
    const blogsFirebase = useSelector(store => store.blogs.blogsPublished)   //Regresa un array
    
    //Empiezan en false para mostrar spinner de carga.
    const [blogsRecent, setBlogsRecent] = useState(false)
    const [blogsLatest, setBlogsLatest] = useState(false)
    

    //Carga inicial de los blogs
    useEffect(()=>{
        const cargaInicial = () => {
            console.log("Carga Inicial")
            dispatch(leerBlogsPublicarAccion())
        }
        cargaInicial()
    },[dispatch])

    //Actualizacion, maybe?
    useEffect(()=>{
        const actualizarBlogs = () => {
            setBlogsRecent(true)
            setBlogsLatest(true)
        }
        const actualizarBlogsRecientesOnly = () => {
            setBlogsLatest(false)
            setBlogsRecent(true)
        }
        if(blogsFirebase !== undefined && blogsFirebase !== null){  //Asegura que se han cargado ya
            if(blogsFirebase.length <= 2){
                console.log("Hay menos o igual a 2 blogs")
                actualizarBlogsRecientesOnly()  //Solo activa blogs Recientes
            } else {    //Hay por lo menos 3 blogs en redux
                console.log("Hay por lo menos 3 blogs")
                actualizarBlogs()   //Activa tanto blogs recientes como latest
            }
        }
    },[blogsFirebase])

    useEffect(()=>{
        if(blogsRecent === false && blogsLatest === false){
            console.log("Carga Inicial en los estados")
        } else {
            console.log("BlogsRecent => ", blogsRecent)
            console.log("BlogsLatest => ", blogsLatest)
        }
    },[blogsRecent, blogsLatest])

    const cargarMasBlogsHandler = () => {
        dispatch(cargarMasBlogsAccion())
    }

    //blogsFirebase !== undefined => aun no se carga nada, se supone que useSelector siempre regresa algo despues de un dispatch?
    // si es undefined, muestra spinner.
    return blogsFirebase !== undefined ? (
        <div className="container-md container-sm-fluid mt-3" data-bs-spy="scroll" data-bs-target="#navbar-spy">
            <div className="d-flex flex-column blogBoxShadow">
                {
                    blogsRecent !== false && (
                        <RecentBlogs />
                    )
                }
                {
                    blogsLatest !== false ? (
                        // <LatestBlogs items={blogsLatest} />
                        <LatestBlogs />
                    ) : (
                        "No hay mas que 2 blogs div"
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
