const {Schema, model} = require('mongoose');
const  UserSchema = new Schema({
    Id_Direccion:{
        type: String,
        require: true
    },

    Id_Estado:{
        type: String,
        require: true
    },
    Id_Municipio: {
        type: String,
        require: true
    },
    Id_Postal: {
        type: String,
        require: true
    },
    Id_Colonia: {
        type: String,
        require: true
    }
})
module.exports = model('Direcciones', UserSchema);