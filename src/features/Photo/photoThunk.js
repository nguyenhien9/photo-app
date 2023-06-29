import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../configure/apiConfig";

export const getListPhoto = createAsyncThunk("getListPhoto", async (data) => {
  try {
    const res = await axios.get(apiUrl);
    // console.log("res", res);
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
});

export const postPhoto = createAsyncThunk(
  "postPhoto",
  async (data, { dispatch, getState }) => {
    try {
      const res = await axios.post(apiUrl, data);
      if (res.status === 201) {
        dispatch(getListPhoto);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
export const editPhoto = createAsyncThunk(
  "editPhoto",
  async (data, { dispatch, getState }) => {
    try {
      const res = await axios.put(`${apiUrl}/${data.id}`, data);
      if (res.status === 200) {
        dispatch(getListPhoto);
      }
      // return res.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
export const deletePhoto = createAsyncThunk("deletePhoto", async (id) => {
  try {
    const res = await axios.delete(`${apiUrl}/${id}`);
    console.log("666", res);
    return res.data.id;
  } catch (error) {
    throw new Error(error.message);
  }
});
