const { response } = require("express");
const Notificaciones = require("../models/Notificaciones");

const getNotificaciones = async (req, res = response) => {
  const userId = req.params.id;
  const notificacion = await Notificaciones.find({
    usuario: userId,
  });
  try {
    console.log(notificacion, "notificaciones");
    res.status(201).json({
      ok: true,
      notificacion: notificacion,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error en las notificaciones",
    });
  }
};

module.exports = { getNotificaciones };
