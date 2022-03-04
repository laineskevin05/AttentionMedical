import React from "react";
import { Link } from "react-router-dom";

const PageCitas = () => {
  return (
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
          Descripcion: Sed ut perspiciatis unde omnis iste natus error sit sed
          quia consequuntur magni voluptatem doloremque.
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
  );
};

export default PageCitas;
