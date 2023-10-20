import "./HomeMain.scss";
import { Link } from "react-router-dom";

import { useEffect } from "react";
import { useState } from "react";

function HomeMain() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="grid-container">
      <ul className="galery">
        {data.map((item) => (
          <li key={item.id}>
            <Link to={`/appartement/${item.id}`}>
              <div className="item" appartment={item}>
                <img src={item.cover} alt="appartement" />
                <h3 className="title">{item.title}</h3>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomeMain;
