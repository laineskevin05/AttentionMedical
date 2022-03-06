import React from "react";
import { Link } from "react-router-dom";

const MenuUsuarioIzquierdo = () => {
  return (
    <div className="bg-red-300  w-1/5 inline-block ">
      <div>Menu Usuario Derecho</div>
      <div className="flex  w-full justify-end my-2 ">
        <Link to="/nuevacita" className="w-1/2">
          <button className="bg-red-600 rounded text-white p-4 items-center w-full ">
            Nueva Cita
          </button>
        </Link>
      </div>
      <div className="flex  w-full justify-end my-2 ">
        <Link to="/" className="w-1/2">
          <button className="bg-red-600 rounded text-white p-4 items-center w-full">
            Inicio
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuUsuarioIzquierdo;
