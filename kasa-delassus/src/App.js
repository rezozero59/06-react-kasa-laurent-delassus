import React from "react";
import Router from "./pages/Router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.scss";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Router />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
