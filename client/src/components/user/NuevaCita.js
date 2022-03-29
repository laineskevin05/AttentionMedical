import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { citaStartAddNew } from "../../actions/cita";
import { starDoctorLoaded } from "../../actions/doctor";
import { useForm } from "../../hook/useForm";

const NuevaCita = () => {
  const navigate = useNavigate();
  const fechaActual = new Date();
  const dispatch = useDispatch();
  const { infoHospital, idDoctor } = useParams();

  useEffect(() => {
    dispatch(starDoctorLoaded(infoHospital.split(",")[0]));
  }, []);

  const { doctores } = useSelector((state) => state.doctor);

  const [formValues, handleInputChange] = useForm({
    clinica: infoHospital.split(",")[0],
    doctor: idDoctor,
    fecha: "",
    hora: "",
    estado: "Activo",
    descripcion: "",
  });

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(citaStartAddNew(formValues));
    navigate("/", { replace: true });
  };

  const { fecha, hora, descripcion } = formValues;
  const infoDoctor = Object.values(doctores)?.find((dato) => {
    return dato.id === idDoctor;
  });
  return (
    <>
      <form className="w-3/5 inline-block bg-fondo" onSubmit={handleAdd}>
        <div className="grid gap-8  p-2 pt-4 content-start ">
          <Link to={`/centro/${infoHospital.split(",")[0]}`}>Regresar</Link>
          <div className="text-center border-2  bg-gray-50">
            <h6 className="uppercase text block py-3 bg-slate-700 text-white font-bold">
              Nueva cita
            </h6>
            <div className="p-1 text-left">
              <div className="block border-b-2">
                <label className="inline-block mx-2 w-36 text-right text-red-800">
                  Centro medico:{" "}
                </label>
                <input
                  type="text"
                  name="clinica"
                  value={infoHospital.split(",")[1]}
                  onChange={handleInputChange}
                  autoComplete="off"
                  placeholder="Clinica San martin"
                  disabled={true}
                  className="px-2 w-2/3 bg-slate-100 rounded border-2 my-1"
                />
              </div>
            </div>
            <div className="p-1 text-left">
              <div className="block border-b-2">
                <label className="inline-block mx-2 w-36 text-right text-red-800">
                  Doctor(a):{" "}
                </label>
                <input
                  type="text"
                  name="doctor"
                  placeholder="Nombre"
                  autoComplete="off"
                  disabled={true}
                  value={infoDoctor ? infoDoctor.user.nombre : "Vacio"}
                  onChange={handleInputChange}
                  className="px-2 w-2/3 bg-slate-100 rounded border-2 my-1"
                />
              </div>
            </div>
            <div className="p-1 text-left">
              <div className="block border-b-2">
                <label className="inline-block mx-2 w-36 text-right">
                  Fecha:
                </label>
                <input
                  type="date"
                  name="fecha"
                  value={fecha}
                  onChange={handleInputChange}
                  placeholder=""
                  min={fechaActual.toISOString()}
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
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default NuevaCita;
