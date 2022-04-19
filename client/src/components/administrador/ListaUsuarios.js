import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { banearCuenta, startUsuariosLoaded } from "../../actions/admin";

const ListaUsuarios = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let location = useLocation();
  const { usuarios } = useSelector((state) => state.admin);

  const handleAccount = (id, estado) => {
    let cuentaActiva = null;
    if (estado === true) {
      cuentaActiva = false;
    }
    if (estado === false) {
      cuentaActiva = true;
    }

    const info = {
      id: id,
      cuentaActiva: cuentaActiva,
    };
    dispatch(banearCuenta(info));
  };
  useEffect(() => {}, [dispatch]);

  return (
    <div className="col-span-5 col-start-2 bg-fondo inline-block py-1 px-2">
      {usuarios?.map((user) => {
        return (
          <div key={user.id}>
            <div className="bg-green-100 rounded py-3 px-2 flex mb-2">
              <div className="flex w-5/6 items-center">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt="avatar"
                  className="object-cover inline w-10 h-10 rounded-full shadow-sm"
                />
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="flex px-2">
                      <h3 className="pr-2 font-semibold">Id:</h3>
                      <h3 className="pr-2">{user.id}</h3>
                    </div>
                    <div className="flex px-2">
                      <h3 className="pr-2 font-semibold">Nombre:</h3>
                      <h3 className="pr-2">
                        {user.nombre}
                        <span> {user.apellido}</span>
                      </h3>
                    </div>
                    <div className="flex px-2">
                      <h3 className="pr-2 font-semibold">Correo:</h3>
                      <h3 className="pr-1">{user.correo}</h3>
                    </div>
                    <div className="flex px-2 ">
                      <h3 className="pr-2 font-semibold">Telefono:</h3>
                      <h3 className="pr-1">{user.telefono}</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end w-1/6">
                {user.cuentaActiva === true ? (
                  <button
                    className="bg-red-500 text-white rounded-xl p-2"
                    onClick={() => {
                      handleAccount(user.id, user.cuentaActiva);
                      user.cuentaActiva = false;
                    }}
                  >
                    Desactivar
                  </button>
                ) : (
                  <button
                    className=" bg-indigo-500 text-white rounded-xl p-2"
                    onClick={() => {
                      handleAccount(user.id, user.cuentaActiva);
                      user.cuentaActiva = true;
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

export default ListaUsuarios;
