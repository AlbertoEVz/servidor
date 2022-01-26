const {Schema, model} = require('mongoose');
const  UserSchema = new Schema({
    Id_Estados:{
        type: String,
        require: true
    },
    Nombre_Estado:{
        type: String,
        require: true

    }
})
module.exports = model('Estados', UserSchema);