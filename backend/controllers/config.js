const { response } = require("express");
const bcrypt = require("bcryptjs");
const Usuario = require("../models/Usuario");
//const { generarJWT } = require("../helpers/jwt");
const Centro = require("../models/Hospital");

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

const cambiarDepartamentosHospital = async (req, res = response) => {
  const { uid, departamentos } = req.body;
  console.log(departamentos, "ffff");
  try {
    let centro = await Centro.findById(uid);

    if (!centro) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario no existe",
      });
    }

    await Centro.updateOne(
      { _id: uid },
      {
        $set: {
          departamentos: departamentos,
        },
      },
      (error, info) => {
        if (error) {
          res.json({
            ok: false,
            msg: "No se pudo modificar los departamentos del hospital",
            err,
          });
        } else {
          res.json({
            ok: true,
            msg: "Departamentos del hospital cambiados correctamentamente",
            departamentos: departamentos,
            info: info,
          });
        }
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

const cargaDepartamentosHospital = async (req, res = response) => {
  const uid = req.params.uid;

  try {
    let centro = await Centro.findById(uid);
    if (!centro) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario no existe",
      });
    }

    if (centro) {
      res.json({
        ok: true,
        departamentos: centro.departamentos,
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

const actualizarPerfil = async (req, res = response) => {
  const userId = req.params.id;

  const uid = req.uid;

  try {
    const user = await Usuario.findById(userId);

    if (!user) {
      return res.status(404).json({
        ok: false,
        msg: "El usuario no existe",
      });
    }

    if (user._id.toString() !== userId) {
      return res.status(404).json({
        ok: false,
        msg: "No tiene los privilegios de editar este perfil",
      });
    }

    const nuevoUsuario = {
      ...req.body,
      user: uid,
    };

    const usuarioActualizado = await Usuario.findByIdAndUpdate(
      userId,
      nuevoUsuario,
      { new: true }
    );

    res.json({
      ok: true,
      user: usuarioActualizado,
    });
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
  actualizarPerfil,
  cambiarDepartamentosHospital,
  cargaDepartamentosHospital,
};
