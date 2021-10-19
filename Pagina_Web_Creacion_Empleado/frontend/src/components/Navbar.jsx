import React from 'react';
import logo192 from './logo192.png';
import { Link } from 'react-router-dom';
import './estiloNavbar.css';

function Navbar() {
    return (
        <nav class="navbar navbar-dark bg-dark">
            <div class="container">
                <Link to="/" class="navbar-brand">
                <img id="img" src={ logo192 } alt="jsx" width="40" class="d-inline-block align-text-top" />Administracion Empleados  
                </Link>                
                <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
                    <li class="nav-item">
                        <Link to="/registrar" class="nav-link" href="#">Registrar Empleado</Link>
                    </li>
                </ul>    
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>                    
            </div>            
        </nav>
    )
}

export default Navbar
