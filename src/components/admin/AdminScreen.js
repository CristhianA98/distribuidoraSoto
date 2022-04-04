import React from "react";
import { useDispatch } from "react-redux";
import { startLogout } from "../../actions/auth";

export const AdminScreen = () => {
  
  const dispatch = useDispatch();

  const hanleLogout = () =>{
    dispatch(startLogout());;
  }

  return (
    <div className="animate__animated animate__fadeIn">
      Admin Screen
      <button className=" btn btn-dark" onClick={hanleLogout}>Logout</button>
    </div>
  );
};
