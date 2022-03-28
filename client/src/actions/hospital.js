import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

export const hospitalSearchStar = ()=>{
    return async (dispacth) => {
        try {
          const res = await fetchConToken(`hospital/buscar`);
          const body = await res.json();
          const hospital = body.hospital;
          dispacth(hospitalSearch(hospital));
        } catch (error) {
          console.log(error);
        }
      };
}

export const startLoadHospital = (id) => {
  return async (dispatch) => {
    try {
      const res = await fetchConToken(`hospital/hospitalAct/${id}`);
      const body = await res.json();
      const perfil = body.hospital;
      console.log(perfil);
      dispatch(loadHospitalAct(perfil));
    } catch (error) {
      console.log(error);
    }
  };
};

const loadHospitalAct = (profile) => ({
  type: types.hospitalActCargar,
  payload: profile,
});

const hospitalSearch = (busqueda)=>({
    type: types.hospitalSearch,
    payload: busqueda
})