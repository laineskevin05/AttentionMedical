import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { startLoadProfile } from "../../actions/profile";

import { updateProfile } from "../../actions/profile";

// import { useForm } from "../../hook/useForm";
const letra = new RegExp(/^[a-zA-ZÀ-ÿ\s]{1,40}$/);
const telef = new RegExp(/^([0-9]){8}$/);

const TabModificarPerfil = () => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.profile);

  const [usuarioActiv, setuUsuarioActiv] = useState({});

  const validacion = (values) => {
    const error = {};
    if (!letra.test(values.nombre)) {
      error.nombre = "Este campo solo acepta caracteres";
      Swal.fire("Error", error.nombre, 'error');
    }
    if (values.nombre === "") {
      error.nombre = "Este campo es obligatorio";
    }

    if (!letra.test(values.apellido)) {
      error.apellido = "Este campo solo acepta caracteres";
      Swal.fire("Error", error.apellido, 'error');
    }
    if (values.apellido === "") {
      error.apellido = "Este campo es obligatorio";
    }

    if (!telef.test(values.telefono) && values.telefono !== "") {
      error.telefono = "Este campo solo acepta numeros";
      Swal.fire("Error", error.telefono, 'error');
    }

    if (values.telefono === "") {
      error.telefono = "Este campo es obligatorio";
    }

    return error;
  };

  useEffect(() => {
    // dispatch(startLoadProfile());
    user.map((producto, index) => {
      setuUsuarioActiv(producto);
    });
  }, [user]);

  const dispatch = useDispatch();

  const [valor, setValor] = useState({
    nombre: usuarioActiv.nombre,
    apellido: usuarioActiv.apellido,
    telefono: usuarioActiv.telefono,
  });

  useEffect(() => {
    setValor({
      nombre: usuarioActiv.nombre,
      apellido: usuarioActiv.apellido,
      telefono: usuarioActiv.telefono,
    });
  }, [setValor, usuarioActiv]);

  console.log(usuarioActiv);
  console.log(valor);

  const { nombre, apellido, telefono } = valor;
  console.log(nombre, apellido, telefono);

  const correo = user.correo;

  const handleChange = (e) => {
    setValor({
      ...valor,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const validados = validacion(valor);
    if(Object.keys(validados).length > 0){
      console.log(validados);
    }
    if (Object.keys(validados).length === 0) {
      dispatch(updateProfile(valor));
      setTimeout(() => {
      }, 500);
    dispatch(startLoadProfile());
    navigate("/perfil");
    }
  };
  
  useEffect(() => {
    dispatch(startLoadProfile());
  }, [])

  
  return (
    <>
      <h5>
        NOTA: SOLO LLENE LOS CAMPOS QUE DESEA ACTUALIZAR, LO DEMAS DEJELO EN
        BLANCO EQUIS DE
      </h5>
      <form className="grid grid-cols-2 px-10" onSubmit={handleUpdate}>
        <h1 className="text-center col-span-2 font-bold mb-12 uppercase text-xl ">
          Configuracion
        </h1>
        <div className="col-span-1 w-full mb-3 pr-4">
          <label className="block uppercase text-gray-700 text-xs font-bold">
            Nombre
          </label>
          <input
            placeholder={usuarioActiv.nombre}
            type="text"
            className="mt-1 border-0 py-3 px-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow w-full "
            name="nombre"
            autoComplete="off"
            // value={nombre}
            onChange={handleChange}
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
            placeholder={usuarioActiv.apellido}
            name="apellido"
            autoComplete="off"
            onChange={handleChange}
            // value={apellido}
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
            placeholder={usuarioActiv.correo}
            name="correo"
            autoComplete="off"
            onChange={handleChange}
            // value={correo}
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
            placeholder={usuarioActiv.telefono}
            type="tel"
            name="telefono"
            autoComplete="off"
            onChange={handleChange}
            // value={telefono}
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
    </>
  );
};

export default TabModificarPerfil;
