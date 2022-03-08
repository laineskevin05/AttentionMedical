import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

export const citaStartAddNew = (cita)=>{
    return async(dispacth, getState)=>{
        const {uid} = getState().auth;
        try{
            const resp = await fetchConToken('cita/crearCita', cita, 'POST');
            const body = await resp.json();
            console.log(body);
            if(body.ok){
                cita.id = body.citas.id;
                cita.user = uid
                dispacth(citaAddNew(cita))
            }
        }catch(error){
            console.log(error);
        }
    }
}

export const starCitaLoaded = ()=>{
    return async(dispacth, getState)=>{

        try {
            const { uid } = getState().auth;
            const res = await fetchConToken(`cita/${ uid }`); 
            const body = await res.json();
            const citas = body.citas;
            dispacth(citaLoad(citas));
        } catch (error) {
            console.log(error);
        }
        
    }
}

const citaAddNew = ( cita )=>({
    type: types.citaAddNew,
    payload: cita
});

const citaLoad = (citas)=>({
    type: types.citaLoaded,
    payload: citas
})