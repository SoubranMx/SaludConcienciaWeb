import React, { useState, useEffect } from 'react';
import {
  Switch,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';
import {auth} from './firebase';



import Navbar from './components/Navbar/Navbar';
import Asesorias from './components/Pages/Asesorias'
import ParaTi from './components/Pages/ParaTi'
import Podcast from './components/Pages/Podcast'
import Blog from './components/Blog/Blog'
import Inicio from './components/Pages/Inicio'
import Admin from './components/Admin/Admin';
import Login from './components/Admin/Login';
import BuscarBlog from './components/Blog/BuscarBlog';
//import { useSelector } from 'react-redux';

const App = (props) => {

  const [firebaseUser, setFirebaseUser] = useState(false);

  useEffect(()=>{
    const fetchUser = () => {
      auth.onAuthStateChanged(user => {
        if(user){
          setFirebaseUser(user)
        } else {
          setFirebaseUser(null)
        }
      })
    }
    fetchUser()
  },[])

  // useEffect(()=>{
  //   const redirigir = () => {
  //     if(firebaseUser){
  //       props.history.push('/admin')
  //     }
  //   }
  //   redirigir()
  // },[firebaseUser, props.history])

  return firebaseUser !== false ? (
    <div className="root2">
      {
        firebaseUser ? null : <Navbar />
      }
      <Switch>
        <Route path='/admin/blog/:anio/:mes/:dia/:titulo' exact>
          {/* <BuscarBlog /> */}
          <Admin />
        </Route>
        <Route path='/admin/:ruta'>
          <Admin />
        </Route>
        <Route path='/blog/:anio/:mes/:dia/:titulo' exact>
          <BuscarBlog />
        </Route>
        <Route path='/asesorias' >
          <Asesorias />
        </Route>
        <Route path='/podcast' >
          <Podcast />
        </Route>
        <Route path='/blog' >
          <Blog />
        </Route>
        <Route path='/para-ti' >
          <ParaTi />
        </Route>
        <Route path='/login' >
          <Login />
        </Route>
        <Route path='/admin' >
          <Admin />
        </Route>
        <Route path='/reset'>
          reset
        </Route>
        <Route path='/' exact>
          <Inicio firebaseUser={firebaseUser}/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  ) : (
    <div className="container d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
      <div className="spinner-border" role="status" style={{width: "3rem", height: "3rem"}}>
        <span className="visually-hidden">Cargando...</span>
      </div>
    </div>
  );
}

export default withRouter(App);
