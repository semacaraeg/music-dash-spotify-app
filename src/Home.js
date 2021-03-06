/*
Home Page for logging into Spotify using OAuth
*/
import React , {Fragment} from 'react';
import './Home.css';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import Header from './components/Header';
import { Alert } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
const Home = (props) => {

//setting the values from the .env file
  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL
  } = process.env;

//process the Spotify Authorized Login
  const processLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
  };

  const { checkSessionValid, location } = props;
  const { state } = location;
  const sessionExpired = state && state.session_expired;

  return (
    <Fragment>
    {/* Checks if the session is not expired*/}
      {checkSessionValid() ? (
        <Redirect to="/dashboard" />
      ) : (
        <div className="login">
          <Header />
          {/* Shows an Alert message that the session expired.*/}
          {sessionExpired && (
            <Alert variant="danger">Your session has expired.</Alert>
          )}
          <Button variant="outline-dark" type="submit" onClick={processLogin}>
            Start Here >> LOGIN TO SPOTIFY
          </Button>
        </div>
      )}
    </Fragment>
  );

}
export default connect()(Home);
