import React from 'react';
import { BrowserRouter ,Switch,Route,Link } from 'react-router-dom';
import Home from '../components/User/Home'
import Diagnose from '../components/User/Diagnose'
import ListDisesea from '../components/User/ListDisesea'
import Disesea from '../components/User/Disesea'
import Header from '../components/UI/Header/Header'
const User = ()=>{
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/chuandoan" exact component={Diagnose} />
                <Route path="/benh" exact component={ListDisesea}/>
                <Route path="/benh/:benh" exact component={Disesea} />
            </Switch>
        </BrowserRouter>
    )
}
export default  User;