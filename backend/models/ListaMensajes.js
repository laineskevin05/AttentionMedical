const { Schema, model } = require("mongoose");

const ListaMensajeSchema = Schema({
  user1: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
  user2: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },

  fecha: {
    type: String,
    required: true,
  },
});

ListaMensajeSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model("ListaMensajes", ListaMensajeSchema);
