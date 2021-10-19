const PruebaCtrl = {}
const Empleado = require('../models/empleado.models');

// Crear controlador
PruebaCtrl.get = (req, res) => {

    Empleado.find(function (err, empleado) {        
        console.log(empleado);
        if(err) return res.status(500).send({
            message: `Error al realiza la consula de los Empleados: ${err}`
        });
        //En caso que no haya productos
        if(!empleado) return res.status(404).send({
            message: `No hay empleado registrados`
        });
        //En caso que todo vaya bien
        res.status(200).send({ empleado });
    });
}
PruebaCtrl.crear = (req, res) => {
    console.log(req.body);
    
    // Primero buscamos el producto en la base de datos
    Empleado.findOne({codigo: req.body.codigo}, (err, empleadoEnBaseDeDatos) => {
        if(!empleadoEnBaseDeDatos){
            //Si no se encuentra el Empleado, se guarda
            let empleadoTemp = {
                codigo : req.body.codigo,
                nombre : req.body.nombre,
                apellido: req.body.apellido,
                salario: req.body.salario                
            }        
            let empleadoARegistrar = new Empleado(empleadoTemp);
       
            empleadoARegistrar.save((err, empleadoRegistrado)=>{
                if(!err){
                    res.status(200).send({
                        message: 'Empleado registrado exitosamente',
                        empleadoRegistrado
                    })
                }else{
                    res.status(500).send({
                        message: `Error al guardar nuevo Empleado en la base de datos: ${err}`
                    });
                }
            })            
        } else {
            //Si se encuenra el Empleado sacamos un error
            res.status(400).send({
                message: `El Empleado con codigo ${req.body.codigo} ya se encuentra registrado`
            })
        }
    });
}
PruebaCtrl.update = (req, res) => {
    res.send("El dato ha sido Actualizado con peticion Put");
}
PruebaCtrl.delete = (req, res) => {
    res.send("El dato ha sido Eliminado con Delete");
}

module.exports = PruebaCtrl;