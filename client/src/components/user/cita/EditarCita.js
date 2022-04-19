import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  citaStartAddNew,
  editCita,
  starCitaLoaded,
} from "../../../actions/cita";
import { useForm } from "../../../hook/useForm";
// import { Link } from "react-router-dom";

const EditarCita = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(starCitaLoaded());
  }, [dispatch]);

  const { citas } = useSelector((state) => state.cita);

  const cita = citas.find((cita) => cita.id === id);

  const [formValues, handleInputChange, setValues] = useForm({
    clinica: "",
    doctor: "",
    fecha: "",
    hora: "",
    estado: "Activo",
    descripcion: "",
    id: id,
  });
  useEffect(() => {
    cita !== undefined &&
      setValues({
        clinica: cita.idClinica,
        doctor: cita.idUserDoctor,
        fecha: cita.fecha,
        hora: cita.hora,
        estado: cita.estado,
        descripcion: cita.descripcion,
        id: cita.id,
      });
    console.log(cita, "cita");
  }, [cita]);

  // const [formValues, handleInputChange] = useForm({
  //   clinica: cita.split(",")[0],
  //   doctor: cita.split(",")[1],
  //   fecha: cita.split(",")[2],
  //   hora: cita.split(",")[3],
  //   estado: "Activo",
  //   descripcion: cita.split(",")[4],
  //   id: id,
  // });

  const handleEditar = (e) => {
    e.preventDefault();
    dispatch(editCita(formValues));

    navigate("/", { replace: true });
  };

  const { clinica, doctor, fecha, hora, descripcion } = formValues;

  return (
    <>
      <form className="w-3/5 inline-block" onSubmit={handleEditar}>
        <span>
          NOTA: SOLO LLENE LOS CAMPOS QUE DESEA ACTUALIZAR, LO DEMAS DEJELO EN
          BLANCO EQUIS DE
        </span>
        <div className="grid gap-8  p-2 pt-8 content-start">
          <div className="text-center border-2 m-4">
            <h6 className="uppercase text block py-3 bg-slate-700 text-white font-bold">
              Editar cita
            </h6>
            <div className="p-1 text-left">
              <div className="block border-b-2">
                <label className="inline-block mx-2 w-36 text-right text-red-500">
                  *Clinica/Hospital*:{" "}
                </label>
                <input
                  type="text"
                  name="clinica"
                  value={cita ? cita.nombreClinica : ""}
                  onChange={handleInputChange}
                  autoComplete="off"
                  placeholder="Clinica "
                  className="px-2 w-2/3 bg-slate-200 rounded border-2 my-1"
                />
              </div>
            </div>
            <div className="p-1 text-left">
              <div className="block border-b-2">
                <label className="inline-block mx-2 w-36 text-right text-red-500">
                  *Doctor(a)*:{" "}
                </label>
                <input
                  type="text"
                  name="doctor"
                  placeholder="Nombre"
                  autoComplete="off"
                  value={cita ? cita.nombreDoctor : ""}
                  onChange={handleInputChange}
                  className="px-2 w-2/3 bg-slate-200 rounded border-2 my-1"
                />
              </div>
            </div>
            <div className="p-1 text-left">
              <div className="block border-b-2">
                <label className="inline-block mx-2 w-36 text-right">
                  Fecha:{" "}
                </label>
                <input
                  type="date"
                  name="fecha"
                  value={fecha}
                  onChange={handleInputChange}
                  placeholder=""
                  className="px-2 w-2/3 bg-slate-100 rounded border-2 my-1"
                />
              </div>
            </div>
            <div className="p-1 text-left">
              <div className="block border-b-2">
                <label className="inline-block mx-2 w-36 text-right">
                  Hora:{" "}
                </label>
                <input
                  type="time"
                  name="hora"
                  value={hora}
                  onChange={handleInputChange}
                  className="px-2 w-2/3 bg-slate-100 rounded border-2 my-1"
                />
              </div>
            </div>
            <div className="p-1 text-left">
              <div className="block border-b-2 ">
                <label className="inline-block mx-2 w-36 text-right align-top">
                  Descripcion:{" "}
                </label>
                <textarea
                  className="px-2 w-2/3 bg-slate-100 rounded border-2 my-1 h-32"
                  name="descripcion"
                  value={descripcion}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="p-1 text-center">
              <div className="block border-b-2 ">
                <button
                  type="submit"
                  className="px-2 w-1/3 bg-blue-300 rounded border-2 my-1 "
                >
                  Realizar edicion
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditarCita;
