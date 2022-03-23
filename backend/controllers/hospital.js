const { response } = require("express");
const bcrypt = require("bcryptjs");
const centroMedico = require("../models/Hospital");


const buscarHospital = async (req, res = response)=>{
    const userNombre = req.params.nombreH;
    console.log(req.body. nombre)
    
    try {
      const hospital = await centroMedico.find({ nombre: userNombre });
    
      res.status(201).json({
        ok: true,
        hospital
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
    }
    
}
module.exports = {
  buscarHospital
}
