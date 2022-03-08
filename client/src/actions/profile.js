import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

export const startLoadProfile = () => {
    return async( dispatch, getState ) => {
        
        try {
            const { uid } = getState().auth
            const res = await fetchConToken(`auth/perfil/${ uid }`)
            const body = await res.json();
            console.log(body);
            const perfil = body.user;
            dispatch( loadProfile( perfil ) )
        } catch (error) {
            
        }
    }
}

const loadProfile = (profile) => ({
    type: types.profileLoad,
    payload: profile
})