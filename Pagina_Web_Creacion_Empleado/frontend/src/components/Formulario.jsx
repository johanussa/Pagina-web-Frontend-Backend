import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Formulario() {

    // Estados que almacenan los valores 
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [salario, setSalario] = useState(0);

    // Conexion con el backend
    // await = peticion al servidor
    const registrar = async(e) => {               
        e.preventDefault();                                             
        const NuevoEmpleado = { nombre, apellido, salario }
        const respuesta = await axios.post('http://localhost:4000/api', NuevoEmpleado);
        //const mensaje = respuesta.data.message;
        Swal.fire({
            icon: 'success',
            title: respuesta.data.message,
            showConfirmButton: false,
            timer: 2000
          })
    }

    return (
        <div className="container col-md-3 mt-5"> {/* Propiedades */}
            <form onSubmit={ registrar }>
                <div className="mb-3">
                    <label className="form-label">Nombre de la persona</label>
                    <input type="text" className="form-control" required placeholder="Nombre" 
                        onChange={e => setNombre(e.target.value)} />                    
                </div>
                <div className="mb-3">
                    <label className="form-label">Apellido de la persona</label>
                    <input type="text" className="form-control" required placeholder="Apellido" 
                        onChange={e => setApellido(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Salario de la persona</label>
                    <input type="text" className="form-control" required placeholder="Salario" 
                        onChange={e => setSalario(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-dark">Guardar</button>
            </form>
        </div>
    )
}
