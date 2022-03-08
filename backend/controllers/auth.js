const { response } = require("express");
const bcrypt = require("bcryptjs");
const Usuario = require("../models/Usuario");
const { generarJWT } = require("../helpers/jwt");

const crearUsuario = async (req, res = response) => {
  const { correo, contrasenia } = req.body;

  try {
    let usuario = await Usuario.findOne({ correo });

    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario ya existe",
      });
    }

    usuario = new Usuario(req.body);
    console.log(usuario);
    // Encriptar contraseña
    const salt = bcrypt.genSaltSync();
    usuario.contrasenia = bcrypt.hashSync(contrasenia, salt);

    await usuario.save();

    // Generar JWT
    const token = await generarJWT(usuario.id, usuario.correo);

    res.status(201).json({
      ok: true,
      uid: usuario.id,
      name: usuario.correo,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

const loginUsuario = async (req, res = response) => {
  const { correo, contrasenia } = req.body;

  try {
    const usuario = await Usuario.findOne({ correo });

    if (!usuario) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario no existe con ese email",
      });
    }

    // Confirmar los passwords
    const validPassword = bcrypt.compareSync(contrasenia, usuario.contrasenia);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "Password incorrecto",
      });
    }

    // Generar JWT
    const token = await generarJWT(usuario.id, usuario.correo);

    res.json({
      ok: true,
      uid: usuario.id,
      name: usuario.correo,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

const revalidarToken = async (req, res = response) => {
  const { uid, name } = req;

  // Generar JWT
  const token = await generarJWT(uid, name);

  res.json({
    ok: true,
    uid,
    name,
    token,
  });
};

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

const cargarUsuario = async (req, res = response) => {

    try {
      const userId = req.params.id;
      const user = await Usuario.find({_id: userId});
      
      console.log(user);
      
      res.json({
        ok: true,
        user
      })
    } catch (error) {
      res.json({
        ok: false,
        msg: "Por favor hable con el administrador"
      })
    }
}

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken,
  cargarUsuario,
};
