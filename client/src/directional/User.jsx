import React from 'react';
import {BrowserRouter as Router ,Switch,Route,Link } from 'react-router-dom';
import Header from '../components/UI/Header/Header'
import Home from '../components/User/Home'
import Diagnose from '../components/User/Diagnose'
import ListDisesea from '../components/User/ListDisesea'
import Disesea from '../components/User/Disesea'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';


const User = ()=>{
    return(
            <div>
                <Header/>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/chandoan" exact component={Diagnose} />
                    <Route path="/benh" exact component={ListDisesea}/>
                    <Route path="/benh/:benh"  component={Disesea} />
                </Switch>
                
            </div>
    )
}
export default  User;