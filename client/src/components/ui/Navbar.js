import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Navbar = () => {
  const { uid } = useSelector((state) => {
    return state.auth;
  });

  const handleLogout = () => {};
  return (
    <nav className="grid grid-cols-3 bg-zinc-800 w-full h-20">
      <div className="col-span-2 flex items-center">
        <span className="text-white  text-xl font-sans font-bold ml-3 uppercase shadow-md ">
          AM
        </span>
        <input
          className="bg-white w-1/2 mx-6 rounded-md border-1 px-5 border-slate-400 h-10 shadow-md shadow-slate-500"
          placeholder="Buscar /"
        />
      </div>

      <div className=" flex items-center w-full justify-end p-4">
        {typeof uid === "string" && uid ? (
          <button
            className="bg-blue-500 py-3 px-6 text-base font-sans font-bold rounded-md text-white shadow"
            onClick={handleLogout}
          >
            <span> Cerrar Sesion</span>
          </button>
        ) : (
          <>
            <button
              className="bg-blue-500 py-3 px-6 text-base font-sans font-bold rounded-md text-white shadow"
              onClick={<Navigate to="/login" />}
            >
              <span> Iniciar Sesion</span>
            </button>
            <button
              className="bg-blue-500 py-3 px-6 text-base font-sans font-bold rounded-md text-white shadow"
              onClick={<Navigate to="/register" />}
            >
              <span> Salir</span>
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
