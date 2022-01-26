const Router = require('express');
const  router = Router();
const modeloUser = require('../models/Municipios');


router.get('/', async (req,res)=>{
    const consultardatos = await modeloUser.find();
    res.json(consultardatos);
    //res.send('consulta realizada');
})
router.post('/', async (req,res)=>{
    const {Id_Municipios, Nombre_Municipio, Id_Estados} = req.body;
    const inserccion = new modeloUser({Id_Municipios, Nombre_Municipio, Id_Estados});
    console.log(inserccion);
    await  inserccion.save();
    //console.log(req.body); //verifica que llegue al servidor
    res.json(inserccion); //mandarlo al cliente frontend
    //res.send('Datos agregados');
})

module.exports = router;