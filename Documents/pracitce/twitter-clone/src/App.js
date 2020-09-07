import React from 'react';
import Header from './Components/Header/Header'
import Auth from './Components/Auth/Auth'
import './App.css';

import { Link, Switch, Route } from "react-router-dom";
import PrivateRoute from './Components/PrivateRoute';
import Homepage from './Components/Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Link to='/'>Twitter-clone</Link>
      <Link to='/home'>placeholder</Link>

      <Switch>
        <Route exact path='/'>
          <Header />
          <Auth />
        </Route>

        <PrivateRoute componenet={Homepage} path='placeholder' />

      </Switch>

    </div>
  );
}

export default App;
