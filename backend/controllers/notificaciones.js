const { response } = require("express");
const Notificaciones = require("../models/Notificaciones");

const getNotificaciones = async (req, res = response) => {
    const userId = req.params.id;
    const notifi = await Notificaciones.find({ usuario: userId })
  
    res.status(201).json({
      ok: true,
      notificacion: notifi
    });
  };

  module.exports = {getNotificaciones}