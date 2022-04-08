import { fetchSinToken, fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

export const startLogin = async (correo, contrasenia) => {
  return async (dispatch) => {
    const resp = await fetchSinToken("auth", { correo, contrasenia }, "POST");
    const body = await resp.json();

    console.log(body);

    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      console.log(correo, contrasenia);
      await dispatch(
        login({
          uid: body.uid,
          name: body.nombre,
          email: body.correo,
          tipo: body.tipo,
        })
      );
    } else {
      alert("Error en la autenticacion", body.msg);
      // Swal.fire("Error", body.msg, "error");
    }
  };
};

export const startRegister = (
  nombre,
  apellido,
  correo,
  telefono,
  contrasenia,
  validarDr,
  cuentaActiva
) => {
  return async (dispatch) => {
    const resp = await fetchSinToken(
      "auth/new",
      { nombre, apellido, correo, telefono, contrasenia, validarDr, cuentaActiva },
      "POST"
    );
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());
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
    console.log(body);

    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());

      await dispatch(
        login({
          uid: body.uid,
          name: body.name,
          email: body.email,
          tipo: body.tipo,
        })
      );
    } else {
      await dispatch(checkingFinish());
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

export const startLoadProfile = () => {
  return async (dispatch, getState) => {
    console.log(getState().auth);

    try {
      const { uid } = getState().auth;
      console.log(uid);
      const res = await fetchConToken(`perfil/${uid}`);
      const body = await res.json();
      console.log(body);
      const perfil = body.perfil;
      dispatch(loadProfile(perfil));
    } catch (error) {
      console.log(error);
    }
  };
};

const loadProfile = (profile) => ({
  type: types.profileLoad,
  payload: profile,
});

const logout = () => ({ type: types.authLogout });

/*    Centro      */

export const startRegisterCentro = (
  nombre,
  correo,
  contrasenia,
  telefono,
  direccion,
  descripcion,
  cuentaActiva
) => {
  return async (dispatch) => {
    const resp = await fetchSinToken(
      "auth/newcentro",
      { nombre, correo, contrasenia, telefono, direccion, descripcion, cuentaActiva},"POST"
    );
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());

      
    } else {
      
      console.Console("error", body.msg);
    }
  };
};
