import React from 'react';
import _ from 'lodash';
import AlbumsResult from './AlbumsResultList';
import ArtistsResult from './ArtistsResultList';
import PlaylistResult from './PlaylistResultList';
import TracksResult from './TracksResultList';

const ResultPage = (props) => {
  const { result, setCategory, selectedCategory } = props;
  const { albums, artists, tracks, playlist } = result;
  return (
    <React.Fragment>
    {/* Buttons to select categories */}
      <div className="search-nav-buttons">
        {!_.isEmpty(tracks.items) && (
          <button
            className={`${
              selectedCategory === 'tracks' ? 'btn active' : 'btn'
            }`}
            onClick={() => setCategory('tracks')}
          >
            Songs
          </button>
        )}

        {!_.isEmpty(albums.items) && (
          <button
            className={`${
              selectedCategory === 'albums' ? 'btn active' : 'btn'
            }`}
            onClick={() => setCategory('albums')}
          >
            Albums
          </button>
        )}
        {!_.isEmpty(artists.items) && (
          <button
            className={`${
              selectedCategory === 'artists' ? 'btn active' : 'btn'
            }`}
            onClick={() => setCategory('artists')}
          >
            Artists
          </button>
        )}



        {!_.isEmpty(playlist.items) && (
          <button
            className={`${
              selectedCategory === 'playlist' ? 'btn active' : 'btn'
            }`}
            onClick={() => setCategory('playlist')}
          >
            Playlists
          </button>
        )}
      </div>
      {/*Show the results for the search query categorized in categories*/}
      <div className="resultsContainer">
        <div className={`${selectedCategory === 'tracks' ? '' : 'hide'}`}>
          {tracks && <TracksResult tracks={tracks} />}
        </div>
        <div className={`${selectedCategory === 'albums' ? '' : 'hide'}`}>
          {albums && <AlbumsResult albums={albums} />}
        </div>
        <div className={`${selectedCategory === 'artists' ? '' : 'hide'}`}>
          {artists && <ArtistsResult artists={artists} />}
        </div>
        <div className={`${selectedCategory === 'playlist' ? '' : 'hide'}`}>
          {playlist && <PlaylistResult playlist={playlist} />}
        </div>
      </div>
    </React.Fragment>
  );
};
export default ResultPage;
