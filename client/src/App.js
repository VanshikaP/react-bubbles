import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import PrivateRoute from './components/PrivateRoute'
import Login from "./components/Login";
import BubblePage from './components/BubblePage'
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <header className='header'>
          <h2 className='title'>Bubbles App</h2>
          <div className='nav-link-container'>
            <Link className='nav-link' to='/bubbles'>Bubbles</Link>
          </div>
        </header>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path='/bubbles' component={BubblePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
