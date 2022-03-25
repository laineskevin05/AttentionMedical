import { useSelector, getState } from "react-redux";
import { fetchSinToken, fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

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

export const startCambioDepartamentosHospital = (departamentos) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const resp = await fetchConToken(
      "config/cambiodepartamentoshospital",
      { uid, departamentos },
      "POST"
    );
    const body = await resp.json();
    console.log("respuesta del backend cambio de departamentos", body);
    if (body.ok) {
      await dispatch(departamentosHospital(body.departamentos));
      alert("Los departamentos del hospital se modificaron");
    } else {
      alert("Los departamentos del hospital no se modificaron");
    }
  };
};
export const cargarDepartamentosHospital = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    console.log(uid);
    const resp = await fetchConToken(
      `config/cargadepartamentoshospital/${uid}`
    );
    const body = await resp.json();
    console.log("respuesta del backend de carga de departamentos", body);
    if (body.ok) {
      await dispatch(departamentosHospital(body.departamentos));
    } else {
      console.log("Los departamentos del hospital no se cargaron");
    }
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    localStorage.clear();
    await dispatch(logout());
  };
};

const logout = () => ({ type: types.authLogout });

const cambioContrasenia = () => ({ type: types.configCambioContrasenia });

const departamentosHospital = (departamentos) => ({
  type: types.configCambioDepartamentosHospital,
  payload: departamentos,
});
