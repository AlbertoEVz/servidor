const {Router} = require('express');
const router = Router();
router.get('/',(req,res)=>{
    const datos = {
        "id" : "1",
        "nombre" : "luis angel",
        "telefono" : "25852251"
    }
    res.json(datos);
});
module.exports=router;