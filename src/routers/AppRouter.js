import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "animate.css";

import { login } from "../actions/auth";
import { PageNotFound } from "../components/404/PageNotFound";
import { AppSotoScreen } from "../components/appSoto/AppSotoScreen";
import { LoadingPage } from "../components/loading/LoadingPage";
import { LoginScreen } from "../components/login/LoginScreen";
import { auth, onAuthStateChanged } from "../firebase/firebase-config";
import { AdminRoutes } from "./AdminRoutes";
import { PrivateRoute } from "./PrivateRoutes";
import { PublicRoute } from "./PublicRoutes";
import { ProductView } from "../components/appSoto/ProductView";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.email));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return <LoadingPage className="animate__animated animate__fadeIn" />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/login"
          element={
            <PublicRoute isLoggedIn={isLoggedIn}>
              <LoginScreen />
            </PublicRoute>
          }
        />

        <Route
          exact
          path="/admin/*"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <AdminRoutes />
            </PrivateRoute>
          }
        />
        
        <Route path="/" element={<AppSotoScreen />} />
        <Route path="/product/:id" element={<ProductView />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
