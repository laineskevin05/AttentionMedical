const { response } = require("express");
const Mensajeria = require("../models/Mensajes"); 

const enviarMensaje = async (req, res = response) => {
  const mensaje = new Mensajeria(req.body);
  try {
    mensaje.fecha = new Date().toJSON();
    const mensajeGuardada = await mensaje.save();

    res.status(201).json({
      ok: true,
      mensaje: mensajeGuardada
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const getMensaje = async (req, res = response) => {
    const usuarioId = req.params.id;
  
    const mensaje = await Mensajeria.find({$or: [{ "emisor": usuarioId}, {"receptor": usuarioId}]}).populate("receptor emisor", "_id nombre");
    res.status(201).json({
        ok: true,
        Enviarmensaje: mensaje
      });
};

module.exports = {enviarMensaje, getMensaje}