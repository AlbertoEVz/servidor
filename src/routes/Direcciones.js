const Router = require('express');
const  router = Router();
const modeloUser = require('../models/Direcciones');


router.get('/', async (req,res)=>{
    const consultardatos = await modeloUser.find();
    res.json(consultardatos);
    //res.send('consulta realizada');
})
router.post('/', async (req,res)=>{
    const {Id_Direccion, Id_Estado, Id_Municipio, Id_Postal, Id_Colonia} = req.body;
    const inserccion = new modeloUser({Id_Direccion, Id_Estado, Id_Municipio, Id_Postal, Id_Colonia});
    console.log(inserccion);
    await  inserccion.save();
    //console.log(req.body); //verifica que llegue al servidor
    res.json(inserccion); //mandarlo al cliente frontend
    //res.send('Datos agregados');
})

module.exports = router;