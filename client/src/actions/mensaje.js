import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

export const showEnviarLoad = () => {
    return async (dispacth, getState) => {
    try {
    const { uid } = await getState().auth;
    const res = await fetchConToken(`mensaje/enviar/${uid}`);
    const body = await res.json();
    const mensaje = body.Enviarmensaje;
    if (body.ok) {
        dispacth(enviarMensaje(mensaje));
    }
    } catch (error) {
    console.log("error en load mensajes", error);
    }
};
};

export const showRecibirLoad = () => {
return async (dispacth, getState) => {
    try {
    const { uid } = await getState().auth;
    const res = await fetchConToken(`mensaje/recibir/${uid}`);
    const body = await res.json();
    const mensaje = body.Recibirmensaje;
    if (body.ok) {
        dispacth(recibirMensaje(mensaje));
    }
    } catch (error) {
    console.log("error en load mensajes", error);
    }
};
};

  const enviarMensaje = (mensaje) => ({
    type: types.enviarLoad,
    payload: mensaje,
  });

  const recibirMensaje = (mensaje) => ({
    type: types.recibirLoad,
    payload: mensaje,
  });