import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../ui/Navbar";

const Bienvenido = () => {
  //onst dispatch = useDispatch();
  const { uid } = useSelector((state) => state.auth);

  //const navigate = useNavigate();
  return (
    <>
      <Navbar/>
      <div>
        <Link to="/login">Bienvenido </Link>
      </div>
    </>
  );
};

export default Bienvenido;
