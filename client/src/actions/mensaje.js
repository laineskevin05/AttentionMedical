import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

export const showMensajeLoad = () => {
  return async (dispacth, getState) => {
    try {
      const { uid } = await getState().auth;
      const res = await fetchConToken(`mensaje/mostrar/${uid}`);
      const body = await res.json();
      const mensaje = body.mensajes;
      if (body.ok) {
        dispacth(Mensaje(mensaje));
      }
    } catch (error) {
      console.log("error en load mensajes", error);
    }
  };
};

export const createMesaje = (receptor, msg) => {
  return async (dispacth, getState) => {
    try {
      const { uid } = await getState().auth;
      const resp = await fetchConToken(
        `mensaje/mensajeria/${uid}`,
        { emisor: uid, receptor: receptor, mensaje: msg },
        "POST"
      );

      const body = await resp.json();
      console.log(body, "bodys");
      const mensaje = body.mensajes;

      if (body.ok) {
        dispacth(MensajeReload(mensaje));
      }
    } catch (error) {
      console.log("error en load mensajes", error);
    }
  };
};
export const showListMensajeLoad = () => {
  return async (dispacth, getState) => {
    try {
      const { uid } = await getState().auth;
      const res = await fetchConToken(`mensaje/listamensajes/${uid}`);
      const body = await res.json();
      const chats = body.chats;
      console.log(chats, "chats");
      if (body.ok) {
        dispacth(ListMensaje(chats));
      }
    } catch (error) {
      console.log("error en load mensajes", error);
    }
  };
};

export const LimpiarMensaje = () => {
  return async (dispacth) => {
    try {
      dispacth(Mensaje([]));
    } catch (error) {
      console.log("error en limpiar mensaje", error);
    }
  };
};

export const createListMesaje = (user2) => {
  return async (dispacth, getState) => {
    try {
      const { uid } = await getState().auth;
      const resp = await fetchConToken(
        `mensaje/crearlistamensajes/${uid}`,
        { user2: user2 },
        "POST"
      );

      const body = await resp.json();
      const chats = body.chats;
      console.log(body.msg, "msg create list");
      if (body.ok) {
        dispacth(ListMensaje(chats));
      }
    } catch (error) {
      console.log("error en load mensajes", error);
    }
  };
};

const Mensaje = (mensaje) => ({
  type: types.mensajeLoad,
  payload: mensaje,
});
const MensajeReload = (mensaje) => ({
  type: types.mensajeRedload,
  payload: mensaje,
});

const ListMensaje = (list) => ({
  type: types.listMensajeLoad,
  payload: list,
});
