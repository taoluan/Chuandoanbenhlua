import React from 'react';
import { BrowserRouter , Switch ,Route} from 'react-router-dom';
import DashboardPage from '../components/Admin/DashboardPage';
import DataDiseseaPage from '../components/Admin/DataDiseseaPage';
import DataSymptom from '../components/Admin/DataSymptom';
import LoginPage from '../components/Admin/LoginPage';
import TopNavigation from '../components/Admin/Navigation/topNavigation';
import SideNavigation from '../components/Admin/Navigation/sideNavigation';
import '../css/admin.css'
const Admin = ()=>{
    return(
        <>
        <Route>
            <div className="flexible-content">
            <TopNavigation />
            <SideNavigation />
            <main id="content" className="p-5">
            <Switch>
                <Route path='/admin' exact component={DashboardPage} />
                <Route path='/admin/dashboard' exact component={DashboardPage} />
                <Route path='/admin/diseseae' exact component={DataDiseseaPage} />
                <Route path='/admin/symptom' exact component={DataSymptom} />
            </Switch>
            </main>
            {/* <Footer /> */}
            </div>
        </Route>
        </>
    )
}
export default  Admin;