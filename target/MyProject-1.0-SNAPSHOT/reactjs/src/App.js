
import React from 'react';
import './App.css';
import ClassPage from './components/ClassPage';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login';
//import ClassPage from './components/ClassPage';


function App() {
  return (
  <Router>
<Switch>
      <Route exact path='/' component={Login}/>
      <Route path='/class_page' component={ClassPage}/>
      
    </Switch>
  </Router>
  
  );
}

export default App;
