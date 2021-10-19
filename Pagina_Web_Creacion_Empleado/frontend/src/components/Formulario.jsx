import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
// import apiBrowser from '../utils/api';

export default function Formulario() {

    const [state, setState] = useState([]);  
    const mostrarEmpleados = async() => {    
        axios.get('http://localhost:4000/api')
        .then(res => {
            const empleados = res.data.empleado;
            setState( empleados );
        });      
    }  

    // Estados que almacenan los valores 
    const [codigo, setCodigo] = useState(0);
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [salario, setSalario] = useState(0);

    // Conexion con el backend
    // await = peticion al servidor
    const registrar = async(e) => {               
        e.preventDefault();                                             
        const NuevoEmpleado = { codigo, nombre, apellido, salario }
        // const respuesta = await axios.post({ apiBrowser } + "/prueba", NuevoEmpleado);
        const respuesta = await axios.post('http://localhost:4000/api', NuevoEmpleado);
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
                    <label className="form-label">Codigo de la persona</label>
                    <input type="text" className="form-control" required placeholder="Codigo" 
                        onChange={e => setCodigo(e.target.value)} />                    
                </div>
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
                </div> <br />
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button type="submit" className="btn btn-dark">Guardar</button>
                </div>                
            </form> <br />  
            <div className="d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-dark" type="button" onClick={ mostrarEmpleados }>Listar</button>
            </div> <br />
            <table className="table">
                <thead>
                    <tr className="table-dark">
                        <th scope="col">Codigo</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Salario</th>
                    </tr> 
                </thead>
                { state.map( empleado => 
                    <tbody>
                        <tr className="table-secondary">
                        <th scope="row">{ empleado.codigo }</th>
                            <td>{ empleado.nombre }</td>
                            <td>{ empleado.apellido }</td>
                            <td>{ empleado.salario }</td>
                        </tr>                                       
                    </tbody>
                )}                
            </table>
        </div>
    )
}
