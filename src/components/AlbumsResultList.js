import React from 'react';
import { Card } from 'react-bootstrap';
import _ from 'lodash';
//import music from '../images/music.jpeg';
const AlbumsResultList = ({ albums }) => {
  return (
    <React.Fragment>
      {Object.keys(albums).length > 0 && (
        <div className="albums">
          {albums.items.map((album, index) => {
            return (
              <React.Fragment key={index}>
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
                        <img src="" alt="" />
                      )}

                    <Card.ImgOverlay>
                      <Card.Title className="card-title">{album.name}</Card.Title>
                      <Card.Text className="card-details">
                          {album.artists.map((artist) => artist.name).join(', ')}
                      </Card.Text>
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
export default AlbumsResultList;
