import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import {db} from './firebase';
import { Provider } from 'react-redux';
import generateStore from './redux/store';


import Navbar from './components/Navbar/Navbar';
import Asesorias from './components/Pages/Asesorias'
import ParaTi from './components/Pages/ParaTi'
import Podcast from './components/Pages/Podcast'
import Blog from './components/Blog/Blog'
import Inicio from './components/Pages/Inicio'
import Admin from './components/Admin/Admin';
import Ejemplo from './Ejemplo';

const App = () => {

  const [firebaseUser, setFirebaseUser] = useState(true);
  const [fsEjemplo, setFsEjemplo] = useState([])

  // const goAdmin = () => {
  //   setFirebaseUser(!firebaseUser);
  // }
  useEffect(()=>{
    const obtenerDatos = async () => {
      try {
        const data = await db.collection('blogs').get();
        const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
        setFsEjemplo(arrayData)
        console.log(fsEjemplo)
      } catch (error) {
        console.log(error)
      }
    }

    obtenerDatos()
  },[])

  //Redux store
  const store = generateStore();

  return (
    <Provider store={store}>
      <Router>
        {
          firebaseUser ? null : <Navbar />
        }
        <Switch>
          <Route path='/admin/blog/:anio/:mes/:dia/:titulo'>
            <Admin item="blog" />
          </Route>
          <Route path='/admin/:ruta'>
            <Admin />
          </Route>
          <Route path='/blog/:anio/:mes/:dia/:titulo'>
            <Ejemplo />
          </Route>
          <Route path='/asesorias'>
            <Asesorias />
          </Route>
          <Route path='/podcast'>
            <Podcast />
          </Route>
          <Route path='/blog'>
            <Blog />
          </Route>
          <Route path='/para-ti'>
            <ParaTi />
          </Route>
          <Route path='/login'>
            Login
          </Route>
          <Route path='/admin'>
            <Admin/>
          </Route>
          <Route path='/reset'>
            reset
          </Route>
          <Route path='/' exact>
            <Inicio />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
