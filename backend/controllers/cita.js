const {response} = require('express');
const Cita = require('../models/Cita');

const crearCita = async(req, res=response)=>{
    const cita = new Cita(req.body);
    

    try {
        cita.user = req.uid
        const citaGuardada = await cita.save();
        res.json({
            ok:true,
            cita: citaGuardada
      })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg: 'Hable con el administrador'
        });
    }

}

const getCitas = async(req, res=response)=>{
    const userId = req.params.id;
    const citas = await Cita.find({user: userId});
                                    
    res.json({
        ok:true,
        citas
    })

}

module.exports = {
    crearCita,
    getCitas
}