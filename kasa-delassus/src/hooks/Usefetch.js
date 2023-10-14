import { useState, useEffect } from "react";

function Usefetch() {
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

  return { data, loading, error };
}

export default Usefetch;
