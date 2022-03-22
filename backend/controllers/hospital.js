const { response } = require("express");
const bcrypt = require("bcryptjs");
const centroMedico = require("../models/Hospital");
//const { generarJWT } = require("../helpers/jwt");

const buscarHospital = async (req, res = response)=>{
    const userNombre = req.params.nombre;
    const centroMedico = await centroMedico.find({ nombre: userNombre });
  
    res.json({
      ok: true,
      citas,
    });
}
module.exports = {
  buscarHospital
}

 /* //Creacion del Mentro Médico
  const crearCentroMedico = async (req, res = response) => {
    const { correo, contrasenia } = req.body;

    try {
      let centro = await centroMedico.findOne({ correo });
  
      if (centro) {
        return res.status(400).json({
          ok: false,
          msg: "El usuario ya existe",
        });
      }
  
      centro = new centroMedico(req.body);
      console.log(centro);
      // Encriptar contraseña
      const salt = bcrypt.genSaltSync();
      centro.contrasenia = bcrypt.hashSync(contrasenia, salt);
  
      await centro.save();
  
      // Generar JWT
      const token = await generarJWT(centro.id, centro.correo);
  
      res.status(201).json({
        ok: true,
        uid: centro.id,
        name: centro.correo,
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        ok: false,
        msg: "Por favor hable con el administrador",
      });
    }
  };




  // Login del Centro Médico



  const loginCentroMedico = async (req, res = response) => {
    const { correo, contrasenia } = req.body;
  
    try {
      const centro = await centroMedico.findOne({ correo });
  
      if (!centro) {
        return res.status(400).json({
          ok: false,
          msg: "El Centro Médico no existe con ese email",
        });
      }
  
      // Confirmar los passwords
      const validPassword = bcrypt.compareSync(contrasenia, centro.contrasenia);
  
      if (!validPassword) {
        return res.status(400).json({
          ok: false,
          msg: "Password incorrecto",
        });
      }
  
      // Generar JWT
      const token = await generarJWT(centro.id, centro.correo);
  
      res.json({
        ok: true,
        uid: centro.id,
        name: centro.correo,
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        ok: false,
        msg: "Por favor hable con el administrador",
      });
    }
  };
  







  //Revalidar Token



  const revalidarToken = async (req, res = response) => {
    const { uid, name } = req;
  
    // Generar JWT
    const token = await generarJWT(uid, name);
  
    res.json({
      ok: true,
      uid,
      name,
      token,
    });
  };



  //Cargar Centro Médico 


  const cargarCentroMedico = async (req, res = response) => {

    try {
      const centroId = req.params.id;
      const centro = await centroMedico.find({_id: centroId});
      
      console.log(centro);
      
      res.json({
        ok: true,
        user: centro
      })
    } catch (error) {
      res.json({
        ok: false,
        msg: "Por favor hable con el administrador"
      })
    }
  }
  



  module.exports = {
    crearCentroMedico,
    loginCentroMedico,
    revalidarToken,
    cargarCentroMedico,
  };*/