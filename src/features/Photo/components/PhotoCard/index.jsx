import React from "react";
import "./styles.scss";
import { Button } from "reactstrap";

const PhotoCard = (props) => {
  const { photo, onEditClick, onRemoveClick } = props;

  return (
    <div className="photo">
      <img src={photo.photo} alt={photo.title} />

      <div className="photo__overlay">
        <h3 className="photo__title">{photo.title}</h3>

        <div className="photo__actions">
          <div>
            <Button
              outline
              size="sm"
              color="light"
              onClick={() => onEditClick(photo)}
            >
              Edit
            </Button>
          </div>

          <div>
            <Button
              outline
              size="sm"
              color="danger"
              onClick={() => onRemoveClick(photo)}
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
