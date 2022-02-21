// import { useDispatch } from "react-redux";
// import { startLogout } from "../actions/auth";

export const PublicRoute = ({ children, uid }) => {
  // const dispatch = useDispatch();

  // if (typeof uid === "string" && uid) {
  //   setTimeout(() => {
  //     dispatch(startLogout());
  //   }, 3000);
  // }
  return children;
};
