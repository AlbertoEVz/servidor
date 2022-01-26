const Router = require('express');
const  router = Router();
const modeloUser = require('../models/Datos generales');


router.get('/', async (req,res)=>{
    const consultardatos = await modeloUser.find();
    res.json(consultardatos);
    //res.send('consulta realizada');
})
router.post('/', async (req,res)=>{
    const {Id_Datos_Generales, Nombre, Apellido_Paterno, Apellido_Materno, Numero_Telefonico, Sexo, Dia, Mes, Año, Email, Contraseña, Id_Direccion} = req.body;
    const inserccion = new modeloUser({Id_Datos_Generales, Nombre, Apellido_Paterno, Apellido_Materno, Numero_Telefonico, Sexo, Dia, Mes, Año, Email, Contraseña, Id_Direccion});
    console.log(inserccion);
    await  inserccion.save();
    //console.log(req.body); //verifica que llegue al servidor
    res.json(inserccion); //mandarlo al cliente frontend
    //res.send('Datos agregados');
})

module.exports = router;