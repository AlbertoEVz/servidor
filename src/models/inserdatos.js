const {Schema, model} = require('mongoose');
const  UserSchema = new Schema({
    idArea:{
        type: String,
        require: true
    },

    Area:{
        type: String,
        require: true
    }
})
module.exports = model('Area', UserSchema);