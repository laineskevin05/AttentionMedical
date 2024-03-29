const { response } = require("express");

const bcrypt = require("bcryptjs");
const centroMedico = require("../models/Hospital");
const Doctor = require("../models/Doctor");
const Usuario = require("../models/Usuario");


const buscarHospital = async (req, res = response)=>{
   
    
  try {
    const hospital = await centroMedico.find();
  
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

const getHospitalAct = async (req, res = response) => {
  const id = req.params.id
  console.log(id);
  try{
    const hospital = await centroMedico.find({_id: id});

    console.log(hospital[0]);

    res.json({
      ok: true,
      hospital: hospital[0]
    })


  }catch(error){
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
}


    

const registrarDoctor = async (req, res = response) => {
  const hospitalId = req.params.id;
  const {correo} = req.body;
  console.log(correo);
    
  try {
    const doctor = await Usuario.find({correo: correo});
    const userId = doctor[0]._id;
    console.log(userId);
    if (doctor.length == 0) {
      return res.status(404).json({
        ok: false,
        msg: "El usuario no existe por ese correo",
      }); 
    }
    
    const doctor2 = await Doctor.find({user: userId});
    
    if(doctor2.length===1) {
      return res.json({
        ok: false,
        msg: "Ya esta validado como doctor"
      })
    }
        
    const doctorNuevo = new Doctor(req.body)
        
    doctorNuevo.hospital = hospitalId;
    doctorNuevo.user = userId
    
    console.log(doctorNuevo);
        
    const nuevoUsuario = {
      ...doctor,
      validarDr: true
    };
    
    const usuarioActualizado = await Usuario.findByIdAndUpdate(userId, nuevoUsuario, {new: true})
        
    const doctorGuardado = await doctorNuevo.save();
    //avisa al doctor de que el hospital lo contrato   
    res.json({
      ok: true,
      doctorGuardado
    });
    
    } catch (error) {
      res.status(500).json({
        ok: false,
        msg: "hable con el administrador",
      });
    }
  }  
  
const getDoctor = async(req, res = response)=>{
  const hospitalId = req.params.idHospital
    
    try {
      const hospital = await Doctor.find({ hospital: hospitalId }).populate("user hospital", "nombre apellido");
    
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
  buscarHospital,
  registrarDoctor,
  getDoctor,
  getHospitalAct
}