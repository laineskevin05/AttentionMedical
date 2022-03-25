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
    case types.configCambioDepartamentosHospital:
      return {
        ...state,
        checking: false,
        departamentos: [...action.payload],
      };

    default:
      return state;
  }
};
