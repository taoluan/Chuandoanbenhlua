import React from 'react';
import { BrowserRouter , Switch ,Route} from 'react-router-dom';
import DashboardPage from '../components/Admin/DashboardPage';
import DataDiseseaPage from '../components/Admin/DataDiseseaPage';
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
            <Switch>
                <Route path='/admin' exact component={DashboardPage} />
                <Route path='/admin/dashboard' exact component={DashboardPage} />
                <Route path='/admin/diseseae' exact component={DataDiseseaPage} />
            </Switch>
            </main>
            {/* <Footer /> */}
            </div>
        </BrowserRouter>
    )
}
export default  Admin;