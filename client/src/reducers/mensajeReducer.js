import { types } from "../types/types";

const init = {
  enviar: [],
  recibido: []
};

export const mensajeReducer = (state = init, action) => {
    switch (action.type) {
        case types.mensajeLoad:
          return {
            ...state,
            enviar: {...action.payload},
          };

        default:
          return state;
      }
}