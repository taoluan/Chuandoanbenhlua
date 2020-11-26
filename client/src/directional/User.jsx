import React from 'react';
import { BrowserRouter ,Switch,Route,Link } from 'react-router-dom';
import Home from '../components/User/Home'
import Diagnose from '../components/User/Diagnose'
import Disesea from '../components/User/Disesea'
import Header from '../components/UI/Header/Header'
import Footer from '../components/UI/Header/Footer'
import DiagnoseTag from '../components/User/DiagnoseTag'
import Forecast from '../components/User/Forecast'
import DiseseaTag from '../components/User/ListDisesea'
const User = ()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/chuandoan" exact component={Diagnose} />
                <Route path="/chuandoan/:trieuchung/:vitri" exact component={DiagnoseTag} />
                <Route path="/dubao" exact component={Forecast} />
                <Route path="/benh" exact component={Disesea} />
                <Route path="/benh/:benh" exact component={DiseseaTag} />
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}
export default  User;