import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

export const startLoadProfile = () => {
  return async (dispatch, getState) => {
    try {
      const { uid } = getState().auth;
      const res = await fetchConToken(`auth/perfil/${uid}`);
      const body = await res.json();
      const perfil = body.user;
      dispatch(loadProfile(Object.values(perfil)));
    } catch (error) {}
  };
};

export const updateProfile = (perfil) => {
  return async (dispatch, getState) => {
    try {
      const { uid } = getState().auth;
      const res = await fetchConToken(
        `config/configuracion/${uid}`,
        perfil,
        "PUT"
      );
      const body = await res.json();
      if (body.ok) {
        dispatch(loadProfile(body.user));
      }
    } catch (error) {}
  };
};

const loadProfile = (profile) => ({
  type: types.profileLoad,
  payload: profile,
});
