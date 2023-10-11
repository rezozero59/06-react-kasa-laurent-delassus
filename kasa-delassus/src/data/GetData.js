import React, { useState, useEffect } from "react";

const GetData = () => {
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
    <div>
      <h2>
        {data.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.location}</p>
            <img src={item.cover} alt="appartement" />
          </div>
        ))}
      </h2>
    </div>
  );
};

export default GetData;
