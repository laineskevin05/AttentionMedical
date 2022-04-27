import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

export const showMensajeLoad = () => {
    return async (dispacth, getState) => {
    try {
    const { uid } = await getState().auth;
    const res = await fetchConToken(`mensaje/mostrar/${uid}`);
    const body = await res.json();
    const mensaje = body.Enviarmensaje;
    if (body.ok) {
        dispacth(Mensaje(mensaje));
    }
    } catch (error) {
    console.log("error en load mensajes", error);
    }
};
};

  const Mensaje = (mensaje) => ({
    type: types.enviarLoad,
    payload: mensaje,
  });