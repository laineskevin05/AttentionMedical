import React from "react";

const TabModificarPerfil = () => {
  return (
    //   le falta el onSubmit={handleModificar }
    <form className="grid grid-cols-2 px-10">
      <h1 className="text-center col-span-2 font-bold mb-12 uppercase text-xl ">
        Configuracion
      </h1>
      <div className="col-span-1 w-full mb-3 pr-4">
        <label className="block uppercase text-gray-700 text-xs font-bold">
          Nombre
        </label>
        <input
          placeholder="Nombre"
          type="text"
          className="mt-1 border-0 py-3 px-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow w-full "
          name="nombre"
          autoComplete="off"
          //   onChange={handleRegisterInputChange}
          //   value={nombre}
          style={{ transition: "all .15s ease" }}
        />
        {/* {hasError.nombre && <p>{hasError.nombre}</p>} */}
      </div>
      <div className="col-span-1 w-full mb-3 ">
        <label className="block uppercase text-gray-700 text-xs font-bold">
          Apellido
        </label>
        <input
          type="text"
          className="mt-1 border-0 py-3 px-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow w-full "
          placeholder="Apellido"
          name="apellido"
          autoComplete="off"
          //   onChange={handleRegisterInputChange}
          //   value={apellido}
          style={{ transition: "all .15s ease" }}
        />
        {/* {hasError.apellido && <p>{hasError.apellido}</p>} */}
      </div>
      <div className="col-span-2 w-2/3 mb-3 ">
        <label className="block uppercase text-gray-700 text-xs font-bold">
          Correo
        </label>
        <input
          type="text"
          className="mt-1 border-0 py-3 px-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow w-full "
          placeholder="Email"
          name="correo"
          autoComplete="off"
          //   onChange={handleRegisterInputChange}
          //   value={correo}
          style={{ transition: "all .15s ease" }}
        />
        {/* {hasError.correo && <p>{hasError.correo}</p>} */}
      </div>

      <div className="col-span-2 w-2/3 mb-3">
        <label className="block uppercase text-gray-700 text-xs font-bold">
          Telefono
        </label>
        <input
          className="mt-1 border-0 py-3 px-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow w-full"
          placeholder="Telefono"
          type="tel"
          name="telefono"
          autoComplete="off"
          //   onChange={handleRegisterInputChange}
          //   value={telefono}
          style={{ transition: "all .15s ease" }}
        />
        {/* {hasError.telefono && <p>{hasError.telefono}</p>} */}
      </div>

      <div className="col-span-2 text-center mt-4 ">
        <button
          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
          type="Submit"
          style={{ transition: "all .15s ease" }}
        >
          Cambiar datos
        </button>
      </div>
    </form>
  );
};

export default TabModificarPerfil;
