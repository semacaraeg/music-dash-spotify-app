/*
Component for the list of Albums
Used react-bootstrap Cards
*/
import React, {Fragment} from 'react';
import { Card } from 'react-bootstrap';
import _ from 'lodash';
import albumImg from '../assets/albums.jpg';
const AlbumsResultList = ({ albums }) => {
  return (
    <Fragment>
      {Object.keys(albums).length > 0 && (
        <div className="albums">
          {albums.items.map((album, index) => {
            return (
              <Fragment key={index}>
                <a
                 target="_blank"
                 href={album.external_urls.spotify}
                 rel="noopener noreferrer"
                 className="card-image-link"
                 >
                  <Card style={{ width: '10rem' }} className="bg-dark text-white">

                      {!_.isEmpty(album.images) ? (
                        <Card.Img
                          variant="top"
                          src={album.images[0].url}
                          alt=""
                        />
                      ) : (
                        <img src={albumImg} alt="" />
                      )}

                    <Card.ImgOverlay>
                      <Card.Title className="card-title">{album.name}</Card.Title>
                      <Card.Text className="card-details">
                          {album.artists.map((artist) => artist.name).join(', ')}
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
export default AlbumsResultList;
