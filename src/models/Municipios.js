const {Schema, model} = require('mongoose');
const  UserSchema = new Schema({
    Id_Municipio:{
        type: String,
        require: true
    },

    Nombre_Municipio:{
        type: String,
        require: true
    },
    Id_Estado:{
        type: String,
        require: true
    }
})
module.exports = model('Municipio', UserSchema);