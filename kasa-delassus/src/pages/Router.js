import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import ErrorPage from "./ErrorPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* Routes dynamiques product :id */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default Router;
