import { Link } from "react-router-dom";
import { useForm } from "../../hook/useForm";
import React from "react";
import { useDispatch, useStore } from "react-redux";
import { startLogin, startLogout } from "../../actions/auth";

import Fondo from "../../assets/images/img.svg";
import IconUser from "../../assets/images/user.svg";

const email = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
const password = new RegExp(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,12}$/);

const LoginPage = () => {
  const { auth } = useStore().getState();
  const dispatch = useDispatch();

  // const navigate = useNavigate();
  const [formLoginValues, handleLoginInputChange, setValues] = useForm({
    correo: "",
    contrasenia: "",
    hasError: {},
  });
  const { correo, contrasenia, hasError } = formLoginValues;
  const validacion = (values) => {
    const error = {};

    if (!email.test(values.correo)) {
      error.correo = "Correo no valido";
    }

    if (values.correo === "") {
      error.correo = "Este campo es obligatorio";
    }

    if (!password.test(values.contrasenia) || values.contrasenia.length < 6) {
      error.contrasenia =
        "La contraseña debe tener al entre 6 y 12 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula";
    }
    if (values.contrasenia === "") {
      error.contrasenia = "Este campo es obligatorio";
    }
    return error;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = validacion(formLoginValues);
    setValues({ ...formLoginValues, hasError: result });

    if (Object.keys(result).length === 0) {
      console.log(auth.uid);
      if (auth.uid) {
        await dispatch(startLogout());
      }
      await dispatch(await startLogin(correo, contrasenia));
      // auth.uid && navigate("/");
    }
  };
  return (
    <>
      <div className="grid grid-cols-5 bg-indigo-600 ">
        <div className="col-span-3 bg-slate-800	">
          {/* bg-slate-800 */}
          <div className="  w-full h-full">
            <img src={Fondo} alt="Logo" />
          </div>
        </div>
        <div className="col-span-2 bg-stone-200 content-center break-words place-items-center pt-16">
          <div className="mb-4">
            <div className="grid w-full place-items-center">
              <img
                src={IconUser}
                alt="Icon User"
                className=" rounded-full border-2 mt-4 mb-1  border-gray-600"
                width="80px"
              />
            </div>
            <h6 className="mt-6 mb-3 uppercase text-gray-600 text-lg text-center font-bold">
              Inicio de Sesion
            </h6>
            <form onSubmit={handleLogin}>
              <div className=" w-full mb-3 px-14">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold"
                  htmlFor="grid-password"
                >
                  Correo
                </label>
                <input
                  type="text"
                  className="mt-1 border-0 py-3 px-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow w-full "
                  placeholder="Correo"
                  name="correo"
                  autoComplete="off"
                  onChange={handleLoginInputChange}
                  value={correo}
                  style={{ transition: "all .15s ease" }}
                />
                {hasError.correo && <p>{hasError.correo}</p>}
              </div>

              <div className="w-full mb-3 px-14">
                <label className="block uppercase text-gray-700 text-xs font-bold">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="mt-1 border-0 py-3 px-3 rounded shadow text-sm w-full placeholder-gray-400 text-gray-600 bg-white"
                  placeholder="Contraseña"
                  name="contrasenia"
                  autoComplete="off"
                  onChange={handleLoginInputChange}
                  value={contrasenia}
                  style={{ transition: "all .15s ease" }}
                />
                {hasError.contrasenia && <p>{hasError.contrasenia}</p>}
              </div>
              <div className="w-full mb-6 px-14">
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    id="customCheckLogin"
                    type="checkbox"
                    className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                    style={{ transition: "all .15s ease" }}
                  />
                  <span className="ml-2 text-sm font-semibold text-gray-700">
                    Recuerdame
                  </span>
                </label>
              </div>
              <div className="text-center mt-6 px-14">
                <button
                  className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                  type="submit"
                  style={{ transition: "all .15s ease" }}
                >
                  Iniciar Sesion
                </button>
              </div>
            </form>
            <div className="grid grid-cols-2 px-14 mt-4">
              <div className="text-sm font-bold text-blue-400">
                <a href="#aa" onClick={(e) => e.preventDefault()}>
                  Olvidaste tu Contraseña?
                </a>
              </div>
              <div className="text-sm font-bold text-gray-700">
                <Link exact={`true`} to="/register">
                  Registro usuario
                </Link>
              </div>
              <div className="text-sm font-bold text-gray-700"></div>
              <div className="text-sm font-bold text-gray-700">
                <Link exact={`true`} to="/registercentro">
                  Registro centro medico
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

export default LoginPage;
