import React from "react";
import { useState } from "react";
import ListaHospitales from "./ListaHospitales";
import ListaUsuarios from "./ListaUsuarios";

const InicioAdministrador = () => {
  const [pages, setPages] = useState({
    page1: true,
    page2: false,
  });
  const { page1, page2 } = pages;

  const cambiarFocoTab = (numero) => {
    const pagina1 = document.getElementById("btnPagina1");
    const pagina2 = document.getElementById("btnPagina2");
    if (numero === 1) {
      pagina2.className = "flex justify-center py-4 w-full";
      pagina1.className =
        "flex justify-center bg-white rounded-lg shadow text-indigo-900 py-4 w-full font-bold";
      setPages({
        page1: true,
        page2: false,
      });
    }
    if (numero === 2) {
      pagina1.className = "flex justify-center py-4 w-full";
      pagina2.className =
        "flex justify-center bg-white rounded-lg shadow text-indigo-900 py-4 w-full font-bold";
      setPages({
        page1: false,
        page2: true,
      });
    }
  };

  return (
    <>
      <div className="w-full inline-block bg-fondo">
        {/*bg-gray-50*/}
        {/*  */}
        <ul className="grid grid-flow-col relative shadow-neutral-400 shadow border-b border-x border-slate-900 text-center text-white bg-tab rounded-b-md border-solid p-1">
          {/*bg gray-100 */}
          <li></li>
          <li></li>
          <li className="px-2">
            <button
              id="btnPagina1"
              onClick={(e) => {
                e.preventDefault();
                cambiarFocoTab(1);
              }}
              className="flex justify-center bg-white rounded-lg shadow text-indigo-900 py-4 w-full font-bold"
            >
              Lista de Usuarios
            </button>
          </li>
          <li className="px-2">
            <button
              id="btnPagina2"
              onClick={(e) => {
                e.preventDefault();
                cambiarFocoTab(2);
              }}
              className="flex justify-center py-4 w-full "
            >
              Lista de Hospitales
            </button>
          </li>
          <li></li>
          <li></li>
        </ul>
        <div className=" grid grid-cols-7  min-h-[650px]   p-2 pt-8  ">
          {page1 && <ListaUsuarios />}
          {page2 && <ListaHospitales />}
        </div>
        {/* {page2 && <TabCitasHistorial />} */}
      </div>
    </>
  );
};

export default InicioAdministrador;
