import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from './DashboardPage';
import DataDiseseaPage from './DataDiseseaPage'
import DataSymptom from './DataSymptom'
const Routes = () => {
    return (
      <Switch>
        <Route path='/admin' exact component={DashboardPage} />
        <Route path='/admin/dashboard' exact component={DashboardPage} />
        <Route path='/admin/disesea' exact component={DataSymptom} />
        <Route path='/admin/symptom' exact component={DataDiseseaPage} />
      </Switch>
    );
}

export default Routes;
