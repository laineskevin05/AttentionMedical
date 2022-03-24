import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { doctorStartAddNew } from "../../actions/doctor";
import { useForm } from "../../hook/useForm";

const NuevoDoctor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formValues, handleInputChange] = useForm({
    correo: "",
    horaEntrada: "",
    horaSalida: "",
    dias: "",
    especialidad: "",
    descripcion: "",
  });

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(doctorStartAddNew( formValues ))
    navigate("/", {replace: true});
  }


  const {
    correo,
    horaEntrada,
    horaSalida,
    dias,
    especialidad,
    descripcion,
  } = formValues;
  return (
    <>
      <div className="w-1/5 inline-block"></div>
      <form className="w-3/5 inline-block" onSubmit={handleAdd}>
        <div className="grid gap-8  p-2 pt-8 content-start">
          <div className="text-center border-2 m-4">
            <h6 className="uppercase text block py-3 bg-slate-700 text-white font-bold">
              Nuevo doctor
            </h6>

            <div className="p-1 text-left">
              <div className="block border-b-2">
                <label className="inline-block mx-2 w-44 text-right ">
                  Correo del doctor:
                </label>
                <input
                  type="text"
                  name="correo"
                  value={correo}
                  onChange={handleInputChange}
                  autoComplete="off"
                  placeholder="example@ejemplo.com"
                  className="px-2 w-2/3 bg-slate-100 rounded border-2 my-1"
                />
              </div>
            </div>

            <div className="p-1 text-left">
              <div className="block border-b-2">
                <label className="inline-block mx-2 w-44 text-right">
                  Hora de Entrada:
                </label>
                <input
                  type="time"
                  name="horaEntrada"
                  value={horaEntrada}
                  onChange={handleInputChange}
                  className="px-2 w-2/3 bg-slate-100 rounded border-2 my-1"
                />
              </div>
            </div>
            <div className="p-1 text-left">
              <div className="block border-b-2">
                <label className="inline-block mx-2 w-44 text-right">
                  Hora de salida:
                </label>
                <input
                  type="time"
                  name="horaSalida"
                  value={horaSalida}
                  onChange={handleInputChange}
                  className="px-2 w-2/3 bg-slate-100 rounded border-2 my-1"
                />
              </div>
            </div>
            <div className="p-1 text-left">
              <div className="block border-b-2">
                <label className="inline-block mx-2 w-44 text-right">
                  Dias laborales:
                </label>
                <input
                  type="text"
                  name="dias"
                  value={dias}
                  onChange={handleInputChange}
                  placeholder="Ejem. lunes, martes, miercoles, jueves, viernes"
                  className="px-2 w-2/3 bg-slate-100 rounded border-2 my-1"
                />
              </div>
            </div>
            <div className="p-1 text-left">
              <div className="block border-b-2">
                <label className="inline-block mx-2 w-44 text-right">
                  Departamento:
                </label>
                <input
                  type="text"
                  name="especialidad"
                  value={especialidad}
                  onChange={handleInputChange}
                  placeholder="Ejem. pedriatria, medicina general..."
                  className="px-2 w-2/3 bg-slate-100 rounded border-2 my-1"
                />
              </div>
            </div>
            <div className="p-1 text-left">
              <div className="block border-b-2 ">
                <label className="inline-block mx-2 w-44 text-right align-top">
                  Descripcion:{" "}
                </label>
                <textarea
                  className="px-2 w-2/3 bg-slate-100 rounded border-2 my-1 h-32"
                  name="descripcion"
                  value={descripcion}
                  onChange={handleInputChange}
                  placeholder="Descripcion del doctor"
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

export default NuevoDoctor;
