import React from "react";
import { Link } from "react-router-dom";
const InicioHospital = () => {
  return (
    <>
      <div>InicioHospital</div>
      <div>
        <Link to={"/centro/nuevodoctor"} className="bg-gray-300 p-4 ">
          Nuevo doctor
        </Link>
      </div>
    </>
  );
};

export default InicioHospital;
