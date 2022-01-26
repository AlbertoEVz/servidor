const {Schema, model} = require('mongoose');
const  UserSchema = new Schema({
    Id_Empleados:{
        type: String,
        require: true
    },

    Id_Area:{
        type: String,
        require: true
    },
    Puesto: {
        type: String,
        require: true
    },
    Id_Datos_Generales: {
        type: String,
        require: true
    },
    Id_Tipos: {
        type: String,
        require: true
    },
    Estatus: {
        type: String,
        require: true
    }
})
module.exports = model('Empleados', UserSchema);