import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { starCitaLoaded } from "../../actions/cita";

const TabCitasHistorial = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(starCitaLoaded());
  }, [dispatch]);

  const { citas } = useSelector((state) => state.cita);

  // const historialCitas = citas.filter((cita) => {
  //   return cita.estado !== "Activo";
  // });

  return (
    <div className="flex w-full px-4 ">
      <table className="table w-full border-2 border-zinc-400 ">
        <thead>
          <tr className="text-left bg-blue-100 border-2 border-zinc-400 ">
            <th className="p-2">ID</th>
            <th className="p-2">Fecha</th>
            <th className="p-2">Hora</th>
            <th className="p-2">Estado</th>
            <th className="p-2">Centro</th>
            <th className="p-2">Dr/Dra</th>
            <th className="p-2">Descripcion</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {citas.map((cita) => {
            return (
              <tr className="hover:bg-gray-200 bg-white" key={cita.id}>
                <th className="p-1">{cita.id}</th>
                <td className="p-1">{cita.fecha}</td>
                <td className="p-1">{cita.hora}</td>
                <td className="p-1">{cita.estado}</td>
                <td className="p-1">{cita.clinica}</td>
                <td className="p-1">{cita.doctor}</td>
                <td className="p-1">{cita.descripcion}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default TabCitasHistorial;
