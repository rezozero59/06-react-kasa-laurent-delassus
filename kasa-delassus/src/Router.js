import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Product from "./pages/Product";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/appartement/:id" element={<Product />} />
      <Route path="/appartement/*" element={<ErrorPage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}
export default Router;
