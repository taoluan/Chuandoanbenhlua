import React from 'react';
import { BrowserRouter , Switch ,Route} from 'react-router-dom';
import DashboardPage from '../components/Admin/DashboardPage';
// import ProfilePage from './pages/ProfilePage';
// import TablesPage from './pages/TablesPage';
// import MapsPage from './pages/MapsPage';
// import NotFoundPage from './pages/NotFoundPage';
import Routes from '../components/Admin/Routes'
import TopNavigation from '../components/Admin/Navigation/topNavigation';
import SideNavigation from '../components/Admin/Navigation/sideNavigation';
import '../css/admin.css'
const Admin = ()=>{
    return(
        <BrowserRouter>
            <div className="flexible-content">
            <TopNavigation />
            <SideNavigation />
            <main id="content" className="p-5">
                <Routes />
                {/* <Switch>
                    <Route path='/' exact component={DashboardPage} />
                    <Route path='/dashboard' component={DashboardPage} />
                    <Route path='/profile' component={ProfilePage} />
                    <Route path='/tables' component={TablesPage} />
                </Switch> */}
            </main>
            {/* <Footer /> */}
            </div>
        </BrowserRouter>
    )
}
export default  Admin;