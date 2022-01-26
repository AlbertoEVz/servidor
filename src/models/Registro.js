const {Schema, model} = require('mongoose');
const  UserSchema = new Schema({
    Id_Registro:{
        type: String,
        require: true
    },
    Id_Tipos_Personales:{
        type: String,
        require: true
    },
    Id_Tipos:{
        type: String,
        require: true
    },
    Usuario:{
        type: String,
        require: true
    },
    Contraseña:{
        type: String,
        require: true
    }
})
module.exports = model('Registro', UserSchema);