import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

export const citaStartAddNew = (cita) => {
  return async (dispacth, getState) => {
    const { uid } = getState().auth;
    try {
      const resp = await fetchConToken("cita/crearCita", cita, "POST");
      const body = await resp.json();
      console.log(body);
      if (body.ok) {
        alert("Cita agregada correctamente");
      }
    } catch (error) {
      alert("Error en la cita");

      console.log(error);
    }
  };
};

export const starCitaLoaded = () => {
  return async (dispacth, getState) => {
    try {
      const { uid } = getState().auth;
      const res = await fetchConToken(`cita/${uid}`);
      const body = await res.json();
      const citas = body.citas;

      dispacth(
        citaLoad(
          citas.map((dato) => {
            return {
              id: dato.id,
              idClinica: dato.clinica ? dato.clinica._id : "Vacio",
              nombreClinica: dato.clinica ? dato.clinica.nombre : "Vacio",
              idUserDoctor: dato.doctor ? dato.doctor._id : "Vacio",
              nombreDoctor: dato.doctor ? dato.doctor.nombre : "Vacio",
              fecha: dato.fecha,
              hora: dato.hora,
              estado: dato.estado,
              descripcion: dato.descripcion,
              user: dato.user,
            };
          })
        )
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const editCita = (cita) => {
  return async (dispacth, getState) => {
    try {
      const res = await fetchConToken(
        `cita/actualizarCita/${cita.id}`,
        cita,
        "PUT"
      );
      const body = await res.json();

      dispacth(citaEdit(cita));
      if (body.ok) {
        alert("Cita actualizada correctamente");
      }
    } catch (error) {
      console.log(error);
      alert("La cita no se pudo actualizadar");
    }
  };
};

export const citaStartCanceled = (cita) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    try {
      const resp = await fetchConToken(
        `cita/cancelarCita/${cita.id}`,
        cita,
        "PUT"
      );
      const body = await resp.json();

      if (body.ok) {
        //cita.id = body.citas.id;
        cita.user = uid;
        dispatch(citaCanceled(cita));
      } else {
        console.log("error 1");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const citaCanceled = (cita) => ({
  type: types.citaCanceled,
  payload: cita,
});

const citaLoad = (citas) => ({
  type: types.citaLoaded,
  payload: citas,
});

const citaEdit = (cita) => ({
  type: types.citaEdit,
  payload: cita,
});
