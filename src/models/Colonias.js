const {Schema, model} = require('mongoose');
const  UserSchema = new Schema({
    id_Colonia:{
        type: String,
        require: true
    },

    Nombre_Colonia:{
        type: String,
        require: true
    },
    Id_Postal: {
        type: String,
        require: true
    }
})
module.exports = model('colonias', UserSchema);