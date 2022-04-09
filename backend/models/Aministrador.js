const { Schema, model } = require("mongoose");

const AdministradorSchema = Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
    unique: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  contrasenia: {
    type: String,
    required: true,
  }
});

AdministradorSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

module.exports = model("Aministrador", AdministradorSchema);