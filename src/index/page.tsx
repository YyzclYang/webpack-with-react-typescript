import React from "react";
import "./page.scss";
import "@/assets/images/react.svg";

const Page: React.FunctionComponent = () => {
  return (
    <div className="index-page">
      <section>
        <div>
          <svg className="logo">
            <use xlinkHref="#react" />
          </svg>
        </div>
        <p>Yay! You’re on Index Page!</p>
        <div className="content">
          <img src={require("@/assets/images/react.png")} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Page;
