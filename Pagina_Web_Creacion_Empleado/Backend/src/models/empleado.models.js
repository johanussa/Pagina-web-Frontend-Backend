const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmpleadoSchema = new Schema( {
    codigo: { type: Number, required: true },
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    salario: { type: Number, required: true }
});

module.exports = mongoose.model('Empleado', EmpleadoSchema);