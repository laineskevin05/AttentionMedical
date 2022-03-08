import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { citaStartAddNew } from "../../actions/cita";
import { useForm } from "../../hook/useForm";
// import { Link } from "react-router-dom";

const NuevaCita = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const state = useSelector( state => state );
  console.log(state);

  const [formValues, handleInputChange] = useForm({
      clinica: "",
      doctor: "",
      fecha: "",
      hora: "",
      estado: "Activo",
      descripcion: ""
  });
  
  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(citaStartAddNew( formValues ))
    navigate("/", {replace: true});
  }

  const { clinica, doctor, fecha, hora, descripcion } = formValues;

  return (
      <>
      <form className="w-3/5 inline-block" onSubmit={ handleAdd }>
        <div className="grid gap-8  p-2 pt-8 content-start">
          <div className="text-center border-2 m-4">
            <h6 className="uppercase text block py-3 bg-slate-700 text-white font-bold">
              Nueva cita
            </h6>
            <div className="p-1 text-left">
              <div className="block border-b-2">
                <label className="inline-block mx-2 w-36 text-right text-red-500">
                  *Clinica/Hospital*:{" "}
                </label>
                <input
                  type="text"
                  name="clinica"
                  value={ clinica }
                  onChange={ handleInputChange }
                  autoComplete="off"
                  placeholder="Clinica San martin"
                  className="px-2 w-2/3 bg-slate-100 rounded border-2 my-1"
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
                  value={ doctor }
                  onChange={ handleInputChange }
                  className="px-2 w-2/3 bg-slate-100 rounded border-2 my-1"
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
                  value={ fecha }
                  onChange={ handleInputChange }
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
                  value={ hora }
                  onChange={ handleInputChange }
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
                  value={ descripcion }
                  onChange={ handleInputChange }
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
