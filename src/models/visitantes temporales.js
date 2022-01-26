const {Schema, model} = require('mongoose');
const  UserSchema = new Schema({
    Id_Visitantes:{
        type: String,
        require: true
    },
    Id_Tipos:{
        type: String,
        require: true
    },
    Id_Datos_Personales:{
        type: String,
        require: true
    },
    Empresa:{
        type: String,
        require: true
    },
    Estatus:{
        type: String,
        require: true
    }
})
module.exports = model('visitantes temporales', UserSchema);