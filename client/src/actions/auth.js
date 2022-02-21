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
      dispatch(
        login({
          uid: body.uid,
          name: body.name,
        })
      );
    } else {
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

export const startChecking = () => {
  return async (dispatch) => {
    const resp = await fetchConToken("auth/renew");
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
      dispatch(checkingFinish());
    }
  };
};

const checkingFinish = () => ({ type: types.authCheckingFinish });

const login = (user) => ({
  type: types.authLogin,
  payload: user,
});

export const startLogout = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(logout());
  };
};

const logout = () => ({ type: types.authLogout });
