const { response } = require("express");
const bcrypt = require("bcryptjs");
const Usuario = require("../models/Usuario");
const Admin = require('../models/Aministrador');
const centroMedico = require("../models/Hospital");
const { generarJWT } = require("../helpers/jwt");

const crearUsuario = async (req, res = response) => {
  const { correo, contrasenia } = req.body;

  try {
    let usuario = await Usuario.findOne({ correo });
    let centro = await centroMedico.findOne({ correo });
    if (centro || usuario) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario ya existe",
      });
    }

    usuario = new Usuario(req.body);
    
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
      tipo: "usuario",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};
const crearCentroMedico = async (req, res = response) => {
  const { correo, contrasenia } = req.body;

  try {
    let usuario = await Usuario.findOne({ correo });
    let centro = await centroMedico.findOne({ correo });

    if (centro || usuario) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario ya existe",
      });
    }

    centro = new centroMedico(req.body);
    
    // Encriptar contraseña
    const salt = bcrypt.genSaltSync();
    centro.contrasenia = bcrypt.hashSync(contrasenia, salt);

    await centro.save();

    // Generar JWT
    const token = await generarJWT(centro.id, centro.correo);

    res.status(201).json({
      ok: true,
      uid: centro.id,
      name: centro.correo,
      token,
      tipo: "centro",
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
    const centro = await centroMedico.findOne({ correo });
    const admin = await Admin.findOne({ correo });
    
    if (!usuario && !centro && !admin) {
      return res.status(400).json({
        ok: false,
        msg: "No existe el usuario con ese email",
      });
    }

    if (usuario) {
      // Confirmar los passwords
      const validPassword = bcrypt.compareSync(
        contrasenia,
        usuario.contrasenia
      );

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
        nombre: usuario.nombre,
        correo: usuario.correo,
        cuentaActiva: usuario.cuentaActiva,
        token,
        tipo: "usuario",
      });
    }
    if (centro) {
      // Confirmar los passwords
      const validPassword = bcrypt.compareSync(contrasenia, centro.contrasenia);

      if (!validPassword) {
        return res.status(400).json({
          ok: false,
          msg: "Password incorrecto",
        });
      }

      // Generar JWT
      const token = await generarJWT(centro.id, centro.correo);

      res.json({
        ok: true,
        uid: centro.id,
        nombre: centro.nombre,
        correo: centro.correo,
        cuentaActiva: centro.cuentaActiva,
        token,
        tipo: "centro",
      });
    }
    if (admin) {
      // Confirmar los passwords
      let validPassword = null;
      if( contrasenia == admin.contrasenia){
        validPassword = true;
      }
      // const validPassword = bcrypt.compareSync(
      //   contrasenia,
      //   admin.contrasenia
      //   );
        console.log(contrasenia);
        console.log(admin.contrasenia);
        console.log(validPassword);
      if (!validPassword) {
        return res.status(400).json({
          ok: false,
          msg: "Password incorrecto",
        });
      }

      // Generar JWT
      const token = await generarJWT(admin.id, admin.correo);

      res.json({
        ok: true,
        uid: admin.id,
        nombre: admin.nombre,
        correo: admin.correo,
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

const revalidarToken = async (req, res = response) => {
  const { uid, name } = req;
  
  let usuario = await Usuario.findOne({ _id: uid });
  let centro = await centroMedico.findOne({ _id: uid });
  let admin = await Admin.findOne({ _id: uid });
  // console.log(centro);
  // Generar JWT
  const token = await generarJWT(uid, name);
  try {
    if (usuario) {
      res.json({
        ok: true,
        uid,
        name,
        email: usuario.nombre,
        token,
        tipo: "usuario",
      });
    }
    if (centro) {
      res.json({
        ok: true,
        uid,
        name,
        email: centro.nombre,
        token,
        tipo: "centro",
      });
    }
    if (admin) {
      res.json({
        ok: true,
        uid,
        name,
        email: admin.nombre,
        token,
        tipo: "admin",
      });
  }
  } catch {
    res.json({
      ok: false,
      uid,
      name,
      token,
      msg: "Error, usuario no encontrado",
    });
  }
};

const cargarUsuario = async (req, res = response) => {
  const userId = req.params.id;
  console.log(userId);
  try {
    let user = await Usuario.find({ _id: userId });

    if (user) {
      res.json({
        ok: true,
        user
      });
    }
  
  } catch (error) {
    res.json({
      ok: false,
      msg: "Por favor hable con el administrador, no se pudo cargar el usuario",
    });
  }
};

module.exports = {
  crearUsuario,
  crearCentroMedico,
  loginUsuario,
  revalidarToken,
  cargarUsuario
};
