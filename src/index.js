const express = require('express');
const app = express();
const morgan = require('morgan');
require('../Configuracion/db');

//configuraciones
app.set('port', process.env.PORT || 4500);
app.set('json spaces', 2);
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//configurar ruta
app.use(require('./routes/principal'));
app.use('/api/peliculas', require('./routes/peliculas'));

// Area
app.use('/api/consulta', require('./routes/inserdatos'));
app.use('/api/guardar', require('./routes/inserdatos'));

//codigo postal
app.use('/api/guardarcodigo', require('./routes/codigopostal'));
app.use('/api/consultarcodigo', require('./routes/codigopostal'));

// colonia
app.use('/api/guardarcolonia', require('./routes/Colonias'));
app.use('/api/consultarcolonia', require('./routes/Colonias'));

//datos generales
app.use('/api/guardardatosgenerales', require('./routes/Datos generales'));
app.use('/api/consultardatosgenerales', require('./routes/Datos generales'));

//Direcciones
app.use('/api/guardardirecciones', require('./routes/Direcciones'));
app.use('/api/consultardirecciones', require('./routes/Direcciones'));

//Empleados
app.use('/api/guardarEmpleados', require('./routes/Empleados'));
app.use('/api/consultarEmpleados', require('./routes/Empleados'));

//Estados
app.use('/api/guardarestado', require('./routes/Estados'));
app.use('/api/consultarestado', require('./routes/Estados'));

//municipios
app.use('/api/guardarmunicipio', require('./routes/Municipios'));
app.use('/api/consultarmunicipio', require('./routes/Municipios'));

//registro
app.use('/api/guardaregistro', require('./routes/Registro'));
app.use('/api/consultarregistro', require('./routes/Registro'));

//tipos de usuario
app.use('/api/guardarTiposdeusuario', require('./routes/Tipos de usuario'));
app.use('/api/consultarTiposdeusuario', require('./routes/Tipos de usuario'));

//visitantes temporales
app.use('/api/guardarvisitantestemporales', require('./routes/visitantes temporales'));
app.use('/api/consultarvisitantestemporales', require('./routes/Visitantes temporales'));

app.listen(app.get('port'), ()=>{
    //codigo ASCCI de backstick es alt+96
    console.log(`servidor en puerto ${app.get('port')}`); //utilizar un puerto
});