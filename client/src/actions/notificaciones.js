import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

export const starNotificacionesLoad = () => {
  return async (dispacth, getState) => {
    try {
      const { uid } = await getState().auth;
      const res = await fetchConToken(`notificacion/${uid}`);
      const body = await res.json();
      const notificaciones = body.notificacion;
      console.log(notificaciones, body, "aaaa", uid);
      if (body.ok) {
        dispacth(notificacionesLoad(notificaciones));
      }
    } catch (error) {
      console.log("error en load notificaciones", error);
    }
  };
};

const notificacionesLoad = (notificaciones) => ({
  type: types.notifacionesLoad,
  payload: notificaciones,
});
