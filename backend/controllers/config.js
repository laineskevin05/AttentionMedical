const { response } = require("express");
const bcrypt = require("bcryptjs");
const Usuario = require("../models/Usuario");
//const { generarJWT } = require("../helpers/jwt");

const cambiarContrasenia = async (req, res = response) => {
  const { uid, contrasenia } = req.body;

  try {
    let usuario = await Usuario.findById(uid);

    if (!usuario) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario no existe",
      });
    }

    //console.log(usuario);
    // Encriptar contraseña
    const salt = bcrypt.genSaltSync();
    contraseniaEncriptada = bcrypt.hashSync(contrasenia, salt);
    await Usuario.updateOne(
      { _id: uid },
      {
        $set: {
          contrasenia: contraseniaEncriptada,
        },
      },
      (error, info) => {
        if (error) {
          res.json({
            ok: false,
            msg: "No se pudo modificar la contraseña",
            err,
          });
        } else {
          res.json({
            ok: true,
            msg: "Contraseña cambiada",
            info: info,
          });
        }
      }
    );
    //await usuario.save();

    // Generar JWT
    //   const token = await generarJWT(usuario.id, usuario.correo);

    //   res.status(201).json({
    //     ok: true,
    //     uid: usuario.id,
    //     name: usuario.correo,
    //     token,
    //   });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

module.exports = {
  cambiarContrasenia,
};
