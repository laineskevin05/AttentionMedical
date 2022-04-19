import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { banearCuenta } from "../../actions/admin";

const ListaHospitales = () => {
  const dispatch = useDispatch();

  const { hospitales } = useSelector((state) => state.admin);

  const handleAccount = (id, estado) => {
    let cuentaActiva = null;
    if (estado == true) {
      cuentaActiva = false;
    }
    if (estado == false) {
      cuentaActiva = true;
    }

    const info = {
      id: id,
      cuentaActiva: cuentaActiva,
    };
    dispatch(banearCuenta(info));
  };

  return (
    <div className="col-span-5 col-start-2 bg-fondo inline-block py-1 px-2">
      {hospitales?.map((hospital) => {
        return (
          <div key={hospital.id}>
            <div className="bg-green-100 rounded py-3 px-2 flex mb-2">
              <div className="flex w-5/6 items-center">
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="flex px-2">
                      <h3 className="pr-2 font-semibold">Id:</h3>
                      <h3 className="pr-2">{hospital.id}</h3>
                    </div>
                    <div className="flex px-2">
                      <h3 className="pr-2 font-semibold">Hospital:</h3>
                      <h3 className="pr-2">{hospital.nombre}</h3>
                    </div>
                    <div className="flex px-2">
                      <h3 className="pr-2 font-semibold">Correo:</h3>
                      <h3 className="pr-1">{hospital.correo}</h3>
                    </div>
                    <div className="flex px-2 ">
                      <h3 className="pr-2 font-semibold">Telefono:</h3>
                      <h3 className="pr-1">{hospital.telefono}</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end w-1/6">
                {hospital.cuentaActiva === true ? (
                  <button
                    className="bg-red-500 text-white rounded-xl p-2"
                    onClick={() => {
                      handleAccount(hospital.id, hospital.cuentaActiva);
                      hospital.cuentaActiva = false;
                    }}
                  >
                    Desactivar
                  </button>
                ) : (
                  <button
                    className=" bg-indigo-500 text-white rounded-xl p-2"
                    onClick={() => {
                      handleAccount(hospital.id, hospital.cuentaActiva);
                      hospital.cuentaActiva = true;
                    }}
                  >
                    Activar
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListaHospitales;
