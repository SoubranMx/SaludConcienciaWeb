import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Asesorias from './components/Pages/Asesorias'
import ParaTi from './components/Pages/ParaTi'
import Podcast from './components/Pages/Podcast'
import Blog from './components/Blog/Blog'
import Inicio from './components/Pages/Inicio'

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container-md container-sm-fluid mt-3">
        <Switch>
          <Route path='/asesorias'>
            <Asesorias />
          </Route>
          <Route path='/podcast'>
            <Podcast />
          </Route>
          <Route path='/blog' exact>
            <Blog />
          </Route>
          <Route path='/para-ti'>
            <ParaTi />
          </Route>
          <Route path='/login'>
            Login
          </Route>
          <Route path='/admin'>
            admin
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
    </Router>
  );
}

export default App;
