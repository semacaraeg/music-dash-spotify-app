/*
Component for the list of Tracks/Songs
Used react-bootstrap Cards
*/
import React, {Fragment} from 'react';
import { Card } from 'react-bootstrap';
import _ from 'lodash';
import albumImg from '../assets/albums.jpg';
const TracksResultList = ({ tracks }) => {
  return (
    <Fragment>
      {Object.keys(tracks).length > 0 && (
        <div className="tracks">
          {tracks.items.map((track, index) => {
            return (
              <Fragment key={index}>
              <a
               target="_blank"
               href={track.external_urls.spotify}
               rel="noopener noreferrer"
               className="card-image-link"
             >
                <Card style={{ width: '10rem' }} className="bg-dark text-white">
                  {!_.isEmpty(track.album.images) ? (
                    <Card.Img variant="top" src={track.album.images[0].url} alt="" />
                  ) : (
                    <img src={albumImg} alt="" />
                  )}
                  <Card.ImgOverlay>
                    <Card.Title className="card-title">{track.name}</Card.Title>
                    <Card.Text className="card-details">
                        {track.artists.map((artist) => artist.name).join(', ')}
                    </Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </a>
              </Fragment>
            );
          })}
        </div>
      )}
    </Fragment>
  );
};
export default TracksResultList;
