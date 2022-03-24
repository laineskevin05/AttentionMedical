const { Schema, model } = require("mongoose");

const DoctorSchema = Schema({
    hospital: {
        type: Schema.Types.ObjectId,
        ref: 'Hospital',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    horaEntrada: {
        type: String,
        required: true,
    },
    horaSalida: {
        type: String,
        required: true,
    },
    dias: {
        type: String,
        required: true,
    },
    especialidad: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required:true
    }
});

DoctorSchema.method('toJSON', function(){
    const {__v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;
})

module.exports = model("Doctor", DoctorSchema);
