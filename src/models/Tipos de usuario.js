const {Schema, model} = require('mongoose');
const  UserSchema = new Schema({
    Id_Tipos:{
        type: String,
        require: true
    },
    Nombre_Tipos:{
        type: String,
        require: true
    }
})
module.exports = model('Tipos de usuario', UserSchema);