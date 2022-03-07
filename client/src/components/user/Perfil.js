import React from "react";
import { Link } from "react-router-dom";

const Perfil = () => {
  return (
    <>
      <div className="w-3/5 inline-block bg-gray-50">
        <div className="pt-8 p-2 relative">
          <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl   flex items-center justify-center text-indigo-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-24 w-24"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <button className="absolute right-0 inline-flex rounded-bl-md bg-gray-500 top-0 p-2 text-white">
            <Link to="/configuracion" className="px-2">
              Configuracion
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-2 px-16 pt-8 ">
          <div className="col-span-1 w-full mb-6 pr-4">
            <label className="block uppercase text-gray-700 text-xs font-bold">
              Nombre
            </label>
            <input
              placeholder="..."
              type="text"
              className="mt-1 border-0 py-3 px-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow w-full "
              name="nombre"
              autoComplete="off"
              disabled="true"
              //   onChange={handleRegisterInputChange}
              //   value={nombre}
              style={{ transition: "all .15s ease" }}
            />
          </div>
          <div className="col-span-1 w-full mb-6 ">
            <label className="block uppercase text-gray-700 text-xs font-bold">
              Apellido
            </label>
            <input
              type="text"
              className="mt-1 border-0 py-3 px-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow w-full "
              placeholder="..."
              disabled="true"
              name="apellido"
              autoComplete="off"
              //   onChange={handleRegisterInputChange}
              //   value={apellido}
              style={{ transition: "all .15s ease" }}
            />
          </div>
          <div className="col-span-2 w-2/3 mb-6 ">
            <label className="block uppercase text-gray-700 text-xs font-bold">
              Correo
            </label>
            <input
              type="text"
              className="mt-1 border-0 py-3 px-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow w-full "
              placeholder="..."
              name="correo"
              autoComplete="off"
              disabled="true"
              //   onChange={handleRegisterInputChange}
              //   value={correo}
              style={{ transition: "all .15s ease" }}
            />
          </div>

          <div className="col-span-2 w-2/3 mb-6">
            <label className="block uppercase text-gray-700 text-xs font-bold">
              Telefono
            </label>
            <input
              className="mt-1 border-0 py-3 px-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow w-full"
              placeholder="..."
              type="tel"
              name="telefono"
              autoComplete="off"
              disabled="true"
              //   onChange={handleRegisterInputChange}
              //   value={telefono}
              style={{ transition: "all .15s ease" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Perfil;
