import React, { Component } from 'react';
import {login} from '../components/Api';
// pages
import UsuarioPage from './UsuarioPage';
import LoginPage from './LoginPage';
import { isAutenticado, setAutenticado } from '../utils/LoginManager';

class HomePage extends Component {

  constructor(props){
    super(props);
    this.state = {aut:isAutenticado(), erros:null};

    this.onLogin = (dados) => {
      login(dados)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('id',res.data.usuario.id);
        setAutenticado(true);
        this.setState({aut:true});
        this.setState({erros:null})
        this.props.history.push('/');
      })
      .catch(err => {
        this.setState({erros:err.response.data});
          // if (err.response.data.length>0){
          // }
      });
    }
  }

  render() {
    return (
      <div>
      {this.state.aut ? <UsuarioPage />: <LoginPage onLogin={this.onLogin} erros={this.state.erros} />}
      
      </div>
    );
  }
}

export default HomePage;


