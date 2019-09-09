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
      </section>
    </div>
  );
};

export default App;
