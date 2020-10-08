import React from 'react';
import { Card } from 'react-bootstrap';
import _ from 'lodash';
import albumImg from '../assets/albums.jpg';
const ArtistsResultList = ({ artists }) => {
  return (
    <React.Fragment>
      {Object.keys(artists).length > 0 && (
        <div className="artists">
          {artists.items.map((artist, index) => {
            return (
              <React.Fragment key={index}>
              <a
                target="_blank"
                href={artist.external_urls.spotify}
                rel="noopener noreferrer"
                className="card-image-link"
              >
                <Card style={{ width: '10rem' }} className="bg-dark text-white">

                    {!_.isEmpty(artist.images) ? (
                      <Card.Img
                        variant="top"
                        src={artist.images[0].url}
                        alt=""
                      />
                    ) : (
                      <img src={albumImg} alt="" />
                    )}

                  <Card.ImgOverlay>
                    <Card.Title className="card-title">{artist.name}</Card.Title>
                  </Card.ImgOverlay>
                </Card>
                </a>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};
export default ArtistsResultList;
