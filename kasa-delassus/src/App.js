import React from "react";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.scss";
import Usefetch from "./hooks/Usefetch";

import Router from "./Router";

function App() {
  const { data, loading, error } = Usefetch();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="app-container">
      <Header />
      <Router appartments={data} />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
