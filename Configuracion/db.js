const mongoose = require('mongoose');
const cadena = 'mongodb+srv://luistese:luis022198@clusterteseej.vb43d.mongodb.net/BasedeDatosTESE';

mongoose.connect(cadena, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(dato =>{
        console.log('base de datos conectada');
    })
     .catch(error =>{
         console.log('No esta conectado', error);
     })