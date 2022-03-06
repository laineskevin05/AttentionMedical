import { useState } from "react";
// import { Link } from "react-router-dom";
import TabCitasProximas from "./TabCitasProximas";
import TabCitasHistorial from "./TabCitasHistorial";

export const UserInicio = () => {
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
      <div className="w-3/5 inline-block bg-gray-50">
        <ul className="grid grid-flow-col text-center text-gray-500 bg-gray-100 rounded-b-lg p-1">
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
              Proximas citas
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
              Historial de citas
            </button>
          </li>
          <li></li>
          <li></li>
        </ul>
        <div className="grid gap-8  grid-cols-2  p-2 pt-8 content-start">
          {/* Solo esta tarjeta se debe de dejar, los dos div de arriba son contenedores */}

          {page1 && <TabCitasProximas />}
          {/* {page1 && <TabCitasProximas />}
          {page1 && <TabCitasProximas />}
          {page1 && <TabCitasProximas />} */}
        </div>
        {page2 && <TabCitasHistorial />}
      </div>
    </>
  );
};
