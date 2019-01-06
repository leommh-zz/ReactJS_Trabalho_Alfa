import React, { Component } from 'react';
import CadastroPage from '../components/FormCadastro';
import FormLogin from '../components/FormLogin';

class LoginPage extends Component {

  constructor(props) {
    super(props)
    this.state = {cadastro:false};

    this.cadastro = () => {
      this.setState({cadastro:true});
    }

    this.cancela = () => {
      this.setState({cadastro:false});
    }


  } //constructor

  render() {
    const {cadastro} = this.state;
    // const BloquearNavegacao = Boolean(email||senha);

    if (cadastro) {
      return (<CadastroPage onLogin={this.props.onLogin} cancela={this.cancela} />)
    } else {
      return (<FormLogin cadastro={this.cadastro} onLogin={this.props.onLogin} erros={this.props.erros} />)
    }

  }
}

export default LoginPage;