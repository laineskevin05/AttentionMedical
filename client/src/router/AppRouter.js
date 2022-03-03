import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import Loginpage from "../components/auth/LoginPage";
import RegisterPage from "../components/auth/RegisterPage";
import CambioContrasenia from "../components/auth/CambioContrasenia";
// import Bienvenido from "../components/user/Bienvenido";
import { UserInicio } from "../components/user/UserInicio";
import NuevaCita from "../components/user/NuevaCita";

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
            <PublicRoute uid={uid}>
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
              <RegisterPage uid={uid} />
            </PublicRoute>
          }
        />
        <Route
          path="/cambiarcontrasenia"
          element={
            <PrivateRoute uid={uid}>
              <Navbar />
              <CambioContrasenia uid />
            </PrivateRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute uid={uid}>
              <Navbar />
              <UserInicio />
            </PrivateRoute>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoute uid={uid}>
              <Navbar />
              <NuevaCita />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
