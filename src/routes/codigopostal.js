const Router = require('express');
const  router = Router();
const modeloUser = require('../models/codigopostal');


router.get('/', async (req,res)=>{
    const consultardatos = await modeloUser.find();
    res.json(consultardatos);
    //res.send('consulta realizada');
})
router.post('/', async (req,res)=>{
    const {id_Postal, Nombre_Postal, Id_Municipio} = req.body;
    const inserccion = new modeloUser({id_Postal, Nombre_Postal, Id_Municipio});
    console.log(inserccion);
    await  inserccion.save();
    //console.log(req.body); //verifica que llegue al servidor
    res.json(inserccion); //mandarlo al cliente frontend
    //res.send('Datos agregados');
})

module.exports = router;