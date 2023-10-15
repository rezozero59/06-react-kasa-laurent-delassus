import "./HomeMain.scss";
import { Link } from "react-router-dom";

function HomeMain({ appartments }) {
  return (
    <div className="grid-container">
      <div className="galery">
        {appartments.map((item) => (
          <Link to={`/appartement/${item.id}`} key={item.id}>
            <div className="item" appartment={item}>
              <img src={item.cover} alt="appartement" />
              <h3 className="title">{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomeMain;
