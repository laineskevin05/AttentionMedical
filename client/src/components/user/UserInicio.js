import { Link } from "react-router-dom";

export const UserInicio = () => {
  return (
    <>
      {/* <div className="px-4 py-16  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"> */}
      <div className="grid grid-cols-5">
        <div className="bg-red-300 col-span-1 min-h-screen"></div>
        <div className="grid gap-8  grid-cols-2 col-span-3 p-2 pt-8 content-start">
          <div className="flex ">
            <div className="pt-1 mr-6 text-center">
              <div className="px-2 pb-1 mb-1 border-b border-gray-400">
                <p className="text-sm text-blue-gray-700">Jul</p>
              </div>
              <div className="px-2">
                <p className="text-lg font-bold">18</p>
              </div>
            </div>
            <div>
              <div className="mb-1">
                <Link
                  to="/"
                  className="inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Clinica Dolores
                </Link>
              </div>
              <div className="mb-1">
                <p className=" uppercase text-gray-700 ">
                  Fecha: ( 2020/jul/18 ) 14:00-15:00
                </p>
              </div>
              <p className="mb-5 text-gray-700">
                Descripcion: Sed ut perspiciatis unde omnis iste natus error sit
                sed quia consequuntur magni voluptatem doloremque.
              </p>
              <div className="flex items-center">
                <Link to="/" className="mr-3">
                  <img
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt="avatar"
                    className="object-cover w-10 h-10 rounded-full shadow-sm"
                  />
                </Link>
                <div>
                  <Link
                    to="/"
                    className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Pedro Guzman
                  </Link>
                  <p className="text-sm font-medium leading-4 text-gray-600">
                    Dr/Dra.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex ">
            <div className="pt-1 mr-6 text-center">
              <div className="px-2 pb-1 mb-1 border-b border-gray-400">
                <p className="text-sm text-blue-gray-700">Jul</p>
              </div>
              <div className="px-2">
                <p className="text-lg font-bold">18</p>
              </div>
            </div>
            <div>
              <div className="mb-1">
                <Link
                  to="/"
                  className="inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Clinica Ahi te Voy
                </Link>
              </div>
              <div className="mb-1">
                <p className=" uppercase text-gray-700 ">
                  Fecha: ( 2020/jul/18 ) 14:00-15:00
                </p>
              </div>
              <p className="mb-5 text-gray-700">
                Descripcion: Sed ut perspiciatis unde omnis iste natus error sit
                sed quia consequuntur magni voluptatem doloremque.
              </p>
              <div className="flex items-center">
                <Link to="/" className="mr-3">
                  <img
                    src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt="avatar"
                    className="object-cover w-10 h-10 rounded-full shadow-sm"
                  />
                </Link>
                <div>
                  <Link
                    to="/"
                    className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Carlos Ramirez
                  </Link>
                  <p className="text-sm font-medium leading-4 text-gray-600">
                    Dr/Dra.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex ">
            <div className="pt-1 mr-6 text-center">
              <div className="px-2 pb-1 mb-1 border-b border-gray-400">
                <p className="text-sm text-blue-gray-700">Jul</p>
              </div>
              <div className="px-2">
                <p className="text-lg font-bold">18</p>
              </div>
            </div>
            <div>
              <div className="mb-1">
                <Link
                  to="/"
                  className="inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Clinica Masacrademonios
                </Link>
              </div>
              <div className="mb-1">
                <p className=" uppercase text-gray-700 ">
                  Fecha: ( 2020/jul/18 ) 14:00-15:00
                </p>
              </div>
              <p className="mb-5 text-gray-700">
                Descripcion: Sed ut perspiciatis unde omnis iste natus error sit
                sed quia consequuntur magni voluptatem doloremque.
              </p>
              <div className="flex items-center">
                <Link to="/" className="mr-3">
                  <img
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt="avatar"
                    className="object-cover w-10 h-10 rounded-full shadow-sm"
                  />
                </Link>
                <div>
                  <Link
                    to="/"
                    className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Pedro Guzman
                  </Link>
                  <p className="text-sm font-medium leading-4 text-gray-600">
                    Dr/Dra.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex ">
            <div className="pt-1 mr-6 text-center">
              <div className="px-2 pb-1 mb-1 border-b border-gray-400">
                <p className="text-sm text-blue-gray-700">Jul</p>
              </div>
              <div className="px-2">
                <p className="text-lg font-bold">18</p>
              </div>
            </div>
            <div>
              <div className="mb-1">
                <Link
                  to="/"
                  className="inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Hospital Martin Lutero
                </Link>
              </div>
              <div className="mb-1">
                <p className=" uppercase text-gray-700 ">
                  Fecha: ( 2020/jul/18 ) 14:00-15:00
                </p>
              </div>
              <p className="mb-5 text-gray-700">
                Descripcion: Sed ut perspiciatis unde omnis iste natus error sit
                sed quia consequuntur magni voluptatem doloremque.
              </p>
              <div className="flex items-center">
                <Link to="/" className="mr-3">
                  <img
                    src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                    alt="avatar"
                    className="object-cover w-10 h-10 rounded-full shadow-sm"
                  />
                </Link>
                <div>
                  <Link
                    to="/"
                    className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Maria Lainez
                  </Link>
                  <p className="text-sm font-medium leading-4 text-gray-600">
                    Dr/Dra.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-300  col-span-1 "></div>
      </div>
    </>
  );
};
