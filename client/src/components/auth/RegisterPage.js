import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../hook/useForm";
import React from "react";
import { useDispatch } from "react-redux";
import { startRegister } from "../../actions/auth";

import Fondo from "../../assets/images/img.svg";
import IconUser from "../../assets/images/user.svg";

const letra = new RegExp(/^[a-zA-ZÀ-ÿ\s]{1,40}$/);
const password = new RegExp(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,12}$/);
const telef = new RegExp(/^([0-9]){8}$/);
const email = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formRegisterValues, handleRegisterInputChange, setValues] = useForm({
    nombre: '',
    apellido: '',
    telefono: '',
    correo: '',
    contrasenia: '',
    confContrasenia: '',
    hasError: {}
  });
  const {
    nombre,
    apellido,
    correo,
    telefono,
    contrasenia,
    confContrasenia,
    hasError
  } = formRegisterValues;
  
  const validacion = (values)=>{
    const error = {};
        if(!letra.test(values.nombre) && values.nombre!==''){
          error.nombre ='Este campo solo acepta caracteres';
        }
        
        if(!letra.test(values.apellido) && values.apellido!==''){
          error.apellido ='Este campo solo acepta caracteres';
        }

        if(!email.test(values.correo) && values.correo!==''){
          error.correo = 'Correo no valido'
        }

        if((!password.test(values.contrasenia) && values.contrasenia!=='') || values.contrasenia.length < 6){
          error.contrasenia ='La contraseña debe tener al entre 6 y 12 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula';
        }

        if (values.confContrasenia!==values.contrasenia) {
          error.confContrasenia = 'Contraseña no son iguales'
        }
        
        if(!telef.test(values.telefono) && values.telefono!==''){
          error.telefono ='Este campo solo acepta numeros';
        }
      return error
  }

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(1);
      const result = validacion(formRegisterValues);
      setValues({...formRegisterValues, hasError: result});
      console.log(Object.keys(result).length);
    if (
      (Object.keys(result).length > 0) && nombre && apellido && correo && telefono && contrasenia && confContrasenia
    ) {
      dispatch(startRegister(nombre, apellido, correo, telefono, contrasenia));
      console.log(2);
      setTimeout(() => {
        navigate("/login");
      }, 500);
    } else {
      console.log("Rellene los campos vacios");
    }
    console.log(3);
  };

  return (
    <>
      <div className="grid grid-cols-5 bg-indigo-600 ">
        <div className="col-span-3 bg-slate-800	">
          <div className="  w-full h-full">
            <img src={Fondo} alt="Logo" />
          </div>
        </div>
        <div className="col-span-2 bg-stone-200 content-center break-words place-items-center pt-6">
          <div className="mb-4">
            <div className="grid w-full place-items-center">
              <img
                src={IconUser}
                alt="Icon User"
                className=" rounded-full border-2 mt-4 mb-1  border-gray-600"
                width="80px"
              />
            </div>

            <h6 className="mt-3 mb-3 uppercase text-gray-600 text-lg text-center font-bold">
              Registrarse
            </h6>

            <form className="grid grid-cols-2 px-10" onSubmit={handleRegister}>
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
                  onChange={handleRegisterInputChange}
                  value={nombre}
                  style={{ transition: "all .15s ease" }}
                />
                {hasError.nombre && <p>{hasError.nombre}</p>}
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
                  onChange={handleRegisterInputChange}
                  value={apellido}
                  style={{ transition: "all .15s ease" }}
                />
                {hasError.apellido && <p>{hasError.apellido}</p>}
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
                  onChange={handleRegisterInputChange}
                  value={correo}
                  style={{ transition: "all .15s ease" }}
                />
                {hasError.correo && <p>{hasError.correo}</p>}
              </div>
              
              <div className=" w-full mb-3">
                <label className="block uppercase text-gray-700 text-xs font-bold">
                  Telefono
                </label>
                <input
                  className="mt-1 border-0 py-3 px-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow w-full"
                  placeholder="Telefono"
                  type="tel"
                  name="telefono"
                  autoComplete="off"
                  onChange={handleRegisterInputChange}
                  value={telefono}
                  style={{ transition: "all .15s ease" }}
                />
                {hasError.telefono && <p>{hasError.telefono}</p>}
              </div>
              <div className="pr-4 w-full mb-3 ml-3">
                <label className="block uppercase text-gray-700 text-xs font-bold">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="mt-1 border-0 py-3 px-3 rounded shadow text-sm w-full placeholder-gray-400 text-gray-600 bg-white"
                  placeholder="Contraseña"
                  name="contrasenia"
                  autoComplete="off"
                  onChange={handleRegisterInputChange}
                  value={contrasenia}
                  style={{ transition: "all .15s ease" }}
                />
                {hasError.contrasenia && <p>{hasError.contrasenia}</p>}
              </div>
              <div className=" w-full mb-3 ">
                <label className="block uppercase text-gray-700 text-xs font-bold">
                  Confirmar Contraseña
                </label>
                <input
                  type="password"
                  className="mt-1 border-0 py-3 px-3 rounded shadow text-sm w-full placeholder-gray-400 text-gray-600 bg-white"
                  placeholder="Contraseña"
                  name="confContrasenia"
                  autoComplete="off"
                  onChange={handleRegisterInputChange}
                  value={confContrasenia}
                  style={{ transition: "all .15s ease" }}
                />
                {hasError.confContrasenia && <p>{hasError.confContrasenia}</p>}
              </div>
              <div className="w-full mb-3 ">
                <label className="inline-flex items-center cursor-pointer">
                  <span className="ml-2 text-xs font-semibold text-gray-700">
                    Al darle Registrarse acepta los terminos de servicio y
                    condiciones.
                  </span>
                </label>
              </div>
              <div className="col-span-2 text-center mt-4 ">
                <button
                  className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                  type="Submit"
                  style={{ transition: "all .15s ease" }}
                >
                  Registrarse
                </button>
              </div>
            </form>
            <div className="grid grid-cols-2 px-14 mt-4">
              <div className="text-sm font-bold text-blue-400">
                <a
                  href="#aa"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Olvidaste tu Contraseña?
                </a>
              </div>
              <div className="text-sm font-bold text-gray-700">
                <Link exact={`true`} to="/login">
                  Iniciar sesion
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-full top-0 w-full h-24 bg-gray-900"></div>
      </div>
    </>
  );
};

export default RegisterPage;
