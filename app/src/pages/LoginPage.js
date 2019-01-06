import React, { Component } from 'react';
import CadastroPage from '../components/FormCadastro';
import FormLogin from '../components/FormLogin';

class LoginPage extends Component {

  state = {
    cadastro: false
  }

  cadastro = () => {
    this.setState({cadastro: true});
  }

  cancela = () => {
    this.setState({cadastro: false});
  }

  render() {
    const {cadastro} = this.state;

    if (cadastro) {
      return (<CadastroPage onLogin={this.props.onLogin} cancela={this.cancela} />)
    } else {
      return (<FormLogin cadastro={this.cadastro} onLogin={this.props.onLogin} erros={this.props.erros} />)
    }

  }
}

export default LoginPage;