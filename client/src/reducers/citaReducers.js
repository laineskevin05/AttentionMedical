import { types } from "../types/types";

const init = {
    citas: []
} 

export const citaReducer = (state = init, action) => {
    switch (action.type) {

        case types.citaAddNew :
            return {
                ...state,
                citas: [...state.citas, action.payload]
            }
        case types.citaLoaded:
            return{
                ...state,
                citas: [...action.payload]
            }
    
        
    
        default:
            return init;
    }
}