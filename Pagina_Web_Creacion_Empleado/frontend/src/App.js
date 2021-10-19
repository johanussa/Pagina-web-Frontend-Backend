import React from "react";
import Formulario from "./components/Formulario";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <h1>Aqui va el Inicio que es el login</h1>
        </Route>
        <Route path="/registrar">
          <Formulario/>
        </Route>
      </Switch>      
    </Router>    
  );
}

export default App;
