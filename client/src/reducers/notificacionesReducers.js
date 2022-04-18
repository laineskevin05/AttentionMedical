import { types } from "../types/types";

const init = {
  notificaciones: [],
};

export const notificacionesReducer = (state = init, action) => {
  switch (action.type) {
    case types.notifacionesLoad:
      return {
        ...state,
        notificaciones: [...action.payload],
      };

    default:
      return state;
  }
};
