import { types } from "../types/types";

const init = {
  citas: [],
};

export const citaReducer = (state = init, action) => {
  switch (action.type) {
    case types.citaAddNew:
      return {
        ...state,
        citas: [...state.citas, action.payload],
      };
    case types.citaLoaded:
      return {
        ...state,
        citas: [...action.payload],
      };
    case types.citaCanceled:
      return {
        ...state,
        citas: state.citas.map((e) =>
          e.id === action.payload.id ? action.payload : e
        ),
      };

    case types.citaEdit:
      console.log(action.payload);

      return {
        ...state,
        citas: state.citas.map((e) =>
          e.id === action.payload.id ? action.payload : e
        ),
      };

    default:
      return state;
  }
};
