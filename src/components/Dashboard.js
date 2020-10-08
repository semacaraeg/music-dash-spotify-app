import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Search from './Search';
import ResultPage from './ResultPage';
import Hero from './Hero';
import {
  initiateGetResult,
  initiateLoadMoreTracks,
  initiateLoadMoreAlbums,
  initiateLoadMorePlaylist,
  initiateLoadMoreArtists
} from '../result';

const Dashboard = (props) => {

  //setting states
  const [selectedCategory, setSelectedCategory] = useState('tracks');
  const { checkSessionValid, history } = props;
  const processSearch = (searchQuery) => {
    //needs to check if session is Valid
      if(checkSessionValid()){
        props.dispatch(initiateGetResult(searchQuery)).then(() => {
          setSelectedCategory('tracks');
        });
      }else {
        history.push({
            pathname: '/',
            state: {
              session_expired: true
            }
        });
      }
    };

    const setCategory = (category) => {
       setSelectedCategory(category);
     };

     const { albums, artists, tracks, playlist} = props;
     const result = { albums, artists, tracks, playlist};

     const loadMore = async (type) => {
       if(checkSessionValid()){
         const { dispatch, tracks, albums, artists, playlist } = props;
         switch (type) {
           case 'tracks':
             await dispatch(initiateLoadMoreTracks(tracks.next));
             break;
           case 'albums':
             await dispatch(initiateLoadMoreAlbums(albums.next));
             break;
           case 'artists':
             await dispatch(initiateLoadMoreArtists(artists.next));
             break;
           case 'playlist':
             await dispatch(initiateLoadMorePlaylist(playlist.next));
             break;
           default:
         }
       } else{
         history.push({
             pathname: '/',
             state: {
               session_expired: true
             }
         });
       }
    };



 return (
   <React.Fragment>
     { checkSessionValid ? (
       <div>
         <Hero />
         {/*section for Search Form*/}
         <Search processSearch={processSearch}/>
         {/*section for the results*/}
          <ResultPage
            result={result}
            loadMore={loadMore}
            setCategory={setCategory}
            selectedCategory={selectedCategory}
            checkSessionValid={checkSessionValid}
          />
        </div>
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: {
              session_expired: true
            }
          }}
        />
     )}
   </React.Fragment>
  );
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
