import { types } from "../types/types";

const initialState = {
  doctores: []
};

export const doctorReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.doctorAddNew:
    return {
        ...state,
        doctores: [...state.doctores, action.payload]
    }

    default:
      return state;
  }
};