import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { startLogout } from "../../actions/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const { uid } = useSelector((state) => {
    return state.auth;
  });

  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(startLogout());
    navigate("/login");
  };
  return (
    <nav className="grid grid-cols-3 bg-zinc-800 w-full h-20">
      <div className="col-span-2 flex items-center  ">
        <span className="text-white p-1 text-xl font-sans font-bold ml-3 uppercase border-2 rounded-full shadow shadow-slate-700 ">
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
            className="bg-blue-600 py-3 w-28 mr-3 text-center text-sm font-sans font-bold rounded-md text-white shadow"
            onClick={handleLogout}
          >
            <span> Cerrar Sesion</span>
          </button>
        ) : (
          <>
            <button
              className="bg-blue-600 py-3 w-28 mr-6 text-center text-sm font-sans font-bold rounded-md text-white shadow"
              onClick={(e) => {
                e.preventDefault();
                navigate("/login");
              }}
            >
              <span> Iniciar Sesion</span>
            </button>
            <button
              className="bg-blue-600 py-3 w-28 mr-3 text-center text-sm font-sans font-bold rounded-md text-white shadow"
              onClick={(e) => {
                e.preventDefault();
                navigate("/register");
              }}
            >
              <span> Registrarse</span>
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
