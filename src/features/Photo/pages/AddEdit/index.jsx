import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";
import Banner from "../../../../components/Banner";
import Images from "../../../../constants/images";
import PhotoForm from "../.././components/PhotoForm";
// import { addPhoto, editPhoto } from "../../photoSlice";
import { editPhoto, postPhoto, getListPhoto } from "../../photoThunk";
const AddEditPage = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photoReducer.photoItems);
  useEffect(() => {
    if (photos.length === 0) {
      dispatch(getListPhoto());
    }
  }, [dispatch, photos.length]);

  const { photoId } = useParams();
  console.log("555", { photoId });
  const isAddMode = !photoId;
  const photoEdit = photos.find(
    (photo) => photo.id === photoId
    // return console.log("edit", photo.id === photoId);
  );
  // console.log("edit", photoEdit);
  // console.log(isAddMode);
  const initialValues = isAddMode
    ? {
        title: "",
        categoryId: null,
        photo: "",
      }
    : photoEdit;
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    if (isAddMode) {
      const action = postPhoto(values);
      dispatch(action);
    } else {
      const action = editPhoto(values);
      dispatch(action);
    }
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  return (
    <div className="photo-edit">
      <Banner title="😎 Pick your amazing photo 😎" backgroundUrl={Images.BG} />
      <div className="photo-edit__form">
        <PhotoForm
          onSubmit={handleSubmit}
          initialValues={initialValues}
          isAddMode={isAddMode}
        />
      </div>
    </div>
  );
};

export default AddEditPage;
