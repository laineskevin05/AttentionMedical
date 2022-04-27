const { response } = require("express");
const Cita = require("../models/Cita");
const Notificacion = require("../models/Notificaciones");
const Usuario = require("../models/Usuario");
const Hospital = require("../models/Hospital");

const crearCita = async (req, res = response) => {
  const cita = new Cita(req.body);
  try {
    cita.user = req.uid;
    const citaGuardada = await cita.save();

    if (cita.user) {
      let doctor = await Usuario.find({ _id: cita.doctor });
      let usuario = await Usuario.find({ _id: cita.user });
      const mensaje = `El usuario: ${usuario[0].nombre}, ha realizado una cita con el doctor: ${doctor[0].nombre}`;
      const fecha = new Date().toJSON();

      const nuevaNotificacion = {
        usuario: cita.doctor,
        mensaje,
        fecha,
      };

      const guardaNotificacion = new Notificacion(nuevaNotificacion);
      await guardaNotificacion.save();
    }
    res.status(201).json({
      ok: true,
      cita: citaGuardada,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const getCitas = async (req, res = response) => {
  const userId = req.params.id;

  const citasUsuario = await Cita.find({ user: userId }).populate(
    "clinica doctor",
    "_id nombre "
  );

  const citasdoctor = await Cita.find({ doctor: userId }).populate(
    "clinica doctor",
    "_id nombre "
  );

  res.status(201).json({
    ok: true,
    citas: [...citasUsuario, ...citasdoctor],
  });
};

const actualizarCita = async (req, res = response) => {
  const CitaId = req.params.id;

  const uid = req.uid;

  console.log(uid, "uid");

  try {
    const cita = await Cita.findById(CitaId);
    if (!cita) {
      return res.status(404).json({
        ok: false,
        msg: "Lacita no existe por ese id",
      });
    }

    if (cita.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: "No tiene los privilegios de editar esta cita",
      });
    }

    const nuevoCIta = {
      ...req.body,
      user: uid,
    };

    const citaActualizado = await Cita.findByIdAndUpdate(CitaId, nuevoCIta, {
      new: true,
    });

    //poner funciones tanto para usuarios y doctores que pueden modificar una cita

    if (cita.user.toString() === uid) {
      let doctor = await Usuario.find({ _id: cita.doctor });
      let usuario = await Usuario.find({ _id: cita.user });
      const mensaje = `El usuario: ${usuario[0].nombre}, ha realizado una modificacion en la cita, con el doctor: ${doctor[0].nombre}`;
      const fecha = new Date().toJSON();

      const nuevaNotificacion = {
        usuario: cita.doctor,
        mensaje,
        fecha,
      };

      const guardaNotificacion = new Notificacion(nuevaNotificacion);
      await guardaNotificacion.save();
    }

    if (cita.doctor.toString() === uid) {
      let doctor = await Usuario.find({ _id: cita.doctor });
      let hospital = await Hospital.find({ _id: cita.hospital });
      const mensaje = `El doctor: ${doctor[0].nombre}, ha realizado una modificacion en tu cita de Clinica/Hospital ${hospital[0].nombre}`;
      const fecha = new Date().toJSON();

      const nuevaNotificacion = {
        usuario: cita.user,
        mensaje,
        fecha,
      };

      const guardaNotificacion = new Notificacion(nuevaNotificacion);
      await guardaNotificacion.save();
    }

    res.json({
      ok: true,
      cita: citaActualizado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "hable con el administrador",
    });
  }
};

module.exports = {
  crearCita,
  getCitas,
  actualizarCita,
};
