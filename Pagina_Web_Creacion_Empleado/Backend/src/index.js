// Libreiras para servidor

const express = require('express');
const morgan = require('morgan');
const app = express();
require('./database');

// Configuracion para arranque del servidor
app.set('port', process.env.PORT || 4000);

app.use(morgan('dev')); // Modo desarrollador dev
app.use(express.json()); // Datos en formato json
app.use(express.urlencoded({extended:false}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Rutas
app.use('/api', require('./routes/prueba.route'));

// start server Iniciar servidor
app.listen(app.get('port'), () => {
    console.log("Escuchando por el puerto: ", app.get('port'));
});