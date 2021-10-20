//mport logo from './logo.svg';
//import './App.css';
//import React, {fragment} from 'react';
//import Caracteres from '/Caracteres';

import "./Styles/style.scss"
import Banner from './Banner'
import Curso from './Curso'
import Formulario from './Formulario'
import Register from './Register'
import Menu from './Menu'
import NuevoQr from './NuevoQr'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

const App = () => (

      <Router>
        <Menu/>
        <Switch>
          <Route path="/" exact component={Banner} />
          <Route path="/formulario" exact component={Formulario} />
          <Route path="/curso" exact component={Curso} />
          <Route path="/cursos" exact component={Register} />
          <Route path="/nuevoqr" exact component={NuevoQr} />
          <Route component={() => (
            <div className="ed-grid">
              <h1>Error 404</h1>
              <samp>Web Page not found!! </samp>
            </div>
          )} />

        </Switch>
      </Router>

)

export default App;
