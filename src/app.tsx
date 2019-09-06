import React from "react";
import "./app.scss";
import "./assets/img/react.svg";

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
          <img src={require("@/assets/img/react.png")} alt="" />
        </div>
      </section>
    </div>
  );
};

export default App;
