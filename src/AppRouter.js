import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import RedirectPage from './components/RedirectPage';
import Dashboard from './components/Dashboard';
import PageNotFound from './components/PageNotFound';
class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main">
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/redirect" component={RedirectPage} />
            <Route path="/dashboard" component={Dashboard} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default AppRouter;
