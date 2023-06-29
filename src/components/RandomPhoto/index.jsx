import React from "react";
import "./styles.scss";
import { Button } from "reactstrap";
const getImageUrl = () => {
  const randomId = Math.trunc(Math.random() * 2000);
  return `https://picsum.photos/id/${randomId}/300/300`;
};
const RandomPhoto = (props) => {
  const { name, imageUrl, onImageUrlChange, onRandomButtonBlur } = props;
  const handleRandomPhoto = () => {
    if (onImageUrlChange) {
      const randomImageUrl = getImageUrl();
      onImageUrlChange(randomImageUrl);
    }
  };

  return (
    <div className="random-photo">
      <div className="random-photo__button">
        <Button
          outline
          name={name}
          color="primary"
          onBlur={onRandomButtonBlur}
          onClick={handleRandomPhoto}
        >
          Random a Photo
        </Button>
      </div>

      <div className="random-photo__photo">
        {imageUrl && (
          <img
            onError={handleRandomPhoto}
            src={imageUrl}
            alt="Oops....notFound. Please Click again"
          />
        )}
      </div>
    </div>
  );
};

export default RandomPhoto;
