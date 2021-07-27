import React, { useState, useEffect } from 'react'

import RecentBlogs from './RecentBlogs'
import LatestBlogs from './LatestBlogs'

const DUMMY_BLOGS = [
    {
        id: 1,
        title: "Titulo perronsisimo bien vergas super ultra largo como no hijo de su pinche madre ",
        author: "Julian Uriarte",
        url: "https://i0.wp.com/mynintendonews.com/wp-content/uploads/2021/07/pokemon_go_eevee.jpg?resize=980%2C460&ssl=1",
        date: 525252,
        tags: [
            {id: "t1", name:"Tag 1"},
            {id: "t2", name:"Tag 2"},
            {id: "t3", name:"Tag 3"}
        ]
    },
    {
        id: 2,
        title: "Titulo perronsisimo bien vergas apoco no carnal",
        author: "Julian Uriarte",
        url: "https://i1.wp.com/mynintendonews.com/wp-content/uploads/2019/08/3ds_family.jpg?resize=920%2C460&ssl=1",
        date: 525252,
        tags: [
            {id: "t1", name:"Tag 1"},
            {id: "t2", name:"Tag 2"},
            {id: "t3", name:"Tag 3"}
        ]
    },
    {
        id: 3,
        title: "Titulo perronsisimo bien vergas apoco no carnal",
        author: "Julian Uriarte",
        url: "https://i0.wp.com/mynintendonews.com/wp-content/uploads/2021/07/animal_crossing_new_horizons_fireworks.jpeg?resize=980%2C460&ssl=1",
        date: 525252,
        tags: [
            {id: "t1", name:"Tag 1"},
            {id: "t2", name:"Tag 2"},
            {id: "t3", name:"Tag 3"}
        ]
    },
    {
        id: 4,
        title: "Titulo perronsisimo bien vergas apoco no carnal",
        author: "Julian Uriarte",
        url: "https://i0.wp.com/mynintendonews.com/wp-content/uploads/2021/07/monster_hunter_rise_okami.jpeg?resize=980%2C460&ssl=1",
        date: 525252,
        tags: [
            {id: "t1", name:"Tag 1"},
            {id: "t2", name:"Tag 2"},
            {id: "t3", name:"Tag 3"}
        ]
    },
    {
        id: 5,
        title: "Titulo perronsisimo bien vergas apoco no carnal",
        author: "Julian Uriarte",
        url: "https://i0.wp.com/mynintendonews.com/wp-content/uploads/2017/10/reggie_techcrunch.png?resize=980%2C460&ssl=1",
        date: 525252,
        tags: [
            {id: "t1", name:"Tag 1"},
            {id: "t2", name:"Tag 2"},
            {id: "t3", name:"Tag 3"}
        ]
    },
    {
        id: 6,
        title: "Titulo perronsisimo bien vergas apoco no carnal",
        author: "Julian Uriarte",
        url: "https://i2.wp.com/mynintendonews.com/wp-content/uploads/2021/06/pokemon_unite-2.png?resize=980%2C460&ssl=1",
        date: 525252,
        tags: [
            {id: "t1", name:"Tag 1"},
            {id: "t2", name:"Tag 2"},
            {id: "t3", name:"Tag 3"}
        ]
    },
    {
        id: 7,
        title: "Titulo perronsisimo bien vergas apoco no carnal",
        author: "Julian Uriarte",
        url: "https://i0.wp.com/mynintendonews.com/wp-content/uploads/2021/04/Streets_of_Rage_4_Mr_X_Nightmare.jpg?resize=980%2C460&ssl=1",
        date: 525252,
        tags: [
            {id: "t1", name:"Tag 1"},
            {id: "t2", name:"Tag 2"},
            {id: "t3", name:"Tag 3"}
        ]
    },
    {
        id: 8,
        title: "Titulo perronsisimo bien vergas apoco no carnal",
        author: "Julian Uriarte",
        url: "https://i0.wp.com/mynintendonews.com/wp-content/uploads/2021/02/zelda_skyward_sword_hd-1.jpg?resize=2000%2C1000&ssl=1",
        date: 525252,
        tags: [
            {id: "t1", name:"Tag 1"},
            {id: "t2", name:"Tag 2"},
            {id: "t3", name:"Tag 3"}
        ]
    },
    {
        id: 9,
        title: "Titulo perronsisimo bien vergas apoco no carnal",
        author: "Julian Uriarte",
        url: "https://i2.wp.com/mynintendonews.com/wp-content/uploads/2021/07/baldo_the_guardian_owls.jpg?resize=980%2C460&ssl=1",
        date: 525252,
        tags: [
            {id: "t1", name:"Tag 1"},
            {id: "t2", name:"Tag 2"},
            {id: "t3", name:"Tag 3"}
        ]
    },
    {
        id: 10,
        title: "Titulo perronsisimo bien vergas apoco no carnal",
        author: "Julian Uriarte",
        url: "https://i0.wp.com/mynintendonews.com/wp-content/uploads/2021/07/bulbasaur.jpg?resize=980%2C460&ssl=1",
        date: 525252,
        tags: [
            {id: "t1", name:"Tag 1"},
            {id: "t2", name:"Tag 2"},
            {id: "t3", name:"Tag 3"}
        ]
    },
]


const Blog = () => {
    let clipBlogs;
    const [latestBlog, setLatestBlog] = useState(null);

    useEffect(()=>{
        clipBlogs = DUMMY_BLOGS.slice(2);
        setLatestBlog(clipBlogs);
        console.log(latestBlog);
    },[clipBlogs])

    return (
        <div className="d-flex flex-column">
            <RecentBlogs 
                key={DUMMY_BLOGS[0].id}
                urlUno={DUMMY_BLOGS[0].url}
                titleUno={DUMMY_BLOGS[0].title}
                authorUno={DUMMY_BLOGS[0].author}
                dateUno={DUMMY_BLOGS[0].date}
                tagsUno={DUMMY_BLOGS[0].tags}
                urlDos={DUMMY_BLOGS[1].url}
                titleDos={DUMMY_BLOGS[1].title}
                authorDos={DUMMY_BLOGS[1].author}
                dateDos={DUMMY_BLOGS[1].date}
                tagsDos={DUMMY_BLOGS[1].tags}
            />
            {
                latestBlog ? (
                    <LatestBlogs items={latestBlog} />
                ) : (
                    "Cargando..."
                )
            }
            

            <button className="masBlogs mt-3">Cargar más</button>
        </div>
    )
}

export default Blog
