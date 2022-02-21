import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Bienvenido = () => {
  const { uid } = useSelector((state) => state.auth);

  return (
    <>
      <div>
        <Link to="/login">Bienvenido </Link>
      </div>
    </>
  );
};

export default Bienvenido;
