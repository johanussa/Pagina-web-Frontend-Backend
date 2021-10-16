// Conexion con la base de datos MongoDB
const mongoose = require('mongoose');

// Direccion de DataBase, ensayo es el nombre de la DB
// Sino existe este la crea autom.

const URI = 'mongodb://localhost:27017/Prueba1'; 

// Este contenido me evita que se generen errores y salidas de advertencia
mongoose.connect(URI, {     
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
})  
    // Si todo esta correcto
    .then(db => console.log("Base de datos conectada correctamente"))
    // Si sale mal la conexion
    .catch(error => console.log("Error de conexion ", error));

// Exportar para poderlo utilizaren el servidor
module.exports = mongoose;