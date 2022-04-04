import React from "react";
import "./loading.css";

export const LoadingPage = () => {
  return (
    <div className="container-loading">
      <div className="loader">
        <img
          src={window.location.origin + "/assets/img/logoDistribuidora.png"}
          alt="Logo  Distribuidora"
        />
      </div>
      <div className="dash-container">
        <div className="dash uno"></div>
        <div className="dash dos"></div>
        <div className="dash tres"></div>
        <div className="dash cuatro"></div>
      </div>
    </div>
  );
};
