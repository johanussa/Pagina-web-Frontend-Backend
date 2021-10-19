// Ruta para que el cliente acceda al controlador
// Se requiere un router de express

const {Router} = require('express');
const route = Router();  // Utiliza todo lo que tenga Router
// Traer el archivo controlador y le indicamos su ubicacion
const PruebaCtrl = require('../controllers/empleado.controllers');

// Le enviamos una direccion y luego a donde va a ir cuando este en esa ubicacion
route.get('/', PruebaCtrl.get);
route.post('/', PruebaCtrl.crear);
route.put('/', PruebaCtrl.update);
route.delete('/', PruebaCtrl.delete);

// Esporto la variable route que tiene todas las rutas, peticiones HTTP
module.exports = route;