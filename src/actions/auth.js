import Swal from "sweetalert2";
import {
  auth,
  signInWithEmailAndPassword,
  signOut,
} from "../firebase/firebase-config";
import { types } from "../types/types";
import { FinishLoading, startLoading } from "./ui";

export const startLoginWithEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.email));
        dispatch(FinishLoading());
      })
      .catch(() => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Usuario/Password - Incorrectos",
          showConfirmButton: false,
          timer: 2000,
        });
        dispatch(FinishLoading());
      });
  };
};

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    dispatch(startLoading());
    
    await signOut(auth);

    dispatch(logout());
    dispatch(FinishLoading());
  };
};

export const logout = () => ({
  type: types.logout,
});
