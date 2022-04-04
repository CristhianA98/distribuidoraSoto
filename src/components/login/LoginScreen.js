import React from "react";
import { useDispatch } from "react-redux";
import validator from "validator";
import Swal from "sweetalert2";

import { startLoginWithEmailPassword } from "../../actions/auth";
import { FinishLoading } from "../../actions/ui";
import { useForm } from "../../hooks/useForm";
import "./loginStyle.css";

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    email: "distribuidorasoto@gmail.com",
    password: "123456789",
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startLoginWithEmailPassword(email, password));
    }
  };

  const isFormValid = () => {
    if (!validator.isEmail(email)) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Email Incorrecto",
        showConfirmButton: false,
        timer: 2000,
      });
      dispatch(FinishLoading());
      return false;
    } else if (validator.isEmpty(password) || password < 6) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Usuario/Password - Incorrectos",
          showConfirmButton: false,
          timer: 2000,
        });
      dispatch(FinishLoading());
      return false;
    }

    return true;
  };

  return (
    <div className="container-fluid animate__animated animate__fadeIn">
      <div className="row no-gutter">
        <div className="col-md-6 d-none d-md-flex bg-image" />
        <div className="col-md-6 bg-light">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-xl-7 mx-auto">
                  <h3 className="display-3">Bienvenido!</h3>
                  <p className="text-muted mb-4">
                    Gestión de los productos en stock
                  </p>
                  <form onSubmit={handleLogin}>
                    <div className="form-group mb-3">
                      <input
                        type="email"
                        placeholder="Email..."
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        autoFocus
                        className="form-control rounded-pill border-0 shadow-sm px-4"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        type="password"
                        placeholder="Password..."
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                        className="form-control rounded-pill border-0 shadow-sm px-4 text-secondary"
                      />
                    </div>
                    <div className="d-grid gap-2">
                      <button
                        type="submit"
                        className="btn btn-outline-dark text-uppercase mt-3 rounded-pill shadow-sm"
                      >
                        Ingresar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
