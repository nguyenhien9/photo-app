import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ErrorPage from "./components/Error";
import AddEditPage from "./features/Photo/pages/AddEdit";

const Photo = React.lazy(() => import("./features/Photo/"));
function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Photo />} />
            <Route path="/photos/add" element={<AddEditPage />} />
            <Route path="/photos/:photoId" element={<AddEditPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
