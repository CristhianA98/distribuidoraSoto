import React from "react";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center animate__animated animate__fadeIn"
      style={{ height: "100vh" }}
    >
      <img
        src="/assets/img/logoDistribuidora.png"
        className="rounded float-start"
        alt="..."
      ></img>
      <h1 className="mx-3 px-3 align-top border-right inline-block align-content-center">
        404
      </h1>
      <div className="inline-block align-middle">
        <h2 className="font-weight-normal lead fw-bold" id="desc">
          La Página no se encontró
        </h2>
        <Link to="/" className="link-secondary">
          Regresar a la Página Principal
        </Link>
      </div>
    </div>
  );
};
