import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";
import Banner from "../../../../components/Banner";
import PhotoForm from "../.././components/PhotoForm";
// import { addPhoto, editPhoto } from "../../photoSlice";
import { editPhoto, postPhoto } from "../../photoThunk";
const AddEditPage = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photoReducer.photoItems);
  const { photoId } = useParams();
  // console.log("555", useParams());
  const photoEdit = photos.find(
    (photo) => photo.id === photoId
    // return console.log("edit", photo.id === photoId);
  );
  // console.log("edit", photoEdit);
  const isAddMode = !photoId;
  // console.log(isAddMode);
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    setTimeout(() => {
      if (isAddMode) {
        const action = postPhoto(values);
        dispatch(action);
      } else {
        const action = editPhoto(values);
        dispatch(action);
      }
      navigate("/");
    }, 2000);
  };
  return (
    <div className="photo-edit">
      <Banner title="😎 Pick your amazing photo 😎" />
      <div className="photo-edit__form">
        <PhotoForm
          onSubmit={handleSubmit}
          photoEdit={photoEdit}
          isAddMode={isAddMode}
        />
      </div>
    </div>
  );
};

export default AddEditPage;
