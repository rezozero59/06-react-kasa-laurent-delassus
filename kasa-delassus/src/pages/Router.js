import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import ErrorPage from "./ErrorPage";
import Product from "./Product";

function Router({ appartments }) {
  return (
    <Routes>
      <Route path="/" element={<Home appartments={appartments} />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/appartement/:id"
        element={<Product appartments={appartments} />}
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default Router;
