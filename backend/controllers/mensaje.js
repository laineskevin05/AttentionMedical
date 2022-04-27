const { response } = require("express");
const Mensajeria = require("../models/Mensajes");
const Chats = require("../models/ListaMensajes");

const enviarMensaje = async (req, res = response) => {
  const usuarioId = req.params.id;
  const mensaje = new Mensajeria(req.body);
  try {
    mensaje.fecha = new Date().toJSON();
    await mensaje.save();
    const mensajesActualizados = await Mensajeria.find({
      $or: [{ emisor: usuarioId }, { receptor: usuarioId }],
    }).populate("receptor emisor", "_id nombre");

    res.status(201).json({
      ok: true,
      mensajes: mensajesActualizados,
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

  const mensaje = await Mensajeria.find({
    $or: [{ emisor: usuarioId }, { receptor: usuarioId }],
  }).populate("receptor emisor", "_id nombre");
  res.status(201).json({
    ok: true,
    mensajes: mensaje,
  });
};

const crearListaMensaje = async (req, res = response) => {
  const usuarioId = req.params.id;

  try {
    const buscarChat1 = await Chats.find({
      $and: [{ user1: usuarioId }, { user2: req.body.user2 }],
    });
    const buscarChat2 = await Chats.find({
      $and: [{ user1: req.body.user2 }, { user2: usuarioId }],
    });

    if (buscarChat1.length > 0 || buscarChat2.length > 0) {
      res.status(201).json({
        ok: true,
        msg: "Ya existe un chat entre estos usuarios",
      });
    } else {
      const chat = new Chats({
        user1: usuarioId,
        user2: req.body.user2,
        fecha: new Date().toJSON(),
      });
      await chat.save();

      const listaMensajes = await Chats.find({
        $or: [{ user1: usuarioId }, { user2: usuarioId }],
      }).populate("user1 user2", "_id nombre");

      res.status(201).json({
        ok: true,
        chats: listaMensajes,
        msg: "Chat creado correctamente",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const getListaMensajes = async (req, res = response) => {
  const usuarioId = req.params.id;

  const listaMensajes = await Chats.find({
    $or: [{ user1: usuarioId }, { user2: usuarioId }],
  }).populate("user1 user2", "_id nombre");

  res.status(201).json({
    ok: true,
    chats: listaMensajes,
  });
};
module.exports = {
  enviarMensaje,
  getMensaje,
  crearListaMensaje,
  getListaMensajes,
};
