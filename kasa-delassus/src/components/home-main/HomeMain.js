import "./HomeMain.scss";
import { Link } from "react-router-dom";

import useFetch from "../../hooks/usefetch";

function HomeMain() {
  const { data, loading, error } = useFetch("/data.json");

  if (loading) return <div>Loading ...</div>;
  if (error) return <div>Error: {error}</div>;

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
