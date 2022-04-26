const { response } = require("express");
const Mensajeria = require("../models/Mensajes"); 

const enviarMensaje = async (req, res = response) => {
  const mensaje = new Mensajeria(req.body);
  try {
    mensaje.fecha = new Date().toString();
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

const getEnviarMensaje = async (req, res = response) => {
    const emisorId = req.params.id;
  
    const mensajeEmisor = await Mensajeria.find({$or: [{ emisor: emisorId}, {receptor: emisorId}]}).populate("receptor emisor", "_id nombre");
    res.status(201).json({
        ok: true,
        Enviarmensaje: mensajeEmisor
      });
};

const getRecibirMensaje = async (req, res = response) => {
  const receptorId = req.params.id;

  const mensajeReceptor = await Mensajeria.find({ receptor: receptorId }).populate("receptor emisor", "_id nombre");
  res.status(201).json({
      ok: true,
      Recibirmensaje: mensajeReceptor
    });
};

module.exports = {enviarMensaje, getEnviarMensaje, getRecibirMensaje}