import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import {
  cargarDepartamentosHospital,
  startCambioDepartamentosHospital,
} from "../../actions/config";
import fotoPerfilHospital from "../../assets/images/fondo_Hospital.jpg";
import svgSimbolSum from "../../assets/images/svgSimbolSum.svg";
import { useNavigate, useParams } from "react-router-dom";
import { limpiarDoctores, starDoctorLoaded } from "../../actions/doctor";
import { hospitalSearchStar, startLoadHospital } from "../../actions/hospital";

const InicioHospital = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const { doctor, auth, hospitalAct } = useSelector((state) => state);
  const [especialidad, setEspecialidad] = useState();
  const [infoHospital, setInfoHospital] = useState({});

  console.log(hospitalAct.id);

  useEffect(() => {
    dispatch(limpiarDoctores());
    dispatch(hospitalSearchStar());
  }, []);
  const { hospitales } = useSelector((state) => state.hospital);

  useEffect(() => {
    dispatch(limpiarDoctores());
    if (auth.tipo === "usuario") {
      dispatch(cargarDepartamentosHospital(id));
      dispatch(starDoctorLoaded(id));
    } else {
      dispatch(cargarDepartamentosHospital(auth.uid));
      dispatch(starDoctorLoaded(auth.uid));
    }
  }, [id]);
  useEffect(() => {
    hospitales &&
      setInfoHospital(
        Object.values(hospitales)?.find((dato) => {
          if (auth.tipo === "usuario") {
            return dato.id === id;
          } else {
            return dato.id === auth.uid;
          }
        })
      );
  }, [hospitales, id]);

  console.log(infoHospital);
  const [coincidenciasHospitales, setCoincidenciasHospitales] = useState({});

  const doctores = doctor.doctores;
  const nombre = auth.email;

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

  const handleClick = (e) => {
    e.preventDefault();

    const especialidadAct = e.target.textContent;

    dispatch(limpiarDoctores());

    setEspecialidad(especialidadAct);
    dispatch(starDoctorLoaded(especialidadAct));
  };

  // useEffect(() => {}, [coincidenciasHospitales]);
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
              {auth.tipo === "usuario"
                ? infoHospital?.nombre
                : infoHospital?.nombre}
            </h1>
            <h3 className="py-2 text-base font-sans text-white">
              {auth.tipo === "usuario"
                ? infoHospital?.descripcion
                : infoHospital?.nombre}
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
          <button
            className="py-2 w-full bg-teal-300 border-2 text-gray-800 font-bold rounded-lg"
            onClick={(e) => handleClick(e)}
          >
            Todos
          </button>
          {departamentos?.map((area) => {
            return (
              <button
                className="py-2 w-full text-white font-semibold rounded-md  "
                key={area}
                onClick={(e) => handleClick(e)}
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
            <button
              className="bg-gray-700 rounded-md p-2 text-white"
              onClick={(e) => {
                e.preventDefault();
                navigate("/centro/nuevodoctor");
              }}
            >
              Añadir doctor
            </button>
          </div>
          {doctores?.map((doctor) => {
            return (
              <div key={doctor.id}>
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
                          <h3 className="pr-2">
                            {doctor.user.nombre}
                            <span> {doctor.user.apellido}</span>
                          </h3>
                        </div>
                        <div className="flex px-2">
                          <h3 className="pr-2 font-semibold">Horario:</h3>
                          <h3 className="pr-1">{doctor.horaEntrada}-</h3>
                          <h3 className="pr-2">{doctor.horaSalida}</h3>
                        </div>
                        <div className="flex px-2 ">
                          <h3 className="pr-2 font-semibold">
                            Dias laborales:
                          </h3>
                          <h3 className="pr-1">{doctor.dias}</h3>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex px-2">
                          <h3 className="pr-2 font-semibold">Detalles:</h3>
                          <h3 className="pr-2">{doctor.descripcion}</h3>
                        </div>
                        <div className="flex px-2">
                          <h3 className="pr-2 font-semibold">Departamento:</h3>
                          <h3 className="pr-2">{doctor.especialidad}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end w-1/6">
                    <button className="">Historial</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default InicioHospital;
