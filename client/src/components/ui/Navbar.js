import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { startLogout } from "../../actions/auth";
import { hospitalSearchStar } from "../../actions/hospital";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hospitalSearchStar());
  }, [dispatch]);

  const { hospitales } = useSelector((state) => state.hospital);
  const { uid } = useSelector((state) => {
    return state.auth;
  });

  const [barraBusqueda, setBarraBusqueda] = useState(false);
  const [coincidenciasHospitales, setCoincidenciasHospitales] = useState({});

  const [valueSearch, setValueSearch] = useState({
    search: "",
  });

  const { search } = valueSearch;

  const handleInputChange = ({ target }) => {
    setValueSearch({
      ...valueSearch,
      [target.name]: target.value,
    });
    if (target.value.length > 1) {
      setBarraBusqueda(true);
      setCoincidenciasHospitales(
        hospitales.filter((dato) => {
          return dato.nombre
            .toLocaleLowerCase()
            ?.includes(search.toLocaleLowerCase());
        })
      );

      console.log(
        hospitales.filter((dato) => {
          return dato.nombre
            .toLocaleLowerCase()
            ?.includes(search.toLocaleLowerCase());
        })
      );
    } else {
      setBarraBusqueda(false);
      setCoincidenciasHospitales({});
    }
  };

  useEffect(() => {
    console.log("cambio");
  }, [search]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(startLogout());
    navigate("/login");
  };
  return (
    <nav className="bg-gray-800 relative px-2 sm:px-4 py-2.5 rounded-b-md dark:bg-gray-800  border-b border-slate-900 border-solid shadow shadow-gray-600">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <g>
              <rect fill="none" height="24" width="24" />
            </g>
            <g className=" fill-white">
              <path d="M20,7h-5V4c0-1.1-0.9-2-2-2h-2C9.9,2,9,2.9,9,4v3H4C2.9,7,2,7.9,2,9v11c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V9 C22,7.9,21.1,7,20,7z M11,4h2v5h-2V4z M20,20H4V9h5c0,1.1,0.9,2,2,2h2c1.1,0,2-0.9,2-2h5V20z M11,16H9v2H7v-2H5v-2h2v-2h2v2h2V16z M13,14.5V13h6v1.5H13z M13,17.5V16h4v1.5H13z" />
            </g>
          </svg>
          <span className="self-center text-xl font-bold whitespace-nowrap px-2 text-white uppercase dark:text-white">
            Atencion Medica
          </span>
        </Link>
        {/*<div><span>Bienvenido {name}</span></div>*/}
        <div className="flex md:order-2">
          <button
            data-collapse-toggle="mobile-menu-3"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-3"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
            </svg>
          </button>
          {typeof uid === "string" && uid ? (
            <>
              <div className="hidden relative mr-3 md:mr-0 md:block">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  autoComplete="off"
                  id="email-adress-icon"
                  name="search"
                  value={search}
                  className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                  onChange={handleInputChange}
                />
                {barraBusqueda && (
                  <div className="absolute bg-white mt-1 inline-block w-full border border-black rounded-md">
                    {coincidenciasHospitales?.map((e) => {
                      return (
                        <div
                          className="block p-2  border-b border-gray-400"
                          key={e.id}
                        >
                          {e.nombre}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
              <div className="items-center relative inline-flex px-2">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    const menuCita = document.getElementById("menu_nav");

                    if (menuCita?.classList.contains("hidden")) {
                      menuCita?.classList.remove("hidden");
                      menuCita?.classList.add("absolute");
                    } else {
                      menuCita?.classList.remove("absolute");
                      menuCita?.classList.add("hidden");
                    }
                  }}
                  className="w-10 h-10 bg-indigo-100 border-2 hover:ring-2 focus:ring-gray-500 border-gray-400 mx-auto rounded-full shadow-2xl  flex items-center justify-center text-indigo-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 fill-sky-800"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                  </svg>
                </button>
              </div>
              <div
                className=" hidden absolute z-30 right-4 top-14 rounded-md shadow-lg bg-gray-100 ring-1  ring-opacity-5 focus:outline-none"
                id="menu_nav"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
              >
                <div className="text-left" role="none">
                  {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                  <button
                    className="text-gray-700 block w-full  text-left px-4 py-2 hover:bg-gray-300 text-sm"
                    id="menu-item-0"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/perfil");
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#000000"
                      className="inline-block"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                    </svg>
                    <span> Perfil</span>
                  </button>
                  <button
                    className="text-gray-700 block w-full text-left px-4 py-2 hover:bg-gray-300 text-sm"
                    id="menu-item-1"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/configuracion");
                    }}
                  >
                    <svg
                      className="inline-block "
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#000000"
                    >
                      <rect fill="none" height="24" width="24" />
                      <path d="M19.5,12c0-0.23-0.01-0.45-0.03-0.68l1.86-1.41c0.4-0.3,0.51-0.86,0.26-1.3l-1.87-3.23c-0.25-0.44-0.79-0.62-1.25-0.42 l-2.15,0.91c-0.37-0.26-0.76-0.49-1.17-0.68l-0.29-2.31C14.8,2.38,14.37,2,13.87,2h-3.73C9.63,2,9.2,2.38,9.14,2.88L8.85,5.19 c-0.41,0.19-0.8,0.42-1.17,0.68L5.53,4.96c-0.46-0.2-1-0.02-1.25,0.42L2.41,8.62c-0.25,0.44-0.14,0.99,0.26,1.3l1.86,1.41 C4.51,11.55,4.5,11.77,4.5,12s0.01,0.45,0.03,0.68l-1.86,1.41c-0.4,0.3-0.51,0.86-0.26,1.3l1.87,3.23c0.25,0.44,0.79,0.62,1.25,0.42 l2.15-0.91c0.37,0.26,0.76,0.49,1.17,0.68l0.29,2.31C9.2,21.62,9.63,22,10.13,22h3.73c0.5,0,0.93-0.38,0.99-0.88l0.29-2.31 c0.41-0.19,0.8-0.42,1.17-0.68l2.15,0.91c0.46,0.2,1,0.02,1.25-0.42l1.87-3.23c0.25-0.44,0.14-0.99-0.26-1.3l-1.86-1.41 C19.49,12.45,19.5,12.23,19.5,12z M12.04,15.5c-1.93,0-3.5-1.57-3.5-3.5s1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5S13.97,15.5,12.04,15.5z" />
                    </svg>
                    <span> Configuracion</span>
                  </button>
                  <button
                    className="text-gray-700 block w-full text-left px-4 py-2 hover:bg-gray-300 text-sm"
                    id="menu-item-2"
                    onClick={handleLogout}
                  >
                    <svg
                      className="inline-block"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#000000"
                    >
                      <g>
                        <path d="M0,0h24v24H0V0z" fill="none" />
                      </g>
                      <g>
                        <g>
                          <path d="M5,5h6c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h6c0.55,0,1-0.45,1-1v0 c0-0.55-0.45-1-1-1H5V5z" />
                          <path d="M20.65,11.65l-2.79-2.79C17.54,8.54,17,8.76,17,9.21V11h-7c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h7v1.79 c0,0.45,0.54,0.67,0.85,0.35l2.79-2.79C20.84,12.16,20.84,11.84,20.65,11.65z" />
                        </g>
                      </g>
                    </svg>
                    <span> Cerrar Sesion</span>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div>
              <button
                className="bg-blue-600 p-2 mx-2 rounded-md text-white hover:bg-blue-700"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/login");
                }}
              >
                <span>Iniciar sesion</span>
              </button>
              <button
                className="bg-blue-600 p-2 mx-2 rounded-md text-white hover:bg-blue-700"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/register");
                }}
              >
                <span>Registrarse</span>
              </button>
            </div>
          )}
        </div>
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-3"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-2 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link
                to="/"
                className="block py-2 pr-4 pl-3 text-white bg-blue-500 rounded md:bg-transparent md:text-blue-500 md:p-0 dark:text-white"
                aria-current="page"
              >
                Inicio
              </Link>
            </li>
            {typeof uid === "string" && uid && (
              <li>
                <p
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Mensajes
                </p>
              </li>
            )}

            <li>
              <p
                href="#"
                className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Sobre nosotros
              </p>
            </li>
          </ul>
        </div>
        {/* <div
          className="hidden justify-between items-end w-full md:flex md:w-auto md:order-3"
          id="mobile-menu-3"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-2 md:mt-0 md:text-sm md:font-medium">
            {typeof uid === "string" && uid && (
              <li>
                <p
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Mensajes
                </p>
              </li>
            )}
          </ul>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
