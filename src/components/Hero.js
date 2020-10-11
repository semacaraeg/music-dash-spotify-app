//Hero component that shows the Big Hero banner
import React from 'react';
import Header from './Header';
const Hero = () => {
  return (
    <div className="hero-div">
      <div className="float-header">
      <Header />
      <p>Search for Albums, Artists, Songs, Playlists</p>
      </div>

    </div>
  );
};
export default Hero;
