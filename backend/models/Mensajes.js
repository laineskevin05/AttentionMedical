const { Schema, model } = require("mongoose");

const MensajeSchema = Schema({
  receptor: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
  emisor: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
  mensaje: {
      type: String,
      required: true
  },
  fecha: {
    type: String,
    required: true,
  },

});

MensajeSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model("Mensajes", MensajeSchema);