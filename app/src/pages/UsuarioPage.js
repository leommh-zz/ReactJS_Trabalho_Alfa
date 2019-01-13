import React, { Component } from 'react'
import {Input, Button, InputGroup} from 'reactstrap'
import {getUsuario,  editarUsuario} from '../components/Api'
import { FaUserAlt,FaAt,FaMoneyCheck,FaKey,FaCalendarAlt  } from "react-icons/fa";


class UsuarioPage extends Component {

    state = {
      usuario:[],
      id: localStorage.getItem('id'),
      edit: false
    }

    dadosUsuario = () => {
      getUsuario(this.state.id)
      .then(res => this.setState({usuario: res.data}));
    } 

    editar = () => {
      this.setState({edit:true});
    }

    cancela = () => {
      this.setState({edit:false});
      this.dadosUsuario();
    }

    onChange = (e) => {
      let {usuario} = this.state;
      usuario[e.target.name] = e.target.value;
      this.setState({usuario:usuario});  
    }

    onSubmit = () => {
      editarUsuario(this.state.usuario);
      this.setState({edit:false});
      this.cancela();
    }

    componentDidMount(){
      this.dadosUsuario();
      this.cancela();
    }

    render() {

    const {usuario, edit} = this.state;

    return (
        <div>

          <InputGroup>
          <label className="inputLabelNew">Nome</label>
            <Input className="inputNew" type="text" id="nome" name="nome" value={usuario.nome} onChange={this.onChange} disabled={edit ? false : true} />
          </InputGroup>
          
          <InputGroup>
          <label className="inputLabelNew">Email</label>
            <Input className="inputNew" type="email" id="email" name="email" value={usuario.email} onChange={this.onChange} disabled={edit ? false : true} />
          </InputGroup>
          
          <InputGroup>
          <label className="inputLabelNew">CPF</label>
            <Input className="inputNew" name="cpf" id="cpf" value={usuario.cpf} onChange={this.onChange} disabled={edit ? false : true} />
          </InputGroup>
          
          <InputGroup>
          <label className="inputLabelNew">Data de Nascimento</label>
            <Input className="inputNew" type="date" id="nascimento" name="nascimento" value={usuario.nascimento} onChange={this.onChange} disabled={edit ? false : true} />
          </InputGroup>

          {
            edit && 
            <InputGroup>
            <label className="inputLabelNew">Senha</label>
              <Input className="inputNew" type="password" name="senha" value={usuario.senha} onChange={this.onChange} />
            </InputGroup>
          }

          <center>
          {
            !edit 
            ? <Button className="buttonNew" color="warning" onClick={this.editar}>editar</Button> 
            : (
              <div>
                <Button className="buttonNew" color="success" onClick={this.onSubmit}>salvar</Button>
                <Button className="buttonNew" color="danger" onClick={this.cancela}>cancelar</Button>
              </div>
            )
          }
          </center>

        </div>
    )
  }
}

export default UsuarioPage;