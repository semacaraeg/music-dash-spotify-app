/*
Handles Routing in the App.
This is where the expiry_time is obtained from the returned url from the Spotify Auth.
Routes to Dashboard when the session is valid otherwise back to Home Page.
*/

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import RedirectPage from './components/RedirectPage';
import Dashboard from './components/Dashboard';
import PageNotFound from './components/PageNotFound';
class AppRouter extends React.Component {
  state = {
    expiryTime: '0'
  };
  componentDidMount(){
    let expiryTime;
    try{
      expiryTime = JSON.parse(localStorage.getItem('expiry_time'));
    } catch (error){
      expiryTime = '0';
    }
    this.setState({expiryTime});
  }

  setExpiryTime = (expiryTime) => {
     this.setState({expiryTime});
  };

  checkSessionValid = () => {
    const current = new Date().getTime();
    const expiryTime = this.state.expiryTime;
    const isSessionValid = current < expiryTime;
    return isSessionValid;
  };

  render() {
    return (
      <BrowserRouter>
        <div className="main">
          <Switch>
            <Route path="/"  exact={true} render={(props) => (
              <Home checkSessionValid={this.checkSessionValid} {...props} />
            )} />
            <Route path="/redirect"
              render={(props) => (
                <RedirectPage
                  checkSessionValid={this.checkSessionValid}
                  setExpiryTime={this.setExpiryTime}
                  {...props}
                />
              )}
            />
            <Route path="/dashboard"
            render={(props) => (
              <Dashboard checkSessionValid={this.checkSessionValid} {...props} />
            )} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default AppRouter;
