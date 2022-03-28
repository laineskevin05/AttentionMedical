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

    case types.doctorLoaded:
      console.log(action.payload);
      return{
        ...state,
        doctores: [...state.doctores, ...action.payload]
      }

    case types.doctorClean:
      return {
        ...state,
        doctores: []
      }

    default:
      return state;
  }
};