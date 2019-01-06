import React, { Component } from 'react';
import {Alert, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, InputGroupAddon} from 'reactstrap';
import {cadUsuario, login} from '../components/Api';
import { FaUserAlt,FaAt,FaMoneyCheck,FaKey,FaCalendarAlt  } from "react-icons/fa";

class CadastroPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
        modal: false
      };
      this.toggle = this.toggle.bind(this);
    }
  
    toggle() {
      this.setState({
        modal: !this.state.modal
      });
  }

  onSubmit = (e) => {
    cadUsuario(this.state)
    .then(res => {
      let {email, senha} = this.state;
      login({email,senha});
      this.toggle();
    })
    .catch(err => {
      let erros = []
      Object.values(err.response.data.validationErrors).map(err => erros.push(err))
      this.setState({erros})
    })
  }

  onChange = (e) => {
    this.setState({[e.target.name]:e.target.value});
  }

  render() {
    const {erros} = this.state;
    return (
      <div>
        {/* <h1>Novo Usuário</h1>
        <form onSubmit={this.onSubmit}>
          <Input placeholder="nome" name="nome" type="text" onChange={this.onChange} required />
          <Input placeholder="e-mail" name="email" type="email" onChange={this.onChange} required />
          <Input placeholder="cpf" name="cpf" type="text" onChange={this.onChange} required />
          <Input placeholder="data de nascimento" name="nascimento" type="date" onChange={this.onChange} required />
          <Input placeholder="senha" name="senha" type="password" onChange={this.onChange} required />
          <Button type="submit">Cadastrar</Button>
        </form> */}

        <br></br>

        <Button outline color="success" onClick={this.toggle}>Novo</Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Novo Usuário</ModalHeader>
          <ModalBody>

            <InputGroup>
            <label><FaUserAlt /></label>
            <Input placeholder="nome" name="nome" type="text" onChange={this.onChange} required />
            </InputGroup>

            <InputGroup>
            <label><FaAt /></label>
            <Input placeholder="e-mail" name="email" type="email" onChange={this.onChange} required />
            </InputGroup>

            <InputGroup>
            <label><FaMoneyCheck /></label>
            <Input placeholder="cpf" name="cpf" type="text" onChange={this.onChange} required />
            </InputGroup>

            <InputGroup>
            <label><FaCalendarAlt /></label>
            <Input placeholder="data de nascimento" name="nascimento" type="date" onChange={this.onChange} required />
            </InputGroup>

            <InputGroup>
            <label><FaKey /></label>
            <Input placeholder="senha" name="senha" type="password" onChange={this.onChange} required />
            </InputGroup>

              {
                  erros !== undefined && erros.length > 0 && (
                      <Alert color="danger"> 
                          { erros.map(erro => <p>{erro.msg}</p> ) }
                      </Alert>
                  )
              }

          </ModalBody>
          <ModalFooter>
            <Button outline color="success" onClick={this.onSubmit}>Cadastrar</Button>
            <Button outline color="danger" onClick={this.toggle}>Cancelar</Button>
          </ModalFooter>
        </Modal>


      </div>
    )
  }
}

export default CadastroPage;



