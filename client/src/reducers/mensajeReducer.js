import { types } from "../types/types";

const init = {
  mensajes: [],
  listMensajes: [],
};

export const mensajeReducer = (state = init, action) => {
  switch (action.type) {
    case types.mensajeLoad:
      return {
        ...state,
        mensajes: [...action.payload],
      };
    case types.mensajeRedload:
      return {
        ...state,
        mensajes: [...action.payload],
      };
    case types.listMensajeLoad:
      return {
        ...state,
        listMensajes: [...action.payload],
      };
    default:
      return state;
  }
};
