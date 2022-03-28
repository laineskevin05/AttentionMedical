import { types } from "../types/types"

const initalState = {} 

export const hospitalActReducer = (state = initalState, action) => {
    switch (action.type) {
        case types.hospitalActCargar:
            return {
                ...state,
                ...action.payload
            }
    
        default:
            return initalState;
    }
}