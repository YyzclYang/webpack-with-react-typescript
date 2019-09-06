import React from "react";
import "./app.scss";
import "./assets/img/react.svg";

const App: React.FunctionComponent = () => {
  return (
    <div className="page">
      <div>App</div>
      <img src={require("./assets/img/react.png")} alt="" />
      <svg className="svg">
        <use xlinkHref="#react" />
      </svg>
    </div>
  );
};

export default App;
