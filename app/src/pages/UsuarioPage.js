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
          <label><FaUserAlt /></label>
            <Input type="text" id="nome" name="nome" value={usuario.nome} onChange={this.onChange} disabled={edit ? false : true} />
          </InputGroup>
          
          <InputGroup>
          <label><FaAt /></label>
            <Input type="email" id="email" name="email" value={usuario.email} onChange={this.onChange} disabled={edit ? false : true} />
          </InputGroup>
          
          <InputGroup>
          <label><FaMoneyCheck /></label>
            <Input name="cpf" id="cpf" value={usuario.cpf} onChange={this.onChange} disabled={edit ? false : true} />
          </InputGroup>
          
          <InputGroup>
          <label><FaCalendarAlt /></label>
            <Input type="date" id="nascimento" name="nascimento" value={usuario.nascimento} onChange={this.onChange} disabled={edit ? false : true} />
          </InputGroup>

          {
            edit && 
            <InputGroup>
            <label><FaKey /></label>
              <Input type="password" name="senha" value={usuario.senha} onChange={this.onChange} />
            </InputGroup>
          }

          <center>
          {
            !edit 
            ? <Button outline color="warning" onClick={this.editar}>editar</Button> 
            : (
              <div>
                <Button outline color="success" onClick={this.onSubmit}>salvar</Button>
                <Button outline color="danger" onClick={this.cancela}>cancelar</Button>
              </div>
            )
          }
          </center>

        </div>
    )
  }
}

export default UsuarioPage;