import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import LandingPage from "./pages/LandingPage";
import Editor from "./pages/Editor";

let Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/app" element={<Editor />}></Route>
      </Routes>
    </>
  );
};

export default Router;
