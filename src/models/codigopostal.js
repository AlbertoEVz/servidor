const {Schema, model} = require('mongoose');
const  UserSchema = new Schema({
    id_Postal:{
        type: String,
        require: true
    },

    Nombre_Postal:{
        type: String,
        require: true
    },
    Id_Municipio: {
        type: String,
        require: true
    }
})
module.exports = model('codigopostal', UserSchema);