import { types } from "../types/types";

const init = {
    hospitales: []
} 

export const hospitalReducer = (state = init, action) => {
    switch (action.type) {

        case types.hospitalSearch:
            return{
                ...state,
                hospitales: [...action.payload]
            }
    
        default:
            return init;
    }
}