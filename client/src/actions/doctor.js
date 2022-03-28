import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

export const doctorStartAddNew = (doctor) => {
  return async (dispacth, getState) => {
    const { uid } = getState().auth;
    try {
      const resp = await fetchConToken(
        `hospital/newdoctor/${uid}`,
        doctor,
        "POST"
      );
      const body = await resp.json();

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

export const starDoctorLoaded = (uid) => {
  console.log(uid);
  return async (dispacth) => {
    try {
      const res = await fetchConToken(`hospital/${uid}`);
      const body = await res.json();
      const doctores = body.hospital;

      dispacth(doctorLoad(doctores));
    } catch (error) {
      console.log(error);
    }
  };
};

export const limpiarDoctores = () => {
  return async (dispacth) => {
    dispacth(doctorClean());
  };
};

const doctorAddNew = (doctor) => ({
  type: types.doctorAddNew,
  payload: doctor,
});

const doctorLoad = (doctores) => ({
  type: types.doctorLoaded,
  payload: doctores,
});

const doctorClean = () => ({
  type: types.doctorClean,
});
