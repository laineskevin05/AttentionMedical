import { useEffect, useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import Fondo from "../assets/images/img.svg";
import IconUser from "../assets/images/user.svg";
import { useForm } from "../hook/useForm";
import { todoReducer } from "../reducer/todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || [];
}

const RegisterPage = () => {
    const [valueInput, handleInputChange, handleBlur, setValue, reset] = useForm({
      nombre: '',
      apellido: '',
      contraseña: '',
      confContraseña: '',
      correo: '',
      telefono: '',
      hasError: {}
  });
  const navigate = useNavigate();
  const [local, dispatch] = useReducer(todoReducer, [], init )

  const {nombre, apellido, contraseña, confContraseña, correo, telefono, hasError} = valueInput;

  const handleSubmit = (e)=>{
      e.preventDefault();

      const {hasError, ...initialState} = valueInput;
      const result =  handleBlur(initialState);
      // const forma = validacionCampos(initialState);
      
      setValue({...valueInput, hasError: result});
      const action = {
          type: 'add',
          payload: valueInput
      }
      
      console.log(valueInput)
      if(!Object.keys(result).length){
          alert('Gracias por registrarse');
          dispatch(action);
          reset();
      }
  }


  useEffect(() => {
      localStorage.setItem('user', JSON.stringify(local));
  }, [local]);

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

            <form className="grid grid-cols-2 px-10" onSubmit={handleSubmit}>
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
                  onChange={handleInputChange}
                  value={nombre}
                  style={{ transition: "all .15s ease" }}
                />
                {
                  hasError.nombre && <p>{hasError.nombre}</p>
                }
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
                  onChange={handleInputChange}
                  value={apellido}
                  style={{ transition: "all .15s ease" }}
                />
                {
                  hasError.apellido && <p>{hasError.apellido}</p>
                }
              </div>
              <div className="col-span-2 w-2/3 mb-3 ">
                <label className="block uppercase text-gray-700 text-xs font-bold">
                  Correo
                </label>
                <input
                  type="email"
                  className="mt-1 border-0 py-3 px-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow w-full "
                  placeholder="Email"
                  name="correo"
                  autoComplete="off"
                  onChange={handleInputChange}
                  value={correo}
                  style={{ transition: "all .15s ease" }}
                />
                {
                  hasError.correo && <p>{hasError.correo}</p>
                }
              </div>
              <div className="pr-4 w-full mb-3 ">
                <label className="block uppercase text-gray-700 text-xs font-bold">
                  Pais
                </label>
                <input
                  list="Paises"
                  placeholder="Seleccione el pais"
                  className="mt-1 border-0 py-3 px-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow w-full"
                />
                <datalist id="Paises">
                </datalist>
              </div>
              <div className=" w-full mb-3 ">
                <label className="block uppercase text-gray-700 text-xs font-bold">
                  Telefono
                </label>
                <input
                  className="mt-1 border-0 py-3 px-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow w-full "
                  placeholder="Telefono"
                  type='tel'
                  name="telefono"
                  autoComplete="off"
                  onChange={handleInputChange}
                  value={telefono}
                  style={{ transition: "all .15s ease" }}
                />
                  {
                    hasError.telefono && <p>{hasError.telefono}</p>
                  }
              </div>
              <div className="pr-4 w-full mb-3 ">
                <label className="block uppercase text-gray-700 text-xs font-bold">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="mt-1 border-0 py-3 px-3 rounded shadow text-sm w-full placeholder-gray-400 text-gray-600 bg-white"
                  placeholder="Contraseña"
                  name="contraseña"
                  autoComplete="off"
                  onChange={handleInputChange}
                  value={contraseña}
                  style={{ transition: "all .15s ease" }}
                />
                {
                  hasError.contraseña && <p>{hasError.contraseña}</p>
                }
              </div>
              <div className=" w-full mb-3 ">
                <label className="block uppercase text-gray-700 text-xs font-bold">
                  Confirmar Contraseña
                </label>
                <input
                  type="password"
                  className="mt-1 border-0 py-3 px-3 rounded shadow text-sm w-full placeholder-gray-400 text-gray-600 bg-white"
                  placeholder="Confirmar contraseña"
                  name="confContraseña"
                  autoComplete="off"
                  onChange={handleInputChange}
                  value={confContraseña}
                  style={{ transition: "all .15s ease" }}
                />
                {
                  hasError.confContraseña && <p>{hasError.confContraseña}</p>
                }
              </div>
              <div className="w-full mb-3 ">
                <label className="inline-flex items-center cursor-pointer">
                  <span className="ml-2 text-xs font-semibold text-gray-700">
                    Al darle Registrarse acepta los terminos de servicio y condiciones.
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
              <Link
                        exact = {`true`}
                        to="/login"
                    >
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
