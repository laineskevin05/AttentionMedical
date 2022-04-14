import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

export const startUsuariosLoaded = () => {
    return async (dispacth) => {
      try {
        const res = await fetchConToken(`admin/getusuarios`);
        const body = await res.json();
     
        dispacth(usuariosLoad(body.usu));
        
      } catch (error) {
        console.log(error);
      }
    };
  };

  export const startHospitalesLoaded = () => {
    return async (dispatch) => {
      try {
        const res = await fetchConToken(`admin/gethospitales`);
        const body = await res.json();
    
        dispatch(hospitalesLoad(body.hsp));
        
      } catch (error) {
        console.log(error);
      }
    };
  };

  export const banearCuenta = (info) => {
    return async (dispatch) => {
      try { 
        const res = await fetchConToken(`admin/banearCuenta`, info, 'PUT');
        const body = await res.json();

        console.log(body);

        if(body.ok) {
          dispatch(usuarioCanceled(body));
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  const usuariosLoad = (usuarios) => ({
    type: types.usuariosLoaded,
    payload: usuarios,
  });

  const usuarioCanceled = (usuario) => ({
    type: types.usuarioBaned,
    payload: usuario,
  });

  const hospitalesLoad = (hospitales) => ({
    type: types.hospitalesLoaded,
    payload: hospitales,
  });