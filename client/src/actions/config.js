import { useSelector } from "react-redux";
import { fetchSinToken, fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

export const startLogin = (correo, contrasenia) => {
  return async (dispatch) => {
    const resp = await fetchSinToken("auth", { correo, contrasenia }, "POST");
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      console.log(correo, contrasenia);
      await dispatch(
        login({
          uid: body.uid,
          name: body.name,
        })
      );
    } else {
      alert("error", body.msg);
      // Swal.fire("Error", body.msg, "error");
    }
  };
};

export const startRegister = (
  nombre,
  apellido,
  correo,
  telefono,
  contrasenia
) => {
  return async (dispatch) => {
    const resp = await fetchSinToken(
      "auth/new",
      { nombre, apellido, correo, telefono, contrasenia },
      "POST"
    );
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());

      dispatch(
        login({
          uid: body.uid,
          name: body.name,
        })
      );
    } else {
      // Swal.fire("Error", body.msg, "error");
      console.Console("error", body.msg);
    }
  };
};

export const startCambioContrasenia = (uid, contrasenia) => {
  return async (dispatch) => {
    const resp = await fetchConToken(
      "config/cambiarcontrasenia",
      { uid, contrasenia },
      "POST"
    );
    const body = await resp.json();
    console.log("respuesta del backend cambio de contraseña", body);
    if (body.ok) {
      await dispatch(cambioContrasenia());
      alert("La contraseña se cambio correctamente");
    } else {
      alert("No se pudo cambiar la contrasenia");
    }
  };
};

const checkingFinish = () => ({ type: types.authCheckingFinish });

const login = (user) => ({
  type: types.authLogin,
  payload: user,
});

export const startLogout = () => {
  return async (dispatch) => {
    localStorage.clear();
    await dispatch(logout());
  };
};

const logout = () => ({ type: types.authLogout });

const cambioContrasenia = () => ({ type: types.configCambioContrasenia });
