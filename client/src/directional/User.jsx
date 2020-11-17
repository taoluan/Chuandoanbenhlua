import React from 'react';
import { BrowserRouter ,Switch,Route,Link } from 'react-router-dom';
import Home from '../components/User/Home'
import Diagnose from '../components/User/Diagnose'
import ListDisesea from '../components/User/ListDisesea'
import Disesea from '../components/User/Disesea'
import Header from '../components/UI/Header/Header'
import Footer from '../components/UI/Header/Footer'
import DiagnoseTag from '../components/User/DiagnoseTag'
const User = ()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/chuandoan" exact component={Diagnose} />
                <Route path="/chuandoan/:trieuchung" exact component={DiagnoseTag} />
                <Route path="/benh" exact component={ListDisesea}/>
                <Route path="/benh/:benh" exact component={Disesea} />
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}
export default  User;