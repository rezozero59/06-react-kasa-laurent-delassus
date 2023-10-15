import "./HomeMain.scss";

import Usefetch from "../../hooks/Usefetch";

function HomeMain() {
  const { data, loading, error } = Usefetch();
  console.log(data);

  return (
    <div className="grid-container">
      <div className="galery">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          data.map((item) => (
            <div className="item" key={item.id} appartment={item}>
              <img src={item.cover} alt="appartement" />
              <h3 className="title">{item.title}</h3>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default HomeMain;
