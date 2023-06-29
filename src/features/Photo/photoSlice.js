import { createSlice } from "@reduxjs/toolkit";
// import Photos from "../../constants/mockData";
import { getListPhoto, deletePhoto } from "./photoThunk";

const initialState = {
  photoItems: [],
  isLoading: false,
};
const photoSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    // addPhoto: (state, action) => {
    //   const newPhoto = action.payload;
    //   state.photoItems.push(newPhoto);
    //   // console.log(newPhoto);
    // },
    // removePhoto: (state, action) => {
    //   const removeId = action.payload;
    //   state.photoItems = state.photoItems.filter(
    //     (photo) => photo.id !== removeId
    //   );
    // },
    // editPhoto: (state, action) => {
    //   const newPhoto = action.payload;
    //   const index = state.photoItems.findIndex(
    //     (photo) => photo.id === newPhoto.id
    //   );
    //   if (index >= 0) {
    //     state.photoItems[index] = newPhoto;
    //   }
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getListPhoto.fulfilled, (state, action) => {
        // console.log("33333", "vào fulfilled");
        state.photoItems = action.payload;
        state.isLoading = false;
      })
      .addCase(getListPhoto.pending, (state, action) => {
        // console.log("33333", "vào pending");

        state.isLoading = true;
      })
      .addCase(getListPhoto.rejected, (state, action) => {
        // console.log("33333", "vào reject");
        state.isLoading = false;
      })
      .addCase(deletePhoto.fulfilled, (state, action) => {
        const removeID = action.payload;
        state.photoItems = state.photoItems.filter(
          (photo) => photo.id !== removeID
        );
      });
  },
});
const { reducer, actions } = photoSlice;
export default reducer;
// export const { addPhoto, removePhoto, editPhoto } = actions;
