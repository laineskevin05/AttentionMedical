import React from "react";

const ListaHospitales = () => {
  const user = { id: 4444 };
  return (
    <div className="col-span-5 col-start-2 bg-fondo inline-block py-1 px-2">
      {Object.values(user)?.map((user) => {
        return (
          <div key={"id"}>
            <div className="bg-green-100 rounded py-3 px-2 flex mb-2">
              <div className="flex w-5/6 items-center">
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="flex px-2">
                      <h3 className="pr-2 font-semibold">Id:</h3>
                      <h3 className="pr-2">{"11111111"}</h3>
                    </div>
                    <div className="flex px-2">
                      <h3 className="pr-2 font-semibold">Hospital:</h3>
                      <h3 className="pr-2">{"nombre del hospital"}</h3>
                    </div>
                    <div className="flex px-2">
                      <h3 className="pr-2 font-semibold">Correo:</h3>
                      <h3 className="pr-1">{"jdjdjdj@gmail.com"}</h3>
                    </div>
                    <div className="flex px-2 ">
                      <h3 className="pr-2 font-semibold">Telefono:</h3>
                      <h3 className="pr-1">{"88888"}</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end w-1/6">
                {"user.activo" === true ? (
                  <button className="bg-red-500 text-white rounded-xl p-2 ">
                    Desactivar
                  </button>
                ) : (
                  <button className=" bg-indigo-500 text-white rounded-xl p-2">
                    Activar
                  </button>
                )}
              </div>
            </div>
            <div className="bg-green-100 rounded py-3 px-2 flex mb-2">
              <div className="flex w-5/6 items-center">
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="flex px-2">
                      <h3 className="pr-2 font-semibold">Id:</h3>
                      <h3 className="pr-2">{"11111111"}</h3>
                    </div>
                    <div className="flex px-2">
                      <h3 className="pr-2 font-semibold">Hospital:</h3>
                      <h3 className="pr-2">{"nombre del hospital"}</h3>
                    </div>
                    <div className="flex px-2">
                      <h3 className="pr-2 font-semibold">Correo:</h3>
                      <h3 className="pr-1">{"jdjdjdj@gmail.com"}</h3>
                    </div>
                    <div className="flex px-2 ">
                      <h3 className="pr-2 font-semibold">Telefono:</h3>
                      <h3 className="pr-1">{"88888"}</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end w-1/6">
                {"user.activo" === true ? (
                  <button className="bg-red-500 text-white rounded-xl p-2 ">
                    Desactivar
                  </button>
                ) : (
                  <button className=" bg-indigo-500 text-white rounded-xl p-2">
                    Activar
                  </button>
                )}
              </div>
            </div>
            <div className="bg-green-100 rounded py-3 px-2 flex mb-2">
              <div className="flex w-5/6 items-center">
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="flex px-2">
                      <h3 className="pr-2 font-semibold">Id:</h3>
                      <h3 className="pr-2">{"11111111"}</h3>
                    </div>
                    <div className="flex px-2">
                      <h3 className="pr-2 font-semibold">Hospital:</h3>
                      <h3 className="pr-2">{"nombre del hospital"}</h3>
                    </div>
                    <div className="flex px-2">
                      <h3 className="pr-2 font-semibold">Correo:</h3>
                      <h3 className="pr-1">{"jdjdjdj@gmail.com"}</h3>
                    </div>
                    <div className="flex px-2 ">
                      <h3 className="pr-2 font-semibold">Telefono:</h3>
                      <h3 className="pr-1">{"88888"}</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end w-1/6">
                {"user.activo" === true ? (
                  <button className="bg-red-500 text-white rounded-xl p-2 ">
                    Desactivar
                  </button>
                ) : (
                  <button className=" bg-indigo-500 text-white rounded-xl p-2">
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
