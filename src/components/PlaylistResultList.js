/*
Component for the list of Playlists
Used react-bootstrap Cards
*/
import React, {Fragment} from 'react';
import { Card } from 'react-bootstrap';
import _ from 'lodash';
import albumImg from '../assets/albums.jpg';
const PlaylistResultList = ({ playlist }) => {
  return (
    <div>
      {Object.keys(playlist).length > 0 && (
        <div className="playlist">
          {playlist.items.map((item, index) => {
            return (
              <Fragment key={index}>
              <a
                target="_blank"
                href={item.external_urls.spotify}
                rel="noopener noreferrer"
                className="card-image-link"
              >
                <Card style={{ width: '10rem' }} className="bg-dark text-white">
                    {!_.isEmpty(item.images) ? (
                      <Card.Img variant="top" src={item.images[0].url} alt="" />
                    ) : (
                      <img src={albumImg} alt="" />
                    )}

                  <Card.ImgOverlay>
                    <Card.Title className="card-title">{item.name}</Card.Title>
                    <Card.Text className="card-details">
                      By {item.owner.display_name}
                    </Card.Text>
                  </Card.ImgOverlay>
                </Card>
                </a>
              </Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default PlaylistResultList;
