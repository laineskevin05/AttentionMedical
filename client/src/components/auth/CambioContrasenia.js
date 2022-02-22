import React from "react";
import "./CambioContraseña.css";
import { useDispatch, useStore } from "react-redux";
import { startCambioContrasenia } from "../../actions/config";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../hook/useForm";

const password = new RegExp(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,12}$/);

const CambioContraseña = () => {
  const { auth } = useStore().getState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formLoginValues, handleNuevaContraseniaInputChange, setValues] =
    useForm({
      contraseniaN: "",
      contraseniaC: "",
      hasError: {},
    });
  const { contraseniaN, contraseniaC, hasError } = formLoginValues;

  const validacion = (values) => {
    const error = {};

    if (!password.test(values.contraseniaC) || values.contraseniaC.length < 6) {
      error.contraseniaC =
        "La contraseña debe tener al entre 6 y 12 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula";
    }
    if (values.contraseniaC === "") {
      error.contraseniaC = "Este campo es obligatorio";
    }
    if (!password.test(values.contraseniaN) || values.contraseniaN.length < 6) {
      error.contraseniaN =
        "La contraseña debe tener al entre 6 y 12 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula";
    }
    if (values.contraseniaN === "") {
      error.contraseniaN = "Este campo es obligatorio";
    }
    if (values.contraseniaC !== values.contraseniaN) {
      error.contraseniaC = "las constraseñas no coinciden";
    }
    return error;
  };

  const handleNuevaContrasenia = async (e) => {
    e.preventDefault();
    const result = validacion(formLoginValues);
    setValues({ ...formLoginValues, hasError: result });

    if (Object.keys(result).length === 0) {
      console.log(auth.uid);
      // if (uid) {
      // }
      dispatch(startCambioContrasenia(auth.uid, contraseniaC));
      // if (uid) {
      setTimeout(() => {
        navigate("/");
      }, 500);
      // }
    }
  };
  return (
    <section id="global">
      <header>
        <div id="logo">
          {" "}
          <h1>CAMBIAR CONTRASEÑA</h1>{" "}
        </div>
      </header>

      <div id=" logo ">
        <form onSubmit={handleNuevaContrasenia}>
          <input
            name="contraseniaN"
            type="text"
            placeholder=" CONTRASEÑA NUEVA"
            value={contraseniaN}
            onChange={handleNuevaContraseniaInputChange}
          />
          {hasError.contraseniaN && <p>{hasError.contraseniaN}</p>}

          <input
            name="contraseniaC"
            type="text"
            value={contraseniaC}
            placeholder=" CONFIRMAR CONTRASEÑA"
            onChange={handleNuevaContraseniaInputChange}
          />
          {hasError.contraseniaC && <p>{hasError.contraseniaC}</p>}

          <input type="submit" value="CAMBIAR CONTRASEÑA" />
        </form>
      </div>
    </section>
  );
};

export default CambioContraseña;
