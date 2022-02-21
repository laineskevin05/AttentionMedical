import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Bienvenido = () => {
  //onst dispatch = useDispatch();
  const { uid } = useSelector((state) => state.auth);

  //const navigate = useNavigate();
  return (
    <>
      <div>
        <Link to="/login">Bienvenido </Link>
      </div>
    </>
  );
};

export default Bienvenido;
