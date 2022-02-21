import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Bienvenido = () => {
  const { name } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  return (
    <>
      <div>
        <span> Bienvenido {name} </span>
        <button
          className="bg-red-600 p-5"
          onClick={(e) => {
            e.preventDefault();
            navigate("/cambiarcontrasenia");
          }}
        >
          cambiar contrasenia
        </button>
      </div>
    </>
  );
};

export default Bienvenido;
