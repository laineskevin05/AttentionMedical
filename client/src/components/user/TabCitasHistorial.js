import React from "react";

const TabCitasHistorial = () => {
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
          <tr className="hover:bg-gray-200 bg-white">
            <th className="p-1">15548855445</th>
            <td className="p-1">2020/jul/18</td>
            <td className="p-1">14:00 a 15:00</td>
            <td className="p-1">Activa</td>
            <td className="p-1">Clinica Dolores</td>
            <td className="p-1">Pedro Guzman</td>
            <td className="p-1">
              Descripcion: Sed ut perspiciatis unde omnis iste natus error sit
              sed quia consequuntur magni voluptatem doloremque.
            </td>
          </tr>
          {/* Estas filas se deberan de borrar, solo son ilustrativas
          asi que se debe de adaptar un map con la lista de datos para mostrar todo adaptando el codigo de arriba */}

          <tr className="hover:bg-gray-200  ">
            <th className="p-1">15548855445</th>
            <td className="p-1">2020/jul/18</td>
            <td className="p-1">14:00 a 15:00</td>
            <td className="p-1">Por confirmar</td>
            <td className="p-1">Clinica Dolores</td>
            <td className="p-1">Pedro Guzman</td>
            <td className="p-1">
              Descripcion: Sed ut perspiciatis unde omnis iste natus error sit
              sed quia consequuntur magni voluptatem doloremque.
            </td>
          </tr>
          <tr className="hover:bg-gray-200 ">
            <th className="p-1">15548855445</th>
            <td className="p-1">2020/jul/18</td>
            <td className="p-1">14:00 a 15:00</td>
            <td className="p-1">Cancelada</td>
            <td className="p-1">Clinica Dolores</td>
            <td className="p-1">Pedro Guzman</td>
            <td className="p-1">
              Descripcion: Sed ut perspiciatis unde omnis iste natus error sit
              sed quia consequuntur magni voluptatem doloremque.
            </td>
          </tr>
          <tr className="hover:bg-gray-200  ">
            <th className="p-1">15548855445</th>
            <td className="p-1">2020/jul/18</td>
            <td className="p-1">14:00 a 15:00</td>
            <td className="p-1">Realizada</td>
            <td className="p-1">Clinica Dolores</td>
            <td className="p-1">Pedro Guzman</td>
            <td className="p-1">
              Descripcion: Sed ut perspiciatis unde omnis iste natus error sit
              sed quia consequuntur magni voluptatem doloremque.
            </td>
          </tr>
          <tr className="hover:bg-gray-200 ">
            <th className="p-1">15548855445</th>
            <td className="p-1">2020/jul/18</td>
            <td className="p-1">14:00 a 15:00</td>
            <td className="p-1">Activa</td>
            <td className="p-1">Clinica Dolores</td>
            <td className="p-1">Pedro Guzman</td>
            <td className="p-1">
              Descripcion: Sed ut perspiciatis unde omnis iste natus error sit
              sed quia consequuntur magni voluptatem doloremque.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TabCitasHistorial;
