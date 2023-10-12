import "./HomeMain.scss";
import React, { useState, useEffect } from "react";

const HomeMain = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("data.json");

        if (!response.ok) {
          throw new Error(
            "Oops une erreur est survenue... " + response.statusText
          );
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  console.log(data);

  return (
    <div className="grid-container">
      <div className="galery">
        {data.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.cover} alt="appartement" />
            <h3 className="title">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeMain;
