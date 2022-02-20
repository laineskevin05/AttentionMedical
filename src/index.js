import React from "react";
import ReactDOM from "react-dom";
import "./assets/tailwind.css";
import { MainRouter } from "./routers/MainRouter";
//import RegisterPage from "./views/RegisterPage";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";

ReactDOM.render(<MainRouter/>, document.getElementById("root"));
