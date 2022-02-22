import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import Loginpage from "../components/auth/LoginPage";
import RegisterPage from "../components/auth/RegisterPage";
import Bienvenido from "../components/user/Bienvenido";

import { startChecking } from "../actions/auth";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import Navbar from "../components/ui/Navbar";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { checking, uid } = useSelector((state) => {
    return state.auth;
  });

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  if (checking) {
    return <h5>Espere...</h5>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Navbar />
              <Loginpage uid={uid} />
            </PublicRoute>
          }
        />

        <Route
          path="/register"
          element={
            <PublicRoute uid={uid}>
              <Navbar />
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoute uid={uid}>
              <Navbar />
              <Bienvenido />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
