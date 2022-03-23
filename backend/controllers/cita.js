const { response } = require("express");
const Cita = require("../models/Cita");

const crearCita = async (req, res = response) => {
  const cita = new Cita(req.body);

  try {
    cita.user = req.uid;
    const citaGuardada = await cita.save();
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
  const citas = await Cita.find({ user: userId });

  res.status(201).json({
    ok: true,
    citas,
  });
};

const actualizarCita = async (req, res = response) => {
  const CitaId = req.params.id;
  console.log(CitaId);
  const uid = req.uid;

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
