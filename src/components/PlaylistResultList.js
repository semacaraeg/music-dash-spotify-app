import React from 'react';
import { Card } from 'react-bootstrap';
import _ from 'lodash';
//import music from '../images/music.jpeg';
const PlaylistResultList = ({ playlist }) => {
  return (
    <div>
      {Object.keys(playlist).length > 0 && (
        <div className="playlist">
          {playlist.items.map((item, index) => {
            return (
              <React.Fragment key={index}>
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
                      <img src="" alt="" />
                    )}

                  <Card.ImgOverlay>
                    <Card.Title className="card-title">{item.name}</Card.Title>
                    <Card.Text className="card-details">
                      By {item.owner.display_name}
                    </Card.Text>
                  </Card.ImgOverlay>
                </Card>
                </a>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default PlaylistResultList;
