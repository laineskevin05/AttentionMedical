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

const getMensaje = async (req, res = response) => {
    const receptorId = req.params.id;
  
    const mensajeReceptor = await Mensajeria.find({ receptor: receptorId })
    res.status(201).json({
        ok: true,
        mensaje: mensajeReceptor
      });
};

module.exports = {enviarMensaje, getMensaje}