import React from "react";
import { Link } from "react-router-dom";

const MenuUsuarioIzquierdo = () => {
  return (
    <div className="bg-menu  w-1/5 inline-block border border-gray-800 ">
      <div>Menu Usuario Izquierdo</div>
      <div className="flex  w-full justify-end my-2 px-2 ">
        <Link to="/nuevacita" className="w-1/2">
          <button className="bg-gray-100 rounded px-2 p-4 items-center w-full ">
            Nueva Cita
          </button>
        </Link>
      </div>
      <div className="flex  w-full justify-end px-2 my-2 ">
        <Link to="/" className="w-1/2">
          <button className="bg-gray-100 rounded  p-4 items-center w-full">
            Inicio
          </button>
        </Link>
      </div>
      <div className="flex  w-full justify-end my-2  px-2">
        <Link to="/perfil" className="w-1/2">
          <button className="bg-gray-100 rounded  p-4 items-center w-full">
            Perfil
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuUsuarioIzquierdo;
