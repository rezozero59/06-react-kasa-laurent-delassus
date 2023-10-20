import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.scss";
import Router from "./Router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <Router />
        <div className="footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
