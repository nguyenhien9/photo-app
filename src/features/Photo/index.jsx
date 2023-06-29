import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/Main";
import ErrorPage from "../../components/Error";
const PhotoPage = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default PhotoPage;
