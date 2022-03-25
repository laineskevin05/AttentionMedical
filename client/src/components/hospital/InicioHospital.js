import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import {
  cargarDepartamentosHospital,
  startCambioDepartamentosHospital,
} from "../../actions/config";
import fotoPerfilHospital from "../../assets/images/fondo_Hospital.jpg";
import svgSimbolSum from "../../assets/images/svgSimbolSum.svg";

const InicioHospital = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cargarDepartamentosHospital());
  }, [dispatch]);
  const { departamentos } = useSelector((state) => {
    return state.config;
  });

  const agregarDepartamento = (e) => {
    let nuevoDepartamento = prompt("Ingrese el nombre del departamento");
    if (nuevoDepartamento == null || nuevoDepartamento === "") {
    } else {
      dispatch(
        startCambioDepartamentosHospital([...departamentos, nuevoDepartamento])
      );
    }
  };
  // console.log(uid, "gggg");

  console.log(departamentos, "ppp");
  return (
    <>
      <div className="w-full h-36 bg-menu flex">
        <div className="w-1/4 flex items-center p-4 justify-end">
          <div className="w-32 h-32 rounded-full inline-block  outline outline-gray-500 shadow-md">
            <img
              src={fotoPerfilHospital}
              alt="perfil_clinica"
              className="inline-block rounded-full h-full w-full "
            />
          </div>
        </div>
        <div className="w-3/4 flex  flex-wrap items-center ">
          <div>
            <h1 className="w-full text-3xl font-bold py-2  font-sans">
              Hospital Masacrademonios
            </h1>
            <h3 className="py-2 text-base font-sans text-white">
              Descipcion del hospital, tal como ser cuantos años tiene, etc
            </h3>
          </div>
        </div>
      </div>

      <div className="w-full flex min-h-[70vh]">
        <div className="w-1/4 bg-teal-500 inline-block py-6 ">
          <div className=" flex w-full justify-end items-end ">
            <button
              className="p-2  text-right bg-gray-600 text-white rounded-md shadow-lg  "
              onClick={agregarDepartamento}
            >
              <img
                src={svgSimbolSum}
                alt="simbol_sum"
                className="inline w-6 pr-2"
              />
              Añadir
            </button>
          </div>
          <h2 className="text-lg font-semibold text-center font-sans ">
            Doctores
          </h2>

          <hr className=" border-gray-700" />
          <button className="py-2 w-full bg-teal-300 border-2 text-gray-800 font-bold rounded-lg">
            Todos
          </button>
          {departamentos?.map((area) => {
            return (
              <button
                className="py-2 w-full text-white font-semibold rounded-md  "
                key={area}
              >
                {area.charAt(0).toUpperCase() + area.toLowerCase().slice(1)}
              </button>
            );
          })}

          <hr className=" border-gray-700" />
          <button className="py-2 w-full  text-gray-800 font-bold rounded-md">
            Acerca de
          </button>
        </div>
        <div className="w-3/4 bg-green-300 inline-block py-6 px-2">
          <div className=" flex justify-end mb-4">
            <button className="bg-gray-700 rounded-md p-2 text-white">
              Añadir doctor
            </button>
          </div>
          <div className="bg-green-100 rounded py-3 px-2 flex ">
            <div className="flex w-5/6 items-center">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt="avatar"
                className="object-cover inline w-10 h-10 rounded-full shadow-sm"
              />
              <div className="flex flex-col">
                <div className="flex items-center">
                  <div className="flex px-2">
                    <h3 className="pr-2 font-semibold">Doctor:</h3>
                    <h3 className="pr-2">Carlos Lopez</h3>
                  </div>
                  <div className="flex px-2">
                    <h3 className="pr-2 font-semibold">Horario:</h3>
                    <h3 className="pr-1">8:00 am -</h3>
                    <h3 className="pr-2">5:00 pm</h3>
                  </div>
                  <div className="flex px-2 ">
                    <h3 className="pr-2 font-semibold">Dias laborales:</h3>
                    <h3 className="pr-1">
                      Lunes, martes, miercoles, jueves, viernes
                    </h3>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex px-2">
                    <h3 className="pr-2 font-semibold">Detalles:</h3>
                    <h3 className="pr-2">12 años de experiencia</h3>
                  </div>
                  <div className="flex px-2">
                    <h3 className="pr-2 font-semibold">Departamento:</h3>
                    <h3 className="pr-2">pedriatria</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end w-1/6">
              <button className="">Historial</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InicioHospital;
