import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

export const doctorStartAddNew = (doctor) => {
  return async (dispacth, getState) => {
    const { uid } = getState().auth;
    try {
      const resp = await fetchConToken(`hospital/newdoctor/${uid}`, doctor, "POST");
      const body = await resp.json();
      console.log(body);
      if (body.ok) {
        doctor.id = body.doctorGuardado.id;
        doctor.hospital = uid;
        doctor.user = body.doctorGuardado.user;
        dispacth(doctorAddNew(doctor));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const doctorAddNew = (doctor) => ({
    type: types.doctorAddNew,
    payload: doctor,
  });