const {Schema, model} = require('mongoose');
const  UserSchema = new Schema({
    Id_Datos_Generales:{
        type: String,
        require: true
    },

    Nombre:{
        type: String,
        require: true
    },
    Apellido_Paterno: {
        type: String,
        require: true
    },
    Apellido_Materno: {
        type: String,
        require: true
    },
    Numero_Telefonico: {
        type: String,
        require: true
    },
    Sexo: {
        type: String,
        require: true
    },
    Dia: {
        type: String,
        require: true
    },
    Mes: {
        type: String,
        require: true
    },
    Año: {
        type: String,
        require: true
    },
    Email: {
        type: String,
        require: true
    },
    Contraseña: {
        type: String,
        require: true
    },
    Id_Direccion: {
        type: String,
        require: true
    }
})
module.exports = model('Datos generales', UserSchema);