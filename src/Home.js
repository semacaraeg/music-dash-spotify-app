import React from 'react';
import './Home.css';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import Header from './components/Header';

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

  return (
    <div className="Home">
      <Header />
      <Button variant="info" type="submit" onClick={processLogin}>
      Sign-in to Spotify
      </Button>
    </div>
  );

}
export default connect()(Home);
