import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { starCitaLoaded } from "../../actions/cita";

const TabCitasProximas = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(starCitaLoaded());
  }, [dispatch]);

  const { citas } = useSelector((state) => state.cita);
  return (
    <>
      {citas.map((cita) => {
        return (
          <div
            className="flex border-2  rounded-lg p-4 m-2 bg-white "
            key={cita.id}
          >
            <div className="pt-1 mr-6 text-center">
              <div className="px-2 pb-1 mb-1 border-b border-gray-400">
                <p className="text-sm text-blue-gray-700">Jul</p>
              </div>
              <div className="px-2">
                <p className="text-lg font-bold">18</p>
              </div>
            </div>
            <div>
              <div className="mb-1">
                <Link
                  to="/"
                  className="inline-block text-2xl font-bold pr-2 leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  {cita.clinica}
                </Link>
                <div className="relative inline-block text-left">
                  <div>
                    <button
                      type="button"
                      className="inline-flex relative hover:sub_menu div justify-center w-full rounded-md border  shadow-sm px-2 py-1  text-sm font-semibold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                      id="menu-button"
                      onClick={(e) => {
                        e.preventDefault();
                        const menuCita = document.getElementById(
                          "menu_" + cita.id
                        );

                        if (menuCita?.classList.contains("hidden")) {
                          menuCita?.classList.remove("hidden");
                          menuCita?.classList.add("absolute");
                        } else {
                          menuCita?.classList.remove("absolute");
                          menuCita?.classList.add("hidden");
                        }
                      }}
                    >
                      Opciones
                      <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </button>
                  </div>

                  <div
                    className=" hidden absolute w-36 rounded-md shadow-lg bg-white ring-1  ring-opacity-5 focus:outline-none"
                    id={"menu_" + cita.id}
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                  >
                    <div className="text-left" role="none">
                      {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                      <button
                        className="text-gray-700 block w-full text-left px-4 py-2 hover:bg-gray-300 text-sm"
                        id="menu-item-0"
                      >
                        Cancelar cita
                      </button>
                      <Link
                        to="/cita/editar"
                        className="text-gray-700 block w-full text-left px-4 py-2 hover:bg-gray-300 text-sm"
                        id="menu-item-1"
                      >
                        Editar cita
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-1">
                <p className=" uppercase text-gray-700 ">
                  Fecha: {cita.fecha} Hora: {cita.hora}
                </p>
              </div>
              <p className="mb-5 text-gray-700">
                Descripción: {cita.descripcion}
              </p>
              <div className="flex items-center">
                <Link to="/" className="mr-3">
                  <img
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt="avatar"
                    className="object-cover w-10 h-10 rounded-full shadow-sm"
                  />
                </Link>
                <div>
                  <Link
                    to="/"
                    className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    {cita.doctor}
                  </Link>
                  <p className="text-sm font-medium leading-4 text-gray-600">
                    Dr/Dra.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TabCitasProximas;
