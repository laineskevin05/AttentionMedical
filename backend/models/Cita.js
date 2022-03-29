const { Schema, model } = require("mongoose");

const CitaSchema = Schema({
  clinica: {
    type: Schema.Types.ObjectId,
    ref: "Hospital",
    required: true,
  },
  doctor: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
  },
  fecha: {
    type: String,
    required: true,
  },
  hora: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
  },
  estado: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
});

CitaSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model("Cita", CitaSchema);
