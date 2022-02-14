/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import Fondo from '../assets/img.svg';
import IconUser from '../assets/user.svg';

export default function LoginPage() {
  return (
    <>
    <div className="grid grid-cols-5 bg-indigo-600 ">
      <div className="col-span-3 bg-slate-800	">
        <div
          className="  w-full h-full"
  
        >
          <img src={Fondo}  alt="Logo"/>
        </div>
      </div>
      <div className="col-span-2 bg-gray-100 content-center break-words place-items-center pt-16">
        <div className="mb-4">
          <div className="grid w-full place-items-center">
            <img src={IconUser} alt="Icon User" className=" rounded-full border-2 mt-4 mb-1  border-gray-600" width="80px"/>
          </div>
          <h6 className="mt-6 mb-3 uppercase text-gray-600 text-lg text-center font-bold">
            Inicio de Sesion
          </h6>
          <form>
            <div className=" w-full mb-3 px-14">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold"
                  htmlFor="grid-password"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 border-0 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow w-full "
                  placeholder="Email"
                  style={{ transition: "all .15s ease" }}
                />
              </div>
              <div className="w-full mb-3 px-14">
                <label className="block uppercase text-gray-700 text-xs font-bold">
                  Contraseña
                </label>
                <input 
                  type="password"
                  className="mt-1 border-0 py-3 rounded shadow text-sm w-full placeholder-gray-400 text-gray-600 bg-white"
                  placeholder="Contraseña"
                  style={{ transition: "all .15s ease" }}
                />
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
                    type="button"
                    style={{ transition: "all .15s ease" }}
                  >
                    Iniciar Sesion
                  </button>
                </div>
            </form>
            <div className="grid grid-cols-2 px-14 mt-4">
              <div className="text-sm font-bold text-blue-400">
                <a
                  href="#aa"
                  onClick={e => e.preventDefault()}
                >
                  Olvidaste tu Contraseña?
                </a>
              </div>
              <div className="font-bold text-gray-700">
                <a
                  href="#pp"
                  onClick={e => e.preventDefault()}
                >
                  Registrarse
                </a>
              </div>
            </div>
        </div>
      </div>
      <div
        className="col-span-full top-0 w-full h-24 bg-gray-900"
        // {style={{
        //   backgroundImage:
        //     "url(" + require("assets/img/register_bg_2.png").default + ")",
        //   backgroundSize: "100%",
        //   backgroundRepeat: "no-repeat"
        // }}}
      ></div>
    </div>
      
    </>
  )}

