const { response } = require("express");
const Usuarios = require("../models/Usuario");
const Hospitales = require("../models/Hospital");
const Administrador = require("../models/Aministrador");
const { generarJWT } = require("../helpers/jwt");

const getUsuario = async (req, res = response) => {
  const usu = await Usuarios.find();

  res.status(201).json({
    ok: true,
    usu,
  });
};

const getHospital = async (req, res = response) => {
  const hsp = await Hospitales.find();

  res.status(201).json({
    ok: true,
    hsp,
  });
};

const modCuentactiva = async (req, res = response) => {
  const { cuentaActiva, id } = req.body;

  try {
    const usuario = await Usuarios.findOne({ _id: id });
    const hospital = await Hospitales.findOne({ _id: id });

    if (usuario) {
      usuario.cuentaActiva = cuentaActiva;

      const usuarioActivo = {
        ...usuario,
      };

      const usuarioActualizado = await Usuarios.findByIdAndUpdate(
        id,
        usuarioActivo,
        {
          new: true,
        }
      );

      res.json({
        ok: true,
        usuario: usuarioActualizado,
      });
    }

    if (hospital) {
      hospital.cuentaActiva = cuentaActiva;

      const hospitalActivo = {
        ...hospital,
      };

      const hospitalActualizado = await Hospitales.findByIdAndUpdate(
        id,
        hospitalActivo,
        {
          new: true,
        }
      );
      res.json({
        ok: true,
        hosptial: hospitalActualizado,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

const loginAdmi = async (req, res = response) => {
  const { correo, contrasenia } = req.body;

  try {
    const admi = await Administrador.findOne({ correo });

    if (!admi) {
      return res.status(400).json({
        ok: false,
        msg: "No existe el administrador con ese email",
      });
    }

    if (admi) {
      // Confirmar los passwords
      /*const validPassword = bcrypt.compareSync(
        contrasenia,
        admi.contrasenia
      );

      if (!validPassword) {
        return res.status(400).json({
          ok: false,
          msg: "Password incorrecto",
        });
      }*/

      // Generar JWT
      const token = await generarJWT(admi.id, admi.correo);

      res.json({
        ok: true,
        uid: admi.id,
        nombre: admi.nombre,
        correo: admi.correo,
        token,
        tipo: "admin",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

module.exports = { getUsuario, getHospital, modCuentactiva, loginAdmi };
