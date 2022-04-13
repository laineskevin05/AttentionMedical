const { Schema, model } = require("mongoose");

const NotificacionSchema = Schema({
  usuario: {
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

NotificacionSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model("Notificacion", NotificacionSchema);