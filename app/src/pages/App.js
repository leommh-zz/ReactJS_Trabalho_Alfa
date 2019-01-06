import React, { Component } from 'react';
import { Container } from 'reactstrap';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';

import HomePage from './HomePage';
import LoginPage from './LoginPage';

import Menu from "../components/Menu";
import PrivateRoute from '../components/PrivateRoute';
import TarefasPage from '../components/listaView';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Container>
          <header>
            <h1>Controle de Tarefas </h1>
          </header>
          
          <Menu />

          <Switch>
        
  
          <Route path="/" exact component={HomePage} />
            <PrivateRoute path="/tarefas" component={TarefasPage} />
          <Route path="/login" component={LoginPage} />

          <Route render={
            ()=>{
              return (
                <div>Página não encontrada</div>
              );
            }} 
          />
        
          </Switch>

        </Container>
      </BrowserRouter>
    );
  }
}
export default App;
