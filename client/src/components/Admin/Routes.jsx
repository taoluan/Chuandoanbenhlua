import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from './DashboardPage';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/admin' exact component={DashboardPage} />
        <Route path='/admin/dashboard' component={DashboardPage} />
        {/* <Route path='/profile' component={ProfilePage} /> */}
      </Switch>
    );
  }
}

export default Routes;
