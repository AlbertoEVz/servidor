const {Router }= require('express');
const router = Router();
const movies = require('../routes/peliculas.json');
const recorre = require('underscore');
router.get('/', (req,res)=>{
    res.json(movies);
});
router.post ('/',(req,res)=>{
    const {id,nombre,año}=req.body;
    if(id && nombre && año ){
        const nuevoregistro = {...req.body,}
        movies.push(nuevoregistro);
        res.json(movies);
    }else {
        res.send(`error al enviar datos`);
    }
});
router.delete('/:id', (req, res)=>{
    const {id} = req.params;
    console.log(id);
   recorre.each(movies,(registro,i)=>{
       if(registro.id==id){
           res.splice(i,1);
           res.json(movies);
           console.log("se borro el dato")
       }else{
           res.send()
       }
   });
});
module.exports = router;