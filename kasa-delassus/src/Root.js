import React from "react";
import Usefetch from "./hooks/Usefetch";
import App from "./App";

const Root = () => {
  const { data, loading, error } = Usefetch();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <App appartments={data} />;
};

export default Root;
