import React from 'react';
import _ from 'lodash';
import { getUrlParamValues } from '../misc/functions';
export default class RedirectPage extends React.Component {
//lifecycle method to access the URL parameters and store them in local storage
  componentDidMount() {
    const { setExpiryTime, history, location } = this.props;
    try {
      if (_.isEmpty(location.hash)) {
        return history.push('/dashboard');
      }
      const access_token = getUrlParamValues(location.hash);
      const expiryTime = new Date().getTime() + access_token.expires_in * 1000;
      localStorage.setItem('params', JSON.stringify(access_token));
      localStorage.setItem('expiry_time', expiryTime);
      setExpiryTime(expiryTime);
      history.push('/dashboard');
    } catch (error) {
      history.push('/');
    }
  }
  render() {
    return null;
  }
}
