import React from "react";
import "./app.scss";
import "./assets/images/react.svg";

const App: React.FunctionComponent = () => {
  return (
    <div className="page">
      <section>
        <div>
          <svg className="logo">
            <use xlinkHref="#react" />
          </svg>
        </div>
        <p>Yay! You’re on React!</p>
        <div className="content">
          <img src={require("@/assets/images/react.png")} alt="" />
        </div>
        <audio controls loop src={require("@/assets/media/News.mp3")}></audio>
      </section>
    </div>
  );
};

export default App;
