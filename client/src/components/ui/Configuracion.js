import React, { useState } from "react";
import CambioContraseña from "../auth/CambioContrasenia";
import TabModificarPerfil from "./TabModificarPerfil";

const Configuracion = () => {
  const [pages, setPages] = useState({
    page1: true,
    page2: false,
  });
  const { page1, page2 } = pages;

  const cambiarFocoTab = (numero) => {
    const pagina1 = document.getElementById("btnPagina1");
    const pagina2 = document.getElementById("btnPagina2");
    if (numero === 1) {
      pagina2.className = " py-4 w-full";
      pagina1.className =
        " bg-white rounded-lg shadow text-indigo-900 py-4 w-full font-bold";
      setPages({
        page1: true,
        page2: false,
      });
      console.log(11111);
    }
    if (numero === 2) {
      pagina1.className = " py-4 w-full";
      pagina2.className =
        " bg-white rounded-lg shadow text-indigo-900 py-4 w-full font-bold";
      setPages({
        page1: false,
        page2: true,
      });
      console.log(222222);
    }
  };
  return (
    <div className="min-h-screen relative  grid grid-cols-6 px-32 bg-gray-100 ">
      <div className="h-full  col-span-2 bg-gray-200 pt-8 border-2 border-slate-900">
        <h1 className="text-center font-bold pt-2 mb-4 uppercase text-xl border-b-2 border-slate-900">
          Configuracion
        </h1>
        <div className="text-center">
          <button
            id="btnPagina1"
            className="bg-white rounded-lg shadow text-indigo-900 py-4 w-full font-bold"
            onClick={(e) => {
              e.preventDefault();
              cambiarFocoTab(1);
            }}
          >
            Perfil
          </button>
        </div>
        <div className=" text-center">
          <button
            id="btnPagina2"
            className="py-4 w-full"
            onClick={(e) => {
              e.preventDefault();
              cambiarFocoTab(2);
            }}
          >
            Contraseña
          </button>
        </div>
      </div>
      <div className="h-full col-span-4 relative bg-gray-50 pt-16 border-2 border-slate-900">
        {page1 && <TabModificarPerfil />}
        {page2 && <CambioContraseña />}
      </div>
    </div>
  );
};

export default Configuracion;
