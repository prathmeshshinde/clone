import React from "react";
import App from "./assets/app.png";

const Image = () => {
  return (
    <div>
      <div className="px-40">
        <img src={App} alt="app" className="mb-20" />
      </div>
    </div>
  );
};

export default Image;
