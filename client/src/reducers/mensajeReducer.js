import { types } from "../types/types";

const init = {
  enviar: [],
  recibido: []
};

export const mensajeReducer = (state = init, action) => {
    switch (action.type) {
        case types.enviarLoad:
          return {
            ...state,
            enviar: {...action.payload},
          };
          case types.recibirLoad:
            return {
              ...state,
              recibido: {...action.payload},
            };
        default:
          return state;
      }
}