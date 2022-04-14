import { types } from "../types/types";

const initialState = {
  usuarios: [],
  hospitales: []
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case types.usuariosLoaded:
      return{
        ...state,
        usuarios: [...state.usuarios, ...action.payload]
      }
      
    case types.hospitalesLoaded:
      return{
          ...state,
          hospitales: [...state.hospitales, ...action.payload]
      }
    case types.usuarioBaned:
      return {
        ...state,
        usuarios: state.usuarios.map((e) =>
          e.id === action.payload.id ? action.payload : e
        ),
      };

    case types.hospitalBaned:
      return {
        ...state,
        hospitales: state.hospitales.map((e) =>
          e.id === action.payload.id ? action.payload : e
        ),
      };

    default:
      return state;
  }
};