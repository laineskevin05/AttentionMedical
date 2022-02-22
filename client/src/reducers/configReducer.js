import { types } from "../types/types";

const initialState = {
  checking: true,
  // uid: null,
  // name: null
};

export const configReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.configCambioContrasenia:
      return {
        checking: false,
      };

    default:
      return state;
  }
};
