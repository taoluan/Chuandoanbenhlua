import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from './DashboardPage';
import DataDiseseaPage from './DataDiseseaPage'
class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/admin' exact component={DashboardPage} />
        <Route path='/admin/dashboard' exact component={DashboardPage} />
        <Route path='/admin/disesea' exact component={DataDiseseaPage} />
      </Switch>
    );
  }
}

export default Routes;
