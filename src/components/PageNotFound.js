/*
Page Not Found Component
*/
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
const PageNotFound = () => {
  return (
    <React.Fragment>
    <div className="login">
      <Header className="main-heading" />
      Page not found. Goto <Link to="/dashboard">Home Page</Link></div>
    </React.Fragment>
  );
};
export default PageNotFound;
