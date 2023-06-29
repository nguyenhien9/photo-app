import React, { useEffect } from "react";
import "./styles.scss";
import { Button, Container, Spinner } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Images from "../../../../constants/images";
import Banner from "../../../../components/Banner";
import PhotoList from "../../components/PhotoList";
// import { removePhoto } from "../../photoSlice";
import { deletePhoto, getListPhoto } from "../../photoThunk";
// import PHOTOS from "../../../../constants/mockData";

const MainPage = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const photos = useSelector((state) => state.photoReducer.photoItems);
  const isLoading = useSelector((state) => state.photoReducer.isLoading);
  console.log("photos", photos);
  useEffect(() => {
    dispatch(getListPhoto());
  }, []);
  const handleEditPhoto = (photo) => {
    // console.log("editClick");
    // console.log("444", photo.id);
    navigate(`/photos/${photo.id}`);
  };
  const handleRemovePhoto = (photo) => {
    const removeID = photo.id;
    dispatch(deletePhoto(removeID));
  };
  return (
    <div className="photo-main">
      <Banner
        title="🎉 Your awesome photos 🎉"
        backgroundUrl={Images.BLUE_BG}
      />
      <Container className="text-center">
        <div className="box-link">
          <Link className="link-add button" to="/photos/add">
            Add New Photo
          </Link>
        </div>
        {isLoading ? (
          <Spinner />
        ) : (
          <PhotoList
            photoList={photos}
            onPhotoEditClick={handleEditPhoto}
            onPhotoRemoveClick={handleRemovePhoto}
          />
        )}
      </Container>
    </div>
  );
};

export default MainPage;
