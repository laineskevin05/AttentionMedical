import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import Loginpage from "../components/auth/LoginPage";
import RegisterPage from "../components/auth/RegisterPage";
import CambioContrasenia from "../components/auth/CambioContrasenia";
// import Bienvenido from "../components/user/Bienvenido";
import { UserInicio } from "../components/user/UserInicio";
import NuevaCita from "../components/user/NuevaCita";
import EditarCita from "../components/user/cita/EditarCita";
import Prueba from "../components/user/Prueba";
import MenuUsuarioIzquierdo from "../components/ui/MenuUsuarioIzquierdo";
import MenuUsuarioDerecho from "../components/ui/MenuUsuarioDerecho";

import { startChecking } from "../actions/auth";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import Navbar from "../components/ui/Navbar";
import Perfil from "../components/user/Perfil";
import Configuracion from "../components/ui/Configuracion";
import RegisterHospital from "../components/auth/RegisterHospital";
import InicioHospital from "../components/hospital/InicioHospital";
import NuevoDoctor from "../components/hospital/NuevoDoctor";
import InicioAdministrador from "../components/administrador/InicioAdministrador";
import LoginAdmistrador from "../components/administrador/LoginAdministrador";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { checking, uid, tipo } = useSelector((state) => {
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
          path="/admin/login"
          element={
            <PublicRoute uid={uid}>
              <Navbar />
              <LoginAdmistrador uid={uid} />
            </PublicRoute>
          }
        />
        <Route
          path="/a"
          element={
            <PublicRoute uid={uid}>
              <Navbar />
              <div>
                <MenuUsuarioIzquierdo />
                <Prueba />
                <MenuUsuarioDerecho />
              </div>
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
          path="/registercentro"
          element={
            <PublicRoute uid={uid}>
              <Navbar />
              <RegisterHospital uid={uid} />
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

              {tipo === "usuario" ? (
                <>
                  <div className="flex min-h-screen">
                    <MenuUsuarioIzquierdo />
                    <UserInicio />
                    <MenuUsuarioDerecho />
                  </div>
                </>
              ) : tipo === "admin" ? (
                <InicioAdministrador />
              ) : (
                <InicioHospital uid={uid} />
              )}
            </PrivateRoute>
          }
        />
        <Route
          path="/configuracion"
          element={
            <PrivateRoute uid={uid}>
              <Navbar />
              <Configuracion />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <>
              <Navbar />
              <InicioAdministrador />
            </>
          }
        />
        <Route
          path="/centro/:id"
          element={
            <PrivateRoute uid={uid}>
              <Navbar />
              <InicioHospital />
            </PrivateRoute>
          }
        />
        <Route
          path="/centro/nuevodoctor"
          element={
            <PrivateRoute uid={uid}>
              <Navbar />
              <NuevoDoctor />
            </PrivateRoute>
          }
        />
        <Route
          path="/nuevacita/:infoHospital/:idDoctor"
          element={
            <PrivateRoute uid={uid}>
              <Navbar />
              <div className="flex min-h-screen">
                <MenuUsuarioIzquierdo />
                <NuevaCita />
                <MenuUsuarioDerecho />
              </div>
            </PrivateRoute>
          }
        />
        {/* <Route
          path="/centro/"
          element={
            <PrivateRoute uid={uid}>
              <Navbar />
              <div className="flex min-h-screen">
                <MenuUsuarioIzquierdo />
                <PageHospital />
                <MenuUsuarioDerecho />
              </div>
            </PrivateRoute>
          }
        /> */}
        <Route
          path="/cita/editar/:id/:cita"
          element={
            <PrivateRoute uid={uid}>
              <Navbar />
              <div className="flex min-h-screen">
                <MenuUsuarioIzquierdo />
                <EditarCita />
                <MenuUsuarioDerecho />
              </div>
            </PrivateRoute>
          }
        />
        <Route
          path="/perfil"
          element={
            <PrivateRoute uid={uid}>
              <Navbar />
              <div className="flex min-h-screen">
                <MenuUsuarioIzquierdo />
                <Perfil />
                <MenuUsuarioDerecho />
              </div>
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
