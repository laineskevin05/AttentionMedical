import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Bienvenido = () => {
  const { name } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  return (
    <>
      <div className="px-5 mt-10">
        <span> Bienvenido {name} </span>
        <div className="mt-10  w-full">
          <button
            className="bg-red-600 p-5 rounded text-white"
            onClick={(e) => {
              e.preventDefault();
              navigate("/cambiarcontrasenia");
            }}
          >
            Cambiar contrasenia
          </button>
        </div>
      </div>
    </>
  );
};

export default Bienvenido;
