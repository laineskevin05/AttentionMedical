const { Schema, model } = require("mongoose");

const CitaSchema = Schema({
  clinica: {
    type: String,
    required: true,
  },
  doctor: {
    type: String,
    required: true,
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
  user:{
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
}
});

CitaSchema.method('toJSON', function(){
    const {__v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;
})

module.exports = model("Cita", CitaSchema);