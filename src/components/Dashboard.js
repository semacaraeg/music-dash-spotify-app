import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Search from './Search';
import ResultPage from './ResultPage';
import Header from './Header';
import {
  initiateGetResult
} from '../result';

const Dashboard = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('albums');
  const { isValidSession, history } = props;

  const processSearch = (searchQuery) => {

    //needs to check if session is Valid
        setIsLoading(true);
        props.dispatch(initiateGetResult(searchQuery)).then(() => {
          setIsLoading(false);
          setSelectedCategory('albums');
        });
    };

    const setCategory = (category) => {
       setSelectedCategory(category);
     };

     const { albums, artists, tracks, playlist} = props;
     const result = { albums, artists, tracks, playlist};

 return <div>Dashboard Page
 <Header />
 <Search processSearch={processSearch}/>
  <ResultPage
    result={result}
    //loadMore={loadMore}
    setCategory={setCategory}
    selectedCategory={selectedCategory}
    isValidSession={isValidSession}
  />
  </div>;
};


 const mapStateToProps = (state) => {
  return {
    albums: state.albums,
    artists: state.artists,
    tracks: state.tracks,
    playlist: state.playlist
  };
};
export default connect(mapStateToProps)(Dashboard);
