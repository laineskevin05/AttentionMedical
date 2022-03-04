import { useState } from "react";
import { Link } from "react-router-dom";
import PageCitas from "./PageCitas";

export const UserInicio = () => {
  const [pages, setPages] = useState({
    page1: true,
    page2: false,
  });
  const { page1, page2 } = pages;
  return (
    <>
      <div className="w-3/5 inline-block">
        <ul className="grid grid-flow-col text-center text-gray-500 bg-gray-100 rounded-lg p-1">
          <li>
            <a href="#page1" className="flex justify-center py-4">
              Pilot Training
            </a>
          </li>
          <li>
            <a
              href="#page2"
              className="flex justify-center bg-white rounded-lg shadow text-indigo-900 py-4"
            >
              Titan maintenance
            </a>
          </li>
          <li>
            <a href="#page3" className="flex justify-center py-4">
              Loadout
            </a>
          </li>
          <li>
            <a href="#page4" className="flex justify-center py-4">
              Server Browser
            </a>
          </li>
          <li>
            <a href="#page5" className="flex justify-center py-4">
              Settings
            </a>
          </li>
        </ul>
        <div className="grid gap-8  grid-cols-2  p-2 pt-8 content-start">
          {/* Solo esta tarjeta se debe de dejar, los dos div de arriba son contenedores */}
          <button
            className="bg-red-100"
            onClick={(e) => {
              e.preventDefault();
              setPages({
                page1: true,
                page2: false,
              });
            }}
          >
            Cita
          </button>
          <button
            className="bg-red-100"
            onClick={(e) => {
              e.preventDefault();
              setPages({
                page1: false,
                page2: true,
              });
            }}
          >
            Historial
          </button>
          {page1 && <PageCitas />}
          {page2 && <p>Wuuaaaau 222222222</p>}
          <div className="flex ">
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
                  className="inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Clinica Dolores
                </Link>
              </div>
              <div className="mb-1">
                <p className=" uppercase text-gray-700 ">
                  Fecha: ( 2020/jul/18 ) 14:00-15:00
                </p>
              </div>
              <p className="mb-5 text-gray-700">
                Descripcion: Sed ut perspiciatis unde omnis iste natus error sit
                sed quia consequuntur magni voluptatem doloremque.
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
                    Pedro Guzman
                  </Link>
                  <p className="text-sm font-medium leading-4 text-gray-600">
                    Dr/Dra.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Aqui termina la primer tarjeta, las demas se deben de borrar, y con un for o map, mostrar la cantidad de tarjetas necesarias */}

          <div className="flex ">
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
                  className="inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Clinica Ahi te Voy
                </Link>
              </div>
              <div className="mb-1">
                <p className=" uppercase text-gray-700 ">
                  Fecha: ( 2020/jul/18 ) 14:00-15:00
                </p>
              </div>
              <p className="mb-5 text-gray-700">
                Descripcion: Sed ut perspiciatis unde omnis iste natus error sit
                sed quia consequuntur magni voluptatem doloremque.
              </p>
              <div className="flex items-center">
                <Link to="/" className="mr-3">
                  <img
                    src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt="avatar"
                    className="object-cover w-10 h-10 rounded-full shadow-sm"
                  />
                </Link>
                <div>
                  <Link
                    to="/"
                    className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Carlos Ramirez
                  </Link>
                  <p className="text-sm font-medium leading-4 text-gray-600">
                    Dr/Dra.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex ">
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
                  className="inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Clinica Masacrademonios
                </Link>
              </div>
              <div className="mb-1">
                <p className=" uppercase text-gray-700 ">
                  Fecha: ( 2020/jul/18 ) 14:00-15:00
                </p>
              </div>
              <p className="mb-5 text-gray-700">
                Descripcion: Sed ut perspiciatis unde omnis iste natus error sit
                sed quia consequuntur magni voluptatem doloremque.
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
                    Pedro Guzman
                  </Link>
                  <p className="text-sm font-medium leading-4 text-gray-600">
                    Dr/Dra.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex ">
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
                  className="inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Hospital Martin Lutero
                </Link>
              </div>
              <div className="mb-1">
                <p className=" uppercase text-gray-700 ">
                  Fecha: ( 2020/jul/18 ) 14:00-15:00
                </p>
              </div>
              <p className="mb-5 text-gray-700">
                Descripcion: Sed ut perspiciatis unde omnis iste natus error sit
                sed quia consequuntur magni voluptatem doloremque.
              </p>
              <div className="flex items-center">
                <Link to="/" className="mr-3">
                  <img
                    src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                    alt="avatar"
                    className="object-cover w-10 h-10 rounded-full shadow-sm"
                  />
                </Link>
                <div>
                  <Link
                    to="/"
                    className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Maria Lainez
                  </Link>
                  <p className="text-sm font-medium leading-4 text-gray-600">
                    Dr/Dra.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
