const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema({
  nombre: {
    type: String,
    require: true,
  },
  apellido: {
    type: String,
    require: true,
  },
  correo: {
    type: String,
    require: true,
    unique: true,
  },
  telefono: {
    type: String,
    require: true,
  },
  contrasenia: {
    type: String,
    require: true,
  },
});

module.exports = model("Usuario", UsuarioSchema);
