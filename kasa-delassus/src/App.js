import React from "react";
import Router from "./pages/Router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.scss";
import Usefetch from "./hooks/Usefetch";

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
