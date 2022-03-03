// import { useDispatch } from "react-redux";
// import { startLogout } from "../actions/auth";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children, uid }) => {
  // const dispatch = useDispatch();

  // if (typeof uid === "string" && uid) {
  //   setTimeout(() => {
  //     dispatch(startLogout());
  //   }, 3000);
  // }
  // return children;
  return typeof uid === "string" && uid ? <Navigate to="/" /> : children;
};
