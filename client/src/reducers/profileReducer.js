import { types } from "../types/types"

const initalState = {user:[]} 

export const profileReducer = (state = initalState, action) => {
    switch (action.type) {
        case types.profileLoad:
            return {
                ...state,
                user : [ ...action.payload]
            }
    
        default:
            return initalState;
    }
}