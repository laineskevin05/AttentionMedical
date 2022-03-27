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

const hospitalSearch = (busqueda)=>({
    type: types.hospitalSearch,
    payload: busqueda
})