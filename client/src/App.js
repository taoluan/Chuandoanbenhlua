import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import DirectionUser from './directional/User';
import DirectionAdmin from './directional/Admin';
import Dianose from './components/User/Diagnose';
import Home from './components/User/Home';
import Disease from './components/User/ListDisesea'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
function App() {
  return(
      <Switch>
          <Route path="/admin" exact component={DirectionAdmin}/> 
          <Route path="/" component={DirectionUser} />
      </Switch>
   );
 
}

export default App;
