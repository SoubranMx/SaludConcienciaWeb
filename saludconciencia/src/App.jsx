import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';
import {auth, db} from './firebase';



import Navbar from './components/Navbar/Navbar';
import Asesorias from './components/Pages/Asesorias'
import ParaTi from './components/Pages/ParaTi'
import Podcast from './components/Pages/Podcast'
import Blog from './components/Blog/Blog'
import Inicio from './components/Pages/Inicio'
import Admin from './components/Admin/Admin';
import Ejemplo from './Ejemplo';
import Login from './components/Admin/Login';
import { useSelector } from 'react-redux';

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

  useEffect(()=>{
    const redirigir = () => {
      if(firebaseUser){
        props.history.push('/admin')
      }
    }
    redirigir()
  },[firebaseUser])

  //const RutaPrivada = ({component, path, ...rest}) => {
  // const RutaPrivada = ({component, path,  ...rest}) => {
  //   const storage = localStorage.getItem('admin')
  //   console.log("Antes 1er if: ", storage)
  //   if(localStorage.getItem('admin')){
  //     const usuarioStorage = JSON.parse(localStorage.getItem('admin'))
  //     console.log("antes de verificar localstorage y firbease")
  //     if(usuarioStorage.uid === firebaseUser.uid){
  //       console.log("Antes de mandar la ruta")
  //       return <Route component={component} path={path} {...rest} />
  //     }else{
  //       console.log("1er redirect")
  //       return <Redirect to="/" {...rest} />
  //     }
  //   } else {
  //     console.log("2o redirect")
  //     return <Redirect to="/" {...rest}/>
  //   }
  // }
  

  return firebaseUser !== false ? (
    <div>
      {
        firebaseUser ? null : <Navbar />
      }
      <Switch>
        <Route path='/admin/blog/:anio/:mes/:dia/:titulo' >
          <Admin />
        </Route>
        {/* <RutaPrivada component={Admin} path="/admin/:ruta" /> */}
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
          <Login />
        </Route>
        {/* <RutaPrivada component={Admin} path="/admin" exact /> */}
        <Route path='/admin' >
          <Admin />
        </Route>
        <Route path='/reset'>
          reset
        </Route>
        <Route path='/' exact>
          <Inicio />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  ) : (
    <div>Cargando ... </div>
  );
}

export default withRouter(App);
