import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  //Link
} from "react-router-dom";
import LoginPage from "../views/LoginPage";
import RegisterPage from "../views/RegisterPage";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const MainRouter = ()=>{
    return(
        <Router>
            <div>
                <Routes> 
                    <Route exact = {`true`} path="/login" element={<LoginPage/>}/>
                    <Route exact = {`true`} path="/register" element={<RegisterPage/>}/>
                    <Route path="*" element={<Navigate replace to = "/login"/>}/>
                </Routes>
            </div>
        </Router>
    )
}