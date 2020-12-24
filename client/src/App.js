import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { Switch, Route ,BrowserRouter } from 'react-router-dom';
import Home from './components/User/Home'
import Diagnose from './components/User/Diagnose'
import ListDisesea from './components/User/ListDisesea'
import Disesea from './components/User/Disesea'
import Header from './components/UI/Header/Header'
import DirectionUser from './directional/User';
import DirectionAdmin from './directional/Admin';
import LoginPage from './components/Admin/LoginPage'
import './css/scrollbar.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/admin" component={DirectionAdmin}/>
            <Route path="/" component={DirectionUser} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
