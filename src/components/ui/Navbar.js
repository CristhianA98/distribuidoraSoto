import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../actions/auth";

export const Navbar = () => {
  const dispatch = useDispatch();
  const { uid } = useSelector((state) => state.auth);
  let isLogged = false;
  uid ? (isLogged = true) : (isLogged = false);

  const hanleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light shadow">
        {!isLogged && (
          <div className="container d-flex justify-content-between align-items-center">
            <Link to="/">
              <img
                src={window.location.origin + "/assets/img/logoInicio.png"}
                alt="LogoInicio"
                width="45px"
              />
            </Link>
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#templatemo_main_nav"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
              id="templatemo_main_nav"
            >
              <div className="flex-fill">
                <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                  <li className="nav-item">
                    <Link to="/" className="nav-link h3">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link h3" href="/">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link h3" href="/">
                      Shop
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link h3" href="/">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div className="navbar align-self-center d-flex">
                {isLogged && (
                  <Link
                    to="/login"
                    className="nav-icon position-relative text-decoration-none h3"
                    title="Login Admin"
                    onClick={hanleLogout}
                  >
                    <i className="fa fa-fw fa-user text-main mr-3" /> Logout
                  </Link>
                )}

                {!isLogged && (
                  <>
                    <a className="nav-icon d-lg-inline" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                      <i className="fa fa-fw fa-search text-main mr-2"></i>
                    </a>
                  </>
                )}

                <Link
                  to="/login"
                  className="nav-icon position-relative text-decoration-none h3"
                  title="Login Admin"
                >
                  <i className="fa fa-fw fa-user text-main mr-3" /> Login
                </Link>
              </div>
            </div>
          </div>
        )}

        {isLogged && (
          <div className="container d-flex justify-content-between align-items-center">
            <Link to="/admin">
              <img
                src={window.location.origin + "/assets/img/logoInicio.png"}
                alt="LogoInicio"
                width="45px"
              />
            </Link>
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#templatemo_main_nav"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
              id="templatemo_main_nav"
            >
              <div className="flex-fill">
                <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                  <li className="nav-item">
                    <NavLink to="/admin" className="nav-link h3">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link h3" to="/admin/ingresarProducto">
                      Ingresar
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link h3" to="/admin/listado">
                      Listado
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="navbar align-self-center d-flex">
                <NavLink
                  to="/login"
                  className="nav-icon position-relative text-decoration-none h3"
                  title="Login Admin"
                  onClick={hanleLogout}
                >
                  <i className="fa fa-fw fa-user text-main mr-3" /> Logout
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </nav>

    </>
  );
};
