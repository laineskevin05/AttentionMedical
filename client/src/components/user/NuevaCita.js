import React from "react";
import { Link } from "react-router-dom";

const NuevaCita = () => {
  return (
    <>
      <div className="grid grid-cols-5">
        <div className="bg-red-300 col-span-1 min-h-screen"></div>
        <div className="grid gap-8 col-span-3 p-2 pt-8 content-start">
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
                  name="afiliado"
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
                  name="doctor_a"
                  placeholder="Nombre"
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
                  className="px-2 w-2/3 bg-slate-100 rounded border-2 my-1"
                />
              </div>
            </div>
            <div className="p-1 text-left">
              <div className="block border-b-2 ">
                <label className="inline-block mx-2 w-36 text-right align-top">
                  Descripcion:{" "}
                </label>
                <textarea className="px-2 w-2/3 bg-slate-100 rounded border-2 my-1 h-32" />
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
        <div className="bg-blue-300  col-span-1 "></div>
      </div>
    </>
  );
};

export default NuevaCita;
